---
icon: lucide:sigma
title: Équations Mathématiques
description: Écrire du LaTeX dans shadcn-docs-nuxt.
---

::tabs{variant="line"}
  ::div{label="KaTeX"}
    ::steps
      ### Installer les Plugins
      :pm-install{name="remark-math rehype-katex" save-dev}

      ### Ajouter les Plugins à la Configuration Nuxt
      ```ts [nuxt.config.ts]
      export default defineNuxtConfig({
        devtools: { enabled: true },
        extends: ['shadcn-docs-nuxt'],
        css: [
          'katex/dist/katex.min.css',
        ],
        content: {
          markdown: {
            remarkPlugins: [
              'remark-math',
            ],
            rehypePlugins: {
              'rehype-katex': {
                output: 'html',
              },
            },
          },
        },
      });
      ```

      ### Écrire du LaTeX
      ````mdc
      #### En Ligne
      $E = mc^2$

      #### Centré
      Quand $a \ne 0$, il y a deux solutions à $(ax^2 + bx + c = 0)$ et elles sont
      $$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$

      #### Bloc Mathématique
      ```math
      L = \frac{1}{2} \rho v^2 S C_L
      ```
      ````
    ::
  ::
  ::div{label="MathJax"}
    ::steps
      ### Installer les Plugins
      :pm-install{name="remark-math rehype-mathjax" save-dev}

      ### Ajouter les Plugins à la Configuration Nuxt
      ```ts [nuxt.config.ts]
      export default defineNuxtConfig({
        devtools: { enabled: true },
        extends: ['shadcn-docs-nuxt'],
        content: {
          markdown: {
            remarkPlugins: [
              'remark-math',
            ],
            rehypePlugins: [
              'rehype-mathjax',
            ],
          },
        },
      });
      ```

      ### Écrire du LaTeX
      ````mdc
      $E = mc^2$

      $$
      E = mc^2
      $$

      ```math
      E = mc^2
      ```
      ````
    ::
  ::
::
