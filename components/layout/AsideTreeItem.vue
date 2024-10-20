<template>
  <li>
    <UiCollapsible v-if="link.children" v-model:open="isOpen">
      <UiCollapsibleTrigger class="w-full text-left">
        <div class="flex h-8 items-center gap-2 rounded-md p-2 text-sm text-primary/80 hover:bg-muted hover:text-primary">
          <SmartIcon
            v-if="link.icon"
            :name="link.icon"
            :size="15"
          />
          <span class="truncate text-nowrap">
            {{ link.title }}
          </span>
          <span v-for="(badge, i) in link.navBadges" :key="i">
            <Badge :variant="badge.variant" :type="badge.type" :size="badge.size ?? 'sm'">
              {{ badge.value }}
            </Badge>
          </span>
          <SmartIcon
            name="lucide:chevron-down"
            class="ml-auto transition-transform"
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
      class="flex h-8 items-center gap-2 rounded-md p-2 text-sm text-primary/80 hover:bg-muted hover:text-primary"
      :class="[isActive && 'bg-muted !text-primary']"
    >
      <SmartIcon
        v-if="link.icon"
        :name="link.icon"
        :size="15"
      />
      <span class="truncate text-nowrap">
        {{ link.title }}
      </span>
      <span v-for="(badge, i) in link.navBadges" :key="i">
        <Badge :variant="badge.variant" :type="badge.type" :size="badge.size ?? 'sm'">
          {{ badge.value }}
        </Badge>
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
