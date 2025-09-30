<template>
  <div class="mermaid-container">
    <div v-if="error" class="mermaid-error p-4 text-red-500 dark:text-red-400 bg-red-50 dark:bg-red-950/20 rounded">
      ⚠️ Mermaid Chart Error: {{ error }}
    </div>

    <div v-else-if="loading" class="mermaid-loading p-8 flex items-center justify-center">
      <div class="flex flex-col items-center">
        <div class="w-8 h-8 border-4 border-current border-t-transparent rounded-full animate-spin mb-2" />
        <span class="text-sm text-muted-foreground">Rendering chart...</span>
      </div>
    </div>

    <div v-else ref="mermaidContainer" class="mermaid" v-html="svgContent" />
  </div>
</template>

<script setup lang="ts">
import { useNuxtApp } from '#app';
import { useColorMode } from '#imports';
import { computed, nextTick, onMounted, onUnmounted, ref, useSlots, watch } from 'vue';

const props = defineProps<{
  code?: string;
}>();

const mermaidContainer = ref<HTMLDivElement | null>(null);
const svgContent = ref<string>('');
const error = ref<string | null>(null);
const loading = ref(false);
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
          setTimeout(() => renderMermaid(), 50);
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

// 主题切换时重新渲染
watch(mermaidTheme, () => {
  if (hasRenderedOnce.value)
    renderMermaid();
});

// code prop 改变时重新渲染
watch(
  () => props.code,
  () => {
    if (hasRenderedOnce.value)
      renderMermaid();
  },
);
</script>

<style scoped>
.mermaid-container {
  padding: 1rem;
}

.mermaid {
  display: flex;
  justify-content: center;
  background: transparent;
  border: 1px solid var(--mermaid-border, #e5e7eb);
  border-radius: 0.375rem;
  padding: 1rem;
  margin: 0;
  transition: all 0.2s ease;
  overflow-x: auto;
}

.dark .mermaid {
  border-color: #333;
}

.mermaid-error {
  border: 1px solid #ef4444;
  border-radius: 0.375rem;
  background-color: color-mix(in oklab, var(--color-red-500) 10%, transparent) !important;
}

.mermaid-loading {
  min-height: 100px;
  background: var(--mermaid-background, #ffffff);
  border: 1px solid var(--mermaid-border, #e5e7eb);
  border-radius: 0.375rem;
}
</style>
