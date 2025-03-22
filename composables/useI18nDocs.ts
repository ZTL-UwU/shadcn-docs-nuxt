import type { SearchResult } from 'minisearch';

/**
 * A wrapper around useI18n that provides safe internationalization utilities
 * and handles navigation filtering based on the current locale.
 * Falls back gracefully when i18n is not configured.
 */
export function useI18nDocs() {
  // Check if i18n is enabled by verifying config exists and there are multiple locales
  const i18nEnabled = !!useI18n() && useI18n().availableLocales?.length > 1;

  // Get content navigation and i18n utilities
  const { navigation, next, prev } = useContent();
  const { locale, locales, defaultLocale, availableLocales } = useI18n();

  // Get all locales except the default one
  const otherLocales = availableLocales.filter(l => l !== defaultLocale);

  /**
   * Filters navigation items based on the current locale
   * - For default locale: shows only default paths (no locale prefix)
   * - For other locales: shows only paths with matching locale prefix
   */
  const localizedNavigation = computed(() => {
    if (!i18nEnabled)
      return navigation.value;
    const filteredNav = navigation.value.filter((nav) => {
      if (locale.value === defaultLocale) {
        return !otherLocales.some(l => nav._path.startsWith(`/${l}`));
      }
      return nav._path.startsWith(`/${locale.value}`);
    });
    return locale.value === defaultLocale ? filteredNav : filteredNav[0].children;
  });

  /**
   * Filters previous navigation item based on the current locale
   * - For default locale: shows only prev if page exists with default paths (no locale prefix)
   * - For other locales: shows only prev if page exists with matching locale prefix
   */
  const localizedPrev = computed(() => {
    if (!i18nEnabled)
      return prev.value;
    if (locale.value === defaultLocale) {
      if (otherLocales.some(l => prev.value?._path.startsWith(`/${l}/`)))
        return null;
    } else {
      if (!prev.value?._path.startsWith(`/${locale.value}`)) {
        return null;
      }
    }
    return prev.value;
  });

  /**
   * Filters next navigation item based on the current locale
   * - For default locale: shows only next if page exists with default paths (no locale prefix)
   * - For other locales: shows only next if page exists with matching locale prefix
   */
  const localizedNext = computed(() => {
    if (!i18nEnabled)
      return next.value;
    if (locale.value === defaultLocale) {
      if (otherLocales.some(l => next.value?._path.startsWith(`/${l}/`)))
        return null;
    } else {
      if (!next.value?._path.startsWith(`/${locale.value}`)) {
        return null;
      }
    }
    return next.value;
  });

  /**
   * Safe wrapper for useLocalePath
   * Returns original path if i18n is not enabled
   */
  const localePath = i18nEnabled ? useLocalePath() : (path: string) => path;

  /**
   * Filters search results based on the current locale
   * - For default locale: shows only default results (no locale prefix)
   * - For other locales: shows only results with matching locale prefix
   */
  const localizeSearchResult = i18nEnabled
    ? (result: SearchResult[]) => result.filter((r) => {
        if (locale.value === defaultLocale) {
          return !otherLocales.some(l => r.id.startsWith(`/${l}/`));
        }
        return r.id.startsWith(`/${locale.value}`);
      })
    : (result: SearchResult[]) => result;

  // Get the locale switcher utility
  const switchLocalePath = useSwitchLocalePath();

  return {
    i18nEnabled, // Whether i18n is enabled and configured
    locale, // Current locale
    locales, // All locales
    defaultLocale, // Default locale from config
    availableLocales, // All available locales
    otherLocales, // All locales except default
    navigation: localizedNavigation, // Navigation filtered by current locale
    prev: localizedPrev, // Previous page navigation filtered by current locale
    next: localizedNext, // Next page navigation filtered by current locale
    localePath, // Safe path localization function
    localizeSearchResult, // Search results filter by locale
    switchLocalePath, // Function to switch between locales
  };
}
