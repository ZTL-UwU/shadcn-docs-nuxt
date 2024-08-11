<template>
  <UiAccordion
    :type="type"
    :collapsible="collapsible"
    :default-value="defaultValue"
    class="[&:not(:first-child)]:mt-5"
  >
    <slot />
  </UiAccordion>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  type?: 'single' | 'multiple';
  collapsible?: boolean;
  defaultValue: string | string[];
}>(), {
  type: 'single',
});
</script>
