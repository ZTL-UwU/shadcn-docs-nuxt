<template>
  <div
    v-if="enable && page.editLink !== false && page._file && url !== ''"
    class="mb-6 w-fit"
  >
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
const { page } = useContent();
const { enable, pattern, text, icon } = useConfig().value.main.editLink;

const url = computed(
  () => pattern.replace(/:path/g, page.value._file ?? ''),
);
</script>
