<template>
  <render />
</template>

<script setup lang="ts">
import type { SetupContext } from 'vue'
import { provideNesting } from '../../utils/nesting'
import Tabs from './Tabs.vue'

const { sync } = defineProps<{
  sync?: string
}>()

provideNesting('group')

const _slots: SetupContext['slots'] = useSlots()
function render() {
  const slots = _slots?.default?.() || []
  return h(
    Tabs,
    {
      variant: 'card',
      sync,
    },
    () => slots,
  )
}
</script>
