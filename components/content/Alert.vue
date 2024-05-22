<template>
  <UiAlert class="[&:not(:first-child)]:mt-4">
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
defineProps({
  title: {
    type: String,
  },
  icon: {
    type: String,
  },
});
</script>
