<template>
  <UiAccordionItem :value="value ?? autoValue">
    <UiAccordionTrigger v-if="$slots.title">
      <slot name="title" mdc-unwrap="p" />
    </UiAccordionTrigger>
    <UiAccordionTrigger v-else>
      {{ title }}
    </UiAccordionTrigger>
    <UiAccordionContent v-if="$slots.content">
      <slot name="content" mdc-unwrap="p" />
    </UiAccordionContent>
    <UiAccordionContent v-else>
      {{ content }}
    </UiAccordionContent>
  </UiAccordionItem>
</template>

<script setup lang="ts">
import { useId } from 'radix-vue';

defineProps<{
  value?: string;
  title?: string;
  content?: string;
}>();

defineSlots();

const autoValue = useId();
</script>
