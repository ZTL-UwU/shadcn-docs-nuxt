<template>
  <li class="border-l-red">
    <div
      class="rounded-md transition-all underline-offset-4"
      :class="[level > 0 && 'pl-4']"
    >
      <UiCollapsible v-if="link.children" v-model:open="isOpen">
        <UiCollapsibleTrigger class="w-full text-left" :class="[level > 0 ? 'py-1.5' : 'pt-2']">
          <div class="w-full flex gap-1">
            <Icon
              v-if="link.icon"
              :name="link.icon"
              class="self-center"
            />
            {{ link.title }}
            <Icon
              :name="isOpen ? 'lucide:chevrons-down-up' : 'lucide:chevrons-up-down'"
              size="12"
              class="ml-auto self-center"
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
        :class="[
          isActive && 'font-semibold text-primary',
          level > 0 ? 'py-1.5' : 'pt-2',
        ]"
      >
        <Icon
          v-if="link.icon"
          :name="link.icon"
          class="self-center"
        />
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
const isOpen = ref(props.level < 1 || collapsed.value.get(props.link._path) || true);
watch(isOpen, (v) => {
  collapsed.value.set(props.link._path, v);
});
const isActive = computed(() => props.link._path === useRoute().path);
</script>
