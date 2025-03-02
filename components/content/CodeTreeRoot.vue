<template>
  <ul
    class="flex flex-col gap-1 py-1"
    :class="[
      level > 0 && 'mx-3.5 border-l px-2',
    ]"
  >
    <template v-for="link in tree" :key="link._id">
      <CodeTreeItem
        :id
        :default-value
        :relaxed
        :tree="link"
        :level="level"
      />
    </template>
  </ul>
</template>

<script setup lang="ts">
const { relaxed = false } = defineProps<{
  tree: FileTreeItem[];
  level: number;
  relaxed?: boolean;
  id: string;
  defaultValue: string;
}>();
</script>
