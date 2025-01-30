<template>
  <AvatarImage v-bind="props" class="size-full object-cover" />
</template>

<script setup lang="ts">
import type { AvatarImageProps } from 'radix-vue';
import { AvatarImage } from 'radix-vue';

const props = defineProps<AvatarImageProps>();
</script>
