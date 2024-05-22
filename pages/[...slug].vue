<template>
  <main>
    <LayoutBreadcrumb />
    <ContentRenderer
      v-if="page?.body"
      :value="page"
      class="docs-content"
    />
  </main>
</template>

<script setup lang="ts">
const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne());
</script>
