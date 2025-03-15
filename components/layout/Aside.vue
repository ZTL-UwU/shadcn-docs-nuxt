<template>
  <UiScrollArea orientation="vertical" class="relative h-full overflow-hidden py-6 pr-6 text-sm md:pr-4" type="hover">
    <LayoutHeaderNavMobile v-if="isMobile" class="mb-5 border-b pb-2" />
    <LayoutSearchButton v-if="config.search.inAside" />
    <ul v-if="config.aside.useLevel" class="flex flex-col gap-1 border-b pb-4">
      <li v-for="link in filteredNavigation" :key="link.id">
        <NuxtLink
          :to="link.redirect ?? link._path"
          class="flex h-8 items-center gap-2 rounded-md p-2 text-sm text-foreground/80 hover:bg-muted hover:text-primary"
          :class="[
            path.startsWith(link._path) && 'bg-muted !text-primary',
          ]"
        >
          <SmartIcon
            v-if="link.icon"
            :name="link.icon"
            class="self-center"
            :size="16"
          />
          {{ link.title }}

          <span v-for="(badge, i) in link.navBadges" :key="i">
            <Badge :variant="badge.variant" :type="badge.type" :size="badge.size ?? 'sm'">
              {{ badge.value }}
            </Badge>
          </span>
        </NuxtLink>
      </li>
    </ul>
    <LayoutAsideTree
      :links="filteredTree"
      :level="0"
      :class="[config.aside.useLevel ? 'pt-4' : 'pt-1']"
    />
  </UiScrollArea>
</template>

<script setup lang="ts">
defineProps<{ isMobile: boolean }>();

const { navDirFromPath } = useContentHelpers();
const { navigation } = useContent();
const config = useConfig();

const filteredNavigation = computed(() => {
  return filterEnglishContent(navigation.value);
});

function filterEnglishContent(items: typeof navigation.value) {
  if (!items)
    return [];

  return items
    .filter(item => !item._path.match(/\.[a-z]{2}(-[a-z]{2})?$/i))
    .map((item) => {
      const newItem = { ...item };

      if (item.children && item.children.length > 0) {
        newItem.children = filterEnglishContent(item.children);
      }

      return newItem;
    });
}

const filteredTree = computed(() => {
  const route = useRoute();
  const path = route.path.split('/');

  if (config.value.aside.useLevel) {
    const leveledPath = path.splice(0, 2).join('/');

    const dir = navDirFromPath(leveledPath, filteredNavigation.value);
    if (dir && dir.length > 0) {
      return dir;
    }

    return [];
  }

  return filteredNavigation.value;
});

const path = computed(() => useRoute().path);
</script>
