import { createAssistantResponse } from '../utils/assistant';

export default defineEventHandler(() => {
  return createAssistantResponse(null);
});
