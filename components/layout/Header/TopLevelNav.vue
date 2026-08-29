<template>
  <UiTabs
    :model-value="activePath"
    class="relative mr-auto w-full"
  >
    <div class="flex items-center justify-between overflow-x-auto">
      <UiTabsList
        class="h-9 w-full rounded-none bg-transparent p-0 justify-start"
        :class="[justifyContent]"
      >
        <UiTabsTrigger
          v-for="link in navigation"
          :key="link.path"
          :value="link.path"
          class="text-muted-foreground data-[state=active]:border-b-primary data-[state=active]:text-foreground relative h-9 rounded-none border-b-2 border-b-transparent !bg-transparent px-4 pb-3 pt-2 font-semibold shadow-none transition-none data-[state=active]:shadow-none cursor-pointer"
          @click="navigateTo(localePath(String(link.redirect ?? link.path)))"
        >
          <SmartIcon
            v-if="link.icon"
            :name="String(link.icon)"
            class="mr-1.5 self-center -mb-[3px]"
          />

          {{ link.title }}

          <span v-for="(badge, i) in link.navBadges" :key="i">
            <Badge :variant="badge.variant" :type="badge.type" :size="badge.size ?? 'sm'">
              {{ badge.value }}
            </Badge>
          </span>
        </UiTabsTrigger>
      </UiTabsList>
    </div>
  </UiTabs>
</template>

<script setup lang="ts">
import type { DocsNavItem } from '../../../utils/navigation';

const navigation = inject<Ref<DocsNavItem[]>>('navigation', ref([]));
const { localePath } = useDocusI18n();
const config = useConfig();

const route = useRoute();
const path = computed(() => route.path);

const activePath = computed(() => {
  const match = navigation.value.find(link => path.value.startsWith(link.path));
  return match?.path;
});

const justifyContent = computed(() => {
  if (config.value.aside.headerLevelNavAlign === 'center') {
    return 'md:justify-center';
  }
  if (config.value.aside.headerLevelNavAlign === 'end') {
    return 'md:justify-end';
  }
  return 'md:justify-start';
});
</script>
