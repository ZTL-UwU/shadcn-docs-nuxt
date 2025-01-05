<template>
  <UiSheet v-model:open="open">
    <UiSheetTrigger as-child>
      <UiButton
        variant="ghost"
        size="icon"
        class="md:hidden"
      >
        <Icon name="lucide:menu" size="18" />
      </UiButton>
    </UiSheetTrigger>
    <UiSheetContent side="left" class="pr-0">
      <LayoutHeaderLogo />
      <LayoutAside is-mobile />
      <UiDialogTitle class="sr-only" />
      <UiDialogDescription class="sr-only" />
    </UiSheetContent>
  </UiSheet>
</template>

<script setup lang="ts">
const open = ref(false);

// Close sheet on navigation
watch(() => useRoute().path, () => {
  open.value = false;
});
</script>
