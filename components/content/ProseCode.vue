<template>
  <UiCard
    class="relative overflow-hidden [&:not(:first-child)]:mt-5 [&:not(:last-child)]:mb-5"
    :class="[
      (inGroup || inTree) && 'mb-0 rounded-t-none border-none shadow-none',
      inStack && 'mb-0 rounded-none border-none shadow-none',
    ]"
  >
    <div v-if="!inGroup && filename" class="flex items-center border-b p-3 font-mono text-sm">
      <SmartIcon v-if="icon" :name="icon" class="mr-1.5" />
      <span>{{ filename }}</span>
      <CodeCopy :code class="ml-auto mr-1" />
    </div>

    <span v-if="!filename" class="absolute right-3 top-3 z-10">
      <CodeCopy :code />
    </span>
    <div class="bg-muted/30">
      <UiScrollArea :style="[(parsedMeta.has('height') || height) && `height: ${height || parsedMeta.get('height')}px`]">
        <div
          class="overflow-x-auto py-3 text-sm"
          :class="[
            !inGroup && !inTree && !filename && 'inline-copy',
            !language && 'pl-3',
            parsedMeta.has('line-numbers') && 'show-line-number',
          ]"
        >
          <slot />
        </div>
        <ScrollBar orientation="horizontal" />
      </UiScrollArea>
    </div>
  </UiCard>
</template>

<script setup lang="ts">
import type { BuiltinLanguage } from 'shiki';
import ScrollBar from '../ui/scroll-area/ScrollBar.vue';

const {
  code = '',
  inGroup = false,
  inTree = false,
  inStack = false,
  language,
  filename,
  meta,
} = defineProps<{
  code?: string;
  language?: BuiltinLanguage;
  filename?: string;
  inGroup?: boolean;
  inTree?: boolean;
  inStack?: boolean;
  highlights?: number[];
  meta?: string;
  height?: number;
}>();

const parsedMeta = computed(() => {
  const split = meta?.split(' ') ?? [];
  const params = new Map<string, string | undefined>();

  for (const param of split) {
    const [key, val] = param.split('=');
    params.set(key, val);
  }

  return params;
});

const iconMap = new Map(Object.entries(useConfig().value.main.codeIcon));
const icon = computed(() => {
  const filenameLow = filename?.toLowerCase();
  return parsedMeta.value.get('icon') || (filenameLow && iconMap.get(filenameLow)) || (language && iconMap.get(language));
});
</script>

<style>
.fade-enter-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.shiki .line.highlight {
  background-color: hsl(var(--muted) / 0.9);
}

.shiki .line {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

.inline-copy .line {
  padding-right: 2.75rem;
}

.show-line-number .line::before {
  content: attr(line);
  @apply text-sm w-5 inline-block text-right mr-4 text-muted-foreground;
}
</style>
