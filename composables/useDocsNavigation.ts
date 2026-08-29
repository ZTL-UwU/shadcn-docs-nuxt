import type { Collections, ContentNavigationItem } from '@nuxt/content';
import { docsCollectionName, toCollectionLocale } from '../utils/locale';
import { transformNavigation } from '../utils/navigation';

const extraFields = ['icon', 'navBadges', 'navTruncate', 'collapse', 'sidebar'] as const;

export async function useDocsNavigation() {
  const { locale, isEnabled } = useDocusI18n();

  const collectionName = computed(() => {
    return isEnabled.value
      ? docsCollectionName(toCollectionLocale(locale.value))
      : docsCollectionName(undefined);
  });

  const { data } = await useAsyncData(
    () => `navigation_${collectionName.value}`,
    () => queryCollectionNavigation(
      collectionName.value as keyof Collections,
      [...extraFields] as never,
    ),
    {
      transform: (items: ContentNavigationItem[]) => transformNavigation(
        items || [],
        isEnabled.value,
        locale.value,
      ),
      watch: [locale],
    },
  );

  const navigation = computed(() => data.value ?? []);

  return { navigation };
}
