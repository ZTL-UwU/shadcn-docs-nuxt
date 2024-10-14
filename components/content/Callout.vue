<template>
  <Alert :icon :to :target>
    <slot />
  </Alert>
</template>

<script setup lang="ts">
defineProps<{
  icon?: string;
  to?: string;
  target?: Target;
}>();
</script>
