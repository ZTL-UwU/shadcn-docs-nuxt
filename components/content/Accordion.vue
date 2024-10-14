<template>
  <UiAccordion
    :type
    :collapsible
    :default-value="defaultValue"
    class="[&:not(:first-child)]:mt-5"
  >
    <slot />
  </UiAccordion>
</template>

<script setup lang="ts">
const { type = 'single' } = defineProps<{
  type?: 'single' | 'multiple';
  collapsible?: boolean;
  defaultValue: string | string[];
}>();
</script>
