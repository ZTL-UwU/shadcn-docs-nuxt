<template>
  <UiCollapsible v-if="variant === 'card'" v-model:open="isOpen" class="space-y-2">
    <div class="flex items-center justify-between space-x-4">
      <h4 class="text-sm font-semibold">
        <slot :use="$slots.title" mdc-unwrap="p" />
        {{ title }}
      </h4>
      <UiCollapsibleTrigger as-child>
        <UiButton variant="ghost" size="sm" class="w-9 p-0">
          <Icon name="lucide:chevrons-up-down" />
          <span class="sr-only">Toggle</span>
        </UiButton>
      </UiCollapsibleTrigger>
    </div>

    <UiCollapsibleContent class="space-y-2">
      <div class="rounded-md border px-4 py-3 font-mono text-sm">
        <slot :use="$slots.content" mdc-unwrap="p" />
        <slot mdc-unwrap="p" />
      </div>
    </UiCollapsibleContent>
  </UiCollapsible>

  <UiCollapsible v-else-if="variant === 'simple'" v-model:open="isOpen">
    <UiCollapsibleTrigger class="w-full text-left">
      <div class="flex w-full gap-1">
        <SmartIcon
          name="lucide:chevron-down"
          class="self-center transition-all"
          :class="[!isOpen && '-rotate-90']"
        />
        <span>
          <slot :use="$slots.title" mdc-unwrap="p" />
          {{ title }}
        </span>
      </div>
    </UiCollapsibleTrigger>
    <UiCollapsibleContent>
      <div class="ml-2 border-l py-2 pl-4">
        <slot :use="$slots.content" mdc-unwrap="p" />
        <slot mdc-unwrap="p" />
      </div>
    </UiCollapsibleContent>
  </UiCollapsible>
</template>

<script setup lang="ts">
const {
  variant = 'simple',
  defaultOpen = false,
} = defineProps<{
  variant?: 'simple' | 'card';
  title?: string;
  defaultOpen?: boolean;
}>();
defineSlots();
const isOpen = ref(defaultOpen);
</script>
