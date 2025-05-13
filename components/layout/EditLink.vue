<template>
  <div v-if="enabledDocsFooter" class="w-fit">
    <NuxtLinkLocale
      :to="url"
      target="_blank"
      class="text-primary text-sm font-semibold"
    >
      <div class="flex items-center gap-2">
        <SmartIcon :name="icon" />
        <span>
          {{ $t(text) }}
        </span>
      </div>
    </NuxtLinkLocale>
  </div>
</template>

<script setup lang="ts">
const { url, enabledDocsFooter, text, icon } = useEditLink();
</script>
