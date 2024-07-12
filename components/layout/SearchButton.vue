<template>
  <template v-if="enable">
    <UiButton
      v-if="style === 'input'"
      variant="outline"
      class="pr-1.5 h-8 self-center w-full rounded-md font-normal text-muted-foreground hover:text-accent-foreground"
      :class="[inAside ? 'mb-4' : 'md:w-40 lg:w-64']"
      @click="isOpen = true"
    >
      <span class="overflow-hidden mr-auto">
        Search...
      </span>
      <Kbd class="hidden md:block ml-auto">
        <span class="text-xs">⌘</span>K
      </Kbd>
    </UiButton>
    <UiButton
      v-else
      variant="ghost"
      size="icon"
      @click="isOpen = true"
    >
      <Icon name="lucide:search" size="16" />
    </UiButton>
  </template>

  <LayoutSearchDialog v-model:open="isOpen" />
</template>

<script setup lang="ts">
const isOpen = ref(false);
const { enable, inAside, style } = useConfig().value.search;
</script>
