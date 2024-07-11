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
      <LayoutTocTree :links="toc.links" :level="0" :class="[links.length && 'pb-5 border-b']" />
      <div v-if="links" class="pt-5 text-muted-foreground">
        <NuxtLink
          v-for="(link, i) in links"
          :key="i"
          :to="link.to"
          :target="link.target"
          class="w-full flex hover:underline underline-offset-4 gap-1 [&:not(:first-child)]:pt-3"
        >
          <Icon
            v-if="link.icon"
            :name="link.icon"
            class="self-center mr-1"
            size="16"
          />
          {{ link.title }}
          <Icon name="lucide:arrow-up-right" class="ml-auto self-center text-muted-foreground" size="13" />
        </NuxtLink>
      </div>
    </UiScrollArea>
    <UiCollapsible
      v-else
      v-model:open="isOpen"
      class="block lg:hidden text-sm w-full"
      :class="{ 'border-b': border }"
    >
      <UiCollapsibleTrigger class="px-4 py-3 w-full flex text-left font-medium">
        {{ title }}
        <Icon
          name="lucide:chevron-right"
          class="ml-auto self-center transition-all"
          :class="[isOpen && 'rotate-90']"
        />
      </UiCollapsibleTrigger>
      <UiCollapsibleContent>
        <LayoutTocTree :links="toc.links" :level="0" class="text-sm pl-4 border-l mb-3 mx-4" />
      </UiCollapsibleContent>
    </UiCollapsible>
  </template>
</template>

<script setup lang="ts">
defineProps<{ isSmall: boolean }>();

const { toc } = useContent();
const { title, links } = useConfig().value.toc;
const { border } = useConfig().value.header;
const isOpen = ref(false);
</script>
