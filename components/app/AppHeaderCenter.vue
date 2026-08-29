<template>
  <LayoutSearchButton v-if="!config.search.inAside && config.search.style === 'input'" />
  <LayoutSearchButton v-else-if="!config.search.inAside && config.search.style === 'button'" />
</template>

<script setup lang="ts">
const config = useConfig();
</script>
