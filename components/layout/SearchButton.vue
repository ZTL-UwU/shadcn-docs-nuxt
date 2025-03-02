<template>
  <template v-if="enable">
    <UiButton
      v-if="style === 'input'"
      variant="outline"
      class="h-8 w-full self-center rounded-md pr-1.5 font-normal text-muted-foreground hover:text-accent-foreground"
      :class="[inAside ? 'mb-4' : 'md:w-40 lg:w-64']"
      @click="isOpen = true"
    >
      <span class="mr-auto overflow-hidden">
        {{ placeholder }}
      </span>
      <Kbd class="ml-auto hidden md:block">
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
const isOpen = ref<boolean | undefined>(false);
const { enable, inAside, style, placeholder } = useConfig().value.search;
</script>
