<template>
  <ul :class="[level > 0 ? 'border-l' : 'py-2', level <= 1 && 'mt-2']">
    <template v-for="link in links" :key="link._id">
      <LayoutAsideTreeItem
        :link="link"
        :level="level"
      />
    </template>
  </ul>
</template>

<script setup lang="ts">
import type { NavItem } from '@nuxt/content/types';

defineProps<{
  links: NavItem[];
  level: number;
}>();
</script>
