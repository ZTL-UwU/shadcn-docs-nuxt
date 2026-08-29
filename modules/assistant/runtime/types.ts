import type { FaqCategory, FaqQuestions, LocalizedFaqQuestions } from '../../../utils/config';

export type { FaqCategory, FaqQuestions, LocalizedFaqQuestions };

export interface AssistantMessage {
  id: string;
  role: 'user' | 'assistant';
  parts: Array<{ type: 'text'; text: string }>;
}
