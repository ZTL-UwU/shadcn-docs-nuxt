<template>
  <ComboboxContent v-bind="forwarded" :class="cn('overflow-y-auto overflow-x-hidden', props.class)">
    <div role="presentation">
      <slot />
    </div>
  </ComboboxContent>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils';
import { ComboboxContent, useForwardPropsEmits } from 'radix-vue';
import { computed, type HTMLAttributes } from 'vue';
import type { ComboboxContentEmits, ComboboxContentProps } from 'radix-vue';

const props = withDefaults(defineProps<ComboboxContentProps & { class?: HTMLAttributes['class'] }>(), {
  dismissable: false,
});
const emits = defineEmits<ComboboxContentEmits>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>
