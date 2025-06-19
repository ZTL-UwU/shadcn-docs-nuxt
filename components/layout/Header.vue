<template>
  <header
    class="bg-background/80 sticky top-0 z-40 backdrop-blur-lg"
    :class="{ 'border-b': config.header.border }"
  >
    <div
      class="flex h-14 items-center justify-between gap-2 px-4 md:px-8"
      :class="{
        'container max-w-screen-2xl': config.main.padded,
      }"
    >
      <LayoutHeaderLogo class="hidden flex-1 md:flex" />
      <LayoutMobileNav />
      <LayoutHeaderLogo v-if="config.header.showTitleInMobile" class="flex md:hidden" />
      <LayoutHeaderNav class="hidden flex-1 lg:flex" />
      <div class="flex flex-1 justify-end gap-2">
        <LayoutSearchButton v-if="!config.search.inAside && config.search.style === 'input'" />
        <div class="flex">
          <LayoutSearchButton v-if="!config.search.inAside && config.search.style === 'button'" />
          <LangSwitcher v-if="i18nEnabled" />
          <ThemePopover v-if="config.theme.customizable" />
          <DarkModeToggle v-if="config.header.darkModeToggle" />
          <NuxtLinkLocale
            v-for="(link, i) in config.header.links"
            :key="i"
            :to="localePath(link?.to)"
            :target="link?.target"
          >
            <UiButton variant="ghost" size="icon" class="flex gap-2">
              <SmartIcon v-if="link?.icon" :name="link.icon" :size="18" />
            </UiButton>
          </NuxtLinkLocale>
        </div>
      </div>
    </div>
    <div
      v-if="baseRouteName !== 'index' && config.aside.levelStyle === 'header'"
      class="md:mt-2 md:px-8"
      :class="{
        'md:container md:max-w-screen-2xl': config.main.padded,
      }"
    >
      <UiTabs
        :model-value="navigation.find((link: any) => path.startsWith(link._path))._path"
        class="relative mr-auto w-full"
      >
        <div class="flex items-center justify-between overflow-x-auto">
          <UiTabsList class="h-9 w-full justify-start rounded-none bg-transparent p-0">
            <UiTabsTrigger
              v-for="link in navigation"
              :key="link._path"
              :value="link._path"
              class="text-muted-foreground data-[state=active]:border-b-primary data-[state=active]:text-foreground relative h-9 rounded-none border-b-2 border-b-transparent !bg-transparent px-4 pb-3 pt-2 font-semibold shadow-none transition-none data-[state=active]:shadow-none cursor-pointer"
              @click="navigateTo(localePath(link.redirect ?? link._path))"
            >
              <SmartIcon
                v-if="link.icon"
                :name="link.icon"
                class="mr-1.5 self-center -mb-[3px]"
              />

              {{ link.title }}

              <span v-for="(badge, i) in link.navBadges" :key="i">
                <Badge :variant="badge.variant" :type="badge.type" :size="badge.size ?? 'sm'">
                  {{ badge.value }}
                </Badge>
              </span>
            </UiTabsTrigger>
          </UiTabsList>
        </div>
      </UiTabs>
    </div>
    <div v-if="showToc" class="lg:hidden">
      <LayoutToc is-small />
    </div>
  </header>
</template>

<script setup lang="ts">
const config = useConfig();
const { i18nEnabled, localePath, navigation } = useI18nDocs();
const { page } = useContent();

const showToc = computed(() => {
  return config.value.toc.enable
    && config.value.toc.enableInMobile
    && (page.value?._path === '/' ? config.value.toc.enableInHomepage : true);
});

const route = useRoute();
const baseRouteName = computed(() => useRouteBaseName()(route));
const path = computed(() => route.path);
</script>
