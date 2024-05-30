<template>
  <div class="p-3 bg-muted/20">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  language?: undefined;
  code?: undefined;
  filename?: string;
  inGroup?: true;
}>();
</script>
