<template>
  <header
    class="sticky z-40 top-0 bg-background/80 backdrop-blur-lg"
    :class="{ 'lg:border-b': config.header.border }"
  >
    <div
      class="px-4 md:px-8 flex h-14 items-center gap-2 justify-between"
      :class="{ 'border-b lg:border-none': config.header.border, 'max-w-screen-2xl container': config.main.padded }"
    >
      <LayoutHeaderLogo class="hidden md:flex flex-1" />
      <LayoutMobileNav />
      <LayoutHeaderLogo v-if="config.header.showTitleInMobile" class="flex md:hidden" />
      <LayoutHeaderNav class="hidden lg:flex flex-1" />
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
              <Icon v-if="link?.icon" :name="link.icon" size="18" />
            </UiButton>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div v-if="config.toc.enable && config.toc.enableInMobile" class="lg:hidden">
      <LayoutToc is-small />
    </div>
  </header>
</template>

<script setup lang="ts">
const config = useConfig();
</script>
