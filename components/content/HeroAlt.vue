<template>
  <section class="mx-auto flex flex-col items-start gap-2 px-4 py-8 md:py-12 md:pb-8 lg:py-12 lg:pb-10">
    <NuxtLink
      v-if="announcement"
      :to="announcement.to"
      :target="announcement.target"
      class="inline-flex items-center px-0.5 text-sm font-medium"
    >
      <template v-if="announcement.icon">
        <Icon :name="announcement.icon" size="16" />
        <UiSeparator class="mx-2 h-4" orientation="vertical" />
      </template>
      <span class="underline-offset-4 hover:underline">{{ announcement.title }}</span>
      <Icon name="lucide:arrow-right" class="ml-1 h-4 w-4" />
    </NuxtLink>

    <h1 class="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </h1>
    <p class="max-w-2xl text-lg font-light text-foreground">
      <ContentSlot :use="$slots.description" unwrap="p" />
    </p>

    <div class="flex w-full items-center justify-start gap-2 py-2">
      <NuxtLink
        v-for="(action, i) in actions"
        :key="i"
        :to="action.to"
        :target="action.target"
      >
        <UiButton :variant="action.variant" size="sm">
          <Icon v-if="action.leftIcon" :name="action.leftIcon" class="mr-1" />
          {{ action.name }}
          <Icon v-if="action.rightIcon" :name="action.rightIcon" class="ml-1" />
        </UiButton>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  announcement?: {
    to?: string;
    target?: string;
    icon?: string;
    title: string;
  };
  actions: [{
    name: string;
    leftIcon?: string;
    rightIcon?: string;
    variant?: 'default' | 'link' | 'destructive' | 'outline' | 'secondary' | 'ghost';
    to: string;
    target?: string;
  }];
}>();
</script>
