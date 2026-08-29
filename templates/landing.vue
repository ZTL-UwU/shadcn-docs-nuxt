<script setup lang="ts">
const { page } = await useLandingPage()
const config = useConfig()

const title = page.value.seo?.title || page.value.title
const description = page.value.seo?.description || page.value.description

useSeo({
  title,
  description,
  type: 'website',
})
</script>

<template>
  <div
    class="px-4 py-6 md:px-8"
    :class="[config.main.padded && 'container']"
  >
    <ContentRenderer
      v-if="page"
      :value="page"
      :data="config.data"
    />
  </div>
</template>
