<template>
  <UiButton
    variant="outline"
    class="pr-1.5 h-8 self-center w-full md:w-40 lg:w-64 rounded-lg"
    @click="isOpen = true"
  >
    <span class="text-muted-foreground overflow-hidden mr-auto">
      Search...
    </span>
    <Kbd class="hidden md:block ml-auto">
      <span class="text-xs">⌘</span>K
    </Kbd>
  </UiButton>

  <LayoutSearchDialog v-model:open="isOpen" />
</template>

<script setup lang="ts">
const isOpen = ref(false);
</script>
