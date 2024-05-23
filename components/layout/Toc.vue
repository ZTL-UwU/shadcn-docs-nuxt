<template>
  <div class="hidden xl:block">
    <UiScrollArea orientation="vertical" class="h-[calc(100vh-6.5rem)] z-30 md:block overflow-y-auto" type="hover">
      <p class="mb-2 text-base font-semibold">
        On This Page
      </p>
      <LayoutTocTree :links="toc.links" :level="0" />
    </UiScrollArea>
  </div>

  <div class="block xl:hidden mb-6">
    <UiCollapsible>
      <UiCollapsibleTrigger>
        <UiButton variant="outline">
          On This Page
        </UiButton>
      </UiCollapsibleTrigger>
      <UiCollapsibleContent class="text-sm mt-4 border-l pl-4">
        <LayoutTocTree :links="toc.links" :level="0" />
      </UiCollapsibleContent>
    </UiCollapsible>
  </div>
</template>

<script setup lang="ts">
const { toc } = useContent();
</script>
