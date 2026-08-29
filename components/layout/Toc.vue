<template>
  <UiScrollArea
    v-if="!isSmall"
    orientation="vertical"
    class="z-30 hidden overflow-y-auto md:block lg:block"
    type="hover"
  >
    <div
      class="flex flex-col gap-5"
      :class="[
        config.subNav.kind === 'aside' ? 'h-[calc(100vh-6.5rem)]' : 'h-[calc(100vh-10rem)]',
      ]"
    >
      <div v-if="tocLinks.length">
        <p class="mb-2 text-base font-semibold">
          {{ $t(title) }}
        </p>
        <LayoutTocTree
          :links="tocLinks.filter((x: { id?: string }) => x.id !== 'hide-toc')"
          :level="0"
          :class="[(links.length || iconLinks?.length) && 'border-b pb-5']"
        />
      </div>
      <div v-if="links.length" class="text-muted-foreground" :class="[iconLinks?.length && 'border-b pb-5']">
        <NuxtLinkLocale
          v-for="(link, i) in links"
          :key="i"
          :to="link.to"
          :target="link.target"
          class="flex w-full gap-1 underline-offset-4 hover:underline [&:not(:first-child)]:pt-3"
        >
          <SmartIcon
            v-if="link.icon"
            :name="link.icon"
            class="mr-1 self-center"
          />
          {{ $t(link.label) }}
          <Icon v-if="link.target === '_blank'" name="lucide:arrow-up-right" class="text-muted-foreground ml-auto self-center" size="13" />
        </NuxtLinkLocale>
      </div>
      <div v-if="iconLinks" class="text-muted-foreground">
        <NuxtLinkLocale
          v-for="(link, i) in iconLinks"
          :key="i"
          :to="link.to"
          :target="link.target"
        >
          <UiButton size="icon" variant="ghost" class="size-7">
            <SmartIcon
              v-if="link.icon"
              :name="link.icon"
            />
          </UiButton>
        </NuxtLinkLocale>
      </div>
      <div class="flex-grow" />
      <LayoutCarbonAds v-if="isDesktop && carbonAdsEnabled" />
    </div>
  </UiScrollArea>
  <UiCollapsible
    v-else
    v-model:open="isOpen"
    class="block w-full text-sm lg:hidden"
  >
    <UiCollapsibleTrigger class="flex w-full px-4 md:px-8 py-3 text-left font-medium">
      {{ $t(title) }}
      <Icon
        name="lucide:chevron-right"
        class="ml-auto self-center transition-all"
        :class="[isOpen && 'rotate-90']"
      />
    </UiCollapsibleTrigger>
    <UiCollapsibleContent>
      <LayoutTocTree :links="tocLinks" :level="0" class="mx-4 mb-3 pl-2 text-sm" />
    </UiCollapsibleContent>
  </UiCollapsible>
</template>

<script setup lang="ts">
import type { TocLink } from '@nuxtjs/mdc';
import { pageTocLinks } from '../../utils/navigation';

const props = defineProps<{
  isSmall: boolean;
  page?: { body?: { toc?: { links?: TocLink[] } }; toc?: unknown } | null;
}>();

const config = useConfig();
const injected = inject<Ref<typeof props.page>>('page', ref(null));
const resolvedPage = computed(() => props.page ?? injected.value);
const tocLinks = computed(() => pageTocLinks(resolvedPage.value) as TocLink[]);

const { title, iconLinks, carbonAds, bottom } = useConfig().value.toc;

const isDesktop = useMediaQuery('(min-width: 1024px)');
const carbonAdsEnabled = computed(
  () => carbonAds.enable && !(import.meta.dev && carbonAds.disableInDev),
);

const isOpen = ref(false);

const links = computed(() => bottom.links);
</script>
