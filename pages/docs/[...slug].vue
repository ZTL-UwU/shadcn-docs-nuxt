<template>
  <div v-if="page && !page.meta.fullpage && route.path !== '/'" class="min-h-screen border-b">
    <div
      class="flex-1 items-start px-4 md:grid md:gap-6 md:px-8 lg:gap-10"
      :class="[
        config.main.padded && 'container',
        (page.meta.aside ?? true) && 'md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[240px_minmax(0,1fr)]',
      ]"
    >
      <aside v-if="page.meta.aside ?? true" class="fixed top-[102px] z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto md:sticky md:top-[60px] md:block">
        <LayoutAside :is-mobile="false" />
      </aside>
      <div
        v-if="!page"
        class="flex h-[calc(100vh-3.5rem)] items-center justify-center"
      >
        <h3 class="scroll-m-20 border-r px-4 py-3 text-2xl font-semibold">
          404
        </h3>
        <span class="scroll-m-20 px-4">
          This page could not be found.
        </span>
      </div>
      <template v-else>
        <div
          v-if="page?.meta?.fullpage"
          class="px-4 py-6 md:px-8"
          :class="[config.main.padded && 'container']"
        >
          <ContentRenderer
            :key="page.id"
            :value="page"
            :data="appConfig.shadcnDocs.data"
          />
        </div>
        <main
          v-else
          class="relative py-6"
          :class="[config.toc.enable && (page.toc ?? true) && 'lg:grid lg:grid-cols-[1fr_220px] lg:gap-14 lg:py-8']"
        >
          <div class="mx-auto w-full min-w-0">
            <LayoutBreadcrumb v-if="page?.body && config.main.breadCrumb && (page.meta?.breadcrumb ?? true)" class="mb-4" />
            <LayoutTitle
              v-if="config.main.showTitle"
              :title="page?.title"
              :description="page?.description"
              :badges="page?.badges"
              :authors="page?.authors"
            />

            <Alert
              v-if="page?.body?.children?.length === 0"
              title="Empty Page"
              icon="lucide:circle-x"
            >
              Start writing in <ProseCode>content/{{ page?._file }}</ProseCode> to see this page taking shape.
            </Alert>

            <ContentRenderer
              v-if="page"
              :key="page.id"
              :value="page"
              :data="appConfig.shadcnDocs.data"
              :dir="localeProperties?.dir ?? 'ltr'"
            />

            <LayoutDocsFooter />
          </div>
          <div v-if="config.toc.enable && (page.toc ?? true)" class="hidden text-sm lg:block">
            <div class="sticky top-[90px] h-[calc(100vh-3.5rem)] overflow-hidden">
              <LayoutToc :is-small="false" />
            </div>
          </div>
        </main>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const { localeProperties } = useI18n();
const route = useRoute();
const config = useConfig();
const appConfig = useAppConfig();

const { page } = await useContent();
function getNavigationItemRecursive(navigation: ContentNavigationItem[], path: string): ContentNavigationItem | undefined {
  for (const item of navigation) {
    if (item.path === path) {
      return item;
    }
    if (item.children) {
      const result = getNavigationItemRecursive(item.children, path);
      if (result) {
        return result;
      }
    }
  }
}
const { navigation } = await useNavigation();
if (!page.value) {
  const item = getNavigationItemRecursive(navigation.value, route.path);
  if (item && item.redirect) {
    navigateTo(item.redirect);
  }
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
