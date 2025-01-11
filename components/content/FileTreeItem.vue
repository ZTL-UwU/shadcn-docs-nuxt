<template>
  <li>
    <!-- Folder -->
    <div v-if="tree.children">
      <a
        class="flex w-full cursor-pointer items-center gap-2 rounded-md px-2 py-1 text-left text-sm font-medium text-foreground/80 hover:bg-muted hover:text-primary"
        :class="[tree.highlighted && 'underline underline-offset-4']"
        @click="isOpen = !isOpen"
      >
        <SmartIcon
          v-if="showArrow"
          name="lucide:chevron-down"
          class="transition-transform"
          :class="[!isOpen && '-rotate-90']"
        />

        <SmartIcon
          v-if="showIcon && tree.icon"
          :name="tree.icon"
          class="min-w-4"
        />

        <span :class="[tree.highlighted && 'font-bold text-primary']">
          {{ tree.title }}
        </span>
      </a>
      <div v-show="isOpen">
        <FileTreeRoot :show-icon :show-arrow :tree="tree.children" :level="level + 1" />
      </div>
    </div>
    <!-- File -->
    <div
      v-else
      class="flex w-full items-center gap-2 rounded-md px-2 py-1 text-sm text-foreground/80 hover:bg-muted hover:text-primary"
      :class="[tree.highlighted && 'underline underline-offset-4']"
    >
      <SmartIcon
        v-if="showIcon && tree.icon"
        :name="tree.icon"
        class="min-w-4"
      />

      <span :class="[tree.highlighted && 'font-bold text-primary']">
        {{ tree.title }}
      </span>
    </div>
  </li>
</template>

<script setup lang="ts">
const { tree, level } = defineProps<{
  showArrow: boolean;
  tree: FileTreeItem;
  showIcon: boolean;
  level: number;
}>();
const isOpen = ref(true);
</script>
