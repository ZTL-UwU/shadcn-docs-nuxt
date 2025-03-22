<template>
  <CollapsibleContent v-bind="props" class="data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden transition-all">
    <slot />
  </CollapsibleContent>
</template>

<script setup lang="ts">
import type { CollapsibleContentProps } from 'reka-ui';
import { CollapsibleContent } from 'reka-ui';

const props = defineProps<CollapsibleContentProps>();
</script>
