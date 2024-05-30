<template>
  <NuxtLink :to="to" :target="target" class="mx-0.5">
    <UiBadge :variant="variant" :class="typeTwClass[type]">
      <ContentSlot unwrap="p" />
    </UiBadge>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  type?: 'default' | 'info' | 'warning' | 'success' | 'danger';
  to?: string;
  target?: string;
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
}>(), {
  type: 'default',
  variant: 'default',
});

const typeTwClass = {
  default: '',
  info: `${props.variant !== 'outline' && 'bg-sky-500 hover:bg-sky-400'} ${props.variant === 'outline' && 'border-sky-500 text-sky-500'}`,
  warning: `${props.variant !== 'outline' && 'bg-amber-500 hover:bg-amber-400'} ${props.variant === 'outline' && 'border-amber-500 text-amber-500'}`,
  success: `${props.variant !== 'outline' && 'bg-green-500 hover:bg-green-400'} ${props.variant === 'outline' && 'border-green-500 text-green-500'}`,
  danger: `${props.variant !== 'outline' && 'bg-red-500 hover:bg-red-400'} ${props.variant === 'outline' && 'border-red-500 text-red-500'}`,
};
</script>
