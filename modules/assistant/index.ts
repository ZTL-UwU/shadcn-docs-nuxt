import type { AssistantModuleOptions } from '../../utils/config';
import process from 'node:process';
import { addComponent, addImports, addServerHandler, addServerImports, createResolver, defineNuxtModule, logger } from '@nuxt/kit';
import { defu } from 'defu';

interface NitroBuildContext {
  scannedHandlers: Array<{ route?: string }>;
  options: { handlers: Array<{ route?: string; handler?: string }> };
}

const log = logger.withTag('docs');

const defaults: Required<Omit<AssistantModuleOptions, 'enabled'>> = {
  apiPath: '/__docs__/assistant',
  mcpServer: '/mcp',
  model: 'google/gemini-3-flash',
};

export default defineNuxtModule<AssistantModuleOptions>({
  meta: {
    name: 'assistant',
  },
  setup(_options, nuxt) {
    const docsConfig = (nuxt.options as typeof nuxt.options & { docs?: { assistant?: AssistantModuleOptions } }).docs;
    const options = defu(docsConfig?.assistant, defaults) as Required<AssistantModuleOptions>;

    const hasAiGatewayAuth = !!(
      process.env.AI_GATEWAY_API_KEY || process.env.VERCEL_OIDC_TOKEN
    );

    const isEnabled = options.enabled ?? hasAiGatewayAuth;

    const { resolve } = createResolver(import.meta.url);

    nuxt.options.runtimeConfig.public.assistant = {
      enabled: isEnabled,
      apiPath: options.apiPath,
    };

    addImports([
      {
        name: 'useAssistant',
        from: resolve('./runtime/composables/useAssistant'),
      },
    ]);

    const components = [
      'AssistantChat',
      'AssistantPanel',
      'AssistantFloatingInput',
    ];

    components.forEach(name =>
      addComponent({
        name,
        filePath: resolve('./runtime/components/AssistantChatDisabled.vue'),
      }),
    );

    nuxt.options.runtimeConfig.assistant = {
      mcpServer: options.mcpServer,
      model: options.model,
    };

    addServerImports([
      'getAssistantDefaultOptions',
      'getAssistantSystemPrompt',
      'createAssistantResponse',
    ].map(name => ({
      name,
      from: resolve('./runtime/server/utils/assistant'),
    })));

    if (!isEnabled) {
      if (options.enabled === undefined) {
        nuxt.hook('modules:done', () => {
          log.warn('AI assistant disabled: neither `AI_GATEWAY_API_KEY` nor `VERCEL_OIDC_TOKEN` found');
        });
      }
      return;
    }

    const routePath = options.apiPath.replace(/^\//, '');
    const route = `/${routePath}`;
    const handler = resolve('./runtime/server/api/assistant');

    addServerHandler({ route, handler });

    const hookNitroBuild = nuxt.hook as unknown as (
      name: 'nitro:build:before',
      callback: (nitro: NitroBuildContext) => void,
    ) => void;

    hookNitroBuild('nitro:build:before', (nitro) => {
      if (!nitro.scannedHandlers.some(scanned => scanned.route === route)) {
        return;
      }

      const index = nitro.options.handlers.findIndex(h => h.route === route && h.handler === handler);
      if (index === -1) {
        return;
      }

      nitro.options.handlers.splice(index, 1);
      log.info(`AI assistant using your \`${route}\` server route instead of the built-in endpoint`);
    });
  },
});

declare module 'nuxt/schema' {
  interface PublicRuntimeConfig {
    assistant: {
      enabled: boolean;
      apiPath: string;
    };
  }
  interface RuntimeConfig {
    assistant: {
      mcpServer: string;
      model: string;
    };
  }
}
