<template>
  <div class="[&:not(:first-child)]:mt-4 [&:not(:last-child)]:pb-4">
    <div class="mb-2">
      <div class="flex items-center gap-2">
        <span class="text-md text-primary font-bold">
          {{ name }}
        </span>
        <span v-if="required" class="text-muted-foreground font-mono text-sm">
          {{ $t(fieldRequiredText) }}
        </span>
        <span class="text-muted-foreground ml-auto font-mono text-sm">
          {{ type }}
        </span>
      </div>
      <div v-if="defaultValue" class="text-muted-foreground">
        <ProseCodeInline>
          {{ defaultValue }}
        </ProseCodeInline>
      </div>
    </div>
    <span class="text-muted-foreground text-sm">
      <ContentSlot unwrap="p" />
      {{ description }}
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
  type?: string;
  required?: boolean;
  description?: string;
  defaultValue?: string;
}>();

const { fieldRequiredText } = useConfig().value.main;
</script>
