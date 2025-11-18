---
icon: lucide:sigma
title: 数学方程式
description: 在 shadcn-docs-nuxt 中编写 LaTeX.
---

::tabs{variant="line"}
  ::div{label="KaTeX"}
    ::steps
      ### 安装插件
      :pm-install{name="remark-math rehype-katex" save-dev}

      ### 将插件添加到 Nuxt 配置
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

      ### 编写 LaTeX
      ````mdc
      #### Inline
      $E = mc^2$

      #### Centered
      When $a \ne 0$, there are two solutions to $(ax^2 + bx + c = 0)$ and they are
      $$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$

      #### Math Block
      ```math
      L = \frac{1}{2} \rho v^2 S C_L
      ```
      ````
    ::
  ::
  ::div{label="MathJax"}
    ::steps
      ### 安装插件
      :pm-install{name="remark-math rehype-mathjax" save-dev}

      ### 将插件添加到 Nuxt 配置
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

      ### 编写 LaTeX
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
