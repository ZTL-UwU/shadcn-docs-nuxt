<template>
  <div v-if="page.prevNext ?? true" class="border-t pt-6 lg:flex lg:flex-row">
    <LayoutPrevNextButton :prev-next="localizedPrev" side="left" />
    <span class="flex-1" />
    <LayoutPrevNextButton :prev-next="localizedNext" side="right" />
  </div>
</template>

<script setup lang="ts">
let { page, next, prev } = useContent();
const { locale, defaultLocale, availableLocales } = useI18n();

const otherLocales = availableLocales.filter(l => l !== defaultLocale);

const localizedPrev = computed(() => {
  if (locale.value === defaultLocale) {
    if (otherLocales.some(l => prev.value?._path.startsWith(`/${l}/`))) return null
  } else {
    if (!prev.value?._path.startsWith(`/${locale.value}`)) {
      return null;
    }
  }
  return prev.value;
})
const localizedNext = computed(() => {
  if (locale.value === defaultLocale) {
    if (otherLocales.some(l => next.value?._path.startsWith(`/${l}/`))) return null
  } else {
    if (!next.value?._path.startsWith(`/${locale.value}`)) {
      return null;
    }
  }
  return next.value;
})


</script>
