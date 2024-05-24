<template>
  <template v-if="toc?.links.length">
    <UiScrollArea
      v-if="!isSmall"
      orientation="vertical"
      class="hidden lg:block h-[calc(100vh-6.5rem)] z-30 md:block overflow-y-auto"
      type="hover"
    >
      <p class="mb-2 text-base font-semibold">
        {{ title }}
      </p>
      <LayoutTocTree :links="toc.links" :level="0" />
    </UiScrollArea>
    <UiCollapsible
      v-else
      v-model:open="isOpen"
      class="block lg:hidden text-sm px-4 py-3 w-full border-b"
    >
      <UiCollapsibleTrigger class="w-full flex text-left font-semibold">
        On This Page
        <Icon
          name="lucide:chevron-right"
          class="ml-auto self-center transition-all"
          :class="[isOpen && 'rotate-90']"
        />
      </UiCollapsibleTrigger>
      <UiCollapsibleContent>
        <LayoutTocTree :links="toc.links" :level="0" class="text-sm pl-4 border-l my-3" />
      </UiCollapsibleContent>
    </UiCollapsible>
  </template>
</template>

<script setup lang="ts">
defineProps<{ isSmall: boolean }>();

const { toc } = useContent();
const { title } = useConfig().value.toc;
const isOpen = ref(false);
</script>
