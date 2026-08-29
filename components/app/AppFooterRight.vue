<template>
  <div class="flex flex-wrap gap-2 justify-center md:justify-end">
    <NuxtLinkLocale
      v-for="(link, i) in footer.links"
      :key="i"
      :to="link?.to"
      :target="link?.target"
    >
      <UiButton variant="ghost" :size="link?.icon && !link?.title ? 'icon' : 'default'" class="flex gap-2">
        <SmartIcon v-if="link?.icon" :name="link.icon" :size="20" />
        <span v-if="link?.title">{{ $t(link.title) }}</span>
      </UiButton>
    </NuxtLinkLocale>
  </div>
</template>

<script setup lang="ts">
const { footer } = useConfig().value;
</script>
