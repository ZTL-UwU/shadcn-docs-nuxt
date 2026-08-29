<template>
  <MDC :value="md" class="not-first:mt-5" />
</template>

<script setup lang="ts">
const {
  command,
  sync = '_pm',
  noSync,
} = defineProps<{
  command: string
  sync?: string
  noSync?: boolean
}>()

const md = `
::code-group{${noSync ? '' : `sync="${sync}"`}}
${
  usePm().packageManagers.value.map((pm) => {
    const code = `${pm.x}${command}`;
    return `\`\`\`bash [${pm.name}]\n${code}\n\`\`\`\n`;
  }).join('\n')
}
::
`;
</script>
