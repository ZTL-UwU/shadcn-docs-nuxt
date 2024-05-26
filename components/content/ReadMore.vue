<template>
  <Alert :to="to" :target="target" icon="lucide:bookmark">
    Read more in <span class="capitalize font-semibold">{{ computedTitle }}</span>
  </Alert>
</template>

<script setup lang="ts">
const props = defineProps<{
  title?: string;
  to: string;
  target?: string;
}>();

function createBreadcrumb(link: string = 'here') {
  if (link.startsWith('http'))
    return link.replace(/^https?:\/\//, '');

  return link
    .split('/')
    .filter(Boolean)
    .join(' > ')
    .replace('Api', 'API');
}

// Guess title from link!
const computedTitle = computed<string>(() => props.title || createBreadcrumb(props.to));
</script>
