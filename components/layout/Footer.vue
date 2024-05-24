<template>
  <footer class="text-muted-foreground py-6 md:px-8 md:py-0">
    <div class="container flex flex-col items-center justify-between gap-2 md:h-24 md:flex-row">
      <span class="text-sm">
        {{ footer.credits }}
      </span>
      <span class="flex-1" />
      <NuxtLink
        v-for="(link, i) in footer.links"
        :key="i"
        :to="link?.to"
        :target="link?.target"
      >
        <UiButton variant="ghost" :size="link?.icon && !link?.title ? 'icon' : 'default'" class="flex gap-2">
          <Icon v-if="link?.icon" :name="link.icon" size="20" />
          <span v-if="link?.title">{{ link.title }}</span>
        </UiButton>
      </NuxtLink>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { footer } = useConfig().value;
</script>
