<template>
  <div class="p-3">
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
