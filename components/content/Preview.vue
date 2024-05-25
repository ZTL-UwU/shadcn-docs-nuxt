<template>
  <UiCard class="rounded-t-none p-3 bg-zinc-50 dark:bg-zinc-900">
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
