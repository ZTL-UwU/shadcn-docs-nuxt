---
title: 步骤
icon: lucide:arrow-down-0-1
badges:
  - value: 源码
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Steps.vue
    target: _blank
---

## 使用方法

::stack
  ::div{class="p-4 md:p-6"}
    ::steps
      ### 获取初始模板

      ::code-group
        ```bash [npm]
        npx nuxi@latest init <项目名称> -t github:ZTL-UwU/shadcn-docs-nuxt-starter
        ```
        ```bash [pnpm]
        pnpm dlx nuxi@latest init <项目名称> -t github:ZTL-UwU/shadcn-docs-nuxt-starter
        ```
        ```bash [bun]
        bunx nuxi@latest init <项目名称> -t github:ZTL-UwU/shadcn-docs-nuxt-starter
        ```
      ::

      ::alert
      或者，您可以从 [GitHub 仓库](https://github.com/ZTL-UwU/shadcn-docs-nuxt-starter) 克隆或下载模板。
      ::

      ### 安装依赖

      ::code-group
        ```bash [npm]
        npm install
        ```
        ```bash [pnpm]
        pnpm install
        ```
        ```bash [bun]
        bun install
        ```
      ::

      ### 开发服务器

      ::code-group
        ```bash [npm]
        npm run dev -- -o
        ```
        ```bash [pnpm]
        pnpm dev -o
        ```
        ```bash [bun]
        bun run dev -o
        ```
      ::
    ::
  ::
  ```mdc height=400
  ::steps
    ### 获取初始模板

    ::code-group
      ```bash [npm]
      npx nuxi@latest init <项目名称> -t github:ZTL-UwU/shadcn-docs-nuxt-starter
      ```
      ```bash [pnpm]
      pnpm dlx nuxi@latest init <项目名称> -t github:ZTL-UwU/shadcn-docs-nuxt-starter
      ```
      ```bash [bun]
      bunx nuxi@latest init <项目名称> -t github:ZTL-UwU/shadcn-docs-nuxt-starter
      ```
    ::

    ::alert
    或者，您可以从 [GitHub 仓库](https://github.com/ZTL-UwU/shadcn-docs-nuxt-starter) 克隆或下载模板。
    ::

    ### 安装依赖

    ::code-group
      ```bash [npm]
      npm install
      ```
      ```bash [pnpm]
      pnpm install
      ```
      ```bash [bun]
      bun install
      ```
    ::

    ### 开发服务器

    ::code-group
      ```bash [npm]
      npm run dev -- -o
      ```
      ```bash [pnpm]
      pnpm dev -o
      ```
      ```bash [bun]
      bun run dev -o
      ```
    ::
  ::
  ```
::

### 多级标题
:badge[0.4.6]{variant="outline"}

::stack
  ::div{class="p-4 md:p-6"}
    ::steps{level=5}
      ##### 指定要使用的标题级别

      ```mdc
      ::steps{level=5}
      ```

      ##### 可用标题

      `h1` 到 `h6`。默认为 `h3`。
    ::
  ::
  ```mdc
  ::steps{level=5}
    ##### 多级标题

    ```mdc
    ::steps{level=5}
    ```

    ##### 可用标题

    `h1` 到 `h6`。默认为 `h3`。
  ::
  ```
::

## 属性

:field{name="level" type="number"}[指定要使用的标题级别] 