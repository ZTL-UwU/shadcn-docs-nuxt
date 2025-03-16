---
title: 文件树
icon: lucide:folder-tree
badges:
  - value: 0.8.10
  - value: 源码
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/FileTree.vue
    target: _blank
---

## 使用方法

::stack
::div{class="p-4"}
  ::file-tree
  ---
  tree:
    - app:
      - components:
        - Header.vue
        - Footer.vue
      - composables:
        - useErrorHandler.ts
      - ^app.vue^
    - docs:
      - index.md
  ---
  ::
::
```mdc
::file-tree
---
tree:
  - app:
    - components:
      - Header.vue
      - Footer.vue
    - composables:
      - useErrorHandler.ts
    - ^app.vue^ # 这是高亮显示的
  - docs:
    - index.md
---
::
```
::

### 自定义

::stack
::div{class="p-4"}
  ::file-tree
  ---
  title: 文件树标题
  icon: lucide:folder-tree
  autoSlash: false   # 是否在每个文件夹后自动添加斜杠
  showArrow: true    # 是否显示引导箭头
  tree:
    - components:
      - layout:
        - Header.vue
        - Footer.vue
        - ...
      - content:
        - Accordion.vue
        - Alert.vue
        - ProsePre.vue
        - ...
  ---
  ::
::
```mdc
::file-tree
---
title: 文件树标题
icon: lucide:folder-tree
autoSlash: false   # 是否在每个文件夹后自动添加斜杠
showArrow: true    # 是否显示折叠箭头
tree:
  - components:
    - layout:
      - Header.vue
      - Footer.vue
      - ...
    - content:
      - Accordion.vue
      - Alert.vue
      - ProsePre.vue
      - ...
---
::
```
::
### 禁用图标

::stack
::div{class="p-4"}
  ::file-tree
  ---
  showIcon: false
  tree:
    - app:
      - components:
        - Header.vue
        - Footer.vue
      - composables:
        - useErrorHandler.ts
      - ^app.vue^
    - docs:
      - index.md
  ---
  ::
::
```mdc
::file-tree
---
showIcon: false
tree:
  - app:
    - components:
      - Header.vue
      - Footer.vue
    - composables:
      - useErrorHandler.ts
    - ^app.vue^
  - docs:
    - index.md
---
::
```
::

### 差异

::stack
::div{class="p-4"}
  ::file-tree
  ---
  showIcon: false
  tree:
    - app:
      - + components:
        - Header.vue
        - "- Footer.vue"
      - composables:
        - useErrorHandler.ts
      - ^app.vue^
    - docs:
      - index.md
  ---
  ::
::
```mdc
::file-tree
---
showIcon: false
tree:
  - app:
    - + components:
      - Header.vue
      - "- Footer.vue"
    - composables:
      - useErrorHandler.ts
    - ^app.vue^
  - docs:
    - index.md
---
::
```
::

## 属性

::field-group
  :field{name="tree"}[文件树]
  :field{name="title" type="string"}[文件树标题]
  :field{name="icon" type="string"}[文件树标题图标]
  :field{name="autoSlash" type="boolean" default-value="true"}[是否在每个文件夹后自动添加斜杠]
  :field{name="showArrow" type="boolean" default-value="false"}[是否显示折叠箭头]
  :field{name="showIcon" type="boolean" default-value="true"}[是否显示文件和文件夹图标]
:: 