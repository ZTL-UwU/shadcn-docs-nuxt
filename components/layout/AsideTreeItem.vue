<template>
  <li class="border-l-red">
    <div
      class="rounded-md transition-all underline-offset-4"
      :class="[level > 0 && 'pl-4']"
    >
      <UiCollapsible v-if="link.children" v-model:open="isOpen">
        <UiCollapsibleTrigger class="w-full text-left" :class="[level > 0 ? 'py-1.5 px-2' : 'pt-2']">
          <div class="w-full flex">
            {{ link.title }}
            <Icon
              :name="isOpen ? 'lucide:chevrons-down-up' : 'lucide:chevrons-up-down'"
              size="12"
              class="ml-auto self-center"
              :class="level === 0 && 'mr-2'"
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
        class="w-full block hover:underline text-muted-foreground"
        :class="[
          isActive && 'font-semibold text-primary',
          level > 0 ? 'py-1.5 px-2' : 'pt-2',
        ]"
      >
        {{ link.title }}
      </NuxtLink>
    </div>
  </li>
</template>

<script setup lang="ts">
import type { NavItem } from '@nuxt/content/types';

const props = defineProps<{
  link: NavItem;
  level: number;
}>();

const collapsed = useCollapsedMap();
const isOpen = ref(collapsed.value.get(props.link._path) || props.level < 1);
watch(isOpen, (v) => {
  collapsed.value.set(props.link._path, v);
});
const isActive = computed(() => props.link._path === useRoute().path);
</script>
