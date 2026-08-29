<template>
  <NuxtLoadingIndicator :color="false" class="z-100 bg-primary/80" />
  <LayoutBanner v-if="config.banner.enable" />
  <LayoutHeader />
  <div class="min-h-screen">
    <NuxtPage />
  </div>
  <Toaster />
  <LayoutFooter />
</template>

<script setup lang="ts">
import Toaster from '@/components/ui/toast/Toaster.vue';

const config = useConfig();
const { locale } = useDocusI18n();
const { themeClass, radius, setClassTheme } = useThemes();

useSeoMeta({
  description: config.value.site.description,
  ogDescription: config.value.site.description,
  twitterCard: 'summary_large_image',
});

useHead({
  htmlAttrs: {
    lang: locale,
  },
  bodyAttrs: {
    class: themeClass.value,
    style: `--radius: ${radius.value}rem;`,
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
  ],
});

onMounted(() => {
  setClassTheme();
});
</script>
