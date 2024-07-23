<template>
  <NuxtLoadingIndicator :color="false" class="z-100 bg-primary80" />
  <ConfigProvider :use-id="useIdFunction">
    <LayoutHeader />

    <div v-if="$route.path !== '/'" class="border-b min-h-screen">
      <div
        class="px-4 md:px-8 flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10"
        :class="[config.main.padded && 'container']"
      >
        <aside class="fixed top-[102px] md:top-[60px] z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block overflow-y-auto">
          <LayoutAside :is-mobile="false" />
        </aside>
        <NuxtPage />
      </div>
    </div>
    <NuxtPage v-else />

    <Toaster />
    <LayoutFooter />
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ConfigProvider } from 'radix-vue';
import Toaster from '@/components/ui/toast/Toaster.vue';

const config = useConfig();
const { themeClass, radius } = useThemes();

const useIdFunction = () => useId();

useSeoMeta({
  description: config.value.site.description,
  ogDescription: config.value.site.description,
  ogImage: config.value.site.ogImage,
  twitterCard: 'summary_large_image',
});

useServerHead({
  htmlAttrs: {
    class: themeClass.value,
    style: `--radius: ${radius.value}rem;`,
  },
});
</script>
