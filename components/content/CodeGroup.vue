<template>
  <UiCard class="[&:not(:first-child)]:mt-5">
    <UiScrollArea>
      <div class="border-b p-0.5 flex text-sm relative overflow-x-auto">
        <div class="flex p-1">
          <div
            v-for="(slot, i) in ($slots.default?.() ?? [])"
            :key="`${i}${slot?.props?.filename}`"
            :value="slot?.props?.filename"
            class="flex px-3 py-1.5 rounded-md text-muted-foreground transition-all duration-75 cursor-pointer"
            :class="[activeTabIndex === i && 'bg-muted text-primary']"
            @mousedown.left="activeTabIndex = i"
          >
            <Icon
              v-if="getIcon(slot?.props?.filename, slot?.props?.language)"
              :name="getIcon(slot?.props?.filename, slot?.props?.language)!"
              class="self-center mr-1.5"
            />
            {{ slot?.props?.filename }}
          </div>
        </div>
        <CodeCopy
          v-if="selected?.props?.code && selected?.type !== 'preview'"
          class="self-center ml-auto mr-3 pl-2"
          :code="selected.props.code"
        />
      </div>
      <ScrollBar orientation="horizontal" />
    </UiScrollArea>

    <div
      v-for="(slot, i) in $slots.default?.() ?? []"
      v-show="activeTabIndex === i"
      :key="`${i}${slot?.props?.filename}`"
      :value="slot?.props?.filename"
      class="mt-0"
    >
      <component :is="slot" :in-group="true" />
    </div>
  </UiCard>
</template>

<script setup lang="ts">
const activeTabIndex = ref(0);
const selected = computed(() => {
  return useSlots().default?.()[activeTabIndex.value];
});

const iconMap = new Map(Object.entries(useConfig().value.main.codeIcon));
function getIcon(filename: string, language: string) {
  return iconMap.get(filename?.toLowerCase()) || iconMap.get(language);
}
</script>
