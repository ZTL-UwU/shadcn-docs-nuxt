import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { defineNuxtModule, logger } from '@nuxt/kit';

const log = logger.withTag('docs');

type I18nLocale = string | { code: string };
interface LayerI18nOptions { locales?: I18nLocale[] }

interface VercelRoute {
  src: string;
  dest?: string;
  headers?: Record<string, string>;
  has?: Array<{ type: 'header' | 'cookie' | 'query' | 'host'; key: string; value: string }>;
  continue?: boolean;
}

function escapeRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export default defineNuxtModule({
  meta: {
    name: 'vercel-markdown-rewrite',
  },
  setup(_options, nuxt) {
    nuxt.hooks.hook('nitro:init', (nitro) => {
      if (nitro.options.dev || !nitro.options.preset.includes('vercel')) {
        return;
      }

      nitro.hooks.hook('compiled', async () => {
        const vcJSON = resolve(nitro.options.output.dir, 'config.json');
        const vcConfig = JSON.parse(await readFile(vcJSON, 'utf8'));

        let llmsTxt;
        const llmsTxtPath = resolve(nitro.options.output.publicDir, 'llms.txt');
        try {
          llmsTxt = await readFile(llmsTxtPath, 'utf-8');
        } catch {
          log.warn('llms.txt not found, skipping markdown redirect routes');
          return;
        }

        const markdownHeaders = {
          'content-type': 'text/markdown; charset=utf-8',
          'vary': 'Accept, User-Agent',
        };

        const negotiatedPaths: string[] = ['/'];

        const routes: VercelRoute[] = [
          {
            src: '^/$',
            dest: '/llms.txt',
            headers: markdownHeaders,
            has: [{ type: 'header', key: 'accept', value: '(.*)text/markdown(.*)' }],
          },
          {
            src: '^/$',
            dest: '/llms.txt',
            headers: markdownHeaders,
            has: [{ type: 'header', key: 'user-agent', value: 'curl/.*' }],
          },
        ];

        const i18nOptions = (nuxt.options as typeof nuxt.options & { i18n?: LayerI18nOptions }).i18n;
        const isI18nEnabled = !!i18nOptions?.locales;
        let localeCodes: string[] = [];

        if (isI18nEnabled) {
          const locales = i18nOptions?.locales || [];
          localeCodes = locales.map((locale: I18nLocale) => {
            return typeof locale === 'string' ? locale : locale.code;
          });

          const localePattern = localeCodes.join('|');

          negotiatedPaths.push(...localeCodes.map(code => `/${code}`));

          routes.push(
            {
              src: `^/(${localePattern})$`,
              dest: '/llms.txt',
              headers: markdownHeaders,
              has: [{ type: 'header', key: 'accept', value: '(.*)text/markdown(.*)' }],
            },
            {
              src: `^/(${localePattern})$`,
              dest: '/llms.txt',
              headers: markdownHeaders,
              has: [{ type: 'header', key: 'user-agent', value: 'curl/.*' }],
            },
          );
        }

        const urlRegex = /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g;
        const matches = [...llmsTxt.matchAll(urlRegex)];

        for (const match of matches) {
          const url = match[2];
          if (!url) {
            continue;
          }

          try {
            const urlObj = new URL(url);
            const rawPath = urlObj.pathname;

            if (rawPath === '/') {
              continue;
            }

            if (!rawPath.startsWith('/raw/')) {
              continue;
            }

            const pagePath = rawPath.replace('/raw', '').replace(/\.md$/, '');

            if (isI18nEnabled) {
              const isLocaleHomepage = localeCodes.some(code => pagePath === `/${code}`);
              if (isLocaleHomepage) {
                continue;
              }
            }

            const docsRoutes: VercelRoute[] = [
              {
                src: `^${pagePath}$`,
                dest: rawPath,
                headers: markdownHeaders,
                has: [{ type: 'header', key: 'accept', value: '(.*)text/markdown(.*)' }],
              },
              {
                src: `^${pagePath}$`,
                dest: rawPath,
                headers: markdownHeaders,
                has: [{ type: 'header', key: 'user-agent', value: 'curl/.*' }],
              },
            ];
            routes.push(...docsRoutes);
            negotiatedPaths.push(pagePath);
          } catch {
            // Skip invalid URLs
          }
        }

        if (negotiatedPaths.length) {
          routes.push({
            src: `^(${negotiatedPaths.map(escapeRegex).join('|')})$`,
            headers: { vary: 'Accept, User-Agent' },
            continue: true,
          });
        }

        vcConfig.routes.unshift(...routes);

        await writeFile(vcJSON, JSON.stringify(vcConfig, null, 2), 'utf8');
        log.info(`Successfully wrote ${routes.length} routes to ${vcJSON} (serve markdown content to AI agents)`);
      });
    });
  },
});
