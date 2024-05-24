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
  },
});
