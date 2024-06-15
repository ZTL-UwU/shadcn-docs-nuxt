<template>
  <NuxtLoadingIndicator :color="false" class="z-100 bg-primary" />
  <NuxtPage />
  <Toaster />
</template>

<script setup lang="ts">
import Toaster from '@/components/ui/toast/Toaster.vue';

const config = useConfig();

useSeoMeta({
  description: config.value.site.description,
  ogDescription: config.value.site.description,
  ogImage: config.value.site.ogImage,
  twitterCard: 'summary_large_image',
});
</script>
