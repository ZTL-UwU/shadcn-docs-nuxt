<template>
  <h1 :id="id" class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
    <NuxtLink
      v-if="generate"
      :href="`#${id}`"
    >
      <slot />
    </NuxtLink>
    <slot v-else />
  </h1>
</template>

<script setup lang="ts">
const props = defineProps<{ id?: string }>();

const { headings } = useRuntimeConfig().public.mdc;
const generate = computed(() => props.id && headings?.anchorLinks?.h1);
</script>
