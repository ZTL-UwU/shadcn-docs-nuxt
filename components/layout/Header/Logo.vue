<template>
  <div>
    <NuxtLink v-if="logo.light && logo.dark" to="/" class="flex">
      <NuxtImg :src="logo.light" class="dark:hidden h-7" />
      <NuxtImg :src="logo.dark" class="hidden dark:block h-7" />
      <span v-if="showTitle && title" class="self-center font-bold ml-3">
        {{ title }}
      </span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { logo, title, showTitle } = useConfig().value.header;
</script>
