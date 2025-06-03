---
title: របារ
icon: lucide:table-2
badges:
  - value: Nuxt UI Pro
    to: https://ui.nuxt.com/pro/prose/tabs
    target: _blank
  - value: ប្រភពកូដ
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Tabs.vue
    target: _blank
---

## ការប្រើប្រាស់

::stack
  ::div{class="p-4"}
    ::tabs
      ::div{label="PostgreSQL" icon="lucide:database"}
      ### PostgreSQL column types

      ```ts
      import { integer, pgTable } from 'drizzle-orm/pg-core';

      export const table = pgTable('table', {
        int: integer('int')
      });
      ```
      ::
      ::div{label="MySQL"}
      ### MySQL column types

      ```ts
      import { int, mysqlTable } from 'drizzle-orm/mysql-core';

      const table = mysqlTable('table', {
        int: int('int')
      });
      ```
      ::
      ::div{label="SQLite"}
      ### SQLite column types

      ```ts
      import { integer, sqliteTable } from 'drizzle-orm/sqlite-core';

      const table = sqliteTable('table', {
        id: integer('id')
      });

      // you can customize integer mode to be number, boolean, timestamp, timestamp_ms
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
    ### PostgreSQL column types

    ```ts
    import { integer, pgTable } from 'drizzle-orm/pg-core';

    export const table = pgTable('table', {
      int: integer('int')
    });
    ```
    ::
    ::div{label="MySQL"}
    ### MySQL column types

    ```ts
    import { int, mysqlTable } from 'drizzle-orm/mysql-core';

    const table = mysqlTable('table', {
      int: int('int')
    });
    ```
    ::
    ::div{label="SQLite"}
    ### SQLite column types

    ```ts
    import { integer, sqliteTable } from 'drizzle-orm/sqlite-core';

    const table = sqliteTable('table', {
      id: integer('id')
    });

    // you can customize integer mode to be number, boolean, timestamp, timestamp_ms
    integer('id', { mode: 'number' });
    integer('id', { mode: 'boolean' });
    integer('id', { mode: 'timestamp_ms' });
    integer('id', { mode: 'timestamp' }); // Date
    ```
    ::
  ::
  ```
::

### ម៉ូតកាត

::stack
  ::div{class="p-4"}
    ::tabs{variant="card"}
      ::div{label="Card Tab"}
      ### This is a card-style tab
      ::
      ::div{label="Tab 2" icon="lucide:atom"}
      This is Tab #2
      ::
      ```ts [Code Tab]
      console.log('Hello World!');
      ```
    ::
  ::
  ```mdc
  ::tabs{variant="card"}
    ::div{label="Card Tab"}
    ### This is a card-style tab
    ::
    ::div{label="Tab 2" icon="lucide:atom"}
    This is Tab #2
    ::
    ```ts [Code Tab]
    console.log('Hello World!');
    ```
  ::
  ```
::

### ម៉ូតបន្ទាត់
:badge[0.6.4]{variant="outline"}

::stack
  ::div{class="p-4"}
    ::tabs{variant="line"}
      ::div{label="Preview" class="border flex min-h-[200px] w-full justify-center p-10 items-center rounded-lg shadow-xs"}
        :badge[Badge]
      ::
      ::div{label="Code"}
        ```tsx
        import { Badge } from "@/components/ui/badge"

        export function BadgeDemo() {
          return <Badge>Badge</Badge>
        }
        ```
      ::
    ::
  ::
  ```mdc
  ::tabs{variant="line"}
    ::div{label="Preview" class="border flex min-h-[200px] w-full justify-center p-10 items-center rounded-lg shadow-xs"}
      :badge[Badge]
    ::
    ::div{label="Code"}
      ```tsx
      import { Badge } from "@/components/ui/badge"

      export function BadgeDemo() {
        return <Badge>Badge</Badge>
      }
      ```
    ::
  ::
  ```
::

### ម៉ូត Combobox
:badge[0.7.5]{variant="outline"}

::stack
  ::div{class="p-4"}
    ::tabs{variant="combobox" search-placeholder="Search database..." search-empty="No database found."}
      ::div{label="PostgreSQL"}
      ### PostgreSQL column types

      ```ts
      import { integer, pgTable } from 'drizzle-orm/pg-core';

      export const table = pgTable('table', {
        int: integer('int')
      });
      ```
      ::
      ::div{label="MySQL"}
      ### MySQL column types

      ```ts
      import { int, mysqlTable } from 'drizzle-orm/mysql-core';

      const table = mysqlTable('table', {
        int: int('int')
      });
      ```
      ::
      ::div{label="SQLite"}
      ### SQLite column types

      ```ts
      import { integer, sqliteTable } from 'drizzle-orm/sqlite-core';

      const table = sqliteTable('table', {
        id: integer('id')
      });

      // you can customize integer mode to be number, boolean, timestamp, timestamp_ms
      integer('id', { mode: 'number' });
      integer('id', { mode: 'boolean' });
      integer('id', { mode: 'timestamp_ms' });
      integer('id', { mode: 'timestamp' }); // Date
      ```
      ::
    ::
  ::
  ```mdc height=300
  ::tabs{variant="combobox" search-placeholder="Search database..." search-empty="No database found."}
    ::div{label="PostgreSQL"}
    ### PostgreSQL column types

    ```ts
    import { integer, pgTable } from 'drizzle-orm/pg-core';

    export const table = pgTable('table', {
      int: integer('int')
    });
    ```
    ::
    ::div{label="MySQL"}
    ### MySQL column types

    ```ts
    import { int, mysqlTable } from 'drizzle-orm/mysql-core';

    const table = mysqlTable('table', {
      int: int('int')
    });
    ```
    ::
    ::div{label="SQLite"}
    ### SQLite column types

    ```ts
    import { integer, sqliteTable } from 'drizzle-orm/sqlite-core';

    const table = sqliteTable('table', {
      id: integer('id')
    });

    // you can customize integer mode to be number, boolean, timestamp, timestamp_ms
    integer('id', { mode: 'number' });
    integer('id', { mode: 'boolean' });
    integer('id', { mode: 'timestamp_ms' });
    integer('id', { mode: 'timestamp' }); // Date
    ```
    ::
  ::
  ```
::

### របារដែលស៊ីចង្វាក់គ្នា
:badge[0.8.0]{variant="outline"}

:read-more{to="/components/docs/pm"}

::stack
  ::div{class="p-4 md:p-8"}
    #### Scope 1
    ::tabs{variant="card" sync="your-scope-name"}
      ::div{label="Card Tab"}
      ### This is a card-style tab
      ::
      ```ts [Code Tab]
      console.log('Hello World!');
      ```
    ::
    ::tabs{variant="card" sync="your-scope-name"}
      ::div{label="Card Tab"}
      ### This is a card-style tab
      ::
      ::div{label="Tab 2" icon="lucide:atom"}
      This is Tab #2
      ::
      ```ts [Code Tab]
      console.log('Hello World!');
      ```
    ::

    #### Scope 2
    ::tabs{variant="line" sync="scope2"}
      ::div{label="Card Tab"}
      ### This is a card-style tab
      ::
      ::div{label="Tab 2" icon="lucide:atom"}
      This is Tab #2
      ::
      ```ts [Code Tab]
      console.log('Hello World!');
      ```
    ::
    ::tabs{variant="separate" sync="scope2"}
      ::div{label="Card Tab"}
      ### This is a card-style tab
      ::
      ::div{label="Tab 2" icon="lucide:atom"}
      This is Tab #2
      ::
      ```ts [Code Tab]
      console.log('Hello World!');
      ```
    ::
  ::
  ```mdc height=400
  #### Scope 1
  ::tabs{variant="card" sync="your-scope-name"}
    ::div{label="Card Tab"}
    ### This is a card-style tab
    ::
    ```ts [Code Tab]
    console.log('Hello World!');
    ```
  ::
  ::tabs{variant="card" sync="your-scope-name"}
    ::div{label="Card Tab"}
    ### This is a card-style tab
    ::
    ::div{label="Tab 2" icon="lucide:atom"}
    This is Tab #2
    ::
    ```ts [Code Tab]
    console.log('Hello World!');
    ```
  ::

  #### Scope 2
  ::tabs{variant="line" sync="scope2"}
    ::div{label="Card Tab"}
    ### This is a card-style tab
    ::
    ::div{label="Tab 2" icon="lucide:atom"}
    This is Tab #2
    ::
    ```ts [Code Tab]
    console.log('Hello World!');
    ```
  ::
  ::tabs{variant="separate" sync="scope2"}
    ::div{label="Card Tab"}
    ### This is a card-style tab
    ::
    ::div{label="Tab 2" icon="lucide:atom"}
    This is Tab #2
    ::
    ```ts [Code Tab]
    console.log('Hello World!');
    ```
  ::
  ```
::

## Props

::field-group
  :field{name="variant" type="'separate' | 'card' | 'line' | 'combobox'" default-value="'separate'"}
  :field{name="padded" type="boolean" default-value="true"}
  :field{name="disableSearch" type="boolean" default-value="false"}[សម្រាប់ combobox variant]
  :field{name="searchPlaceholder" type="string" default-value="'Search Tab...'"}[សម្រាប់ combobox variant]
  :field{name="searchEmpty" type="string" default-value="'No tab found.'"}[សម្រាប់ combobox variant]
  :field{name="sync" type="string"}[Sync scope]
::
