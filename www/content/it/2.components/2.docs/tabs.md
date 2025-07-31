---
title: Tabs
icon: lucide:table-2
badges:
  - value: Nuxt UI Pro
    to: https://ui.nuxt.com/pro/prose/tabs
    target: _blank
  - value: Codice Sorgente
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Tabs.vue
    target: _blank
---

## Utilizzo

::stack
  ::div{class="p-4"}
    ::tabs
      ::div{label="PostgreSQL" icon="lucide:database"}
      ### Tipi di colonna PostgreSQL

      ```ts
      import { integer, pgTable } from 'drizzle-orm/pg-core';

      export const table = pgTable('table', {
        int: integer('int')
      });
      ```
      ::
      ::div{label="MySQL"}
      ### Tipi di colonna MySQL

      ```ts
      import { int, mysqlTable } from 'drizzle-orm/mysql-core';

      const table = mysqlTable('table', {
        int: int('int')
      });
      ```
      ::
      ::div{label="SQLite"}
      ### Tipi di colonna SQLite

      ```ts
      import { integer, sqliteTable } from 'drizzle-orm/sqlite-core';

      const table = sqliteTable('table', {
        id: integer('id')
      });

      // puoi personalizzare la modalità integer come number, boolean, timestamp, timestamp_ms
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
    ### Tipi di colonna PostgreSQL

    ```ts
    import { integer, pgTable } from 'drizzle-orm/pg-core';

    export const table = pgTable('table', {
      int: integer('int')
    });
    ```
    ::
    ::div{label="MySQL"}
    ### Tipi di colonna MySQL

    ```ts
    import { int, mysqlTable } from 'drizzle-orm/mysql-core';

    const table = mysqlTable('table', {
      int: int('int')
    });
    ```
    ::
    ::div{label="SQLite"}
    ### Tipi di colonna SQLite

    ```ts
    import { integer, sqliteTable } from 'drizzle-orm/sqlite-core';

    const table = sqliteTable('table', {
      id: integer('id')
    });

    // puoi personalizzare la modalità integer come number, boolean, timestamp, timestamp_ms
    integer('id', { mode: 'number' });
    integer('id', { mode: 'boolean' });
    integer('id', { mode: 'timestamp_ms' });
    integer('id', { mode: 'timestamp' }); // Date
    ```
    ::
  ::
  ```
::

### Stile Card

::stack
  ::div{class="p-4"}
    ::tabs{variant="card"}
      ::div{label="Card Tab"}
      ### Questo è un tab in stile card
      ::
      ::div{label="Tab 2" icon="lucide:atom"}
      Questo è il Tab #2
      ::
      ```ts [Code Tab]
      console.log('Hello World!');
      ```
    ::
  ::
  ```mdc
  ::tabs{variant="card"}
    ::div{label="Card Tab"}
    ### Questo è un tab in stile card
    ::
    ::div{label="Tab 2" icon="lucide:atom"}
    Questo è il Tab #2
    ::
    ```ts [Code Tab]
    console.log('Hello World!');
    ```
  ::
  ```
::

### Stile Line
:badge[0.6.4]{variant="outline"}

::stack
  ::div{class="p-4"}
    ::tabs{variant="line"}
      ::div{label="Anteprima" class="border flex min-h-[200px] w-full justify-center p-10 items-center rounded-lg shadow-xs"}
        :badge[Badge]
      ::
      ::div{label="Codice"}
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
    ::div{label="Anteprima" class="border flex min-h-[200px] w-full justify-center p-10 items-center rounded-lg shadow-xs"}
      :badge[Badge]
    ::
    ::div{label="Codice"}
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

### Stile Combobox
:badge[0.7.5]{variant="outline"}

::stack
  ::div{class="p-4"}
    ::tabs{variant="combobox" search-placeholder="Cerca database..." search-empty="Nessun database trovato."}
      ::div{label="PostgreSQL"}
      ### Tipi di colonna PostgreSQL

      ```ts
      import { integer, pgTable } from 'drizzle-orm/pg-core';

      export const table = pgTable('table', {
        int: integer('int')
      });
      ```
      ::
      ::div{label="MySQL"}
      ### Tipi di colonna MySQL

      ```ts
      import { int, mysqlTable } from 'drizzle-orm/mysql-core';

      const table = mysqlTable('table', {
        int: int('int')
      });
      ```
      ::
      ::div{label="SQLite"}
      ### Tipi di colonna SQLite

      ```ts
      import { integer, sqliteTable } from 'drizzle-orm/sqlite-core';

      const table = sqliteTable('table', {
        id: integer('id')
      });

      // puoi personalizzare la modalità integer come number, boolean, timestamp, timestamp_ms
      integer('id', { mode: 'number' });
      integer('id', { mode: 'boolean' });
      integer('id', { mode: 'timestamp_ms' });
      integer('id', { mode: 'timestamp' }); // Date
      ```
      ::
    ::
  ::
  ```mdc height=300
  ::tabs{variant="combobox" search-placeholder="Cerca database..." search-empty="Nessun database trovato."}
    ::div{label="PostgreSQL"}
    ### Tipi di colonna PostgreSQL

    ```ts
    import { integer, pgTable } from 'drizzle-orm/pg-core';

    export const table = pgTable('table', {
      int: integer('int')
    });
    ```
    ::
    ::div{label="MySQL"}
    ### Tipi di colonna MySQL

    ```ts
    import { int, mysqlTable } from 'drizzle-orm/mysql-core';

    const table = mysqlTable('table', {
      int: int('int')
    });
    ```
    ::
    ::div{label="SQLite"}
    ### Tipi di colonna SQLite

    ```ts
    import { integer, sqliteTable } from 'drizzle-orm/sqlite-core';

    const table = sqliteTable('table', {
      id: integer('id')
    });

    // puoi personalizzare la modalità integer come number, boolean, timestamp, timestamp_ms
    integer('id', { mode: 'number' });
    integer('id', { mode: 'boolean' });
    integer('id', { mode: 'timestamp_ms' });
    integer('id', { mode: 'timestamp' }); // Date
    ```
    ::
  ::
  ```
::

### Tab Sincronizzati
:badge[0.8.0]{variant="outline"}

:read-more{to="/components/docs/pm"}

::stack
  ::div{class="p-4 md:p-8"}
    #### Ambito 1
    ::tabs{variant="card" sync="your-scope-name"}
      ::div{label="Card Tab"}
      ### Questo è un tab in stile card
      ::
      ```ts [Code Tab]
      console.log('Hello World!');
      ```
    ::
    ::tabs{variant="card" sync="your-scope-name"}
      ::div{label="Card Tab"}
      ### Questo è un tab in stile card
      ::
      ::div{label="Tab 2" icon="lucide:atom"}
      Questo è il Tab #2
      ::
      ```ts [Code Tab]
      console.log('Hello World!');
      ```
    ::

    #### Ambito 2
    ::tabs{variant="line" sync="scope2"}
      ::div{label="Card Tab"}
      ### Questo è un tab in stile card
      ::
      ::div{label="Tab 2" icon="lucide:atom"}
      Questo è il Tab #2
      ::
      ```ts [Code Tab]
      console.log('Hello World!');
      ```
    ::
    ::tabs{variant="separate" sync="scope2"}
      ::div{label="Card Tab"}
      ### Questo è un tab in stile card
      ::
      ::div{label="Tab 2" icon="lucide:atom"}
      Questo è il Tab #2
      ::
      ```ts [Code Tab]
      console.log('Hello World!');
      ```
    ::
  ::
  ```mdc height=400
  #### Ambito 1
  ::tabs{variant="card" sync="your-scope-name"}
    ::div{label="Card Tab"}
    ### Questo è un tab in stile card
    ::
    ```ts [Code Tab]
    console.log('Hello World!');
    ```
  ::
  ::tabs{variant="card" sync="your-scope-name"}
    ::div{label="Card Tab"}
    ### Questo è un tab in stile card
    ::
    ::div{label="Tab 2" icon="lucide:atom"}
    Questo è il Tab #2
    ::
    ```ts [Code Tab]
    console.log('Hello World!');
    ```
  ::

  #### Ambito 2
  ::tabs{variant="line" sync="scope2"}
    ::div{label="Card Tab"}
    ### Questo è un tab in stile card
    ::
    ::div{label="Tab 2" icon="lucide:atom"}
    Questo è il Tab #2
    ::
    ```ts [Code Tab]
    console.log('Hello World!');
    ```
  ::
  ::tabs{variant="separate" sync="scope2"}
    ::div{label="Card Tab"}
    ### Questo è un tab in stile card
    ::
    ::div{label="Tab 2" icon="lucide:atom"}
    Questo è il Tab #2
    ::
    ```ts [Code Tab]
    console.log('Hello World!');
    ```
  ::
  ```
::

## Proprietà

::field-group
  :field{name="variant" type="'separate' | 'card' | 'line' | 'combobox'" default-value="'separate'"}
  :field{name="padded" type="boolean" default-value="true"}
  :field{name="disableSearch" type="boolean" default-value="false"}[Per la variante combobox]
  :field{name="searchPlaceholder" type="string" default-value="'Search Tab...'"}[Per la variante combobox]
  :field{name="searchEmpty" type="string" default-value="'No tab found.'"}[Per la variante combobox]
  :field{name="sync" type="string"}[Ambito di sincronizzazione]
::
