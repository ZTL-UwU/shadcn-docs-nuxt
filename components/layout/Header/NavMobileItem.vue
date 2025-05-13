<template>
  <template v-if="item.links">
    <UiCollapsible v-model:open="isOpen">
      <UiCollapsibleTrigger class="w-full p-2 text-left">
        <div class="flex w-full gap-1">
          {{ $t(item.title) }}
          <Icon
            :name="isOpen ? 'lucide:chevrons-down-up' : 'lucide:chevrons-up-down'"
            size="12"
            class="ml-auto self-center"
          />
        </div>
      </UiCollapsibleTrigger>
      <UiCollapsibleContent>
        <ul class="pl-2">
          <li v-for="link in item.links" :key="link.title">
            <NuxtLinkLocale
              :to="localePath(link.to)"
              :target="link.to"
              class="hover:bg-muted mb-1 flex w-full gap-2 rounded-md px-3 py-2 transition-all"
            >
              <SmartIcon v-if="link.icon" :name="link.icon" :size="16" class="mt-1 min-w-5" />

              <div>
                <div class="font-semibold">
                  {{ $t(link.title) }}
                </div>
                <div class="text-muted-foreground text-sm">
                  {{ $t(link.description) }}
                </div>
              </div>
            </NuxtLinkLocale>
          </li>
        </ul>
      </UiCollapsibleContent>
    </UiCollapsible>
  </template>
  <NuxtLinkLocale v-else :to="localePath(item.to)" :target="item.target" class="flex w-full p-2">
    {{ $t(item.title) }}
    <Icon v-if="item.showLinkIcon ?? true" name="lucide:arrow-up-right" class="text-muted-foreground ml-1" size="12" />
  </NuxtLinkLocale>
</template>

<script setup lang="ts">
const props = defineProps<{
  item: any;
  index: number;
}>();
const { localePath } = useI18nDocs();

const collapsed = useCollapsedMap();
const isOpen = ref(collapsed.value.get(`mobile-header-nav${props.index}`) || false);
watch(isOpen, (v) => {
  collapsed.value.set(`mobile-header-nav${props.index}`, v);
});
</script>
