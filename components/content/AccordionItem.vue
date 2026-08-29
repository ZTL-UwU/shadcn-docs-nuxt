<template>
  <UiAccordionItem :value="value ?? autoValue">
    <UiAccordionTrigger>
      <slot name="title" mdc-unwrap="p" />
      {{ title }}
    </UiAccordionTrigger>
    <UiAccordionContent>
      <slot name="content" mdc-unwrap="p" />
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
