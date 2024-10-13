<template>
  <render />
</template>

<script setup lang="ts">
import Tabs from './Tabs.vue';

const { inStack = false } = defineProps<{
  inStack?: boolean;
}>();

const _slots = useSlots();
function render() {
  const slots = _slots?.default?.() || [];
  return h(
    Tabs,
    {
      variant: 'card',
      inStack,
    },
    () => slots,
  );
}
</script>
