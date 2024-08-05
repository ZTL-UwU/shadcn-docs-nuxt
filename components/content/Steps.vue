<template>
  <div
    class="[&>li]:step ml-4 border-l pl-8 [counter-reset:step] [&:not(:first-child)]:mt-6 [&:not(:last-child)]:mb-12"
    :class="levelClass[level]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  level?: '1' | '2' | '3' | '4' | '5' | '6';
}>(), {
  level: '3',
});

const levelClass = {
  1: '[&>h1]:step',
  2: '[&>h2]:step',
  3: '[&>h3]:step',
  4: '[&>h4]:step',
  5: '[&>h5]:step',
  6: '[&>h6]:step',
};
</script>
