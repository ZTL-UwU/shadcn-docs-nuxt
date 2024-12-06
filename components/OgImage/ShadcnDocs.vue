<template>
  <div
    class="flex size-full flex-col justify-center p-16"
    :class="[colorMode === 'light' ? 'bg-white' : 'bg-zinc-950']"
    :style="`background-size: 120px 120px; background-image: linear-gradient(to right, ${colorMode === 'light' ? '#e5e7eb' : '#27272a'} 1px, transparent 1px), linear-gradient(to bottom, ${colorMode === 'light' ? '#e5e7eb' : '#27272a'} 1px, transparent 1px);`"
  >
    <div class="mb-4 flex">
      <img v-if="colorMode === 'light'" :src="logo.light" height="65">
      <img v-else :src="logo.dark" height="65">
      <span
        v-if="showTitle && siteTitle"
        class="ml-4 self-center text-4xl font-bold"
        :class="[colorMode === 'light' ? 'text-zinc-900' : 'text-zinc-100']"
      >
        {{ siteTitle }}
      </span>
    </div>
    <div class="relative">
      <h1
        class="text-8xl font-bold"
        :class="[colorMode === 'light' ? 'text-zinc-900' : 'text-zinc-100']"
      >
        {{ title }}
      </h1>
      <p
        class="text-4xl leading-tight"
        :class="[colorMode === 'light' ? 'text-zinc-500' : 'text-zinc-400']"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  colorMode?: 'dark' | 'light';
  title: string;
  description: string;
}>();

const { logo, title: siteTitle, showTitle } = useConfig().value.header;

const colorMode = computed(() => {
  return props.colorMode || useConfig().value.site.ogImageColor || 'light';
});
</script>
