<template>
  <NavigationMenuItem v-bind="props">
    <slot />
  </NavigationMenuItem>
</template>

<script setup lang="ts">
import type { NavigationMenuItemProps } from 'radix-vue';
import { NavigationMenuItem } from 'radix-vue';

const props = defineProps<NavigationMenuItemProps>();
</script>
