<template>
  <ContentRenderer
    v-if="page"
    :key="page.id"
    :value="page"
    :data="appConfig.shadcnDocs.data"
    :dir="localeProperties?.dir ?? 'ltr'"
  />
</template>

<script setup lang="ts">
import type { Collections } from '@nuxt/content';

const route = useRoute();
const { locale, localeProperties } = useI18n();
const config = useConfig();
const appConfig = useAppConfig();
const slug = computed(() => `/${typeof route.params.slug === 'string' ? route.params.slug : route.params.slug?.join('/') ?? ''}`);

const { data: page } = await useAsyncData(`page-${slug.value}`, async () => {
  const collection = (`doc_${locale.value}`) as keyof Collections;
  const content = await queryCollection(collection).path(slug.value).first();

  // 如果在非默认语言中找不到内容，可能会回退到默认语言
  if (!content && locale.value !== config.value.defaultLocale) {
    const defaultCollection = (`doc_${config.value.defaultLocale}`) as keyof Collections;
    return await queryCollection(defaultCollection).path(slug.value).first();
  }

  return content;
}, {
  watch: [locale],
});
console.log('page', page.value);
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: '页面未找到', fatal: true });
}

useSeoMeta({
  title: `${page.value.title ?? '404'} - ${config.value.site.name}`,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description,
  ogImage: config.value.site.ogImage,
  twitterCard: 'summary_large_image',
});
</script>
