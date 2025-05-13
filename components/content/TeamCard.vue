<template>
  <UiCard>
    <UiCardHeader>
      <div class="flex flex-col gap-3" :class="{ 'text-center': center }">
        <UiAvatar :class="{ 'mx-auto': center }">
          <UiAvatarImage :src="avatar" :alt="name" />
        </UiAvatar>
        <div>
          <div class="text-lg font-bold">
            {{ name }}
          </div>
          <div class="text-muted-foreground text-sm">
            {{ title }}
          </div>
        </div>
        <div class="text-secondary-foreground flex gap-3" :class="{ 'mx-auto': center }">
          <NuxtLinkLocale v-for="link in links" :key="link.to" :to="link.to" :target="link.target">
            <SmartIcon :name="link.icon" />
          </NuxtLinkLocale>
        </div>
      </div>
    </UiCardHeader>
  </UiCard>
</template>

<script setup lang="ts">
const { center = true } = defineProps<{
  avatar: string;
  name: string;
  title?: string;
  links?: ({
    icon: string;
    to: string;
    target?: Target;
  })[];
  center?: boolean;
}>();
</script>
