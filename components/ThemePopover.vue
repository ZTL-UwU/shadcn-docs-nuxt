<template>
  <UiPopover>
    <UiPopoverTrigger as-child>
      <UiButton variant="ghost" size="icon">
        <Icon name="i-lucide-paintbrush" size="16" />
      </UiButton>
    </UiPopoverTrigger>
    <UiPopoverContent class="w-[23rem]" align="end">
      <ThemeCustomizer />
    </UiPopoverContent>
  </UiPopover>
</template>
