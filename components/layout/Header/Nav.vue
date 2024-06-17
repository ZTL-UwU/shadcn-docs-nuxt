<template>
  <UiNavigationMenu>
    <UiNavigationMenuList>
      <UiNavigationMenuItem v-for="(item, i) in nav" :key="i">
        <template v-if="item.links">
          <UiNavigationMenuTrigger class="font-semibold bg-transparent">
            {{ item.title }}
          </UiNavigationMenuTrigger>
          <UiNavigationMenuContent>
            <ul class="w-[250px] p-2">
              <li v-for="link in item.links" :key="link.title">
                <NuxtLink
                  :to="link.to"
                  :target="link.target"
                  class="px-3 py-2 mb-1 hover:bg-muted rounded-md w-full block gap-2 transition-all"
                >
                  <div class="font-semibold">
                    {{ link.title }}
                  </div>
                  <div class="text-muted-foreground text-sm">
                    {{ link.description }}
                  </div>
                </NuxtLink>
              </li>
            </ul>
          </UiNavigationMenuContent>
        </template>
        <NuxtLink v-else :to="item.to" :target="item.target">
          <Icon name="lucide:arrow-up-right" class="absolute right-2 top-2 text-muted-foreground" size="13" />
          <div class="pr-6 font-semibold bg-transparent" :class="navigationMenuTriggerStyle()">
            {{ item.title }}
          </div>
        </NuxtLink>
      </UiNavigationMenuItem>
    </UiNavigationMenuList>
  </UiNavigationMenu>
</template>

<script setup lang="ts">
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';

const { nav } = useConfig().value.header;
</script>
