<template>
  <UiCard class="divide-y overflow-hidden [&:not(:first-child)]:mt-5">
    <slot />
  </UiCard>
</template>

<script setup lang="ts">
import { provideNesting } from '../../utils/nesting'

provideNesting('stack')
</script>
