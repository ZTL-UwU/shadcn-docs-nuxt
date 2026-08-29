import type { AppConfigPublic, DocsNuxtConfig, GithubConfig } from './utils/config';

export type { AppConfigPublic, DocsNuxtConfig, ResolvedAppConfig } from './utils/config';

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K]
};

interface AppConfigInputShape extends DeepPartial<Omit<AppConfigPublic, 'github'>> {
  github?: DeepPartial<GithubConfig> | false;
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $t: (key: string, ...args: unknown[]) => string;
  }
}

declare module 'nuxt/schema' {
  interface AppConfig extends AppConfigPublic {}
  interface AppConfigInput extends AppConfigInputShape {}
  interface NuxtConfig {
    docs?: DocsNuxtConfig;
    i18n?: Record<string, unknown>;
  }
  interface NuxtOptions {
    docs?: DocsNuxtConfig;
    i18n?: Record<string, unknown>;
  }
  interface PublicRuntimeConfig {
    mcp: { route: string };
    docs: { locale: string; filteredLocales: Array<string | { code: string; name?: string; file?: string }> };
    ftsAvailable: boolean;
    assistant: { enabled: boolean; apiPath: string };
  }
}

declare module '@nuxt/schema' {
  interface AppConfig extends AppConfigPublic {}
  interface AppConfigInput extends AppConfigInputShape {}
  interface NuxtConfig {
    docs?: DocsNuxtConfig;
    i18n?: Record<string, unknown>;
  }
  interface NuxtOptions {
    docs?: DocsNuxtConfig;
    i18n?: Record<string, unknown>;
  }
  interface PublicRuntimeConfig {
    mcp: { route: string };
    docs: { locale: string; filteredLocales: Array<string | { code: string; name?: string; file?: string }> };
    ftsAvailable: boolean;
    assistant: { enabled: boolean; apiPath: string };
  }
}
