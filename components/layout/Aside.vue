<template>
  <UiScrollArea orientation="vertical" class="relative h-full overflow-hidden py-6 pr-6 text-sm md:pr-4" type="hover">
    <LayoutHeaderNavMobile v-if="isMobile" class="mb-5 border-b pb-2" />
    <LayoutSearchButton v-if="config.search.inAside" />
    <ul v-if="config.aside.useLevel" class="flex flex-col gap-1 border-b pb-4">
      <li v-for="link in navigation" :key="link.id">
        <NuxtLinkLocale
          :to="link.redirect ?? link.path"
          class="flex h-8 items-center gap-2 rounded-md p-2 text-sm text-foreground/80 hover:bg-muted hover:text-primary"
          :class="[
            path.startsWith(link.path) && 'bg-muted !text-primary',
          ]"
        >
          <SmartIcon
            v-if="link.icon"
            :name="link.icon"
            class="self-center"
            :size="16"
          />
          {{ link.title }}

          <span v-for="(badge, i) in link.navBadges" :key="i">
            <Badge :variant="badge.variant" :type="badge.type" :size="badge.size ?? 'sm'">
              {{ badge.value }}
            </Badge>
          </span>
        </NuxtLinkLocale>
      </li>
    </ul>
    <LayoutAsideTree
      :links="tree"
      :level="0"
      :class="[config.aside.useLevel ? 'pt-4' : 'pt-1']"
    />
  </UiScrollArea>
</template>

<script setup lang="ts">
defineProps<{ isMobile: boolean }>();


const { navigation } = await useNavigation();
const { page } = await useContent();
const config = useConfig();

const tree = computed(() => {
  return navigation.value?.find(n => page.value?.path.startsWith(n.path))?.children ?? [];
});

const path = computed(() => page.value?.path ?? '');
</script>
