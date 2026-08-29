<template>
  <SmartIcon
    v-if="link.icon"
    :name="link.icon"
    class="min-w-4"
  />

  <span :class="{ 'truncate text-nowrap': link.navTruncate !== false }">
    {{ link.title }}
  </span>

  <span v-for="(badge, i) in link.navBadges" :key="i">
    <Badge :variant="badge.variant" :type="badge.type" :size="badge.size ?? 'sm'">
      {{ badge.value }}
    </Badge>
  </span>
</template>

<script setup lang="ts">
import type { DocsNavItem } from '../../utils/navigation'

const { link } = defineProps<{
  link: DocsNavItem
}>()
</script>
