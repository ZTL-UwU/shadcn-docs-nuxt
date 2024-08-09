<template>
  <Alert :to="to" :target="target" icon="lucide:bookmark">
    Read more in <span class="capitalize font-semibold">{{ computedTitle }}</span>
  </Alert>
</template>

<script setup lang="ts">
const props = defineProps<{
  title?: string;
  to: string;
  target?: string;
}>();

const computedTitle = computed<string>(
  () => props.title || useBreadcrumb(props.to).map(x => x.title).join(' > '),
);
</script>
