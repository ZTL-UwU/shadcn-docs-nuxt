<template>
  <UiAccordionItem :value="value ?? autoValue">
    <UiAccordionTrigger>
      <slot :use="$slots.title" mdc-unwrap="p" />
      {{ title }}
    </UiAccordionTrigger>
    <UiAccordionContent>
      <slot :use="$slots.content" mdc-unwrap="p" />
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
