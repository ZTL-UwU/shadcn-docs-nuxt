<template>
  <Alert :to="to" :target="target" icon="lucide:bookmark">
    Read more in <span class="font-semibold">{{ computedTitle }}</span>
  </Alert>
</template>

<script setup lang="ts">
const props = defineProps<{
  title?: string;
  to: string;
  target?: string;
}>();

const computedTitle = computed<string>(
  () => {
    if (props.title)
      return props.title;

    try {
      return useBreadcrumb(props.to).map(x => x.title).join(' > ');
    } catch {
      return props.to;
    }
  },
);
</script>
