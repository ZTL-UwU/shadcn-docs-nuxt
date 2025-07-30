---
icon: lucide:sigma
title: Equazioni Matematiche
description: Scrivi LaTeX in shadcn-docs-nuxt.
---

::tabs{variant="line"}
  ::div{label="KaTeX"}
    ::steps
      ### Installazione Plugin
      :pm-install{name="remark-math rehype-katex" save-dev}

      ### Aggiungi Plugin alla Configurazione Nuxt
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

      ### Scrivi LaTeX
      ````mdc
      #### In linea
      $E = mc^2$

      #### Centrato
      Quando $a \ne 0$, ci sono due soluzioni per $(ax^2 + bx + c = 0)$ e sono
      $$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$

      #### Blocco Matematico
      ```math
      L = \frac{1}{2} \rho v^2 S C_L
      ```
      ````
    ::
  ::
  ::div{label="MathJax"}
    ::steps
      ### Installazione Plugin
      :pm-install{name="remark-math rehype-mathjax" save-dev}

      ### Aggiungi Plugin alla Configurazione Nuxt
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

      ### Scrivi LaTeX
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
