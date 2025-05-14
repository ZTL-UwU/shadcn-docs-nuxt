<template>
  <div
    class="group grid gap-4 [&:not(:first-child)]:mt-5"
    :class="`${['md:grid-cols-1', 'md:grid-cols-2', 'md:grid-cols-3', 'md:grid-cols-4', 'md:grid-cols-5', 'md:grid-cols-6'][cols - 1]}`"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
const { cols = 2 } = defineProps<{
  cols?: 1 | 2 | 3 | 4 | 5 | 6;
}>();
</script>
