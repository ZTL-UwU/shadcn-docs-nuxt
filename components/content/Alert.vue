<template>
  <UiAlert
    class="[&:not(:first-child)]:mt-5 transition-all"
    :class="[typeTwClass[type], to && 'cursor-pointer hover:bg-muted/50']"
    @click="alertClick"
  >
    <Icon v-if="icon && title" :name="icon" size="16" />
    <UiAlertTitle v-if="title" class="font-semibold">
      {{ title }}
    </UiAlertTitle>
    <UiAlertDescription>
      <div class="flex flex-row space-x-2">
        <Icon v-if="icon && !title" :name="icon" size="16" class="self-center mb-[2px] min-w-5" />
        <span :class="[to && 'pr-3']">
          <slot />
        </span>
      </div>
      <Icon v-if="to" name="lucide:arrow-up-right" class="absolute right-4 top-4" />
    </UiAlertDescription>
  </UiAlert>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  title?: string;
  icon?: string;
  type?: 'default' | 'info' | 'warning' | 'success' | 'danger';
  to?: string;
  target?: string;
}>(), {
  type: 'default',
});

const typeTwClass = {
  default: '',
  info: 'border-sky-600 text-sky-600 [&>svg]:text-sky-600',
  warning: 'border-amber-600 text-amber-600 [&>svg]:text-amber-600',
  success: 'border-green-600 text-green-600 [&>svg]:text-green-600',
  danger: 'border-red-600 text-red-600 [&>svg]:text-red-600',
};

function alertClick() {
  if (props.to) {
    if (props.target) {
      navigateTo(props.to, {
        external: true,
        open: { target: props.target },
      });
    } else {
      navigateTo(props.to, { external: true });
    }
  }
}
</script>
