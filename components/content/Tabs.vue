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
        <SmartIcon
          v-if="icon(slot?.props)"
          :name="icon(slot?.props)!"
          class="mr-1.5 self-center"
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

  <UiTabs
    v-else-if="variant === 'line'"
    class="relative mr-auto w-full [&:not(:first-child)]:mt-5"
    :default-value="label(($slots.default?.() ?? [])[0]?.props)"
  >
    <div class="flex items-center justify-between pb-3">
      <UiTabsList class="h-9 w-full justify-start rounded-none border-b bg-transparent p-0">
        <UiTabsTrigger
          v-for="(slot, i) in $slots.default?.() ?? []"
          :key="`${i}${label(slot.props)}`"
          :value="label(slot.props)"
          class="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
        >
          <SmartIcon
            v-if="icon(slot?.props)"
            :name="icon(slot?.props)!"
            class="mr-1.5 self-center"
          />
          {{ label(slot.props) }}
        </UiTabsTrigger>
      </UiTabsList>
    </div>

    <UiTabsContent
      v-for="(slot, i) in $slots.default?.() ?? []"
      :key="`${i}${label(slot.props)}`"
      :value="label(slot.props)"
      class="relative space-y-10"
    >
      <component :is="slot" />
    </UiTabsContent>
  </UiTabs>

  <UiCard
    v-else-if="variant === 'card'"
    class="[&:not(:first-child)]:mt-5"
    :class="[inStack && 'mb-0 rounded-none border-none shadow-none']"
  >
    <UiScrollArea>
      <div class="relative flex overflow-x-auto border-b p-0.5 text-sm">
        <div class="flex p-1">
          <div
            v-for="(slot, i) in ($slots.default?.() ?? [])"
            :key="`${i}${label(slot.props)}`"
            :value="label(slot.props)"
            class="flex cursor-pointer rounded-md px-3 py-1.5 text-muted-foreground transition-all duration-75"
            :class="[activeTabIndex === i && 'bg-muted text-primary']"
            @mousedown.left="activeTabIndex = i"
          >
            <SmartIcon
              v-if="icon(slot?.props)"
              :name="icon(slot?.props)!"
              class="mr-1.5 self-center"
            />
            {{ label(slot.props) }}
          </div>
        </div>
        <CodeCopy
          v-if="$slots.default?.()[activeTabIndex]?.props?.code"
          class="ml-auto mr-3 self-center pl-2"
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

  <div v-else-if="variant === 'combobox'">
    <UiPopover v-model:open="open">
      <UiPopoverTrigger as-child>
        <UiButton
          variant="outline"
          role="combobox"
          :aria-expanded="open"
          class="w-[200px] justify-between"
        >
          <div class="flex items-center">
            <SmartIcon
              v-if="icon(($slots.default?.() ?? [])[activeTabIndex].props)"
              :name="icon(($slots.default?.() ?? [])[activeTabIndex].props)!"
              class="mr-1.5"
            />
            <span>
              {{ label(($slots.default?.() ?? [])[activeTabIndex].props) }}
            </span>
          </div>
          <Icon name="lucide:chevrons-up-down" />
        </UiButton>
      </UiPopoverTrigger>
      <UiPopoverContent class="w-[200px] p-0">
        <UiCommand>
          <UiCommandInput v-if="!disableSearch" class="h-9" placeholder="Search Tab..." />
          <UiCommandEmpty>No tab found.</UiCommandEmpty>
          <UiCommandList>
            <UiCommandGroup>
              <UiCommandItem
                v-for="(slot, i) in $slots.default?.() ?? []"
                :key="`${i}${label(slot.props)}`"
                :value="label(slot.props)"
                @select="() => {
                  activeTabIndex = i;
                  open = false;
                }"
              >
                <SmartIcon
                  v-if="icon(slot?.props)"
                  :name="icon(slot?.props)!"
                  class="mr-1.5 self-center"
                />
                {{ label(slot.props) }}
                <Icon
                  name="lucide:check"
                  :class="cn(
                    'ml-auto h-4 w-4',
                    activeTabIndex === i ? 'opacity-100' : 'opacity-0',
                  )"
                />
              </UiCommandItem>
            </UiCommandGroup>
          </UiCommandList>
        </UiCommand>
      </UiPopoverContent>
    </UiPopover>

    <div
      v-for="(slot, i) in $slots.default?.() ?? []"
      v-show="activeTabIndex === i"
      :key="`${i}${label(slot.props)}`"
      :value="label(slot.props)"
      class="mt-4"
    >
      <component :is="slot" :in-group="true" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils';
import ScrollBar from '../ui/scroll-area/ScrollBar.vue';

const {
  variant = 'separate',
  padded = true,
  inStack = false,
  disableSearch = false,
} = defineProps<{
  variant?: 'separate' | 'card' | 'line' | 'combobox';
  padded?: boolean;
  inStack?: boolean;
  disableSearch?: boolean;
}>();

const activeTabIndex = ref(0);

const iconMap = new Map(Object.entries(useConfig().value.main.codeIcon));
function icon(props: any) {
  return props?.icon || iconMap.get(props?.filename?.toLowerCase()) || iconMap.get(props?.language);
}

function label(props: any) {
  return props?.label || props?.filename;
}

const open = ref(false);
</script>
