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
import { useId } from 'reka-ui';

defineProps<{
  value?: string;
  title?: string;
  content?: string;
}>();

defineSlots();

const autoValue = useId();
</script>
