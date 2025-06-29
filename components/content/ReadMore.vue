<template>
  <Alert :to :target :icon>
    {{ $t('Read more at') }} <span class="font-semibold">{{ getTitle() }}</span>
  </Alert>
</template>

<script setup lang="ts">
const {
  title,
  to,
  icon = 'lucide:bookmark',
} = defineProps<{
  title?: string;
  to: string;
  target?: Target;
  icon?: string;
}>();

function getTitle() {
  if (title)
    return title;

  if (to.startsWith('http'))
    return to;

  try {
    return useBreadcrumb(to).map(x => x.title).join(' > ');
  } catch {
    return to;
  }
}
</script>
