import { field, group } from '@nuxt/content/preview';

export default defineNuxtSchema({
  appConfig: {
    seo: group({
      title: 'SEO',
      description: 'SEO configuration.',
      icon: 'i-lucide-search',
      fields: {
        title: field({
          type: 'string',
          title: 'Title',
          description: 'Title to display in the header.',
          icon: 'i-lucide-type',
          default: '',
        }),
        description: field({
          type: 'string',
          title: 'Description',
          description: 'Description to display in the header.',
          icon: 'i-lucide-type',
          default: '',
        }),
      },
    }),
    header: group({
      title: 'Header',
      description: 'Header configuration.',
      icon: 'i-lucide-layout',
      fields: {
        title: field({
          type: 'string',
          title: 'Title',
          description: 'Title to display in the header.',
          icon: 'i-lucide-type',
          default: '',
        }),
      },
    }),
    navigation: group({
      title: 'Navigation',
      description: 'Navigation configuration.',
      icon: 'i-lucide-navigation',
      fields: {
        sub: field({
          type: 'string',
          title: 'Sub Navigation',
          description: 'Enable sub-navigation. Use "header" or "aside". Leave empty for none.',
          icon: 'i-lucide-layout-panel-left',
          default: '',
        }),
      },
    }),
    socials: field({
      type: 'object',
      title: 'Social Networks',
      description: 'Social links configuration.',
      icon: 'i-lucide-network',
      default: {},
    }),
    toc: group({
      title: 'Table of contents',
      description: 'TOC configuration.',
      icon: 'i-lucide-list',
      fields: {
        title: field({
          type: 'string',
          title: 'Title',
          description: 'Title of the table of contents.',
          icon: 'i-lucide-heading',
          default: 'On this page',
        }),
        enable: field({
          type: 'boolean',
          title: 'Enable',
          description: 'Show the table of contents.',
          icon: 'i-lucide-check',
          default: true,
        }),
      },
    }),
    github: group({
      title: 'GitHub',
      description: 'GitHub configuration.',
      icon: 'i-simple-icons-github',
      fields: {
        url: field({
          type: 'string',
          title: 'URL',
          description: 'GitHub URL.',
          icon: 'i-simple-icons-github',
          default: '',
        }),
        branch: field({
          type: 'string',
          title: 'Branch',
          description: 'GitHub branch.',
          icon: 'i-lucide-git-branch',
          default: 'main',
        }),
      },
    }),
    search: group({
      title: 'Search',
      description: 'Search configuration.',
      icon: 'i-lucide-search',
      fields: {
        enable: field({
          type: 'boolean',
          title: 'Enable',
          description: 'Show search.',
          icon: 'i-lucide-check',
          default: true,
        }),
        fts: field({
          type: 'boolean',
          title: 'Full-Text Search',
          description: 'Use SQLite FTS5 instead of Fuse.js.',
          icon: 'i-lucide-database',
          default: false,
        }),
      },
    }),
    assistant: group({
      title: 'Assistant',
      description: 'Assistant configuration.',
      icon: 'i-lucide-sparkles',
      fields: {
        floatingInput: field({
          type: 'boolean',
          title: 'Floating Input',
          description: 'Show the floating input on documentation pages.',
          icon: 'i-lucide-message-circle',
          default: true,
        }),
        explainWithAi: field({
          type: 'boolean',
          title: 'Explain with AI',
          description: 'Show the Explain with AI button.',
          icon: 'i-lucide-brain',
          default: true,
        }),
      },
    }),
    theme: group({
      title: 'Theme',
      description: 'Theme configuration.',
      icon: 'i-lucide-palette',
      fields: {
        customizable: field({
          type: 'boolean',
          title: 'Customizable',
          description: 'Show the theme customizer.',
          icon: 'i-lucide-sliders',
          default: true,
        }),
        color: field({
          type: 'string',
          title: 'Color',
          description: 'Default theme color.',
          icon: 'i-lucide-palette',
          default: 'zinc',
        }),
        radius: field({
          type: 'number',
          title: 'Radius',
          description: 'Default border radius in rem.',
          icon: 'i-lucide-radius',
          default: 0.5,
        }),
      },
    }),
    site: group({
      title: 'Site',
      description: 'Site configuration.',
      icon: 'i-lucide-globe',
      fields: {
        name: field({
          type: 'string',
          title: 'Name',
          description: 'Site name.',
          icon: 'i-lucide-type',
          default: 'shadcn-docs',
        }),
      },
    }),
    colorMode: field({
      type: 'string',
      title: 'Color Mode',
      description: 'Force light or dark. Leave empty for system preference.',
      icon: 'i-lucide-monitor',
      default: '',
    }),
  },
});
