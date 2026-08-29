<template>
  <LayoutHeaderLogo class="hidden flex-1 md:flex" />
  <LayoutHeaderLogo v-if="config.header.showTitleInMobile" class="flex md:hidden" />
</template>

<script setup lang="ts">
const config = useConfig()
</script>
