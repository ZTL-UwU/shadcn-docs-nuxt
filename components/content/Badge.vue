<template>
  <NuxtLink :to :target class="mx-0.5">
    <UiBadge :variant :class="typeTwClass[type]">
      <ContentSlot unwrap="p" />
    </UiBadge>
  </NuxtLink>
</template>

<script setup lang="ts">
const {
  type = 'default',
  variant = 'default',
} = defineProps<{
  type?: 'default' | 'info' | 'warning' | 'success' | 'danger';
  to?: string;
  target?: Target;
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
}>();

const typeTwClass = {
  default: '',
  info: `${variant !== 'outline' && 'bg-sky-500 hover:bg-sky-400'} ${variant === 'outline' && 'border-sky-500 text-sky-500'}`,
  warning: `${variant !== 'outline' && 'bg-amber-500 hover:bg-amber-400'} ${variant === 'outline' && 'border-amber-500 text-amber-500'}`,
  success: `${variant !== 'outline' && 'bg-green-500 hover:bg-green-400'} ${variant === 'outline' && 'border-green-500 text-green-500'}`,
  danger: `${variant !== 'outline' && 'bg-red-500 hover:bg-red-400'} ${variant === 'outline' && 'border-red-500 text-red-500'}`,
};
</script>
