import type { Ref } from 'vue';
import { ref } from 'vue';
import { useNuxtApp, useRuntimeConfig } from '#imports';

interface LocaleItem { code: string; name?: string; file?: string }

type DocusNuxtApp = ReturnType<typeof useNuxtApp> & {
  $i18n?: {
    locale: Ref<string>;
    t: (key: string) => string;
  };
  $locale?: string;
  $localeMessages?: Record<string, unknown>;
  $localePath?: (path: string) => string;
  $switchLocalePath?: (locale?: string) => string;
};

export interface DocusI18nApi {
  isEnabled: Ref<boolean>;
  locale: Ref<string>;
  locales: LocaleItem[];
  localePath: (path: string) => string;
  switchLocalePath: (locale?: string) => string;
  t: (key: string) => string;
}

function asLocaleItem(locale: string | LocaleItem): LocaleItem {
  return typeof locale === 'string' ? { code: locale, name: locale } : locale;
}

export function useDocusI18n(): DocusI18nApi {
  const config = useRuntimeConfig().public;
  const nuxtApp = useNuxtApp() as DocusNuxtApp;
  const isEnabled = ref(!!config.i18n);

  if (!isEnabled.value) {
    const locale = nuxtApp.$locale || config.docs?.locale || 'en';
    const localeMessages = nuxtApp.$localeMessages || {};

    return {
      isEnabled,
      locale: ref(locale),
      locales: [],
      localePath: (path: string) => path,
      switchLocalePath: () => '',
      t: (key: string): string => {
        const path = key.split('.');
        return path.reduce((acc: unknown, curr) => (acc as Record<string, unknown>)?.[curr], localeMessages) as string;
      },
    };
  }

  const locale = nuxtApp.$i18n?.locale || ref('en');
  const t = nuxtApp.$i18n?.t || ((key: string) => key);
  const filteredLocales = (config.docs?.filteredLocales || []).map(asLocaleItem);

  return {
    isEnabled,
    locale,
    locales: filteredLocales,
    t,
    localePath: nuxtApp.$localePath || ((path: string) => path),
    switchLocalePath: nuxtApp.$switchLocalePath || (() => ''),
  };
}

export { useDocusI18n as useI18nDocs };
