export function useConfig() {
  const appConfig = computed(() => useAppConfig()?.shadcnDocs || {});

  const { navKeyFromPath } = useContentHelpers();
  const { navigation, page } = useContent();
  const route = useRoute();

  return computed(
    () => {
      const header = appConfig?.value?.header || {};
      const main = appConfig?.value?.main || {};
      const aside = appConfig?.value?.aside || {};
      const footer = appConfig?.value?.footer || {};
      const toc = appConfig?.value?.toc || {};

      return {
        ...appConfig.value,
        header: {
          ...header,
          ...navKeyFromPath(route.path, 'header', navigation.value || []),
          ...page.value?.header,
        } as typeof header,
        main: {
          ...main,
          ...navKeyFromPath(route.path, 'main', navigation.value || []),
          ...page.value?.main,
        } as typeof main,
        aside: {
          ...aside,
          ...navKeyFromPath(route.path, 'aside', navigation.value || []),
          ...page.value?.aside,
        } as typeof aside,
        toc: {
          ...toc,
          ...navKeyFromPath(route.path, 'toc', navigation.value || []),
          ...page.value?.toc,
        } as typeof toc,
        footer: {
          ...footer,
          ...navKeyFromPath(route.path, 'footer', navigation.value || []),
          ...page.value?.footer,
        } as typeof footer,
      };
    },
  );
}
