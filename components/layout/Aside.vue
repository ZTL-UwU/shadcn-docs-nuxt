<template>
  <aside
    class="fixed top-16 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block overflow-y-auto"
  >
    <UiScrollArea orientation="vertical" class="relative overflow-hidden h-full py-6 pr-6 text-sm" type="auto">
      <ul class="pb-3 border-b">
        <li v-for="link in navigation" :key="link.id">
          <NuxtLink
            :to="link._path"
            class="px-2 py-2 mb-1 hover:bg-muted rounded-md w-full block transition-all"
            :class="[
              path.startsWith(link._path) && 'bg-muted hover:bg-muted font-semibold',
            ]"
          >
            {{ link.title }}
          </NuxtLink>
        </li>
      </ul>
      <LayoutAsideTree :links="tree" :level="0" class="pl-2" />
    </UiScrollArea>
  </aside>
</template>

<script setup lang="ts">
const { navDirFromPath } = useContentHelpers();
const { navigation } = useContent();

const tree = computed(() => {
  const route = useRoute();
  const path = route.path.split('/');
  const leveledPath = path.splice(0, 2).join('/');

  const dir = navDirFromPath(leveledPath, navigation.value);
  return dir ?? [];
});

const path = useRoute().path;
</script>
