<template>
  <UiScrollArea>
    <div class="border-b p-0.5 flex text-sm relative overflow-x-auto">
      <UiTabs v-if="tabs" :default-value="tabs[0].label">
        <UiTabsList>
          <UiTabsTrigger
            v-for="({ label, language }, i) in tabs"
            :key="`${i}${label}`"
            :value="label"
            class="flex"
            @click="updateTabs(i)"
          >
            <Icon v-if="getIcon(label, language)" :name="getIcon(label, language)!" class="self-center mr-1.5" />
            {{ label }}
          </UiTabsTrigger>
        </UiTabsList>
      </UiTabs>
      <CodeCopy v-show="selected.label !== 'Preview'" class="self-center ml-auto mr-3 pl-2" :code="selected.code" />
    </div>
    <ScrollBar orientation="horizontal" />
  </UiScrollArea>
  <slot name="footer" />
</template>

<script setup lang="ts">
import ScrollBar from '../ui/scroll-area/ScrollBar.vue';

const props = defineProps<{
  tabs: ({
    label: string;
    language: string;
    code: string;
  })[];
  activeTabIndex: number;
}>();

const emit = defineEmits(['update:activeTabIndex']);
const selected = computed(() => {
  return props.tabs[props.activeTabIndex];
});

function updateTabs(index: number) {
  emit('update:activeTabIndex', index);
}

const iconMap = new Map(Object.entries(useConfig().value.main.codeIcon));
function getIcon(label: string, language: string) {
  return iconMap.get(label?.toLowerCase()) || iconMap.get(language);
}
</script>
