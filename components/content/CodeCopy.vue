<template>
  <span>
    <Transition name="fade" mode="out-in">
      <Icon
        v-if="copied === false"
        name="lucide:copy"
        class="self-center cursor-pointer text-muted-foreground hover:text-primary"
        @click="handleClick"
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
import { useToast } from '@/components/ui/toast/use-toast';

const props = defineProps<{
  code: string;
}>();

const { toast } = useToast();

const { copy } = useClipboard({ source: props.code });
const copied = ref(false);

async function handleClick() {
  await copy(props.code);
  copied.value = true;

  if (useConfig().value.main.codeCopyToast) {
    toast({
      description: 'Copied to clipboard!',
    });
  }
}

const checkIconRef = ref<HTMLElement>();
onClickOutside(checkIconRef, () => {
  copied.value = false;
});
</script>
