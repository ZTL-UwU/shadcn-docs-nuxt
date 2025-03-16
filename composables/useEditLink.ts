import type { DocEnCollectionItem } from "@nuxt/content";

export function useEditLink(page: DocEnCollectionItem) {
  const { locale } = useI18n();
  const { enable, pattern, text, icon, placement } = useConfig().value.main.editLink;

  const url = computed(
    () => {
      let path = page?.path ?? '';
      if (path.startsWith(`/${locale.value}/`)) {
        path = path.replace(`/${locale.value}/`, '/');
      }
      return pattern.replace(/:path/g, path)
    },
  );

  const enabled = computed(
    () => enable && page?.meta?.editLink !== false && page?.path && url.value !== '',
  );

  const enabledToc = computed(
    () => enabled.value && placement.includes('toc'),
  );
  const enabledDocsFooter = computed(
    () => enabled.value && placement.includes('docsFooter'),
  );

  return {
    url,
    text,
    icon,
    enabledToc,
    enabledDocsFooter,
  };
}
