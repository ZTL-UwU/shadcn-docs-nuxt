import type { Nuxt } from '@nuxt/schema';
import type { NitroConfig } from 'nitropack';
import type { NotFoundLink } from './runtime/server/utils/not-found';
import { createResolver, defineNuxtModule } from '@nuxt/kit';

interface LayerLlmsOptions { domain?: string; title?: string; full?: unknown }
interface SkillsRuntimeConfig { catalog?: Array<{ name: string }> }

export default defineNuxtModule({
  meta: {
    name: 'not-found',
  },
  setup(_inlineOptions, nuxt) {
    const docsConfig = (nuxt.options as typeof nuxt.options & { docs?: { notFound?: boolean } }).docs;
    if (docsConfig?.notFound === false) {
      return;
    }

    const { resolve } = createResolver(import.meta.url);

    nuxt.hook('modules:done', () => {
      nuxt.options.runtimeConfig.notFound = { links: buildLinks(nuxt) };
    });

    const onNitroConfig = nuxt.hook as (name: 'nitro:config', cb: (nitroConfig: NitroConfig) => void) => void;
    onNitroConfig('nitro:config', (nitroConfig) => {
      const existing = nitroConfig.errorHandler;
      const handlers = Array.isArray(existing) ? existing : existing ? [existing] : [];

      nitroConfig.errorHandler = [resolve('./runtime/server/utils/errors'), ...handlers];
    });
  },
});

function buildLinks(nuxt: Nuxt): NotFoundLink[] {
  const llms = (nuxt.options as typeof nuxt.options & { llms?: LayerLlmsOptions }).llms;
  const skills = nuxt.options.runtimeConfig.skills as SkillsRuntimeConfig | undefined;
  const title = llms?.title || 'this documentation';

  const links: NotFoundLink[] = [];

  if (llms?.domain) {
    links.push({ path: '/llms.txt', description: `index of ${title}` });

    if (llms.full) {
      links.push({
        path: '/llms-full.txt',
        description: 'the full content of this site as a single markdown document',
      });
    }
  }

  links.push({ path: '/sitemap.xml', description: 'every page, with its last modification date' });

  if (skills?.catalog?.length) {
    links.push({
      path: '/.well-known/skills/index.json',
      description: 'agent skills published by this site',
    });
  }

  links.push({ path: '/', description: 'home page' });

  return links;
}

declare module 'nuxt/schema' {
  interface RuntimeConfig {
    notFound: {
      links: NotFoundLink[];
    };
  }
}
