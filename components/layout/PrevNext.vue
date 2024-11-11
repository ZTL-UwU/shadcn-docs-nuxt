<template>
  <div class="border-t pt-6 lg:flex lg:flex-row">
    <LayoutPrevNextButton :prev-next="prev" side="left" />
    <span class="flex-1" />
    <LayoutPrevNextButton :prev-next="next" side="right" />
  </div>
</template>

<script setup lang="ts">
const { prev, next } = useContent();
</script>
