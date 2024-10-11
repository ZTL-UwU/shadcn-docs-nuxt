<template>
  <div
    class="flex size-full flex-col justify-center bg-white p-16"
    style="background-size: 120px 120px; background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);"
  >
    <div class="mb-4 flex">
      <img :src="config.header.logo.light" height="65">
      <span class="ml-4 self-center text-4xl font-bold">
        {{ config.site.name }}
      </span>
    </div>
    <div class="relative">
      <h1 class="text-8xl font-bold">
        {{ title }}
      </h1>
      <p class="text-4xl leading-tight text-zinc-500">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const config = useConfig().value;
</script>
