<template>
  <li>
    <div v-if="link.children">
      <button
        class="flex h-8 w-full cursor-pointer items-center gap-2 rounded-md p-2 text-left text-sm font-medium text-foreground/80 hover:bg-muted hover:text-primary"
        @click="isOpen = !isOpen"
      >
        <SmartIcon
          v-if="link.sidebar?.leftArrow"
          name="lucide:chevron-down"
          class="transition-transform"
          :class="[!isOpen && '-rotate-90']"
        />

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
          v-if="!link.sidebar?.leftArrow"
          name="lucide:chevron-down"
          class="ml-auto transition-transform"
          :class="[!isOpen && '-rotate-90']"
        />
      </button>
      <div v-show="isOpen">
        <LayoutAsideTree :links="link.children" :level="level + 1" />
      </div>
    </div>
    <NuxtLink
      v-else
      :to="link._path"
      class="flex h-8 items-center gap-2 rounded-md p-2 text-sm text-foreground/80 hover:bg-muted hover:text-primary"
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
