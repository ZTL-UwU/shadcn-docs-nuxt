<template>
  <div
    v-if="page?.fullpage"
    class="px-4 py-6 md:px-8"
    :class="[config.main.padded && 'container']"
  >
    <ContentRenderer
      :key="page.path"
      :value="(page as unknown as Record<string, unknown>)"
      :data="config.data"
    />
  </div>
  <div
    v-else
    class="flex-1 items-start px-4 md:grid md:gap-6 md:px-8 lg:gap-10"
    :class="[
      config.main.padded && 'container',
      showAside && 'md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[240px_minmax(0,1fr)]',
    ]"
  >
    <aside
      v-if="showAside"
      class="fixed z-30 -ml-2 hidden w-full shrink-0 overflow-y-auto md:sticky md:block"
      :class="[
        config.subNav.kind === 'aside' ? 'h-[calc(100vh-3.5rem)] md:top-[61px]' : 'h-[calc(100vh-6rem)] md:top-[101px]',
      ]"
    >
      <DocsAsideLeftBody />
    </aside>
    <main
      class="relative py-6"
      :class="[showToc && 'lg:grid lg:grid-cols-[1fr_220px] lg:gap-14 lg:py-8']"
    >
      <div class="mx-auto w-full min-w-0">
        <LayoutBreadcrumb
          v-if="config.main.breadCrumb && (page?.breadcrumb ?? true)"
          class="mb-4"
        />
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
          :key="page?.path"
          :value="(page as unknown as Record<string, unknown>)"
          :data="config.data"
          class="docs-content"
        />

        <LayoutDocsFooter />
      </div>
      <div
        v-if="showToc"
        class="hidden text-sm lg:block"
      >
        <div
          class="sticky"
          :class="[
            config.subNav.kind === 'aside' ? 'md:top-[91px]' : 'md:top-[133px]',
          ]"
        >
          <DocsAsideRight :page="(page as unknown as Record<string, unknown> | null)" />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { pageShowsAside, pageShowsToc } from '../utils/navigation';

const { page, surround } = await useDocsPage();
const config = useConfig();

provide('page', page);
provide('surround', surround);

const isDev = import.meta.dev;
const showAside = computed(() => pageShowsAside(page.value));
const showToc = computed(() => pageShowsToc(page.value, config.value.toc.enable));

const title = page.value.seo?.title || page.value.title;
const description = page.value.seo?.description || page.value.description;

useSeo({
  title: title || '',
  description: description || '',
  type: 'article',
});
</script>
