/**
 * 替代 Nuxt Content v2 中的 useContent 组合式函数
 * 在 Nuxt Content v3 中，useContent 被移除了，需要使用 queryCollection 替代
 */
import type { Collections } from '@nuxt/content';

export async function useContent() {
  const route = useRoute();
  const { locale } = useI18n();
  const config = useConfig();
  const appConfig = useAppConfig();
  const slug = computed(() => `/${typeof route.params.slug === 'string' ? route.params.slug : route.params.slug?.join('/') ?? ''}`);
  
  const localePath = useLocalePath()

  console.log('slug.value', slug.value);
  console.log('route.path', route.path);
  console.log('route.path locale', route.path.replace(`/${locale.value}/`, '/'));
  console.log('localePath route.path ', localePath(route.path));
  
  const { data: page } = await useAsyncData(slug.value, () => {
    return queryCollection(`doc_${locale.value}`).path(route.path).first();
  });
  return {
    page,
  };
}

export async function useNavigation() {
  const { locale } = useI18n();
  const { data } = await useAsyncData('navigation', () => {
    return queryCollectionNavigation(`doc_${locale.value}`)
  });
  return {
    navigation: computed(() => data.value?.[0]?.children?.[0]?.children),
  };
}

export function useContentV3() {
  const route = useRoute();
  const slug = computed(() => `/${typeof route.params.slug === 'string' ? route.params.slug : route.params.slug?.join('/') ?? ''}`);

  const { locale } = useI18n();

  // 获取当前页面内容
  const page = shallowRef<any>(null);
  const toc = shallowRef<any>(null);

  // 获取导航结构
  const navigation = shallowRef<any[]>([]);

  // 获取上一页和下一页
  const prev = shallowRef<any>(null);
  const next = shallowRef<any>(null);

  // 加载页面和导航数据
  async function load() {
    try {
      // 获取当前页面内容
      const collection = (`doc_${locale.value}`) as keyof Collections;
      const content = await queryCollection(collection).path(slug.value).first();
      console.log('content in useContentV3', content);

      page.value = content;

      if (content?.body?.toc) {
        toc.value = content.body.toc;
      }

      // 导航使用 queryCollectionNavigation
      try {
        // 注意：在 Nuxt Content v3 中，该API可能是 queryCollectionNavigation
        // navigation.value = await queryCollectionNavigation(collection);

        // 临时解决方案：提供空的导航结构
        navigation.value = [];
        console.warn('需要实现 queryCollectionNavigation 获取导航结构');
      } catch (error) {
        console.error('获取导航失败:', error);
      }

      // 上一页和下一页，使用 queryCollectionItemSurroundings
      try {
        // 注意：在 Nuxt Content v3 中，该API可能是 queryCollectionItemSurroundings
        // const surroundings = await queryCollectionItemSurroundings(collection, slug.value);
        // prev.value = surroundings.prev;
        // next.value = surroundings.next;

        // 临时解决方案
        prev.value = null;
        next.value = null;
        console.warn('需要实现 queryCollectionItemSurroundings 获取上下页');
      } catch (error) {
        console.error('获取上下页失败:', error);
      }
    } catch (error) {
      console.error('加载内容失败:', error);
    }
  }

  // 初始加载
  onMounted(() => {
    load();
  });

  // 当路由或语言改变时重新加载
  watch([route, locale], () => {
    load();
  });

  return {
    page: computed(() => page.value),
    toc: computed(() => toc.value),
    navigation: computed(() => navigation.value),
    prev: computed(() => prev.value),
    next: computed(() => next.value),
  };
}
