<template>
  <UiPopover>
    <UiPopoverTrigger as-child>
      <UiButton variant="ghost" size="icon" class="relative">
        <Icon name="lucide:globe" size="18" />
        <span class="sr-only">Choose Language</span>
      </UiButton>
    </UiPopoverTrigger>
    <UiPopoverContent class="w-48 p-1">
      <div class="flex flex-col space-y-1">
        <UiButton
          v-for="lang in availableLocales"
          :key="lang.code"
          variant="ghost"
          size="sm"
          class="justify-start"
          :class="{ 'bg-accent': locale === lang.code }"
          @click="setLanguage(lang.code)"
        >
          {{ lang.name }}
        </UiButton>
      </div>
    </UiPopoverContent>
  </UiPopover>
</template>

<script setup lang="ts">
const { locale, locales } = useI18n();

const availableLocales = computed(() => {
  return (locales.value as any[]).map((l) => {
    return typeof l === 'string' ? { code: l, name: l } : l;
  });
});

// 定义语言代码类型
type LocaleCode = 'en' | 'zh';

function setLanguage(lang: string) {
  // 更新语言设置
  locale.value = lang as LocaleCode;

  // 获取当前路由在新语言下的路径
  const switchLocalePath = useSwitchLocalePath();
  const newPath = switchLocalePath(lang as LocaleCode);

  // 如果生成了有效路径，导航到新路径
  if (newPath) {
    navigateTo(newPath);
  }
}
</script>
