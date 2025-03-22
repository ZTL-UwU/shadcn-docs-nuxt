<template>
  <UiNavigationMenu>
    <UiNavigationMenuList>
      <UiNavigationMenuItem v-for="(item, i) in nav" :key="i" class="relative">
        <template v-if="item.links">
          <UiNavigationMenuTrigger class="bg-transparent font-semibold">
            {{ $t(item.title) }}
          </UiNavigationMenuTrigger>
          <UiNavigationMenuContent>
            <ul class="w-[250px] p-2">
              <li v-for="link in item.links" :key="link.title">
                <NuxtLink
                  :to="localePath(link.to)"
                  :target="link.target"
                  class="hover:bg-muted mb-1 flex w-full gap-2 rounded-md px-3 py-2 transition-all"
                >
                  <SmartIcon v-if="link?.icon" :name="link.icon" :size="16" class="mt-1 min-w-5" />

                  <div>
                    <div class="font-semibold">
                      {{ $t(link.title) }}
                    </div>
                    <div class="text-muted-foreground text-sm">
                      {{ $t(link.description) }}
                    </div>
                  </div>
                </NuxtLink>
              </li>
            </ul>
          </UiNavigationMenuContent>
        </template>
        <NuxtLink v-else :to="localePath(item.to)" :target="item.target">
          <Icon v-if="item.showLinkIcon ?? true" name="lucide:arrow-up-right" class="text-muted-foreground absolute right-2 top-2" size="13" />
          <div class="bg-transparent font-semibold" :class="[navigationMenuTriggerStyle(), (item.showLinkIcon ?? true) && 'pr-6']">
            {{ $t(item.title) }}
          </div>
        </NuxtLink>
      </UiNavigationMenuItem>
    </UiNavigationMenuList>
  </UiNavigationMenu>
</template>

<script setup lang="ts">
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';

const { nav } = useConfig().value.header;
const { localePath } = useI18nDocs();
</script>
