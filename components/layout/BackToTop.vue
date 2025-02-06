<template>
  <div v-if="isBackToTopEnabled" class="w-fit">
    <UiButton variant="link" class="text-sm font-semibold text-primary" @click="scrollToTop">
      <div class="flex items-center gap-2 ">
        <SmartIcon name="lucide:arrow-up" />
        <span>Back to Top</span>
      </div>
    </UiButton>
  </div>
</template>

<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core';

const config = useConfig().value.main;
const isBackToTopEnabled = config.backToTop;

const { y } = useWindowScroll();

// Function to scroll to the top smoothly
function scrollToTop() {
  const scrollInterval = setInterval(() => {
    y.value -= 50; // Scroll up in small steps
    if (y.value <= 0)
      clearInterval(scrollInterval); // Stop when at the top
  }, 10); // Adjust speed by changing the interval time
}
</script>
