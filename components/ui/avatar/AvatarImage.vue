<template>
  <AvatarImage v-bind="props" class="size-full object-cover">
    <slot />
  </AvatarImage>
</template>

<script setup lang="ts">
import type { AvatarImageProps } from 'reka-ui';
import { AvatarImage } from 'reka-ui';

const props = defineProps<AvatarImageProps>();
</script>
