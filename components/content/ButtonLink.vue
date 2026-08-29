<template>
  <NuxtLinkLocale :to :target>
    <UiButton :variant :size>
      <SmartIcon v-if="leftIcon" :name="leftIcon" class="mr-1" />
      <slot mdc-unwrap="p" />
      <SmartIcon v-if="rightIcon" :name="rightIcon" class="ml-1" />
    </UiButton>
  </NuxtLinkLocale>
</template>

<script setup lang="ts">
import type { ButtonVariants } from '../ui/button'

defineProps<{
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  leftIcon?: string
  rightIcon?: string
  to: string
  target?: Target
}>()
</script>
