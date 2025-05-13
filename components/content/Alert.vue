<template>
  <UiAlert
    class="transition-all [&:not(:first-child)]:mt-5"
    :class="[
      typeTwClass[type],
      to && 'hover:bg-muted/50 cursor-pointer',
      inStack && 'm-0 rounded-none border-none',
    ]"
    @click="alertClick"
  >
    <SmartIcon v-if="icon && title" :name="icon" :size="16" />
    <UiAlertTitle v-if="title" class="font-semibold">
      {{ title }}
    </UiAlertTitle>
    <UiAlertDescription>
      <div class="flex flex-row gap-2">
        <SmartIcon v-if="icon && !title" :name="icon" :size="16" class="mb-[2px] min-w-5 self-center" />
        <span class="w-full" :class="[to && 'pr-3']">
          <slot />
        </span>
      </div>
      <SmartIcon v-if="to && showLinkIcon" name="lucide:arrow-up-right" class="absolute right-4 top-4" />
    </UiAlertDescription>
  </UiAlert>
</template>

<script setup lang="ts">
const {
  to,
  target,
  type = 'default',
  external = undefined,
  inStack = false,
  showLinkIcon = true,
} = defineProps<{
  title?: string;
  icon?: string;
  type?: 'default' | 'info' | 'warning' | 'success' | 'danger' | 'secondary';
  to?: string;
  target?: Target;
  external?: boolean;
  inStack?: boolean;
  showLinkIcon?: boolean;
}>();

const typeTwClass = {
  default: '',
  info: 'border-blue-500 bg-blue-50 [&_.inline-code]:bg-blue-100 dark:border-blue-900 dark:bg-blue-950 dark:[&_.inline-code]:bg-blue-900 text-blue-600',
  note: 'border-sky-500 bg-sky-50 [&_.inline-code]:bg-sky-100 dark:border-sky-900 dark:bg-sky-950 dark:[&_.inline-code]:bg-sky-900 text-sky-600',
  example: 'border-violet-500 bg-violet-50 [&_.inline-code]:bg-violet-100 dark:border-violet-900 dark:bg-violet-950 dark:[&_.inline-code]:bg-violet-900 text-violet-600',
  warning: 'border-amber-500 bg-amber-50 [&_.inline-code]:bg-amber-100 dark:border-amber-900 dark:bg-amber-950 dark:[&_.inline-code]:bg-amber-900 text-amber-600',
  success: 'border-green-500 bg-green-50 [&_.inline-code]:bg-green-100 dark:border-green-900 dark:bg-green-950 dark:[&_.inline-code]:bg-green-900 text-green-600',
  danger: 'border-red-500 bg-red-50 [&_.inline-code]:bg-red-100 dark:border-red-900 dark:bg-red-950 dark:[&_.inline-code]:bg-red-900 text-red-600',
  secondary: 'bg-muted/50',
};

async function alertClick() {
  const localePath = useLocalePath();

  if (to) {
    const localeTo = localePath(to);
    if (target) {
      await navigateTo(localeTo, {
        external: external ?? to.startsWith('http'),
        open: { target },
      });
    } else {
      await navigateTo(localeTo, {
        external: external ?? to.startsWith('http'),
      });
    }
  }
}
</script>
