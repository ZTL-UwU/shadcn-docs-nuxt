import type { GithubConfig } from '../utils/config';
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { createResolver, defineNuxtModule, logger } from '@nuxt/kit';
import { defu } from 'defu';
import { parseDocsNuxtConfig, resolveAppConfig } from '../utils/config';
import { getGitBranch, getGitEnv, getLocalGitInfo } from '../utils/git';
import { getPackageJsonMetadata, inferSiteURL } from '../utils/meta';

const log = logger.withTag('docs');

type I18nLocale = string | { code: string, name?: string };
type LayerI18nOptions = { locales?: I18nLocale[], strategy?: string };
type LayerMcpOptions = { route?: string, enabled?: boolean };
type RegisterModuleOptions = {
  langDir: string
  locales: Array<{ code: string, name: string, file: string }>
};
type LayerSiteOptions = { name?: string, url?: string, debug?: boolean };
type LayerLlmsOptions = {
  domain?: string
  title?: string
  description?: string
  full?: { title?: string, description?: string }
};
type LayerColorModeOptions = { preference?: string, fallback?: string };
type LayerContentOptions = {
  experimental?: { sqliteConnector?: string }
  database?: { type?: string }
};

function localeCode(locale: I18nLocale): string {
  return typeof locale === 'string' ? locale : locale.code;
}

function filledGithub(existing: GithubConfig | false | undefined, fallback: GithubConfig): GithubConfig | false {
  if (existing === false) {
    return false;
  }
  const current = existing && typeof existing === 'object' ? existing : { owner: '', name: '', url: '', branch: '' };
  return {
    owner: current.owner || fallback.owner,
    name: current.name || fallback.name,
    url: current.url || fallback.url,
    branch: current.branch || fallback.branch,
    rootDir: current.rootDir || fallback.rootDir,
  };
}

function sqliteAvailable(content: LayerContentOptions | undefined): boolean {
  const connector = content?.experimental?.sqliteConnector;
  if (connector === 'native' || connector === 'better-sqlite3') {
    return true;
  }
  return content?.database?.type === 'sqlite';
}

export default defineNuxtModule({
  meta: {
    name: 'config',
  },
  async setup(_options, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    const layerTsconfig = resolve('../.nuxt/tsconfig.json')
    if (!existsSync(layerTsconfig)) {
      mkdirSync(dirname(layerTsconfig), { recursive: true })
      writeFileSync(layerTsconfig, JSON.stringify({
        compilerOptions: {
          skipLibCheck: true,
          module: 'ESNext',
          moduleResolution: 'Bundler',
          paths: { '@/*': ['./*'] },
        },
      }))
    }

    const docsConfig = parseDocsNuxtConfig(
      (nuxt.options as typeof nuxt.options & { docs?: unknown }).docs,
    );

    const dir = nuxt.options.rootDir;
    const url = inferSiteURL();
    const meta = await getPackageJsonMetadata(dir);
    const gitInfo = await getLocalGitInfo(dir) || getGitEnv();
    const typedNuxt = nuxt.options as typeof nuxt.options & {
      site?: LayerSiteOptions
      llms?: LayerLlmsOptions
      colorMode?: LayerColorModeOptions
      content?: LayerContentOptions
      mcp?: LayerMcpOptions
      i18n?: false | LayerI18nOptions
      docs?: ReturnType<typeof parseDocsNuxtConfig>
    };
    typedNuxt.docs = defu(typedNuxt.docs, docsConfig);
    const siteName = (typeof typedNuxt.site === 'object' && typedNuxt.site?.name)
      || meta.name
      || gitInfo?.name
      || '';

    typedNuxt.llms = defu(typedNuxt.llms, {
      domain: url || 'http://localhost:3333',
      title: siteName,
      description: meta.description || '',
      full: {
        title: siteName,
        description: meta.description || '',
      },
    });

    typedNuxt.site = defu(typedNuxt.site, {
      url,
      name: siteName,
      debug: false,
    });

    nuxt.options.appConfig.header = defu(nuxt.options.appConfig.header, {
      title: siteName,
    });

    nuxt.options.appConfig.seo = defu(nuxt.options.appConfig.seo, {
      titleTemplate: `%s - ${siteName}`,
      title: siteName,
      description: meta.description || '',
    });

    const gitGithub: GithubConfig = {
      owner: gitInfo?.owner || '',
      name: gitInfo?.name || '',
      url: gitInfo?.url || '',
      branch: getGitBranch(),
    };
    nuxt.options.appConfig.github = filledGithub(nuxt.options.appConfig.github, gitGithub);

    const mcpOptions = typedNuxt.mcp;
    nuxt.options.runtimeConfig.public.mcp = defu(
      nuxt.options.runtimeConfig.public.mcp,
      { route: mcpOptions?.route || '/mcp' },
    );

    const resolved = resolveAppConfig(nuxt.options.appConfig);
    if (resolved.colorModeResolved.kind === 'forced') {
      const mode = resolved.colorModeResolved.mode;
      typedNuxt.colorMode = defu({ preference: mode, fallback: mode }, typedNuxt.colorMode || {});
    }

    nuxt.options.runtimeConfig.public.ftsAvailable = sqliteAvailable(typedNuxt.content);

    const docsLocale = docsConfig.locale || 'en';
    let filteredLocales: I18nLocale[] = [];

    const i18nOptions = typedNuxt.i18n;
    if (i18nOptions && typeof i18nOptions === 'object' && i18nOptions.locales) {
      const { resolve } = createResolver(import.meta.url);
      const localeDir = resolve('../i18n/locales');
      const hasLocaleDir = existsSync(localeDir);

      filteredLocales = i18nOptions.locales.filter((locale: I18nLocale) => {
        const code = localeCode(locale);
        const localeFilePath = join(localeDir, `${code}.json`);
        const hasLocaleFile = existsSync(localeFilePath);
        const contentPath = join(nuxt.options.rootDir, 'content', code);
        const hasContentFolder = existsSync(contentPath);

        if (hasLocaleDir && !hasLocaleFile) {
          log.warn(`Locale file not found: ${code}.json - skipping locale "${code}"`);
        }
        if (hasLocaleDir && !hasContentFolder) {
          log.warn(`Content folder not found: content/${code}/ - skipping locale "${code}"`);
        }

        if (!hasLocaleDir) {
          return true;
        }
        return hasLocaleFile && hasContentFolder;
      });

      typedNuxt.i18n = {
        ...i18nOptions,
        strategy: 'prefix',
      };

      if (hasLocaleDir) {
        const registerI18nModule = nuxt.hook as unknown as (
          name: string,
          callback: (register: (options: RegisterModuleOptions) => void) => void,
        ) => void;

        registerI18nModule('i18n:registerModule', (register) => {
          const locales = filteredLocales.map((locale: I18nLocale) => {
            return typeof locale === 'string'
              ? {
                  code: locale,
                  name: locale,
                  file: `${locale}.json`,
                }
              : {
                  code: locale.code,
                  name: locale.name || locale.code,
                  file: `${locale.code}.json`,
                };
          });

          register({
            langDir: localeDir,
            locales,
          });
        });
      }
    }

    nuxt.options.runtimeConfig.public.docs = defu(
      nuxt.options.runtimeConfig.public.docs,
      {
        locale: docsLocale,
        filteredLocales,
      },
    );
  },
});
