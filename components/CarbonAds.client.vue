<!-- Ported from Vitepress -->

<template>
  <div
    ref="container"
    class="carbon-ads mt-8 flex min-h-[250px] items-center justify-center rounded-lg border p-4 text-center"
  />
</template>

<script setup lang="ts">
const { carbonAds } = useConfig().value.toc;
const container = ref();

let isInitialized = false;

function init() {
  if (!isInitialized) {
    isInitialized = true;
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.id = '_carbonads_js';
    s.src = `//cdn.carbonads.com/carbon.js?serve=${carbonAds.code}&placement=${carbonAds.placement}`;
    s.async = true;
    container.value.appendChild(s);
  }
}

watch(() => useRoute().path, () => {
  if (isInitialized) {
    ;(window as any)._carbonads?.refresh();
  }
});

if (carbonAds.enable) {
  onMounted(() => {
    init();
  });
}
</script>

<style scoped>
.carbon-ads {
  @apply leading-4 text-xs font-medium;
}

.carbon-ads :deep(img) {
  @apply mx-auto my-0 rounded-md;
}

.carbon-ads :deep(.carbon-text) {
  @apply block mx-auto my-0 text-sm font-medium pt-4 hover:text-primary transition-colors;
}

.carbon-ads :deep(.carbon-poweredby) {
  @apply block pt-3 text-[11px] uppercase text-muted-foreground;
}

.carbon-ads :deep(.carbon-poweredby:hover) {
  @apply text-muted-foreground;
}

.carbon-ads :deep(> div) {
  @apply hidden;
}

.carbon-ads :deep(> div:first-of-type) {
  @apply block;
}
</style>
