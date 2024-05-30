<template>
  <LayoutHeader />
  <div class="container px-4 md:px-8 py-6">
    <ContentRenderer
      :key="page._id"
      :value="page"
    />
  </div>
  <LayoutFooter />
</template>

<script setup lang="ts">
const { page } = useContent();
const config = useConfig();

useSeoMeta({
  title: `${page.value?.title ?? '404'} - ${config.value.site.name}`,
  ogTitle: page.value?.title,
  description: page.value?.description,
});
</script>
