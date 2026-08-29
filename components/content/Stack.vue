<template>
  <UiCard class="divide-y overflow-hidden [&:not(:first-child)]:mt-5">
    <div
      v-for="(slot, i) in $slots.default?.() ?? []"
      :key="i"
    >
      <component :is="slot" />
    </div>
  </UiCard>
</template>

<script setup lang="ts">
import { provideNesting } from '../../utils/nesting'

provideNesting('stack')
</script>
