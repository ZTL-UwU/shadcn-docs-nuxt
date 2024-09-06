<template>
  <UiAccordionItem :value="value ?? autoValue">
    <UiAccordionTrigger>
      <ContentSlot :use="$slots.title" unwrap="p" />
      {{ title }}
    </UiAccordionTrigger>
    <UiAccordionContent>
      <ContentSlot :use="$slots.content" unwrap="p" />
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

const autoValue = useId();
</script>
