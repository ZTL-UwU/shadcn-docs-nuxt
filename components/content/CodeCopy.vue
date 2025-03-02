<template>
  <div class="flex">
    <Transition name="fade" mode="out-in">
      <div v-if="copied === false">
        <Icon
          :name="codeCopyIcon"
          class="block cursor-pointer self-center text-muted-foreground hover:text-primary"
          @click="handleClick"
        />
      </div>
      <div v-else>
        <Icon
          ref="checkIconRef"
          name="lucide:check"
          class="block cursor-pointer self-center text-muted-foreground hover:text-primary"
        />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { useToast } from '@/components/ui/toast/use-toast';

const { code } = defineProps<{
  code: string;
}>();

const { toast } = useToast();

const { copy } = useClipboard({ source: code });
const copied = ref(false);

const { codeCopyIcon } = useConfig().value.main;

async function handleClick() {
  await copy(code);
  copied.value = true;

  if (useConfig().value.main.codeCopyToast) {
    toast({
      description: useConfig().value.main.codeCopyToastText,
    });
  }
}

const checkIconRef = ref<HTMLElement>();
onClickOutside(checkIconRef, () => {
  copied.value = false;
});
</script>
