<template>
  <h5 :id class="scroll-m-20 text-lg font-semibold tracking-tight [&:not(:first-child)]:mt-6">
    <NuxtLink
      v-if="id && generate"
      :href="`#${id}`"
    >
      <slot />
    </NuxtLink>
    <slot v-else />
  </h5>
</template>

<script setup lang="ts">
const { id } = defineProps<{ id?: string }>();

const { headings } = useRuntimeConfig().public.mdc;
const generate = computed(() => id && headings?.anchorLinks?.h4);
</script>
