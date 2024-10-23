---
title: Tabs
icon: lucide:table-2
badges:
  - value: Nuxt UI Pro
    to: https://ui.nuxt.com/pro/prose/tabs
    target: _blank
  - value: Source
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Tabs.vue
    target: _blank
---

#### Default Style

::code-group
  ::div{label="Preview" class="md:p-4"}
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
  ```mdc [Code]
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

#### Card Style

::code-group
  ::div{label="Preview" class="md:p-4"}
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
  ```mdc [Code]
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

#### Line Style
:badge[0.6.4]{variant="outline"}

::code-group
  ::div{label="Preview" class="md:p-4"}
    ::tabs{variant="line"}
      ::div{label="Preview" class="border flex min-h-[200px] w-full justify-center p-10 items-center rounded-lg shadow-sm"}
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
  ```mdc [Code]
  ::tabs{variant="line"}
    ::div{label="Preview" class="border flex min-h-[200px] w-full justify-center p-10 items-center rounded-lg shadow-sm"}
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
