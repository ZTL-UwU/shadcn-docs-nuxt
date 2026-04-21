<template>
  <Kbd :size>
    {{ computedValue }}
  </Kbd>
</template>

<script setup lang="ts">
const { value, size = 'sm' } = defineProps<{
  value: string;
  size?: 'xs' | 'sm' | 'md';
}>();

const metaSymbol = ref('Ctrl');
onMounted(() => {
  metaSymbol.value = navigator && navigator.userAgent && /Macintosh;/.test(navigator.userAgent) ? '⌘' : 'Ctrl';
});

const computedValue = computed(() => value === 'meta' ? metaSymbol : value);
</script>
