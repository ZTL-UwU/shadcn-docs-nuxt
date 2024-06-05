<template>
  <UiTabs
    v-if="variant === 'separate'"
    class="[&:not(:first-child)]:mt-5"
    :default-value="label(($slots.default?.() ?? [])[0]?.props)"
  >
    <UiTabsList>
      <UiTabsTrigger
        v-for="(slot, i) in $slots.default?.() ?? []"
        :key="`${i}${label(slot.props)}`"
        :value="label(slot.props)"
      >
        <Icon
          v-if="icon(slot?.props)"
          :name="icon(slot?.props)!"
          class="self-center mr-1.5"
        />
        {{ label(slot.props) }}
      </UiTabsTrigger>
    </UiTabsList>

    <UiTabsContent
      v-for="(slot, i) in $slots.default?.() ?? []"
      :key="`${i}${label(slot.props)}`"
      :value="label(slot.props)"
    >
      <component :is="slot" />
    </UiTabsContent>
  </UiTabs>

  <UiCard v-else-if="variant === 'card'" class="[&:not(:first-child)]:mt-5">
    <UiScrollArea>
      <div class="border-b p-0.5 flex text-sm relative overflow-x-auto">
        <div class="flex p-1">
          <div
            v-for="(slot, i) in ($slots.default?.() ?? [])"
            :key="`${i}${label(slot.props)}`"
            :value="label(slot.props)"
            class="flex px-3 py-1.5 rounded-md text-muted-foreground transition-all duration-75 cursor-pointer"
            :class="[activeTabIndex === i && 'bg-muted text-primary']"
            @mousedown.left="activeTabIndex = i"
          >
            <Icon
              v-if="icon(slot?.props)"
              :name="icon(slot?.props)!"
              class="self-center mr-1.5"
            />
            {{ label(slot.props) }}
          </div>
        </div>
        <CodeCopy
          v-if="$slots.default?.()[activeTabIndex]?.props?.code"
          class="self-center ml-auto mr-3 pl-2"
          :code="$slots.default?.()[activeTabIndex]?.props?.code"
        />
      </div>
      <ScrollBar orientation="horizontal" />
    </UiScrollArea>

    <div
      v-for="(slot, i) in $slots.default?.() ?? []"
      v-show="activeTabIndex === i"
      :key="`${i}${label(slot.props)}`"
      :value="label(slot.props)"
      class="mt-0"
      :class="[padded && ($slots.default?.()[activeTabIndex]?.type as any).tag !== 'pre' && 'p-3']"
    >
      <component :is="slot" :in-group="true" />
    </div>
  </UiCard>
</template>

<script setup lang="ts">
import ScrollBar from '../ui/scroll-area/ScrollBar.vue';

withDefaults(defineProps<{
  variant?: 'separate' | 'card';
  padded?: boolean;
}>(), {
  variant: 'separate',
  padded: true,
});

const activeTabIndex = ref(0);

const iconMap = new Map(Object.entries(useConfig().value.main.codeIcon));
function icon(props: any) {
  return props?.icon || iconMap.get(props?.filename?.toLowerCase()) || iconMap.get(props?.language);
}

function label(props: any) {
  return props?.label || props?.filename;
}
</script>
