<template>
  <div v-if="page?.prevNext ?? true" class="border-t pt-6 lg:flex lg:flex-row">
    <LayoutPrevNextButton :prev-next="prev" side="left" />
    <span class="flex-1" />
    <LayoutPrevNextButton :prev-next="next" side="right" />
  </div>
</template>

<script setup lang="ts">
const page = inject<Ref<{ prevNext?: boolean } | null>>('page', ref(null));
const surround = inject<Ref<Array<{ path?: string; title?: string; description?: string } | null> | null>>('surround', ref(null));

const prev = computed(() => surround.value?.[0] ?? null);
const next = computed(() => surround.value?.[1] ?? null);
</script>
