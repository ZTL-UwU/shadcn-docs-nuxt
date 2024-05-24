<template>
  <UiSheet v-model:open="open">
    <UiSheetTrigger as-child>
      <UiButton
        variant="ghost"
        size="icon"
        class="md:hidden"
      >
        <Icon name="lucide:menu" />
      </UiButton>
    </UiSheetTrigger>
    <UiSheetContent side="left" class="pr-0">
      <LayoutAside />
    </UiSheetContent>
  </UiSheet>
</template>

<script setup lang="ts">
const open = ref(false);
</script>
