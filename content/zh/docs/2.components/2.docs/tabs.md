---
title: 标签页
icon: lucide:table-2
badges:
  - value: Nuxt UI Pro
    to: https://ui.nuxt.com/pro/prose/tabs
    target: _blank
  - value: 源码
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Tabs.vue
    target: _blank
---

## 使用方法

::stack
  ::div{class="p-4"}
    ::tabs
      ::div{label="PostgreSQL" icon="lucide:database"}
      ### PostgreSQL 列类型

      ```ts
      import { integer, pgTable } from 'drizzle-orm/pg-core';

      export const table = pgTable('table', {
        int: integer('int')
      });
      ```
      ::
      ::div{label="MySQL"}
      ### MySQL 列类型

      ```ts
      import { int, mysqlTable } from 'drizzle-orm/mysql-core';

      const table = mysqlTable('table', {
        int: int('int')
      });
      ```
      ::
      ::div{label="SQLite"}
      ### SQLite 列类型

      ```ts
      import { integer, sqliteTable } from 'drizzle-orm/sqlite-core';

      const table = sqliteTable('table', {
        id: integer('id')
      });

      // 您可以自定义整数模式为 number、boolean、timestamp、timestamp_ms
      integer('id', { mode: 'number' });
      integer('id', { mode: 'boolean' });
      integer('id', { mode: 'timestamp_ms' });
      integer('id', { mode: 'timestamp' }); // Date
      ```
      ::
    ::
  ::
  ```mdc height=300
  ::tabs
    ::div{label="PostgreSQL" icon="lucide:database"}
    ### PostgreSQL 列类型

    ```ts
    import { integer, pgTable } from 'drizzle-orm/pg-core';

    export const table = pgTable('table', {
      int: integer('int')
    });
    ```
    ::
    ::div{label="MySQL"}
    ### MySQL 列类型

    ```ts
    import { int, mysqlTable } from 'drizzle-orm/mysql-core';

    const table = mysqlTable('table', {
      int: int('int')
    });
    ```
    ::
    ::div{label="SQLite"}
    ### SQLite 列类型

    ```ts
    import { integer, sqliteTable } from 'drizzle-orm/sqlite-core';

    const table = sqliteTable('table', {
      id: integer('id')
    });

    // 您可以自定义整数模式为 number、boolean、timestamp、timestamp_ms
    integer('id', { mode: 'number' });
    integer('id', { mode: 'boolean' });
    integer('id', { mode: 'timestamp_ms' });
    integer('id', { mode: 'timestamp' }); // Date
    ```
    ::
  ::
  ```
::

### 卡片样式

::stack
  ::div{class="p-4"}
    ::tabs{variant="card"}
      ::div{label="卡片标签页"}
      ### 这是一个卡片样式的标签页
      ::
      ::div{label="标签页 2" icon="lucide:atom"}
      这是标签页 #2
      ::
      ```ts [代码标签页]
      console.log('你好，世界！');
      ```
    ::
  ::
  ```mdc
  ::tabs{variant="card"}
    ::div{label="卡片标签页"}
    ### 这是一个卡片样式的标签页
    ::
    ::div{label="标签页 2" icon="lucide:atom"}
    这是标签页 #2
    ::
    ```ts [代码标签页]
    console.log('你好，世界！');
    ```
  ::
  ```
::

### 线条样式
:badge[0.6.4]{variant="outline"}

::stack
  ::div{class="p-4"}
    ::tabs{variant="line"}
      ::div{label="预览" class="border flex min-h-[200px] w-full justify-center p-10 items-center rounded-lg shadow-sm"}
        :badge[徽章]
      ::
      ::div{label="代码"}
      ```vue
      <Badge>徽章</Badge>
      ```
      ::
    ::
  ::
  ```mdc
  ::tabs{variant="line"}
    ::div{label="预览" class="border flex min-h-[200px] w-full justify-center p-10 items-center rounded-lg shadow-sm"}
      :badge[徽章]
    ::
    ::div{label="代码"}
    ```vue
    <Badge>徽章</Badge>
    ```
    ::
  ::
  ```
::

### 分离样式（默认）
:badge[0.6.4]{variant="outline"}

::stack
  ::div{class="p-4"}
    ::tabs{variant="separate"}
      ::div{label="预览" class="border flex min-h-[200px] w-full justify-center p-10 items-center rounded-lg shadow-sm"}
        :badge[徽章]
      ::
      ::div{label="代码"}
      ```vue
      <Badge>徽章</Badge>
      ```
      ::
    ::
  ::
  ```mdc
  ::tabs{variant="separate"}
    ::div{label="预览" class="border flex min-h-[200px] w-full justify-center p-10 items-center rounded-lg shadow-sm"}
      :badge[徽章]
    ::
    ::div{label="代码"}
    ```vue
    <Badge>徽章</Badge>
    ```
    ::
  ::
  ```
::

### 组合框样式
:badge[0.6.4]{variant="outline"}

::stack
  ::div{class="p-4"}
    ::tabs{variant="combobox"}
      ::div{label="预览" class="border flex min-h-[200px] w-full justify-center p-10 items-center rounded-lg shadow-sm"}
        :badge[徽章]
      ::
      ::div{label="代码"}
      ```vue
      <Badge>徽章</Badge>
      ```
      ::
    ::
  ::
  ```mdc
  ::tabs{variant="combobox"}
    ::div{label="预览" class="border flex min-h-[200px] w-full justify-center p-10 items-center rounded-lg shadow-sm"}
      :badge[徽章]
    ::
    ::div{label="代码"}
    ```vue
    <Badge>徽章</Badge>
    ```
    ::
  ::
  ```
::

### 同步标签页
:badge[0.6.4]{variant="outline"}

::stack
  ::div{class="p-4"}
  #### 作用域 1
  ::tabs{variant="line" sync="scope1"}
    ::div{label="卡片标签页"}
    ### 这是一个卡片样式的标签页
    ::
    ::div{label="标签页 2" icon="lucide:atom"}
    这是标签页 #2
    ::
    ```ts [代码标签页]
    console.log('你好，世界！');
    ```
  ::
  ::tabs{variant="card" sync="scope1"}
    ::div{label="卡片标签页"}
    ### 这是一个卡片样式的标签页
    ::
    ::div{label="标签页 2" icon="lucide:atom"}
    这是标签页 #2
    ::
    ```ts [代码标签页]
    console.log('你好，世界！');
    ```
  ::

  #### 作用域 2
  ::tabs{variant="line" sync="scope2"}
    ::div{label="卡片标签页"}
    ### 这是一个卡片样式的标签页
    ::
    ::div{label="标签页 2" icon="lucide:atom"}
    这是标签页 #2
    ::
    ```ts [代码标签页]
    console.log('你好，世界！');
    ```
  ::
  ::tabs{variant="separate" sync="scope2"}
    ::div{label="卡片标签页"}
    ### 这是一个卡片样式的标签页
    ::
    ::div{label="标签页 2" icon="lucide:atom"}
    这是标签页 #2
    ::
    ```ts [代码标签页]
    console.log('你好，世界！');
    ```
  ::
  ::
  ```mdc
  ::tabs{variant="line" sync="scope1"}
    ::div{label="卡片标签页"}
    ### 这是一个卡片样式的标签页
    ::
    ::div{label="标签页 2" icon="lucide:atom"}
    这是标签页 #2
    ::
    ```ts [代码标签页]
    console.log('你好，世界！');
    ```
  ::
  ```
::

## 属性

::field-group
  :field{name="variant" type="'separate' | 'card' | 'line' | 'combobox'" default-value="'separate'"}[标签页变体样式]
  :field{name="padded" type="boolean" default-value="true"}[是否添加内边距]
  :field{name="disableSearch" type="boolean" default-value="false"}[对于组合框变体，是否禁用搜索功能]
  :field{name="searchPlaceholder" type="string" default-value="'搜索标签页...'"}[组合框变体的搜索占位符]
  :field{name="searchEmpty" type="string" default-value="'未找到标签页。'"}[组合框变体的搜索为空时显示的文本]
  :field{name="sync" type="string"}[同步作用域名称]
:: 