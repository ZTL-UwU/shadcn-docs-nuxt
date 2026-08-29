<template>
  <UiScrollArea orientation="vertical" class="relative h-full overflow-hidden py-6 pr-6 text-sm md:pr-4" type="hover">
    <LayoutHeaderNavMobile v-if="isMobile" class="mb-5 border-b pb-2" />
    <DocsAsideLeftTop />
    <LayoutSearchButton v-if="config.search.inAside" />
    <LayoutAsideTree
      :links="tree"
      :level="0"
      :class="[config.subNav.kind === 'aside' ? 'pt-4' : 'pt-1']"
    />
  </UiScrollArea>
</template>

<script setup lang="ts">
defineProps<{ isMobile: boolean }>()

const config = useConfig()
const { sidebarNavigation } = useSubNavigation()

const tree = computed(() => sidebarNavigation.value)
</script>
