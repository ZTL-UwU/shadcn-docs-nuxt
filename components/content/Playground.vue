<template>
  <div class="min-h-[600px] [&:not(:first-child)]:mt-6">
    <iframe
      v-if="url"
      :src="url"
      :title
      sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      class="w-full h-full min-h-[600px] overflow-hidden rounded-md"
    />
    <UiSkeleton v-else class="w-full min-h-[600px] rounded-md" />
  </div>
</template>

<script setup lang="ts">
const {
  provider,
  id,
  repo,
  branch = 'main',
  dir = '',
  file,
  title = 'Playground',
} = defineProps<{
  provider: 'stackblitz' | 'codesandbox';
  id?: string;
  repo?: string;
  branch?: string;
  dir?: string;
  file: string;
  title?: string;
}>();

const url = ref('');
const colorMode = useColorMode();

onMounted(() => {
  if (provider === 'stackblitz') {
    if (repo)
      url.value = `https://stackblitz.com/github/${repo}/tree/${branch}/${dir}?embed=1&file=${file}&theme=${colorMode.value}`;
    else if (id)
      url.value = `https://stackblitz.com/edit/${id}?embed=1&file=${file}&theme=${colorMode.value}`;
  } else if (provider === 'codesandbox') {
    if (repo)
      url.value = `https://codesandbox.io/p/sandbox/github/${repo}/tree/${branch}/${dir}?embed=1&file=${file}`;
    else if (id)
      url.value = `https://codesandbox.io/embed/${id}?view=editor+%2B+preview&module=${file}`;
  }
});
</script>
