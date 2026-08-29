<template>
  <li>
    <div v-if="link.children">
      <template v-if="folderStyle === 'group'">
        <div
          class="text-foreground/70 mt-2 flex items-center gap-2 rounded-md px-2 text-xs font-semibold outline-none"
          :class="[link.navTruncate !== false && 'h-8']"
        >
          <LayoutAsideTreeItemButton :link />
        </div>
        <LayoutAsideTree :links="link.children" :level="level" />
      </template>
      <template v-else>
        <button
          class="text-foreground/80 hover:bg-muted hover:text-primary flex w-full cursor-pointer items-center gap-2 rounded-md p-2 text-left text-sm"
          :class="[link.navTruncate !== false && 'h-8']"
          @click="isOpen = !isOpen"
        >
          <SmartIcon
            v-if="folderStyle === 'tree'"
            name="lucide:chevron-down"
            class="transition-transform"
            :class="[!isOpen && '-rotate-90']"
          />
          <LayoutAsideTreeItemButton :link />
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
      :to="link.path"
      class="text-foreground/80 hover:bg-muted hover:text-primary flex items-center gap-2 rounded-md p-2 text-sm"
      :class="[
        isActive && 'bg-muted !text-primary font-medium',
        link.navTruncate !== false && 'h-8',
      ]"
    >
      <LayoutAsideTreeItemButton :link />
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
import type { DocsNavItem } from '../../utils/navigation'

const { link, level } = defineProps<{
  link: DocsNavItem
  level: number
}>()

const { collapse, collapseLevel, folderStyle: defaultFolderStyle } = useConfig().value.aside

const collapsed = useCollapsedMap()
const route = useRoute()

function defaultOpen() {
  if (route.path === link.path || route.path.startsWith(`${link.path}/`))
    return true
  if (link.collapse !== undefined)
    return !link.collapse

  return level < collapseLevel && !collapse
}

const isOpen = ref(collapsed.value.get(link.path) || defaultOpen())

watch(isOpen, (v) => {
  collapsed.value.set(link.path, v)
})

function normalizePath(p: string) {
  const out = p.replace(/\/+$/, '')
  return out === '' ? '/' : out
}
const isActive = computed(() => normalizePath(link.path) === normalizePath(route.path))

const folderStyle = computed(() => {
  const sidebar = link.sidebar
  if (sidebar && typeof sidebar === 'object') return sidebar.style ?? defaultFolderStyle
  return defaultFolderStyle
})
</script>
