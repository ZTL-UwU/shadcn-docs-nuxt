<template>
  <h2 :id="id" class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors [&:not(:first-child)]:mt-10">
    <NuxtLink
      v-if="id && generate"
      :href="`#${id}`"
    >
      <slot />
    </NuxtLink>
    <slot v-else />
  </h2>
</template>

<script setup lang="ts">
const props = defineProps<{ id?: string }>();

const { headings } = useRuntimeConfig().public.mdc;
const generate = computed(() => props.id && headings?.anchorLinks?.h2);
</script>
