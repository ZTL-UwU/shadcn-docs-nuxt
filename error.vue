<template>
  <NuxtLoadingIndicator :color="false" class="z-100 bg-primary/80" />
  <LayoutBanner v-if="config.banner.enable" />
  <AppHeader />
  <div class="flex min-h-[calc(100vh-3.5rem)] items-center justify-center">
    <h3 class="scroll-m-20 border-r px-4 py-3 text-2xl font-semibold">
      {{ statusCode }}
    </h3>
    <div class="scroll-m-20 px-4">
      <p>{{ statusCode === 404 ? $t('This page could not be found.') : error?.message }}</p>
      <UiButton class="mt-4" variant="outline" as-child>
        <NuxtLinkLocale to="/">
          {{ $t('Go home') }}
        </NuxtLinkLocale>
      </UiButton>
    </div>
  </div>
  <AppFooter />
</template>

<script setup lang="ts">
const error = useError();
const config = useConfig();
const { locale } = useDocusI18n();
const { themeClass, radius, setClassTheme } = useThemes();

provide('navigation', ref([]));

const statusCode = computed(() => error.value?.statusCode || 500);

useSeoMeta({
  title: computed(() => String(statusCode.value)),
  description: computed(() => error.value?.message || ''),
});

useHead({
  htmlAttrs: {
    lang: locale,
  },
  bodyAttrs: {
    class: themeClass.value,
    style: `--radius: ${radius.value}rem;`,
  },
});

onMounted(() => {
  setClassTheme();
});
</script>
