import type { AssistantMessage, FaqCategory, FaqQuestions, LocalizedFaqQuestions } from '../types';
import { createSharedComposable, useLocalStorage } from '@vueuse/core';
import { computed, ref, watch } from 'vue';

function normalizeFaqQuestions(questions: FaqQuestions): FaqCategory[] {
  if (!questions || (Array.isArray(questions) && questions.length === 0)) {
    return [];
  }

  if (typeof questions[0] === 'string') {
    return [{
      category: 'Questions',
      items: questions as string[],
    }];
  }

  return questions as FaqCategory[];
}

export const useAssistant = createSharedComposable(() => {
  const config = useRuntimeConfig();
  const appConfig = useAppConfig();
  const assistantRuntimeConfig = config.public.assistant as { enabled?: boolean } | undefined;
  const assistantConfig = appConfig.assistant as { faqQuestions?: FaqQuestions | LocalizedFaqQuestions } | undefined;
  const isEnabled = computed(() => assistantRuntimeConfig?.enabled ?? false);

  const storageOpen = useLocalStorage('assistant-open', false);
  const messages = useLocalStorage<AssistantMessage[]>('assistant-messages', []);

  const isOpen = ref(false);
  const isStudioExpanded = ref(false);

  onNuxtReady(() => {
    nextTick(() => {
      isOpen.value = storageOpen.value;
    });

    isStudioExpanded.value = document.body.hasAttribute('data-expand-sidebar');
    const observer = new MutationObserver(() => {
      isStudioExpanded.value = document.body.hasAttribute('data-expand-sidebar');
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['data-expand-sidebar'] });
  });

  watch(isOpen, (value) => {
    storageOpen.value = value;
  });

  const faqQuestions = computed<FaqCategory[]>(() => {
    const faqConfig = assistantConfig?.faqQuestions;
    if (!faqConfig) {
      return [];
    }

    if (!Array.isArray(faqConfig)) {
      const localizedConfig = faqConfig as LocalizedFaqQuestions;
      const currentLocale = config.public.docs?.locale || 'en';
      const defaultLocale = 'en';

      const questions = localizedConfig[currentLocale]
        || localizedConfig[defaultLocale]
        || Object.values(localizedConfig)[0];

      return normalizeFaqQuestions(questions || []);
    }

    return normalizeFaqQuestions(faqConfig);
  });

  function open(initialMessage?: string, clearPrevious = false) {
    if (isStudioExpanded.value) {
      return;
    }

    if (clearPrevious) {
      messages.value = [];
    }

    if (initialMessage) {
      messages.value = [...messages.value, {
        id: String(Date.now()),
        role: 'user' as const,
        parts: [{ type: 'text' as const, text: initialMessage }],
      }];
    }
    isOpen.value = true;
  }

  function close() {
    isOpen.value = false;
  }

  function toggle() {
    if (isStudioExpanded.value) {
      return;
    }
    isOpen.value = !isOpen.value;
  }

  return {
    isEnabled,
    isOpen,
    isStudioExpanded,
    messages,
    faqQuestions,
    open,
    close,
    toggle,
  };
});
