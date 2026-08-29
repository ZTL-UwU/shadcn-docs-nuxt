<script setup lang="ts">
const { page } = await useDocsPage()
const config = useConfig()

const isDev = import.meta.dev

const title = page.value.seo?.title || page.value.title
const description = page.value.seo?.description || page.value.description

useSeo({
  title,
  description,
  type: 'article',
})
</script>

<template>
  <div
    v-if="page?.fullpage"
    class="px-4 py-6 md:px-8"
    :class="[config.main.padded && 'container']"
  >
    <ContentRenderer
      :key="page.path"
      :value="page"
      :data="config.data"
    />
  </div>
  <main
    v-else
    class="relative py-6"
    :class="[config.toc.enable && (page.toc ?? true) && 'lg:grid lg:grid-cols-[1fr_220px] lg:gap-14 lg:py-8']"
  >
    <div class="mx-auto w-full min-w-0">
      <LayoutTitle
        v-if="config.main.showTitle"
        :title="page?.title"
        :description="page?.description"
        :badges="page?.badges"
        :authors="page?.authors"
      />

      <UiEmpty v-if="page?.body?.children?.length === 0">
        <UiEmptyHeader class="max-w-full">
          <UiEmptyMedia variant="icon">
            <Icon name="lucide:circle-x" />
          </UiEmptyMedia>
          <UiEmptyTitle>{{ $t('Empty page') }}</UiEmptyTitle>
          <UiEmptyDescription v-if="isDev">
            <i18n-t keypath="Start writing content">
              <template #fileLink>
                <ProseCodeInline>content/{{ page?.stem }}</ProseCodeInline>
              </template>
            </i18n-t>
          </UiEmptyDescription>
        </UiEmptyHeader>
      </UiEmpty>

      <ContentRenderer
        v-else
        :key="page.path"
        :value="page"
        :data="config.data"
        class="docs-content"
      />
    </div>
  </main>
</template>
