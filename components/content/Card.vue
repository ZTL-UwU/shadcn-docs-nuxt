<template>
  <UseTemplate>
    <UiCard
      class="relative h-full overflow-hidden transition-all"
      :class="[
        to && 'hover:bg-muted',
        inStack && 'mb-0 rounded-none border-none shadow-none',
      ]"
    >
      <NuxtImg
        v-if="img"
        :src="img"
        class="w-full"
      />
      <UiCardHeader v-if="icon || title || $slots.title || description || $slots.description" :class="{ 'flex-row items-center gap-5': horizontal }">
        <SmartIcon v-if="icon" :name="icon" :size="iconSize" :class="{ 'mb-2': !horizontal }" />
        <div class="flex flex-col gap-1.5">
          <UiCardTitle v-if="$slots.title">
            <slot name="title" mdc-unwrap="p" />
          </UiCardTitle>
          <UiCardTitle v-else-if="title">
            {{ title }}
          </UiCardTitle>
          <UiCardDescription v-if="$slots.description">
            <slot name="description" mdc-unwrap="p" />
          </UiCardDescription>
          <UiCardDescription v-else-if="description">
            {{ description }}
          </UiCardDescription>
        </div>
      </UiCardHeader>
      <UiCardContent v-if="content">
        {{ content }}
      </UiCardContent>
      <UiCardContent v-else-if="$slots.content">
        <slot :use="$slots.content" mdc-unwrap="p" />
      </UiCardContent>
      <UiCardContent v-else-if="$slots.default">
        <slot mdc-unwrap="p" />
      </UiCardContent>

      <UiCardFooter v-if="$slots.footer">
        <slot :use="$slots.footer" mdc-unwrap="p" />
      </UiCardFooter>
      <UiCardFooter v-else-if="footer">
        {{ footer }}
      </UiCardFooter>
      <SmartIcon v-if="to && showLinkIcon" name="lucide:arrow-up-right" class="absolute right-4 top-4" />
    </UiCard>
  </UseTemplate>

  <div class="group-has-[div]:mt-0 [&:not(:first-child)]:mt-5">
    <NuxtLink v-if="to" :to :target>
      <CardInner />
    </NuxtLink>
    <CardInner v-else />
  </div>
</template>

<script setup lang="ts">
const {
  showLinkIcon = true,
  horizontal = false,
  iconSize = 24,
} = defineProps<{
  title?: string;
  description?: string;
  footer?: string;
  content?: string;
  to?: string;
  target?: Target;
  icon?: string;
  iconSize?: number;
  inStack?: boolean;
  img?: string;
  showLinkIcon?: boolean;
  horizontal?: boolean;
}>();

defineSlots();

const [UseTemplate, CardInner] = createReusableTemplate();
</script>
