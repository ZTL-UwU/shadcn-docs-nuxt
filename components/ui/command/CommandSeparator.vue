<template>
  <ComboboxSeparator
    v-bind="delegatedProps"
    :class="cn('-mx-1 h-px bg-border', props.class)"
  >
    <slot />
  </ComboboxSeparator>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils';
import { ComboboxSeparator } from 'radix-vue';
import { computed, type HTMLAttributes } from 'vue';
import type { ComboboxSeparatorProps } from 'radix-vue';

const props = defineProps<ComboboxSeparatorProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>
