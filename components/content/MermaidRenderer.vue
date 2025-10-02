<template>
  <UiAlert v-if="error" variant="destructive">
    {{ $t('Mermaid Chart Error: ') + error }}
  </UiAlert>
  <div
    v-else class="p-4 rounded-lg text-card-foreground [&:not(:first-child)]:mt-5 [&:not(:last-child)]:mb-5" :class="[
      parsedMeta.has('lifted') && 'shadow-xs border',
    ]"
  >
    <div v-if="loading" class="flex items-center justify-center">
      <div class="p-4 flex flex-col items-center gap-2">
        <Icon name="lucide:loader-circle" class="!size-6 animate-spin" />
        <span class="text-sm text-muted-foreground">{{ $t('Rendering Chart') }}</span>
      </div>
    </div>
    <div ref="mermaidContainer" class="flex justify-center transition-all overflow-x-auto" v-html="svgContent" />
  </div>
</template>

<script setup lang="ts">
import { useNuxtApp } from '#app';
import { useColorMode } from '#imports';
import { computed, nextTick, onMounted, onUnmounted, ref, useSlots, watch } from 'vue';

const props = defineProps<{
  code?: string;
  parsedMeta: Map<string, string | undefined>;
}>();

const mermaidContainer = ref<HTMLDivElement | null>(null);
const svgContent = ref<string>('');
const error = ref<string | null>(null);
const loading = ref(true);
const hasRenderedOnce = ref(false);
const mermaidDefinition = ref('');
let observer: IntersectionObserver | null = null;

const colorMode = useColorMode();
const { $mermaidInstance } = useNuxtApp();
const slots = useSlots();

const mermaidTheme = computed(() => {
  return colorMode.value === 'dark' ? 'dark' : 'default';
});

async function renderMermaid() {
  if (!$mermaidInstance)
    return;

  try {
    loading.value = true;
    error.value = null;

    mermaidDefinition.value
      = props.code?.trim()
        || slots.default?.().map(vnode => vnode.children).join('').trim()
        || '';

    if (!mermaidDefinition.value) {
      error.value = 'No Mermaid definition provided';
      return;
    }

    $mermaidInstance.initialize({
      startOnLoad: false,
      theme: mermaidTheme.value,
      flowchart: { curve: 'basis', useMaxWidth: true, htmlLabels: true },
      sequence: { actorMargin: 50, showSequenceNumbers: false },
    });

    await nextTick();

    const { svg } = await $mermaidInstance.render(
      `mermaid-${Date.now()}`,
      mermaidDefinition.value,
    );

    svgContent.value = svg;
    hasRenderedOnce.value = true;
  } catch (e) {
    console.error('Error rendering Mermaid chart:', e);
    error.value = (e as any)?.message || String(e);
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  if (mermaidContainer.value) {
    observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !hasRenderedOnce.value) {
          renderMermaid();
          if (observer) {
            observer.disconnect();
            observer = null;
          }
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(mermaidContainer.value);
  }
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
    observer = null;
  }
});

watch(mermaidTheme, () => {
  if (hasRenderedOnce.value)
    renderMermaid();
});

watch(
  () => props.code,
  () => {
    if (hasRenderedOnce.value)
      renderMermaid();
  },
);
</script>
