<template>
  <UiAlert class="[&:not(:first-child)]:mt-4" :class="[typeTwClass[type]]">
    <Icon v-if="icon && title" :name="icon" />
    <UiAlertTitle v-if="title">
      {{ title }}
    </UiAlertTitle>
    <UiAlertDescription>
      <div class="flex flex-row space-x-2">
        <Icon v-if="icon && !title" :name="icon" class="self-center mb-[2px]" />
        <span>
          <slot />
        </span>
      </div>
    </UiAlertDescription>
  </UiAlert>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  icon: string;
  type: 'info' | 'warning' | 'success' | 'danger';
}>();

const typeTwClass = {
  info: '',
  warning: 'border-amber-600 text-amber-600 [&>svg]:text-amber-600',
  success: 'border-green-600 text-green-600 [&>svg]:text-green-600',
  danger: 'border-red-600 text-red-600 [&>svg]:text-red-600',
};
</script>
