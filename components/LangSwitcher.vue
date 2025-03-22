<template>
  <UiNavigationMenu>
    <UiNavigationMenuList>
      <UiNavigationMenuItem class="relative">
        <UiNavigationMenuTrigger class="bg-transparent font-semibold uppercase">
          {{ locale }}
        </UiNavigationMenuTrigger>
        <UiNavigationMenuContent>
          <ul class="w-auto p-2">
            <li v-for="l in locales" :key="l.code">
              <NuxtLink
                :to="switchLocalePath(l.code)"
                class="hover:bg-muted mb-1 flex w-full gap-2 rounded-md px-3 py-2 transition-all"
              >
                {{ l.name }}
              </NuxtLink>
            </li>
          </ul>
        </UiNavigationMenuContent>
      </UiNavigationMenuItem>
    </UiNavigationMenuList>
  </UiNavigationMenu>
</template>

<script setup lang="ts">
const { locale, locales, switchLocalePath } = useI18nDocs();
</script>
