<template>
  <ul :class="[level > 0 ? 'border-l' : '[&:not(:first-child)]:py-2']">
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
