<template>
  <NuxtLoadingIndicator :color="false" class="z-100 bg-primary/80" />
  <LayoutBanner v-if="config.banner.enable" />
  <LayoutHeader />
  <NuxtPage />

  <Toaster />
  <LayoutFooter />
</template>

<script setup lang="ts">
import Toaster from '@/components/ui/toast/Toaster.vue';

const config = useConfig();
const route = useRoute();
const { themeClass, radius } = useThemes();

useSeoMeta({
  description: config.value.site.description,
  ogDescription: config.value.site.description,
  twitterCard: 'summary_large_image',
});

useServerHead({
  bodyAttrs: {
    class: themeClass.value,
    style: `--radius: ${radius.value}rem;`,
  },
});
</script>
