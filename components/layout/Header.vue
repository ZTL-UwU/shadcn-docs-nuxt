<template>
  <header class="sticky z-40 top-0 bg-background/80 backdrop-blur-lg lg:border-b">
    <div class="container px-4 md:px-8 flex h-14 max-w-screen-2xl items-center border-b lg:border-none">
      <LayoutHeaderLogo class="hidden md:flex" />
      <LayoutMobileNav />

      <span class="flex-1" />

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
    <div v-if="config.toc.enable" class="lg:hidden">
      <LayoutToc is-small />
    </div>
  </header>
</template>

<script setup lang="ts">
const config = useConfig();
</script>
