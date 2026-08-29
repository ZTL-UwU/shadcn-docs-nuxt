<template>
  <ClientOnly>
    <LayoutSearchDialog v-model:open="isOpen" />
  </ClientOnly>
</template>

<script setup lang="ts">
const { isOpen } = useDocsSearch()
</script>
