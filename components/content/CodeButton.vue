<template>
  <UiButton
    ref="checkIconRef"
    class="block cursor-copy [&:not(:first-child)]:mt-6"
    :variant="variant"
    :style="[width ? `width: ${width}px` : {}]"
    @click="handleClick"
  >
    <div class="w-full flex items-center justify-between gap-4">
      <div class="flex gap-3 items-center">
        <SmartIcon v-if="icon" :name="icon" />
        <span class="font-mono">{{ code }}</span>
      </div>
      <Transition name="fade" mode="out-in">
        <Icon
          v-if="copied === false"
          :name="copyIcon"
        />
        <Icon
          v-else
          name="lucide:check"
        />
      </Transition>
    </div>
  </UiButton>
</template>

<script setup lang="ts">
import { useToast } from '@/components/ui/toast/use-toast';

const { code, variant = 'outline', copyIcon = 'lucide:copy' } = defineProps<{
  code: string;
  icon?: string;
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
  width?: number;
  copyIcon?: string;
}>();

const { copy } = useClipboard({ source: code, legacy: true });
const copied = ref(false);

const { toast } = useToast();
const { t } = useI18n();

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
