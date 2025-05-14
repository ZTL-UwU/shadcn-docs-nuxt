---
title: Onglets
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

## Utilisation

::stack
  ::div{class="p-4"}
    ::tabs
      ::div{label="PostgreSQL" icon="lucide:database"}
      ### Types de colonnes PostgreSQL

      ```ts
      import { integer, pgTable } from 'drizzle-orm/pg-core';

      export const table = pgTable('table', {
        int: integer('int')
      });
      ```
      ::
      ::div{label="MySQL"}
      ### Types de colonnes MySQL

      ```ts
      import { int, mysqlTable } from 'drizzle-orm/mysql-core';

      const table = mysqlTable('table', {
        int: int('int')
      });
      ```
      ::
      ::div{label="SQLite"}
      ### Types de colonnes SQLite

      ```ts
      import { integer, sqliteTable } from 'drizzle-orm/sqlite-core';

      const table = sqliteTable('table', {
        id: integer('id')
      });

      // vous pouvez personnaliser le mode entier pour être number, boolean, timestamp, timestamp_ms
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
    ### Types de colonnes PostgreSQL

    ```ts
    import { integer, pgTable } from 'drizzle-orm/pg-core';

    export const table = pgTable('table', {
      int: integer('int')
    });
    ```
    ::
    ::div{label="MySQL"}
    ### Types de colonnes MySQL

    ```ts
    import { int, mysqlTable } from 'drizzle-orm/mysql-core';

    const table = mysqlTable('table', {
      int: int('int')
    });
    ```
    ::
    ::div{label="SQLite"}
    ### Types de colonnes SQLite

    ```ts
    import { integer, sqliteTable } from 'drizzle-orm/sqlite-core';

    const table = sqliteTable('table', {
      id: integer('id')
    });

    // vous pouvez personnaliser le mode entier pour être number, boolean, timestamp, timestamp_ms
    integer('id', { mode: 'number' });
    integer('id', { mode: 'boolean' });
    integer('id', { mode: 'timestamp_ms' });
    integer('id', { mode: 'timestamp' }); // Date
    ```
    ::
  ::
  ```
::

### Style Carte

::stack
  ::div{class="p-4"}
    ::tabs{variant="card"}
      ::div{label="Onglet Carte"}
      ### Ceci est un onglet de style carte
      ::
      ::div{label="Onglet 2" icon="lucide:atom"}
      Ceci est l'Onglet #2
      ::
      ```ts [Onglet Code]
      console.log('Hello World!');
      ```
    ::
  ::
  ```mdc
  ::tabs{variant="card"}
    ::div{label="Onglet Carte"}
    ### Ceci est un onglet de style carte
    ::
    ::div{label="Onglet 2" icon="lucide:atom"}
    Ceci est l'Onglet #2
    ::
    ```ts [Onglet Code]
    console.log('Hello World!');
    ```
  ::
  ```
::

### Style Ligne
:badge[0.6.4]{variant="outline"}

::stack
  ::div{class="p-4"}
    ::tabs{variant="line"}
      ::div{label="Aperçu" class="border flex min-h-[200px] w-full justify-center p-10 items-center rounded-lg shadow-xs"}
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
    ::div{label="Aperçu" class="border flex min-h-[200px] w-full justify-center p-10 items-center rounded-lg shadow-xs"}
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

### Style Combobox
:badge[0.7.5]{variant="outline"}

::stack
  ::div{class="p-4"}
    ::tabs{variant="combobox" search-placeholder="Rechercher une base de données..." search-empty="Aucune base de données trouvée."}
      ::div{label="PostgreSQL"}
      ### Types de colonnes PostgreSQL

      ```ts
      import { integer, pgTable } from 'drizzle-orm/pg-core';

      export const table = pgTable('table', {
        int: integer('int')
      });
      ```
      ::
      ::div{label="MySQL"}
      ### Types de colonnes MySQL

      ```ts
      import { int, mysqlTable } from 'drizzle-orm/mysql-core';

      const table = mysqlTable('table', {
        int: int('int')
      });
      ```
      ::
      ::div{label="SQLite"}
      ### Types de colonnes SQLite

      ```ts
      import { integer, sqliteTable } from 'drizzle-orm/sqlite-core';

      const table = sqliteTable('table', {
        id: integer('id')
      });

      // vous pouvez personnaliser le mode entier pour être number, boolean, timestamp, timestamp_ms
      integer('id', { mode: 'number' });
      integer('id', { mode: 'boolean' });
      integer('id', { mode: 'timestamp_ms' });
      integer('id', { mode: 'timestamp' }); // Date
      ```
      ::
    ::
  ::
  ```mdc height=300
  ::tabs{variant="combobox" search-placeholder="Rechercher une base de données..." search-empty="Aucune base de données trouvée."}
    ::div{label="PostgreSQL"}
    ### Types de colonnes PostgreSQL

    ```ts
    import { integer, pgTable } from 'drizzle-orm/pg-core';

    export const table = pgTable('table', {
      int: integer('int')
    });
    ```
    ::
    ::div{label="MySQL"}
    ### Types de colonnes MySQL

    ```ts
    import { int, mysqlTable } from 'drizzle-orm/mysql-core';

    const table = mysqlTable('table', {
      int: int('int')
    });
    ```
    ::
    ::div{label="SQLite"}
    ### Types de colonnes SQLite

    ```ts
    import { integer, sqliteTable } from 'drizzle-orm/sqlite-core';

    const table = sqliteTable('table', {
      id: integer('id')
    });

    // vous pouvez personnaliser le mode entier pour être number, boolean, timestamp, timestamp_ms
    integer('id', { mode: 'number' });
    integer('id', { mode: 'boolean' });
    integer('id', { mode: 'timestamp_ms' });
    integer('id', { mode: 'timestamp' }); // Date
    ```
    ::
  ::
  ```
::

### Onglets Synchronisés
:badge[0.8.0]{variant="outline"}

:read-more{to="/components/docs/pm"}

::stack
  ::div{class="p-4 md:p-8"}
    #### Portée 1
    ::tabs{variant="card" sync="your-scope-name"}
      ::div{label="Onglet Carte"}
      ### Ceci est un onglet de style carte
      ::
      ```ts [Onglet Code]
      console.log('Hello World!');
      ```
    ::
    ::tabs{variant="card" sync="your-scope-name"}
      ::div{label="Onglet Carte"}
      ### Ceci est un onglet de style carte
      ::
      ::div{label="Onglet 2" icon="lucide:atom"}
      Ceci est l'Onglet #2
      ::
      ```ts [Onglet Code]
      console.log('Hello World!');
      ```
    ::

    #### Portée 2
    ::tabs{variant="line" sync="scope2"}
      ::div{label="Onglet Carte"}
      ### Ceci est un onglet de style carte
      ::
      ::div{label="Onglet 2" icon="lucide:atom"}
      Ceci est l'Onglet #2
      ::
      ```ts [Onglet Code]
      console.log('Hello World!');
      ```
    ::
    ::tabs{variant="separate" sync="scope2"}
      ::div{label="Onglet Carte"}
      ### Ceci est un onglet de style carte
      ::
      ::div{label="Onglet 2" icon="lucide:atom"}
      Ceci est l'Onglet #2
      ::
      ```ts [Onglet Code]
      console.log('Hello World!');
      ```
    ::
  ::
  ```mdc height=400
  #### Portée 1
  ::tabs{variant="card" sync="your-scope-name"}
    ::div{label="Onglet Carte"}
    ### Ceci est un onglet de style carte
    ::
    ```ts [Onglet Code]
    console.log('Hello World!');
    ```
  ::
  ::tabs{variant="card" sync="your-scope-name"}
    ::div{label="Onglet Carte"}
    ### Ceci est un onglet de style carte
    ::
    ::div{label="Onglet 2" icon="lucide:atom"}
    Ceci est l'Onglet #2
    ::
    ```ts [Onglet Code]
    console.log('Hello World!');
    ```
  ::

  #### Portée 2
  ::tabs{variant="line" sync="scope2"}
    ::div{label="Onglet Carte"}
    ### Ceci est un onglet de style carte
    ::
    ::div{label="Onglet 2" icon="lucide:atom"}
    Ceci est l'Onglet #2
    ::
    ```ts [Onglet Code]
    console.log('Hello World!');
    ```
  ::
  ::tabs{variant="separate" sync="scope2"}
    ::div{label="Onglet Carte"}
    ### Ceci est un onglet de style carte
    ::
    ::div{label="Onglet 2" icon="lucide:atom"}
    Ceci est l'Onglet #2
    ::
    ```ts [Onglet Code]
    console.log('Hello World!');
    ```
  ::
  ```
::

## Props

::field-group
  :field{name="variant" type="'separate' | 'card' | 'line' | 'combobox'" default-value="'separate'"}
  :field{name="padded" type="boolean" default-value="true"}
  :field{name="disableSearch" type="boolean" default-value="false"}[Pour la variante combobox]
  :field{name="searchPlaceholder" type="string" default-value="'Rechercher un onglet...'"}[Pour la variante combobox]
  :field{name="searchEmpty" type="string" default-value="'Aucun onglet trouvé.'"}[Pour la variante combobox]
  :field{name="sync" type="string"}[Portée de synchronisation]
::
