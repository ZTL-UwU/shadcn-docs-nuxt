<template>
  <UiCard class="rounded-t-none p-3 bg-muted/30">
    <slot />
  </UiCard>
</template>

<script setup lang="ts">
defineProps<{
  language?: undefined;
  code?: undefined;
  filename?: string;
  inGroup?: true;
}>();
</script>
