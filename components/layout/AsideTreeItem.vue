<template>
  <li
    class="rounded-md underline-offset-4 transition-all [&:not(:first-child)]:pt-3"
    :class="[level > 0 && 'pl-4']"
  >
    <UiCollapsible v-if="link.children" v-model:open="isOpen">
      <UiCollapsibleTrigger class="w-full text-left">
        <div class="flex w-full gap-1">
          <SmartIcon
            v-if="link.icon"
            :name="link.icon"
            class="mr-1 self-center"
            :size="15"
          />
          <span class="truncate text-nowrap">
            {{ link.title }}
          </span>
          <SmartIcon
            name="lucide:chevron-down"
            class="ml-auto self-center transition-all"
            :class="[!isOpen && '-rotate-90']"
          />
        </div>
      </UiCollapsibleTrigger>
      <UiCollapsibleContent>
        <LayoutAsideTree :links="link.children" :level="level + 1" />
      </UiCollapsibleContent>
    </UiCollapsible>
    <NuxtLink
      v-else
      :to="link._path"
      class="flex w-full gap-1 text-muted-foreground hover:underline"
      :class="[isActive && 'font-medium text-primary']"
    >
      <SmartIcon
        v-if="link.icon"
        :name="link.icon"
        class="mr-1 self-center"
        :size="15"
      />
      <span class="truncate text-nowrap">
        {{ link.title }}
      </span>
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
import type { NavItem } from '@nuxt/content';

const props = defineProps<{
  link: NavItem;
  level: number;
}>();

const { collapse } = useConfig().value.aside;

const collapsed = useCollapsedMap();
const isOpen = ref(collapsed.value.get(props.link._path) || (props.level < 1 && !collapse));
watch(isOpen, (v) => {
  collapsed.value.set(props.link._path, v);
});
const isActive = computed(() => props.link._path === useRoute().path);
</script>
