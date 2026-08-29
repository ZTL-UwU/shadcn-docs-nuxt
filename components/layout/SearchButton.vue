<template>
  <template v-if="enable">
    <UiButton
      v-if="style === 'input'"
      variant="outline"
      class="text-muted-foreground hover:text-accent-foreground h-8 w-full self-center rounded-md pr-1.5 font-normal"
      :class="[inAside ? 'mb-4' : 'md:w-40 lg:w-60']"
      @click="open()"
    >
      <span class="mr-auto overflow-hidden">
        {{ $t(placeholder) }}
      </span>
      <Kbd class="ml-auto hidden md:block">
        <span class="text-xs">⌘</span>K
      </Kbd>
    </UiButton>
    <UiButton
      v-else
      variant="ghost"
      size="icon"
      @click="open()"
    >
      <Icon name="lucide:search" size="18" />
    </UiButton>
  </template>
</template>

<script setup lang="ts">
const { open } = useDocsSearch()
const { enable, inAside, style, placeholder } = useConfig().value.search
</script>
