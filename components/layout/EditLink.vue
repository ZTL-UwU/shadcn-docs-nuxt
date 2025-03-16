<template>
  <div v-if="enabledDocsFooter" class="w-fit">
    <NuxtLink
      :to="url"
      target="_blank"
      class="text-sm font-semibold text-primary"
    >
      <div class="flex items-center gap-2">
        <SmartIcon :name="icon" />
        <span>
          {{ text }}
        </span>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { page } = await useContent();
const { url, enabledDocsFooter, text, icon } = useEditLink(page.value);
</script>
