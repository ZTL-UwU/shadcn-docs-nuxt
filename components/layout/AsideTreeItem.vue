<template>
  <li
    class="rounded-md transition-all underline-offset-4 [&:not(:first-child)]:pt-3"
    :class="[level > 0 && 'pl-4']"
  >
    <UiCollapsible v-if="link.children" v-model:open="isOpen">
      <UiCollapsibleTrigger class="w-full text-left">
        <div class="w-full flex gap-1">
          <Icon
            v-if="link.icon"
            :name="link.icon"
            class="self-center mr-1"
            size="15"
          />
          {{ link.title }}
          <Icon
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
      class="w-full flex hover:underline text-muted-foreground gap-1"
      :class="[isActive && 'font-medium text-primary']"
    >
      <Icon
        v-if="link.icon"
        :name="link.icon"
        class="self-center mr-1"
        size="15"
      />
      {{ link.title }}
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
