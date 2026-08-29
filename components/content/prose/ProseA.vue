<template>
  <NuxtLinkLocale
    :to="href"
    :target="target"
    class="font-semibold underline underline-offset-4"
  >
    <slot />
  </NuxtLinkLocale>
</template>

<script setup lang="ts">
const {
  href = '',
} = defineProps<{
  href?: string;
  target?: Target;
}>();
</script>
