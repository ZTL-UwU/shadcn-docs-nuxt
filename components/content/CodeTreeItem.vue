<template>
  <li>
    <!-- Folder -->
    <div v-if="tree.children">
      <button
        class="flex h-8 w-full cursor-pointer select-none items-center gap-2 rounded-md p-2 text-left text-sm font-medium text-foreground/80 hover:bg-muted hover:text-primary"
        @click="isOpen = !isOpen"
      >
        <SmartIcon
          name="lucide:chevron-down"
          class="transition-transform"
          :class="[!isOpen && '-rotate-90']"
        />

        <SmartIcon
          v-if="tree.icon"
          :name="tree.icon"
          class="min-w-4"
        />

        <span>{{ tree.title }}</span>
      </button>
      <div v-show="isOpen">
        <CodeTreeRoot :id :relaxed :tree="tree.children" :level="level + 1" :default-value />
      </div>
    </div>
    <!-- File -->
    <button
      v-else
      class="flex h-8 w-full items-center gap-2 rounded-md p-2 text-sm font-medium text-foreground/80 hover:bg-muted hover:text-primary"
      :class="[
        state === tree.path && 'bg-muted',
      ]"
      @click="state = (tree.path || defaultValue)"
    >
      <SmartIcon
        v-if="tree.icon"
        :name="tree.icon"
        class="min-w-4"
      />

      <span>{{ tree.title }}</span>
    </button>
  </li>
</template>

<script setup lang="ts">
const { tree, level, id, defaultValue } = defineProps<{
  tree: FileTreeItem;
  level: number;
  relaxed: boolean;
  id: string;
  defaultValue: string;
}>();
const isOpen = ref(true);

const state = useCodeTreeState(id, defaultValue);
</script>
