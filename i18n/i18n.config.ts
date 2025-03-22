export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      // Search
      'Search...': 'Search...',
      'Search documentation...': 'Search documentation...',
      'No results found.': 'No results found.',

      // TOC
      'On This Page': 'On This Page', // Default title for the table of contents

      // Search command
      'Light': 'Light',
      'Dark': 'Dark',
      'System': 'System',

      // Doc footer
      'Edit this page': 'Edit this page',
      'Back to Top': 'Back to Top',

      // Collapse Code
      'Expand': 'Expand',
      'Collapse': 'Collapse',

      // Language Switcher
      'Language': 'Language',
      'Choose your language': 'Choose your language',
    },
    fr: {
      // Search
      'Search...': 'Rechercher...',
      'Search documentation...': 'Rechercher dans la documentation...',
      'No results found.': 'Aucun résultat trouvé.',

      // TOC
      'On This Page': 'Sur cette Page',

      // Search command
      'Light': 'Clair',
      'Dark': 'Sombre',
      'System': 'Système',

      // Doc footer
      'Edit this page': 'Modifier cette page',
      'Back to Top': 'Retour en haut',

      // Collapse Code
      'Expand': 'Développer',
      'Collapse': 'Réduire',

      // Language Switcher
      'Language': 'Langue',
      'Choose your language': 'Choisissez votre langue',
    },
  },
}));
