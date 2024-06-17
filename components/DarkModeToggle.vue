<template>
  <UiButton variant="ghost" size="icon" @click="toggleDark">
    <Icon name="lucide:sun" class="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" size="18" />
    <Icon name="lucide:moon" class="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" size="18" />
    <span class="sr-only">Toggle theme</span>
  </UiButton>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
function toggleDark() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
}
</script>
