<template>
  <div v-if="prev || next" class="border-t pt-6 lg:flex lg:flex-row">
    <LayoutPrevNextButton :prev-next="prev" side="left" />
    <span class="flex-1" />
    <LayoutPrevNextButton :prev-next="next" side="right" />
  </div>
</template>

<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content';

const prev = ref<ContentNavigationItem | null>(null);
const next = ref<ContentNavigationItem | null>(null);
const { data } = await useAsyncData('surround', () => {
  return queryCollectionItemSurroundings('doc_en', '/getting-started/introduction');
});
if (data.value) {
  prev.value = data.value[0];
  next.value = data.value[1];
}
</script>
