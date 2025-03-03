<template>
  <UiCard
    class="overflow-clip lg:grid lg:grid-cols-3 [&:not(:first-child)]:mt-5"
    :class="[inStack && 'mb-0 rounded-none border-none shadow-none']"
  >
    <div class="border-b lg:border-b-0 lg:border-r">
      <div v-if="title" class="flex items-center border-b p-3 text-sm">
        {{ title }}
      </div>

      <UiScrollArea :style="[`height: ${title ? height : height + 45}px`]">
        <CodeTreeRoot
          :id
          :default-value="defaultValue"
          :tree
          :level="0"
          class="!p-2"
        />
      </UiScrollArea>
    </div>
    <div class="col-span-2">
      <div
        v-for="(slot, i) in $slots.default?.() ?? []"
        v-show="slot.props?.filename === open"
        :key="i"
      >
        <component :is="slot" :in-tree="true" :height />
      </div>
    </div>
  </UiCard>
</template>

<script setup lang="ts">
const { defaultValue } = defineProps<{
  tree: FileTreeItem[];
  defaultValue: string;
  height: number;
  title?: string;
  inStack?: boolean;
}>();

const id = useId();
const open = useCodeTreeState(id, defaultValue);
</script>
