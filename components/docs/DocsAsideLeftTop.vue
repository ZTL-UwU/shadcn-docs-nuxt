<template>
  <div
    v-if="subNavigationMode === 'aside'"
    class="mb-2"
  >
    <ul class="flex flex-col gap-1 border-b pb-4">
      <li v-for="link in sections" :key="link.to">
        <NuxtLink
          :to="localizedTo(link.to)"
          class="text-foreground/80 hover:bg-muted hover:text-primary flex h-8 items-center gap-2 rounded-md p-2 text-sm"
          :class="[link.active && 'bg-muted !text-primary font-medium']"
        >
          <SmartIcon
            v-if="link.icon"
            :name="link.icon"
            class="self-center"
            :size="16"
          />
          {{ link.label }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const { subNavigationMode, sections } = useSubNavigation()
const { locale, localePath, isEnabled } = useDocusI18n()

function localizedTo(to: string) {
  if (!isEnabled.value) return to
  if (to.startsWith(`/${locale.value}`)) return to
  return localePath(to)
}
</script>
