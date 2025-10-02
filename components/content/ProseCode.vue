<template>
  <MermaidRenderer v-if="isMermaid" :code="code" :parsed-meta="parsedMeta">
    <slot />
  </MermaidRenderer>

  <UiCard
    v-else
    class="bg-[#FBFBFB] dark:bg-[#121215] relative overflow-hidden [&:not(:first-child)]:mt-5 [&:not(:last-child)]:mb-5"
    :class="[
      (inGroup || inTree) && 'mb-0 rounded-t-none border-none shadow-none',
      inStack && 'mb-0 rounded-none border-none shadow-none',
    ]"
  >
    <div v-if="!inGroup && filename" class="bg-background flex items-center border-b py-2 pl-3 pr-2 font-mono text-sm">
      <SmartIcon v-if="icon" :name="icon" class="mr-1.5" />
      <span>{{ filename }}</span>
      <CodeCopy :code class="ml-auto" />
    </div>

    <div v-if="!filename" class="absolute right-2 top-2 z-10">
      <CodeCopy :code />
    </div>

    <UiScrollArea v-if="parsedMeta.has('collapse')">
      <div
        :style="[((parsedMeta.has('height') || height) && !expanded) ? `height: ${height || parsedMeta.get('height')}px` : undefined]"
        class="overflow-x-auto overflow-y-hidden py-3 text-sm" :class="[
          !inGroup && !inTree && !filename && 'inline-copy',
          !language && 'pl-3',
          parsedMeta.has('line-numbers') && 'show-line-number',
          expanded && 'pb-14',
        ]"
      >
        <slot />
      </div>
      <ScrollBar orientation="horizontal" />
    </UiScrollArea>
    <UiScrollArea
      v-else
      :style="[(parsedMeta.has('height') || height) && `height: ${height || parsedMeta.get('height')}px`]"
    >
      <div
        class="overflow-x-auto py-3 text-sm" :class="[
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
      :class="[!expanded && 'from-muted bg-gradient-to-t dark:from-zinc-950']"
    >
      <UiButton size="sm" variant="outline" @click="expanded = !expanded">
        <Icon :name="expanded ? 'lucide:chevron-up' : 'lucide:chevron-down'" size="18" />
        {{ expanded ? $t('Collapse') : $t('Expand') }}
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

const isMermaid = computed(() => language === 'mermaid' || parsedMeta.value.has('mermaid'));

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
  background-color: hsl(var(--muted));
}

.shiki .line,
.language-text {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

.inline-copy .line {
  padding-right: 2.75rem;
}

.has-diff .line::before,
.show-line-number .line::before {
  font-size: var(--text-sm);
  line-height: var(--tw-leading, var(--text-xs--line-height));
  width: calc(var(--spacing) * 5);
  display: inline-block;
  text-align: right;
  margin-right: calc(var(--spacing) * 4);
  color: hsl(var(--muted-foreground));
}

.show-line-number .line:not(.diff)::before {
  font-size: var(--text-xs);
  content: attr(line);
}

.has-diff:not(.show-line-number>.has-diff) .line:not(.diff)::before {
  font-size: var(--text-sm);
  content: '';
}

.diff.add {
  background-color: color-mix(in oklab,var(--color-green-500)15%,transparent) !important;
}

.diff.remove {
  background-color: color-mix(in oklab,var(--color-red-500)15%,transparent) !important;
}

.diff.add.line::before {
  font-size: var(--text-sm);
  color: var(--color-green-600);
  content: '+';
}

.diff.remove.line::before {
  font-size: var(--text-sm);
  color: var(--color-red-600);
  content: '-';
}

.highlighted.warning {
  background-color: color-mix(in oklab,var(--color-yellow-500)15%,transparent) !important;
}

.highlighted.error {
  background-color: color-mix(in oklab,var(--color-red-500)15%,transparent) !important;
}

.has-focused .line:not(.focused) {
  opacity: 0.5;
  filter: blur(.095rem);
  transition: filter .35s, opacity .35s;
}

.has-focused:hover .line:not(.focused) {
  opacity: 1;
  filter: blur(0);
}
</style>
