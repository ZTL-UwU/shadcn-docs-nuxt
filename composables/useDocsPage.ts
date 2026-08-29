import type { Collections } from '@nuxt/content';
import type { DocsChromePage } from '../utils/navigation';
import { docsCollectionName, toCollectionLocale } from '../utils/locale';

export async function useDocsPage() {
  const route = useRoute();
  const { locale, isEnabled } = useDocusI18n();

  const collectionName = computed(() => {
    return isEnabled.value
      ? docsCollectionName(toCollectionLocale(locale.value))
      : docsCollectionName(undefined);
  });

  const [{ data: page }, { data: surround }] = await Promise.all([
    useAsyncData(
      () => `docs:${collectionName.value}:${route.path}`,
      () => queryCollection(collectionName.value as keyof Collections).path(route.path).first(),
      { watch: [locale] },
    ),
    useAsyncData(
      () => `docs-surround:${collectionName.value}:${route.path}`,
      () => queryCollectionItemSurroundings(collectionName.value as keyof Collections, route.path, {
        fields: ['description'],
      }),
      { watch: [locale] },
    ),
  ]);

  if (!page.value) {
    throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true });
  }

  const docsPage = page as Ref<DocsChromePage>;
  const chromePage = useState<DocsChromePage | null>('docs-chrome-page', () => null);
  watch(docsPage, (value) => {
    chromePage.value = value ?? null;
  }, { immediate: true });
  provide('page', docsPage);
  provide('surround', surround);

  return {
    page: docsPage,
    surround,
  };
}
