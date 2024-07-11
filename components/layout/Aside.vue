<template>
  <UiScrollArea orientation="vertical" class="relative overflow-hidden h-full py-6 pr-6 text-sm" type="hover">
    <LayoutHeaderNavMobile v-if="isMobile" class="border-b pb-2 mb-5" />
    <LayoutSearchButton v-if="config.search.inAside" />
    <ul v-if="config.aside.useLevel" class="pb-4 border-b mb-1">
      <li v-for="link in navigation" :key="link.id">
        <NuxtLink
          :to="link._path"
          class="px-3 py-2 mb-1 hover:bg-muted rounded-md w-full flex gap-2 transition-all"
          :class="[
            path.startsWith(link._path) && 'bg-muted hover:bg-muted font-semibold text-primary',
          ]"
        >
          <Icon
            v-if="link.icon"
            :name="link.icon"
            class="self-center"
            size="16"
          />
          {{ link.title }}
        </NuxtLink>
      </li>
    </ul>
    <LayoutAsideTree :links="tree" :level="0" class="px-3" :class="[config.aside.useLevel ? 'pt-4' : 'pt-1']" />
  </UiScrollArea>
</template>

<script setup lang="ts">
defineProps<{ isMobile: boolean }>();

const { navDirFromPath } = useContentHelpers();
const { navigation } = useContent();
const config = useConfig();

const tree = computed(() => {
  const route = useRoute();
  const path = route.path.split('/');
  if (config.value.aside.useLevel) {
    const leveledPath = path.splice(0, 2).join('/');

    const dir = navDirFromPath(leveledPath, navigation.value);
    return dir ?? [];
  }

  return navigation.value;
});

const path = useRoute().path;
</script>
