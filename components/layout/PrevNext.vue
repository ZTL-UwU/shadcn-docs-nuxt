<template>
  <div class="lg:flex lg:flex-row pt-8 mt-10 border-t">
    <LayoutPrevNextButton :prev-next="prev" side="left" />
    <span class="flex-1" />
    <LayoutPrevNextButton :prev-next="next" side="right" />
  </div>
</template>

<script setup lang="ts">
const { prev, next } = useContent();
</script>
