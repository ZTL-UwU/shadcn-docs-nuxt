<template>
  <div class="[&:not(:first-child)]:mt-6">
    <div class="dark:hidden">
      <ProseImg
        v-bind="{
          src: props.srcLight,
          alt: props.alt,
          width: props.width,
          height: props.height,
          lifted: props.lifted,
          noZoom: props.noZoom,
        }"
      />
    </div>
    <div class="hidden dark:block">
      <ProseImg
        v-bind="{
          src: props.srcDark,
          alt: props.alt,
          width: props.width,
          height: props.height,
          lifted: props.lifted,
          noZoom: props.noZoom,
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  srcLight: {
    type: String,
    default: '',
  },
  srcDark: {
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
</script>
