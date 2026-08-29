<template>
  <LayoutToc v-if="page" :is-small="false" :page="page" />
  <DocsAsideRightBottom />
</template>

<script setup lang="ts">
const props = defineProps<{
  page?: Record<string, unknown> | null;
}>();

const injected = inject<Ref<Record<string, unknown> | null>>('page', ref(null));
const page = computed(() => props.page ?? injected.value);
</script>
