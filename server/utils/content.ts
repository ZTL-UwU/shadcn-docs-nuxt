import type { DocsCollectionName } from '../../utils/locale';
import { docsCollectionName, toCollectionLocale } from '../../utils/locale';

type LocaleInput = string | { code: string };

interface ConfigWithLocales {
  docs?: { filteredLocales?: LocaleInput[] };
  i18n?: { locales?: LocaleInput[] };
}

function localeCode(locale: LocaleInput): string {
  return typeof locale === 'string' ? locale : locale.code;
}

export function getAvailableLocales(config: ConfigWithLocales): string[] {
  if (config.docs?.filteredLocales?.length) {
    return config.docs.filteredLocales.map(localeCode);
  }

  return config.i18n?.locales
    ? config.i18n.locales.map(localeCode)
    : [];
}

export function getCollectionsToQuery(locale: string | undefined, availableLocales: string[]): DocsCollectionName[] {
  if (locale && availableLocales.includes(locale)) {
    return [docsCollectionName(toCollectionLocale(locale))];
  }

  return availableLocales.length > 0
    ? availableLocales.map(code => docsCollectionName(toCollectionLocale(code)))
    : [docsCollectionName(undefined)];
}

export function isNavigationPath(path: string): boolean {
  return path.endsWith('.navigation') || path.includes('/.navigation/');
}

export function getCollectionFromPath(path: string, availableLocales: string[]): DocsCollectionName {
  const firstSegment = path.split('/').filter(Boolean)[0];

  if (firstSegment && availableLocales.includes(firstSegment)) {
    return docsCollectionName(toCollectionLocale(firstSegment));
  }

  return docsCollectionName(undefined);
}
