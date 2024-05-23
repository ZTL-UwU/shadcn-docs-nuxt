<template>
  <UiCard class="[&:not(:first-child)]:mt-5 mb-5 overflow-hidden">
    <div v-if="filename" class="p-3 border-b flex">
      {{ filename }}
      <span class="ml-auto mr-1">
        <Transition name="fade" mode="out-in">
          <Icon
            v-if="copied === false"
            name="lucide:copy"
            class="self-center cursor-pointer text-muted-foreground hover:text-primary"
            @click="copyCode"
          />
          <Icon
            v-else
            ref="checkIconRef"
            name="lucide:check"
            class="self-center cursor-pointer text-muted-foreground hover:text-primary"
          />
        </Transition>
      </span>
    </div>
    <UiScrollArea>
      <div
        class="p-3 bg-zinc-50 dark:bg-zinc-900 text-sm relative overflow-x-auto "
        :class="[`highlight-${language}`, !filename && 'pr-10']"
        @mouseenter="hovered = true"
        @mouseleave="hovered = false"
      >
        <span v-if="!filename" class="absolute right-4">
          <Transition name="fade" mode="out-in">
            <Icon
              v-if="copied === false"
              name="lucide:copy"
              class="self-center cursor-pointer text-muted-foreground hover:text-primary"
              @click="copyCode"
            />
            <Icon
              v-else
              ref="checkIconRef"
              name="lucide:check"
              class="self-center cursor-pointer text-muted-foreground hover:text-primary"
            />
          </Transition>
        </span>
        <slot />
      </div>
      <UiScrollBar orientation="horizontal" />
    </UiScrollArea>
  </UiCard>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { ref } from 'vue';
import type { BuiltinLanguage } from 'shiki';

const props = defineProps({
  code: {
    type: String,
    default: '',
  },
  language: {
    type: String as PropType<BuiltinLanguage>,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
});
const hovered = ref(false);

const { copy } = useClipboard({ source: props.code });
const copied = ref(false);
function copyCode() {
  copy(props.code)
    .then(
      () => { copied.value = true; },
    );
}
const checkIconRef = ref<HTMLElement>();
onClickOutside(checkIconRef, () => {
  copied.value = false;
});
</script>

<style>
.fade-enter-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
