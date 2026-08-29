<template>
  <ul
    class="flex flex-col gap-1 py-1"
    :class="[level > 0 && 'mx-3.5 border-l px-2.5']"
  >
    <template v-for="link in links" :key="link.path">
      <LayoutAsideTreeItem
        :link="link"
        :level="level"
      />
    </template>
  </ul>
</template>

<script setup lang="ts">
import type { DocsNavItem } from '../../utils/navigation';

defineProps<{
  links: DocsNavItem[];
  level: number;
}>();
</script>
