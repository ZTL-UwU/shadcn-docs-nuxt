<template>
  <render />
</template>

<script setup lang="ts">
import type { SetupContext } from 'vue';
import Tabs from './Tabs.vue';

const { inStack = false, sync } = defineProps<{
  inStack?: boolean;
  sync?: string;
}>();

const _slots: SetupContext['slots'] = useSlots();
function render() {
  const slots = _slots?.default?.() || [];
  return h(
    Tabs,
    {
      variant: 'card',
      inStack,
      sync,
    },
    () => slots,
  );
}
</script>
