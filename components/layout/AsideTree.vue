<template>
  ↓
  <ul>
    <li v-for="link in links" :key="link._id">
      {{ link.title }}
      <LayoutAsideTree v-if="link.children" :links="link.children" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { NavItem } from '@nuxt/content/types';

defineProps<{
  links: NavItem[];
}>();
</script>
