<template>
  <div class="mb-8">
    <ProseH1>
      {{ title }}
    </ProseH1>
    <p class="text-muted-foreground pt-1 text-lg">
      {{ description }}
    </p>

    <div v-if="badges" class="flex gap-2 pt-4">
      <NuxtLinkLocale
        v-for="(badge, i) in badges"
        :key="i"
        :to="badge.to"
        :target="badge.target"
      >
        <UiBadge :variant="badge.variant || 'secondary'" :type="badge.type" class="gap-1 rounded-md">
          {{ badge.value }}
          <SmartIcon v-if="badge.to || badge.icon" :size="12" :name="badge.icon || 'lucide:external-link'" />
        </UiBadge>
      </NuxtLinkLocale>
    </div>

    <div v-if="authors" class="-mx-4 flex divide-x pt-4">
      <NuxtLinkLocale v-for="author in authors" :key="author.name" :to="author.to" :target="author.target" class="flex items-center gap-2 px-4">
        <UiAvatar v-if="author.avatar" class="size-8">
          <UiAvatarImage :src="author.avatar" :alt="author.name" />
        </UiAvatar>
        <div>
          <div class="text-sm font-semibold">
            {{ author.name }}
          </div>
          <div v-if="author.username" class="text-muted-foreground text-xs font-medium leading-4">
            @{{ author.username }}
          </div>
        </div>
      </NuxtLinkLocale>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string;
  description?: string;
  badges?: {
    value?: string;
    icon?: string;
    to?: string;
    target?: Target;
    type?: 'default' | 'info' | 'warning' | 'success' | 'danger' | 'lime';
    variant?: 'default' | 'secondary' | 'destructive' | 'outline';
  }[];
  authors?: {
    name: string;
    username?: string;
    avatar?: string;
    to?: string;
    target?: Target;
  }[];
}>();
</script>
