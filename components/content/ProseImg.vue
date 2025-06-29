<template>
  <DefineTemplate>
    <NuxtImg
      :src="refinedSrc"
      :alt
      :width
      :height
      class="rounded-md"
      :class="{
        'rounded-lg border bg-card text-card-foreground shadow-xs': lifted,
        'cursor-zoom-in': !noZoom && config.main.imageZoom,
      }"
    />
  </DefineTemplate>

  <DialogRoot v-if="!noZoom && config.main.imageZoom">
    <DialogTrigger class="block">
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
import { computed, useRuntimeConfig } from '#imports';
import { DialogClose, DialogContent, DialogOverlay, DialogPortal, DialogRoot, DialogTrigger } from 'reka-ui';
import { joinURL, withLeadingSlash, withTrailingSlash } from 'ufo';

const props = defineProps({
  src: {
    type: String,
    default: '',
  },
  alt: {
    type: String,
    default: '',
  },
  width: {
    type: [String, Number],
    default: undefined,
  },
  height: {
    type: [String, Number],
    default: undefined,
  },
  lifted: {
    type: Boolean,
    default: false,
  },
  noZoom: {
    type: Boolean,
    default: false,
  },
});

const config = useConfig();

const [DefineTemplate, ReuseTemplate] = createReusableTemplate();

const refinedSrc = computed(() => {
  if (props.src?.startsWith('/') && !props.src.startsWith('//')) {
    const _base = withLeadingSlash(withTrailingSlash(useRuntimeConfig().app.baseURL));
    if (_base !== '/' && !props.src.startsWith(_base))
      return joinURL(_base, props.src);
  }
  return props.src;
});
</script>
