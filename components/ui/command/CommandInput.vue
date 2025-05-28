<template>
  <div class="flex items-center border-b px-3" cmdk-input-wrapper>
    <Icon name="lucide:search" class="mr-2 size-4 shrink-0 opacity-50" />
    <ListboxFilter
      v-bind="{ ...forwardedProps, ...$attrs }"
      v-model="filterState.search"
      auto-focus
      :class="cn('flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50', props.class)"
    />
  </div>
</template>

<script setup lang="ts">
import type { ListboxFilterProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import { ListboxFilter, useForwardProps } from 'reka-ui';
import { computed } from 'vue';
import { cn } from '@/lib/utils';
import { useCommand } from '.';

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<ListboxFilterProps & {
  class?: HTMLAttributes['class'];
}>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);

const { filterState } = useCommand();
</script>
