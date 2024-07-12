<template>
  <UiDialog v-model:open="open">
    <UiDialogContent class="p-0">
      <VisuallyHidden as-child>
        <UiDialogTitle />
      </VisuallyHidden>
      <VisuallyHidden as-child>
        <UiDialogDescription aria-describedby="undefined" />
      </VisuallyHidden>
      <UiCommand v-model:search-term="input" class="h-svh sm:h-[350px]">
        <UiCommandInput
          placeholder="Search documentation..."
          @keydown.enter="handleEnter"
          @keydown.down="handleNavigate(1)"
          @keydown.up="handleNavigate(-1)"
        />
        <UiCommandList class="text-sm" @escape-key-down="open = false">
          <div v-if="searchResult?.length" class="p-1.5">
            <NuxtLink
              v-for="(item, i) in searchResult"
              :id="i"
              :key="item.id"
              :to="item.id"
              class="flex p-2 hover:bg-muted hover:cursor-pointer rounded-md select-none"
              :class="[i === activeSelect && 'bg-muted']"
              @click="open = false; activeSelect = i;"
            >
              <Icon v-if="getItemIcon(item.id)" :name="getItemIcon(item.id)" class="flex-shrink-0 self-center h-4 w-4 mr-2" />
              <div v-else class="flex-shrink-0 h-4 w-4 mr-2" />

              <span v-for="(subtitle, j) in item.titles" :key="`${subtitle}${j}`" class="flex flex-shrink-0 self-center">
                {{ subtitle }}
                <Icon name="lucide:chevron-right" class="self-center mx-0.5 text-muted-foreground" />
              </span>
              <span class="self-center flex-shrink-0">
                {{ item.title }}
              </span>
              <span class="self-center text-xs text-muted-foreground truncate ml-2" v-html="getHighlightedContent(item.content)" />
            </NuxtLink>
          </div>

          <div v-if="!searchResult?.length && input?.length" class="text-center text-muted-foreground pt-4">
            No results found.
          </div>

          <template v-if="!searchResult?.length && !input?.length">
            <template v-for="item in navigation" :key="item._path">
              <UiCommandGroup v-if="item.children" :heading="item.title" class="p-1.5">
                <NuxtLink v-for="child in item.children" :key="child.id" :to="child._path">
                  <UiCommandItem :value="child._path">
                    <Icon v-if="child.icon" :name="child.icon" class="h-4 w-4 mr-2" />
                    <div v-else class="h-4 w-4 mr-2" />
                    <span>{{ child.title }}</span>
                  </UiCommandItem>
                </NuxtLink>
              </UiCommandGroup>
              <UiCommandSeparator v-if="item.children" />
            </template>
            <UiCommandGroup heading="Theme" class="p-1.5">
              <UiCommandItem value="light" @click="colorMode.preference = 'light'">
                <Icon name="lucide:sun" class="h-4 w-4 mr-2" />
                <span>Light</span>
              </UiCommandItem>
              <UiCommandItem value="dark" @click="colorMode.preference = 'dark'">
                <Icon name="lucide:moon" class="h-4 w-4 mr-2" />
                <span>Dark</span>
              </UiCommandItem>
              <UiCommandItem value="system" @click="colorMode.preference = 'auto'">
                <Icon name="lucide:monitor" class="h-4 w-4 mr-2" />
                <span>System</span>
              </UiCommandItem>
            </UiCommandGroup>
          </template>
        </UiCommandList>
      </UiCommand>
    </UiDialogContent>
  </UiDialog>
</template>

<script setup lang="ts">
import { VisuallyHidden } from 'radix-vue';

const open = defineModel<boolean>('open');
const colorMode = useColorMode();

const activeSelect = ref(0);

const { Meta_K, Ctrl_K } = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (e.key === 'k' && (e.metaKey || e.ctrlKey))
      e.preventDefault();
  },
});
watch([Meta_K, Ctrl_K], (v) => {
  if (v[0] || v[1])
    open.value = true;
});

const input = ref('');
const searchResult = ref();
watch(
  input,
  async (v) => {
    activeSelect.value = 0;
    searchResult.value = (await searchContent(v)).value;
  },
);

function getHighlightedContent(text: string) {
  return text.replace(input.value, `<span class="font-semibold underline">${input.value}</span>`);
}

const { navKeyFromPath } = useContentHelpers();
const { navigation } = useContent();
function getItemIcon(path: string) {
  return navKeyFromPath(path, 'icon', navigation.value);
}

watch(activeSelect, (value) => {
  document.querySelector(`[id="${value}"]`)?.scrollIntoView({ block: 'nearest' });
});

function handleEnter() {
  if (searchResult.value[activeSelect.value]?.id) {
    navigateTo(searchResult.value[activeSelect.value].id);
    open.value = false;
  }
}

function handleNavigate(delta: -1 | 1) {
  if (activeSelect.value + delta >= 0 && activeSelect.value + delta < searchResult.value.length)
    activeSelect.value += delta;
}
</script>
