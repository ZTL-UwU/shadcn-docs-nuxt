<template>
  <header
    class="bg-background/80 sticky top-0 z-40 backdrop-blur-lg"
    :class="{ 'border-b': config.header.border }"
    :style="{ '--header-height': headerHeight }"
  >
    <div
      class="flex h-14 items-center justify-between gap-2 px-4 md:px-8"
      :class="{
        'container max-w-screen-2xl': config.main.padded,
      }"
    >
      <AppHeaderLeft />
      <LayoutMobileNav />
      <LayoutHeaderNav class="hidden flex-1 lg:flex" />
      <div class="flex flex-1 justify-end gap-2">
        <AppHeaderCenter />
        <div class="flex">
          <AppHeaderCTA />
          <LangSwitcher v-if="isEnabled" />
          <ThemePopover v-if="config.theme.customizable" />
          <DarkModeToggle v-if="config.header.darkModeToggle" />
          <NuxtLinkLocale
            v-for="(link, i) in config.header.links"
            :key="i"
            :to="link?.to"
            :target="link?.target"
          >
            <UiButton variant="ghost" size="icon" class="flex gap-2">
              <SmartIcon v-if="link?.icon" :name="link.icon" :size="18" />
            </UiButton>
          </NuxtLinkLocale>
        </div>
      </div>
    </div>
    <AppHeaderBottom />
    <DocsAsideMobileBar />
  </header>
</template>

<script setup lang="ts">
const config = useConfig();
const { isEnabled } = useDocusI18n();
const { subNavigationMode } = useSubNavigation();

const headerHeight = computed(() => subNavigationMode.value === 'header' ? '6.5rem' : '3.5rem');
</script>
