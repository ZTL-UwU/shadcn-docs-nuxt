import { defineMcpTool } from '@nuxtjs/mcp-toolkit/server';
import { z } from 'zod';
import { getMcpPage } from '../../utils/mcp';

export default defineMcpTool({
  description: `Retrieves the full content and details of a specific documentation page.

WHEN TO USE: Use this tool when you know the EXACT path to a documentation page. Common use cases:
- User asks for a specific page: "Show me the getting started guide" → /en/getting-started/installation
- User asks about a known topic with a dedicated page
- You found a relevant path from list-pages and want the full content
- User references a specific section or guide they want to read

WHEN NOT TO USE: If you don't know the exact path and need to search/explore, use list-pages first.

WORKFLOW: This tool returns the complete page content including title, description, and full markdown. Use this when you need to provide detailed answers or code examples from specific documentation pages.
`,
  annotations: {
    readOnlyHint: true,
    destructiveHint: false,
    idempotentHint: true,
    openWorldHint: false,
  },
  inputSchema: {
    path: z.string().describe(
      'The page path from list-pages or provided by the user (e.g., /en/getting-started/installation)',
    ),
  },
  inputExamples: [
    { path: '/en/getting-started/installation' },
    { path: '/getting-started/introduction' },
  ],
  cache: '1h',
  handler: async ({ path }) => {
    const page = await getMcpPage({ path });
    return {
      content: [{ type: 'text' as const, text: page.content }],
    };
  },
});
