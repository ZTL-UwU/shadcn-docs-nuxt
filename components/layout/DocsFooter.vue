<template>
  <div class="mt-16">
    <div v-if="editLink.enable" class="mb-6 flex justify-between">
      <LayoutEditLink />
    </div>
    <LayoutPrevNext />
  </div>
</template>

<script setup lang="ts">
const { editLink } = useConfig().value.main;
</script>
