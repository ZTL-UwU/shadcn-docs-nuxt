<template>
  <main class="relative py-6" :class="[config.toc.enable && 'lg:gap-10 lg:py-8 lg:grid lg:grid-cols-[1fr_200px]']">
    <div class="mx-auto w-full min-w-0">
      <LayoutBreadcrumb v-if="page?.body && config.main.breadCrumb" class="mb-4" />

      <div v-if="config.main.showTitle" class="space-y-2 mb-6">
        <ProseH1>
<!--          {{ page?.title }}-->
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

      <template v-else-if="slug[0] === '48-nguyen-cua-duc-phat-a-di-da'">
          <StackingCards />
      </template>

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
</template>

<script setup lang="ts">
const { page } = useContent();
const config = useConfig();

useSeoMeta({
  title: `${page.value?.title ?? '404'} - ${config.value.site.name}`,
  ogTitle: page.value?.title,
  description: page.value?.description,
});

const route = useRoute();
const slug = route.params.slug;
console.log('slug', slug[0])
</script>
