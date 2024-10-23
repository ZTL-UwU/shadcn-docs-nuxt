<template>
  <div
    v-if="!page?.body"
    class="flex h-full items-center justify-center"
  >
    <h3 class="scroll-m-20 border-r px-4 py-3 text-2xl font-semibold">
      404
    </h3>
    <span class="scroll-m-20 px-4">
      This page could not be found.
    </span>
  </div>

  <main
    v-else
    class="relative py-6"
    :class="[config.toc.enable && (page.toc ?? true) && 'lg:grid lg:grid-cols-[1fr_200px] lg:gap-10 lg:py-8']"
  >
    <div class="mx-auto w-full min-w-0">
      <LayoutBreadcrumb v-if="page?.body && config.main.breadCrumb" class="mb-4" />

      <div v-if="config.main.showTitle" class="mb-6">
        <ProseH1>
          {{ page?.title }}
        </ProseH1>
        <p class="pt-1 text-lg text-muted-foreground">
          {{ page?.description }}
        </p>

        <div class="flex gap-2 pt-4">
          <NuxtLink
            v-for="(badge, i) in page?.badges"
            :key="i"
            :to="badge.to"
            :target="badge.target"
          >
            <UiBadge :variant="badge.variant || 'secondary'" :type="badge.type" class="gap-1 rounded-md">
              {{ badge.value }}
              <SmartIcon v-if="badge.to || badge.icon" :size="12" :name="badge.icon || 'lucide:external-link'" />
            </UiBadge>
          </NuxtLink>
        </div>
      </div>

      <Alert
        v-if="page?.body?.children?.length === 0"
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
    <div v-if="config.toc.enable && (page.toc ?? true)" class="hidden text-sm lg:block">
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
  ogDescription: page.value?.description,
  twitterCard: 'summary_large_image',
});

defineOgImageComponent(config.value.site.ogImageComponent, {
  title: page.value?.title,
  description: page.value?.description,
});
</script>
