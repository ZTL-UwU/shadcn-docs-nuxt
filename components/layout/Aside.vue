<template>
  <UiScrollArea orientation="vertical" class="relative h-full overflow-hidden py-6 pr-6 text-sm" type="hover">
    <LayoutHeaderNavMobile v-if="isMobile" class="mb-5 border-b pb-2" />
    <LayoutSearchButton v-if="config.search.inAside" />
    <ul v-if="config.aside.useLevel" class="mb-1 border-b pb-4">
      <li v-for="link in navigation" :key="link.id">
        <NuxtLink
          :to="link._path"
          class="mb-1 flex w-full gap-2 rounded-md px-3 py-2 transition-all hover:bg-muted"
          :class="[
            path.startsWith(link._path) && 'bg-muted font-semibold text-primary hover:bg-muted',
          ]"
        >
          <SmartIcon
            v-if="link.icon"
            :name="link.icon"
            class="self-center"
            :size="16"
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

const path = computed(() => useRoute().path);
</script>
