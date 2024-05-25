<template>
  <span>
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
</template>

<script setup lang="ts">
const props = defineProps<{
  code: string;
}>();

const { copy } = useClipboard({ source: props.code });
const copied = ref(false);
function copyCode() {
  copy(props.code).then(
    () => { copied.value = true; },
  );
}
const checkIconRef = ref<HTMLElement>();
onClickOutside(checkIconRef, () => {
  copied.value = false;
});
</script>
