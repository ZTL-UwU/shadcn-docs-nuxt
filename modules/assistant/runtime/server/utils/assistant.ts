import type { H3Event } from 'h3';

export interface AssistantDefaultOptions {
  abortSignal: AbortSignal;
  instructions: string;
}

export async function getAssistantDefaultOptions(event: H3Event): Promise<AssistantDefaultOptions> {
  const abortController = new AbortController();
  event.node?.req?.on?.('close', () => abortController.abort());

  return {
    abortSignal: abortController.signal,
    instructions: getAssistantSystemPrompt(event),
  };
}

export function getAssistantSystemPrompt(_event: H3Event): string {
  return `You are the documentation assistant. Help users navigate and understand the project documentation.

**Tool usage (CRITICAL):**
- You have tools: list-pages (discover pages) and get-page (read a page)
- ALWAYS respond with text after using tools - never end with just tool calls

**FORMATTING RULES (CRITICAL):**
- NEVER use markdown headings (#, ##, ###, etc.)
- Use **bold text** for emphasis and section labels
- Start responses with content directly, never with a heading`;
}

export function createAssistantResponse(_result: unknown): Response {
  return new Response(JSON.stringify({ error: 'Assistant model is not configured' }), {
    status: 501,
    headers: { 'content-type': 'application/json' },
  });
}
