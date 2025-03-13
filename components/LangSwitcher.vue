<template>
  <UiNavigationMenu>
    <UiNavigationMenuList>
      <UiNavigationMenuItem class="relative">
        <UiNavigationMenuTrigger class="bg-transparent font-semibold uppercase">
          {{ locale }}
        </UiNavigationMenuTrigger>
        <UiNavigationMenuContent>
          <ul class="w-auto p-2">
            <li v-for="locale in locales" :key="locale.code">
              <NuxtLink :to="switchLocalePath(locale.code)"
                        class="mb-1 flex w-full gap-2 rounded-md px-3 py-2 transition-all hover:bg-muted">
                {{ locale.name }}
              </NuxtLink>
            </li>
          </ul>
        </UiNavigationMenuContent>
      </UiNavigationMenuItem>
    </UiNavigationMenuList>
  </UiNavigationMenu>
</template>

<script setup lang="ts">
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>
