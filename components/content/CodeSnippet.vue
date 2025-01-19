<template>
  <MDC v-if="loadedCode" :value="md" class="[&:not(:first-child)]:mt-5" />
  <UiAlert v-else variant="destructive">
    <UiAlertTitle>Error</UiAlertTitle>
    <UiAlertDescription>
      Cannot load code: <ProseCodeInline>{{ file || url }}</ProseCodeInline>
    </UiAlertDescription>
  </UiAlert>
</template>

<script setup lang="ts">
const {
  file,
  url,
  language,
  title,
  highlights,
  meta,
  start,
  offset,
} = defineProps<{
  file?: string;
  url?: string;
  language: string;
  title?: string;
  highlights?: string;
  meta?: string;
  start?: number;
  offset?: number;
}>();

const loadedCode = ref('');

const rawFiles = import.meta.glob(['@/**/*', '!@/**/nuxt.config.ts'], {
  query: '?raw',
  import: 'default',
});

if (file) {
  const importer = rawFiles[file];
  if (importer) {
    loadedCode.value = (await importer()) as string;
  }
} else if (url) {
  try {
    const data = await $fetch(url, { parseResponse: txt => txt });
    if (data) {
      loadedCode.value = data as string;
    }
  } catch {}
}

if (loadedCode.value && start && offset) {
  const lines = loadedCode.value.split('\n');
  loadedCode.value = lines.slice(Number(start || 1) - 1, Number(start || 1) - 1 + Number(offset)).join('\n');
}

const md = `
::div
\`\`\`\`${language} ${title && `[${title}]`} ${highlights && `{${highlights}}`} ${meta || ''}
${loadedCode.value}
\`\`\`\`
::
`;
</script>
