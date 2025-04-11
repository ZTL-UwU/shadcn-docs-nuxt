<template>
  <UseTemplate>
    <UiButton variant="ghost" size="icon" class="uppercase">
      <Icon v-if="triggerType === 'icon'" name="lucide:languages" size="18" />
      <span v-else-if="triggerType === 'text'" class="font-semibold">
        {{ locale }}
      </span>
    </UiButton>
  </UseTemplate>

  <template v-if="enable && locales.length > 1">
    <UiPopover v-if="dropdownType === 'popover'">
      <UiPopoverTrigger as-child>
        <Trigger />
      </UiPopoverTrigger>
      <UiPopoverContent
        class="w-[23rem]"
        :align="breakpoints.isGreaterOrEqual('md') ? 'end' : 'center'"
      >
        <div class="grid gap-6">
          <div class="grid space-y-1">
            <h1 class="text-foreground text-lg font-semibold">
              {{ $t('Language') }}
            </h1>
            <p class="text-muted-foreground text-sm">
              {{ $t('Choose your language') }}
            </p>
          </div>
          <div class="space-y-1.5">
            <div class="grid grid-cols-3 gap-2">
              <template v-for="l in locales" :key="l.code">
                <UiButton
                  class="justify-start gap-2"
                  variant="outline"
                  :class="{ 'border-primary border-2': locale === l.code }"
                  @click="navigateTo(switchLocalePath(l.code))"
                >
                  <span class="text-xs capitalize">{{ l.name }}</span>
                </UiButton>
              </template>
            </div>
          </div>
        </div>
      </UiPopoverContent>
    </UiPopover>
    <UiDropdownMenu v-else-if="dropdownType === 'select'">
      <UiDropdownMenuTrigger as-child>
        <Trigger />
      </UiDropdownMenuTrigger>
      <UiDropdownMenuContent class="w-20">
        <UiDropdownMenuRadioGroup v-model="selectedLocale">
          <UiDropdownMenuRadioItem
            v-for="l in locales"
            :key="l.code"
            :value="l.code"
            @click="selectedLocale = l.code; navigateTo(switchLocalePath(l.code))"
          >
            {{ l.name }}
          </UiDropdownMenuRadioItem>
        </UiDropdownMenuRadioGroup>
      </UiDropdownMenuContent>
    </UiDropdownMenu>
  </template>
</template>

<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';

const { locale, locales, switchLocalePath } = useI18nDocs();
const selectedLocale = ref(locale.value);
const { enable, triggerType, dropdownType } = useConfig().value.header.languageSwitcher;

const breakpoints = useBreakpoints(breakpointsTailwind);

const [UseTemplate, Trigger] = createReusableTemplate();
</script>
