<template>
  <div
    v-if="subNavigationMode === 'header'"
    class="md:mt-2 md:px-8"
    :class="{
      'md:container md:max-w-screen-2xl': config.main.padded,
    }"
  >
    <LayoutHeaderTopLevelNav />
    <AppHeaderBottomRight />
  </div>
</template>

<script setup lang="ts">
const config = useConfig();
const { subNavigationMode } = useSubNavigation();
</script>
