<template>
  <header class="sticky z-40 top-0 bg-background/80 backdrop-blur-lg lg:border-b">
    <div class="container px-4 md:px-8 flex h-14 max-w-screen-2xl items-center border-b lg:border-none gap-2 justify-between">
      <LayoutHeaderLogo class="hidden md:flex flex-1" />
      <LayoutMobileNav />
      <LayoutHeaderNav class="hidden lg:flex flex-1" />
      <div class="flex flex-1 justify-end gap-2">
        <LayoutSearchButton v-if="!config.search.inAside" />
        <div class="flex">
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
    <div v-if="config.toc.enable" class="lg:hidden">
      <LayoutToc is-small />
    </div>
  </header>
</template>

<script setup lang="ts">
const config = useConfig();
</script>
