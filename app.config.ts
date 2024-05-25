export default defineAppConfig({
  shadcnDocs: {
    header: {
      title: 'shadcn-docs',
      showTitle: true,
      logo: {
        light: '/logo.svg',
        dark: '/logo-dark.svg',
      },
      darkModeToggle: true,
      nav: [{
        title: 'Credits',
        links: [{
          title: 'shadcn-ui',
          to: 'https://ui.shadcn.com/',
          description: 'For the beautiful component design & docs design',
          target: '_blank',
        }, {
          title: 'shadcn-vue',
          to: 'https://www.shadcn-vue.com/',
          description: 'For the vue port of shadcn-ui & some docs component source',
          target: '_blank',
        }, {
          title: 'Docus',
          to: 'https://docus.dev/',
          description: 'For inspiration & some docs component source',
          target: '_blank',
        }, {
          title: 'Nuxt Content',
          to: 'https://content.nuxt.com/',
          description: 'Content made easy for Vue Developers',
          target: '_blank',
        }],
      }, {
        title: 'Use This Template',
        to: 'https://nuxt.com/templates',
        target: '_blank',
      }],
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/ZTL-UwU/shadcn-docs-nuxt',
        target: '_blank',
      }],
    },
    aside: {
      useLevel: true,
      collapse: false,
    },
    main: {
      breadCrumb: true,
      showTitle: true,
    },
    footer: {
      credits: 'Copyright © 2024',
      links: [
        {
          title: 'shadcn-vue',
          to: 'https://www.shadcn-vue.com/',
          target: '_blank',
        },
        {
          icon: 'lucide:github',
          to: 'https://github.com/ZTL-UwU/shadcn-docs-nuxt',
          target: '_blank',
        },
      ],
    },
    toc: {
      enable: true,
      title: 'On This Page',
    },
    search: {
      enable: true,
      inAside: false,
    },
  },
});
