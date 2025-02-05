<template>
  <div v-if="enabledDocsFooter" class="w-fit">
    <UiButton variant="link" class="text-sm font-semibold text-primary" @click="scrollToTop">
      <div class="flex items-center gap-2 ">
        <SmartIcon name="lucide:arrow-up" />
        <span>Back to Top</span>
      </div>
    </UiButton>
  </div>
</template>

<script setup lang="ts">
const { enabledDocsFooter } = useEditLink();

// Function to scroll to the top smoothly
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>
