<template>
  <!-- Iconify Icons -->
  <Icon v-if="checkIcon(name)" :name="name" :size="size" />
  <!-- Emojis -->
  <span
    v-else-if="/(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g.test(name)"
    :style="`font-size: ${size}px;`"
  >{{ name }}</span>
  <!-- Link -->
  <NuxtImg
    v-else
    :src="name"
    :style="`width: ${size}px; height: ${size}px;`"
    class="inline"
  />
</template>

<script setup lang="ts">
import { stringToIcon, validateIconName } from '@iconify/utils';

withDefaults(defineProps<{
  name: string;
  size?: number;
}>(), {
  size: 16,
});

function checkIcon(name: string): boolean {
  return validateIconName(stringToIcon(name));
}
</script>
