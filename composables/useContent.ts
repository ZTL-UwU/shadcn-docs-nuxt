/**
 * 替代 Nuxt Content v2 中的 useContent 组合式函数
 * 在 Nuxt Content v3 中，useContent 被移除了，需要使用 queryCollection 替代
 */
import type { Collections, ContentNavigationItem } from '@nuxt/content';

export async function useContent() {
  const route = useRoute();
  const { locale } = useI18n();

  let path = route.path
  if (!path.startsWith(`/${locale.value}/`)) {
    path = `/${locale.value}${path}`
  }
  
  const { data: page } = await useAsyncData('content', () => {
    return queryCollection(`doc_${locale.value}`).path(path).first();
  });
  return {
    page,
  };
}

export async function useNavigation(collectionName: string = 'docs') {
  const { locale } = useI18n();
  const { data } = await useAsyncData('navigation', () => {
    return queryCollectionNavigation(`doc_${locale.value}`)
  });
  function getNavigationByChildPath(data: ContentNavigationItem[],path: string) {
    const child = data.find(item => item.path === path)
    if (child) {
      return child.children
    }
    return []
  }
  return {
    navigation: computed(() => {
      const children = [`/${locale.value}`, `/${locale.value}/${collectionName}`]
      if (!data.value) {
        return []
      }
      let currentData = data.value
      for (const child of children) {
        const childData = getNavigationByChildPath(currentData, child)
        if (!childData || childData.length === 0) {
          return currentData
        }
        currentData = childData
      }
      return currentData
    }),
  };
}
