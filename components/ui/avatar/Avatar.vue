<template>
  <AvatarRoot :class="cn(avatarVariant({ size, shape }), props.class)">
    <slot />
  </AvatarRoot>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import type { AvatarVariants } from '.';
import { cn } from '@/lib/utils';
import { AvatarRoot } from 'reka-ui';
import { avatarVariant } from '.';

const props = withDefaults(defineProps<{
  class?: HTMLAttributes['class'];
  size?: AvatarVariants['size'];
  shape?: AvatarVariants['shape'];
}>(), {
  size: 'sm',
  shape: 'circle',
});
</script>
