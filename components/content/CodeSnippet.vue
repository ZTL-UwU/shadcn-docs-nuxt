<template>
  <MDC v-if="loadedCode" :value="md" class="[&:not(:first-child)]:mt-5" />
  <UiAlert v-else variant="destructive">
    <UiAlertTitle>Error</UiAlertTitle>
    <UiAlertDescription>
      Cannot load code: <ProseCodeInline>{{ file }}</ProseCodeInline>
    </UiAlertDescription>
  </UiAlert>
</template>

<script setup lang="ts">
const { file, language, title, highlights, meta } = defineProps<{
  file: string;
  language: string;
  title?: string;
  highlights?: string;
  meta?: string;
}>();

const rawFiles = import.meta.glob(['@/**/*', '!@/**/nuxt.config.ts'], {
  query: '?raw',
  import: 'default',
});

const importer = rawFiles[file];

const loadedCode = ref('');
if (importer)
  loadedCode.value = await importer() as string;

const md = `
::div
\`\`\`${language} ${title && `[${title}]`} ${highlights && `{${highlights}}`} ${meta}
${loadedCode.value}
\`\`\`
::
`;
</script>
