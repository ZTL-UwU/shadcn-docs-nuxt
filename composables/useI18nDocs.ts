import type { NavItem } from '@ztl-uwu/nuxt-content';
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
   * Helper function to check if a path belongs to a specific locale
   * Uses proper boundary matching to avoid false positives like /frontend matching /fr
   */
  const isLocaleSpecificPath = (path: string, localeCode: string): boolean => {
    return path === `/${localeCode}` || path.startsWith(`/${localeCode}/`);
  };

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
        // Check if path is actually prefixed by any other locale
        return !otherLocales.some(l => isLocaleSpecificPath(nav._path, l));
      }
      // For non-default locales
      return isLocaleSpecificPath(nav._path, locale.value);
    });

    return locale.value === defaultLocale ? filteredNav : (filteredNav[0].children as NavItem[]);
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
      // For default locale, hide if prev belongs to any other locale
      if (otherLocales.some(l => prev.value && isLocaleSpecificPath(prev.value._path, l)))
        return null;
    } else {
      // For non-default locales, show only if prev belongs to current locale
      if (!prev.value || !isLocaleSpecificPath(prev.value._path, locale.value)) {
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
      // For default locale, hide if next belongs to any other locale
      if (otherLocales.some(l => next.value && isLocaleSpecificPath(next.value._path, l)))
        return null;
    } else {
      // For non-default locales, show only if next belongs to current locale
      if (!next.value || !isLocaleSpecificPath(next.value._path, locale.value)) {
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
          // For default locale, exclude results that belong to other locales
          return !otherLocales.some(l => isLocaleSpecificPath(r.id, l));
        }
        // For non-default locales, include only results that belong to current locale
        return isLocaleSpecificPath(r.id, locale.value);
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
