<template>
  <NuxtLoadingIndicator :color="false" class="z-100 bg-primary/80" />
  <LayoutBanner v-if="config.banner.enable" />
  <AppHeader />
  <div class="min-h-screen" :class="{ 'border-b': config.footer.border }">
    <NuxtPage />
  </div>
  <Toaster />
  <AppFooter />
  <AppSearch />
</template>

<script setup lang="ts">
import Toaster from '@/components/ui/toast/Toaster.vue'

const config = useConfig()
const { locale } = useDocusI18n()
const { themeClass, radius, setClassTheme } = useThemes()
const { navigation } = await useDocsNavigation()

provide('navigation', navigation)

useSeoMeta({
  description: config.value.site.description,
  ogDescription: config.value.site.description,
  twitterCard: 'summary_large_image',
})

useHead({
  titleTemplate: config.value.seo.titleTemplate,
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
})

onMounted(() => {
  setClassTheme()
})
</script>
