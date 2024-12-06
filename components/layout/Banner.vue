<template>
  <Transition>
    <div
      v-if="open"
      class="block transition-colors"
      :class="{ 'hover:cursor-pointer hover:bg-muted/40': to, 'border-b': border }"
      @click="navigate"
    >
      <div class="container flex h-12 max-w-screen-2xl items-center justify-between">
        <div class="hidden lg:block" />
        <div class="text-sm">
          <MDC :value="content" class="flex items-center" />
        </div>
        <UiButton v-if="showClose" variant="ghost" class="z-40 size-8 p-2" @click="open = false">
          <Icon name="lucide:x" />
        </UiButton>
        <div v-else />
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const open = useCookie<boolean>('banner-open', { default: () => true });
const { showClose, content, to, target, border } = useConfig().value.banner;

function navigate() {
  if (open.value && to) {
    navigateTo(to, {
      external: true,
      open: {
        target,
      },
    });
  }
}
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
