<template>
  <div class="group-has-[div]:mt-0 [&:not(:first-child)]:mt-5">
    <NuxtLink :to :target>
      <UiCard
        class="relative h-full transition-all"
        :class="[
          to && 'hover:bg-muted',
          inStack && 'mb-0 rounded-none border-none shadow-none',
        ]"
      >
        <UiCardHeader v-if="icon || title || $slots.title || description || $slots.description">
          <SmartIcon v-if="icon" class="mb-2" :name="icon" :size="24" />
          <UiCardTitle v-if="title || $slots.title">
            <ContentSlot :use="$slots.title" unwrap="p" />
            {{ title }}
          </UiCardTitle>
          <UiCardDescription v-if="description || $slots.description">
            <ContentSlot :use="$slots.description" unwrap="p" />
            {{ description }}
          </UiCardDescription>
        </UiCardHeader>
        <UiCardContent v-if="content || $slots.content || $slots.default">
          <ContentSlot :use="$slots.content" unwrap="p" />
          <ContentSlot unwrap="p" />
        </UiCardContent>
        <UiCardFooter v-if="footer || $slots.footer">
          <ContentSlot :use="$slots.footer" unwrap="p" />
          {{ footer }}
        </UiCardFooter>
        <SmartIcon v-if="to" name="lucide:arrow-up-right" class="absolute right-4 top-4" />
      </UiCard>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string;
  description?: string;
  footer?: string;
  content?: string;
  to?: string;
  target?: Target;
  icon?: string;
  inStack?: boolean;
}>();
</script>
