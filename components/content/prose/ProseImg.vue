<template>
  <DefineTemplate>
    <NuxtImg
      :src="refinedSrc"
      :alt
      :width
      :height
      class="rounded-md"
      :class="[
        lifted && 'rounded-lg border bg-card text-card-foreground shadow-xs',
        enableZoom && 'cursor-zoom-in',
        className,
      ]"
    />
  </DefineTemplate>

  <DialogRoot v-if="enableZoom">
    <DialogTrigger class="block w-full">
      <ReuseTemplate />
    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay
        class="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80"
      />
      <DialogContent
        class="p-0 fixed left-1/2 top-1/2 z-50 grid -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg"
      >
        <DialogClose>
          <NuxtImg
            :src="refinedSrc"
            :alt
            :width
            :height
            class="md:rounded-lg cursor-zoom-out max-w-svw max-h-svh"
          />
        </DialogClose>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
  <ReuseTemplate v-else />
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { DialogClose, DialogContent, DialogOverlay, DialogPortal, DialogRoot, DialogTrigger } from 'reka-ui';
import { joinURL, withLeadingSlash, withTrailingSlash } from 'ufo';

const {
  src = '',
  alt = '',
  width,
  height,
  lifted = false,
  zoom = undefined,
  class: className = '',
} = defineProps<{
  src?: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
  lifted?: boolean;
  zoom?: boolean;
  class?: HTMLAttributes['class'];
}>();

const config = useConfig();

const [DefineTemplate, ReuseTemplate] = createReusableTemplate();

const refinedSrc = computed(() => {
  if (src?.startsWith('/') && !src.startsWith('//')) {
    const _base = withLeadingSlash(withTrailingSlash(useRuntimeConfig().app.baseURL));
    if (_base !== '/' && !src.startsWith(_base))
      return joinURL(_base, src);
  }
  return src;
});

const enableZoom = computed(() => {
  if (zoom === undefined)
    return config.value.main.imageZoom;
  return zoom;
});
</script>
