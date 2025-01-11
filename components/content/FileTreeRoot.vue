<template>
  <ul
    class="flex flex-col font-mono"
    :class="[level > 0 && 'mx-3.5 border-l px-2']"
  >
    <template v-for="link in tree" :key="link._id">
      <FileTreeItem
        :show-icon
        :show-arrow
        :tree="link"
        :level="level"
      />
    </template>
  </ul>
</template>

<script setup lang="ts">
defineProps<{
  tree: FileTreeItem[];
  level: number;
  showArrow: boolean;
  showIcon: boolean;
}>();
</script>
