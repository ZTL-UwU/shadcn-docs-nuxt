<template>
  <div v-if="page && !page.meta.fullpage && route.path !== '/'" class="min-h-screen border-b">
    <div
      class="flex-1 items-start px-4 md:grid md:gap-6 md:px-8 lg:gap-10"
      :class="[
        config.main.padded && 'container',
        (page.meta.aside ?? true) && 'md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[240px_minmax(0,1fr)]',
      ]"
    >
      <aside v-if="page.meta.aside ?? true" class="fixed top-[102px] z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto md:sticky md:top-[60px] md:block">
        <LayoutAside :is-mobile="false" />
      </aside>
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const config = useConfig();
const { page } = await useContent();
const { navigation } = await useNavigation();
</script>

