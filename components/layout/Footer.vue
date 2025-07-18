<template>
  <footer class="text-muted-foreground py-6 md:px-8 md:py-0">
    <div class="container flex flex-col items-center justify-between gap-2 md:h-24 md:flex-row">
      <MDC :value="$t(footer.credits)" class="text-sm" />
      <span class="flex-1" />
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
    </div>
  </footer>
</template>

<script setup lang="ts">
const { footer } = useConfig().value;
</script>
