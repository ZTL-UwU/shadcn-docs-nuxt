<template>
  <UiCard class="[&:not(:first-child)]:mt-5 mb-5 overflow-hidden" :class="[inGroup && 'rounded-t-none']">
    <div v-if="!inGroup && filename" class="p-3 border-b flex text-sm font-mono">
      <Icon v-if="icon" :name="icon" class="self-center mr-1.5" />
      {{ filename }}
      <span class="ml-auto mr-1">
        <CodeCopy :code="code" />
      </span>
    </div>
    <UiScrollArea>
      <div
        class="p-3 bg-zinc-50 dark:bg-zinc-900 text-sm relative overflow-x-auto "
        :class="[`highlight-${language}`, !filename && 'pr-10']"
      >
        <span v-if="!filename" class="absolute right-4">
          <CodeCopy :code="code" />
        </span>
        <slot />
      </div>
      <UiScrollBar orientation="horizontal" />
    </UiScrollArea>
  </UiCard>
</template>

<script setup lang="ts">
import type { BuiltinLanguage } from 'shiki';

const props = defineProps({
  code: {
    type: String,
    default: '',
  },
  language: {
    type: String as PropType<BuiltinLanguage>,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  inGroup: {
    type: Boolean,
    default: false,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
});

const iconMap = new Map(Object.entries(useConfig().value.main.codeIcon));
const icon = iconMap.get(props.filename?.toLowerCase()) || iconMap.get(props.language);
</script>

<style>
.fade-enter-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
