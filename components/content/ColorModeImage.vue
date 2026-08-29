<template>
  <div class="[&:not(:first-child)]:mt-6">
    <div class="dark:hidden">
      <ProseImg
        :src="srcLight"
        :alt="alt"
        :width="width"
        :height="height"
        :lifted="lifted"
        :zoom="zoom"
      />
    </div>
    <div class="hidden dark:block">
      <ProseImg
        :src="srcDark"
        :alt="alt"
        :width="width"
        :height="height"
        :lifted="lifted"
        :zoom="zoom"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  srcLight?: string;
  srcDark?: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
  lifted?: boolean;
  zoom?: boolean;
}>();
</script>
