<template>
  <header
    class="sticky top-0 z-40 bg-background/80 backdrop-blur-lg"
    :class="{ 'lg:border-b': config.header.border }"
  >
    <div
      class="flex h-14 items-center justify-between gap-2 px-4 md:px-8"
      :class="{ 'border-b lg:border-none': config.header.border, 'container max-w-screen-2xl': config.main.padded }"
    >
      <LayoutHeaderLogo class="hidden flex-1 md:flex" />
      <LayoutMobileNav />
      <LayoutHeaderLogo v-if="config.header.showTitleInMobile" class="flex md:hidden" />
      <LayoutHeaderNav class="hidden flex-1 lg:flex" />
      <div class="flex flex-1 justify-end gap-2">
        <LayoutSearchButton v-if="!config.search.inAside && config.search.style === 'input'" />
        <div class="flex">
          <LayoutSearchButton v-if="!config.search.inAside && config.search.style === 'button'" />
          <ThemePopover v-if="config.theme.customizable" />
          <DarkModeToggle v-if="config.header.darkModeToggle" />
          <NuxtLink
            v-for="(link, i) in config.header.links"
            :key="i"
            :to="link?.to"
            :target="link?.target"
          >
            <UiButton variant="ghost" size="icon" class="flex gap-2">
              <SmartIcon v-if="link?.icon" :name="link.icon" :size="18" />
            </UiButton>
          </NuxtLink>
          <NuxtLink
            v-if="githubButton.enable"
            :to="`https://github.com/${githubButton.owner}/${githubButton.repo}`"
            :target="githubButton.target"
          >
            <UiButton
              variant="ghost"
              :size="githubButton.showStarCount ? 'default' : 'icon'"
              class="flex gap-2"
              :class="[githubButton.showStarCount && 'px-3']"
            >
              <SmartIcon v-if="githubButton?.icon" :name="githubButton.icon" :size="18" />
              <span v-if="githubButton.showStarCount && data?.stargazers_count" class="text-xs font-semibold">
                {{ formatNumber(data.stargazers_count) }}
              </span>
            </UiButton>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div v-if="showToc" class="lg:hidden">
      <LayoutToc is-small />
    </div>
  </header>
</template>

<script setup lang="ts">
const config = useConfig();
const { page } = useContent();

const { githubButton } = useConfig().value.header;

const showToc = computed(() => {
  return config.value.toc.enable
    && config.value.toc.enableInMobile
    && (page.value?._path === '/' ? config.value.toc.enableInHomepage : true);
});

const { data } = await useFetch<{ stargazers_count: number }>(`https://api.github.com/repos/${githubButton.owner}/${githubButton.repo}`);
const { format: formatNumber } = Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 1 });
</script>
