<template>
  <LayoutHeader />
  <div class="border-b min-h-screen">
    <div
      class="px-4 md:px-8 flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10"
      :class="[config.main.padded && 'container']"
    >
      <aside class="fixed top-[102px] md:top-[60px] z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block overflow-y-auto">
        <LayoutAside :is-mobile="false" />
      </aside>
      <main class="relative py-6" :class="[config.toc.enable && 'lg:gap-10 lg:py-8 lg:grid lg:grid-cols-[1fr_200px]']">
        <div class="mx-auto w-full min-w-0">
          <LayoutBreadcrumb v-if="page?.body && config.main.breadCrumb" class="mb-4" />

          <div v-if="config.main.showTitle" class="space-y-2 mb-6">
            <ProseH1>
              {{ page?.title }}
            </ProseH1>
            <p class="text-lg text-muted-foreground">
              {{ page?.description }}
            </p>
          </div>

          <Alert
            v-if="!page?.body || page?.body?.children?.length === 0"
            title="Empty Page"
            icon="lucide:circle-x"
          >
            Start writing in <ProseCodeInline>content/{{ page?._file }}</ProseCodeInline> to see this page taking shape.
          </Alert>

          <ContentRenderer
            v-else
            :key="page._id"
            :value="page"
            class="docs-content"
          />

          <LayoutPrevNext />
        </div>
        <div v-if="config.toc.enable" class="hidden text-sm lg:block">
          <div class="sticky top-[90px] h-[calc(100vh-3.5rem)] overflow-hidden">
            <LayoutToc :is-small="false" />
          </div>
        </div>
      </main>
    </div>
  </div>
  <LayoutFooter />
</template>

<script setup lang="ts">
const { page } = useContent();
const config = useConfig();

useSeoMeta({
  title: `${page.value?.title ?? '404'} - ${config.value.site.name}`,
  ogTitle: page.value?.title,
  description: page.value?.description,
});
</script>
