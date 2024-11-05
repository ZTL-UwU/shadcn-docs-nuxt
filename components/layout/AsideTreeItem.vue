<template>
  <li>
    <div v-if="link.children">
      <template v-if="folderStyle === 'group'">
        <div class="mt-2 flex h-8 items-center gap-2 rounded-md px-2 text-xs font-semibold text-foreground/70 outline-none">
          <SmartIcon
            v-if="link.icon"
            :name="link.icon"
          />
          {{ link.title }}
          <span v-for="(badge, i) in link.navBadges" :key="i">
            <Badge :variant="badge.variant" :type="badge.type" :size="badge.size ?? 'sm'">
              {{ badge.value }}
            </Badge>
          </span>
        </div>
        <LayoutAsideTree :links="link.children" :level="level" />
      </template>
      <template v-else>
        <button
          class="flex h-8 w-full cursor-pointer items-center gap-2 rounded-md p-2 text-left text-sm font-medium text-foreground/80 hover:bg-muted hover:text-primary"
          @click="isOpen = !isOpen"
        >
          <SmartIcon
            v-if="folderStyle === 'tree'"
            name="lucide:chevron-down"
            class="transition-transform"
            :class="[!isOpen && '-rotate-90']"
          />

          <SmartIcon
            v-if="link.icon"
            :name="link.icon"
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
            v-if="folderStyle === 'default'"
            name="lucide:chevron-down"
            class="ml-auto transition-transform"
            :class="[!isOpen && '-rotate-90']"
          />
        </button>
        <div v-show="isOpen">
          <LayoutAsideTree :links="link.children" :level="level + 1" />
        </div>
      </template>
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

const { link, level } = defineProps<{
  link: NavItem;
  level: number;
}>();

const { collapse, collapseLevel, folderStyle: defaultFolderStyle } = useConfig().value.aside;

const collapsed = useCollapsedMap();
const isOpen = ref(collapsed.value.get(link._path) || defaultOpen());

function defaultOpen() {
  if (link.collapse !== undefined)
    return !link.collapse;

  return level < collapseLevel && !collapse;
}

watch(isOpen, (v) => {
  collapsed.value.set(link._path, v);
});
const isActive = computed(() => link._path === useRoute().path);

const folderStyle = computed(() => link.sidebar?.style ?? defaultFolderStyle);
</script>
