<template>
  <NavigationMenuLink v-bind="forwarded">
    <slot />
  </NavigationMenuLink>
</template>

<script setup lang="ts">
import type { NavigationMenuLinkEmits, NavigationMenuLinkProps } from 'reka-ui';
import {
  NavigationMenuLink,

  useForwardPropsEmits,
} from 'reka-ui';

const props = defineProps<NavigationMenuLinkProps>();
const emits = defineEmits<NavigationMenuLinkEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>
