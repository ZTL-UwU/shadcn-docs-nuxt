<template>
  <UiButton ref="checkIconRef" variant="outline" class="size-7 p-1" @click="handleClick">
    <Transition name="fade" mode="out-in">
      <Icon
        v-if="copied === false"
        :name="codeCopyIcon"
        class="text-muted-foreground cursor-pointer"
      />
      <Icon
        v-else
        name="lucide:check"
        class="text-muted-foreground cursor-pointer self-center"
      />
    </Transition>
  </UiButton>
</template>

<script setup lang="ts">
import { useToast } from '@/components/ui/toast/use-toast';

const { code } = defineProps<{
  code: string;
}>();

const { toast } = useToast();
const { t } = useI18n();

const { copy } = useClipboard({ source: code, legacy: true });
const copied = ref(false);

const { codeCopyIcon } = useConfig().value.main;

async function handleClick() {
  await copy(code.replaceAll(/\s*\/\/\s*\[!code (focus|\+\+|--|error|warning)\]/g, ''));
  copied.value = true;

  if (useConfig().value.main.codeCopyToast) {
    toast({
      description: t(useConfig().value.main.codeCopyToastText),
    });
  }
}

const checkIconRef = useTemplateRef('checkIconRef');
onClickOutside(checkIconRef, () => {
  copied.value = false;
});
</script>
