<template>
  <UiTabs
    :model-value="navigation.find((link: any) => path.startsWith(link._path))._path"
    class="relative mr-auto w-full"
  >
    <div class="flex items-center justify-between overflow-x-auto">
      <UiTabsList
        class="h-9 w-full rounded-none bg-transparent p-0 justify-start"
        :class="[justifyContent]"
      >
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
</template>

<script setup lang="ts">
const { navigation, localePath } = useI18nDocs();
const config = useConfig();

const route = useRoute();
const path = computed(() => route.path);

const justifyContent = computed(() => {
  return config.value.aside.headerLevelNavAlign === 'start'
    ? 'md:justify-start'
    : config.value.aside.headerLevelNavAlign === 'center'
      ? 'md:justify-center'
      : 'md:justify-end';
});
</script>
