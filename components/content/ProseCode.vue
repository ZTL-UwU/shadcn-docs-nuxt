<template>
  <UiCard
    class="relative overflow-hidden bg-muted/30 [&:not(:first-child)]:mt-5 [&:not(:last-child)]:mb-5"
    :class="[
      (inGroup || inTree) && 'mb-0 rounded-t-none border-none shadow-none',
      inStack && 'mb-0 rounded-none border-none shadow-none',
    ]"
  >
    <div v-if="!inGroup && filename" class="flex items-center border-b py-2 pl-3 pr-2 font-mono text-sm">
      <SmartIcon v-if="icon" :name="icon" class="mr-1.5" />
      <span>{{ filename }}</span>
      <CodeCopy :code class="ml-auto" />
    </div>

    <div v-if="!filename" class="absolute right-2 top-2 z-10">
      <CodeCopy :code />
    </div>

    <div v-if="parsedMeta.has('collapse')">
      <div
        :style="[((parsedMeta.has('height') || height) && !expanded) ? `height: ${height || parsedMeta.get('height')}px` : undefined]"
        class="overflow-x-auto overflow-y-hidden py-3 text-sm"
        :class="[
          !inGroup && !inTree && !filename && 'inline-copy',
          !language && 'pl-3',
          parsedMeta.has('line-numbers') && 'show-line-number',
          expanded && 'pb-14',
        ]"
      >
        <slot />
      </div>
    </div>
    <UiScrollArea v-else :style="[(parsedMeta.has('height') || height) && `height: ${height || parsedMeta.get('height')}px`]">
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

    <div
      v-if="parsedMeta.has('collapse')"
      class="absolute inset-x-0 bottom-0 flex h-16 items-center justify-center rounded-b"
      :class="[!expanded && 'bg-gradient-to-t from-muted dark:from-zinc-950']"
    >
      <UiButton size="sm" variant="outline" @click="expanded = !expanded">
        <Icon :name="expanded ? 'lucide:chevron-up' : 'lucide:chevron-down'" size="18" />
        {{ expanded ? 'Collapse' : 'Expand' }}
      </UiButton>
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

const expanded = ref(false);

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
