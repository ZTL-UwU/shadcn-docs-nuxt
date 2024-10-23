---
title: Badge
icon: lucide:badge
---

:badge[Docus]{variant="outline" to="https://docus.dev/api/components#badge" target="_blank"}

::code-group
  ::div{label="Preview" class="md:p-4"}
    ::badge
      Default
    ::
    ::badge{size="sm"}
      Small
    ::
    ::badge{type="info"}
      Info
    ::
    :badge[Warning]{type="warning"}
    :badge[Success]{type="success"}
    :badge[lime]{type="lime"}
    :badge[Danger]{type="danger"}
    :badge[Outline]{variant="outline"}
    :badge[Secondary]{variant="secondary"}
    ::badge{variant="outline" type="info" to="https://github.com/ZTL-UwU/shadcn-docs-nuxt" target="_blank"}
      Link
    ::
  ::

  ```mdc [Code]
  ::badge
    Default
  ::
  ::badge{size="sm"}
    Small
  ::
  ::badge{type="info"}
    Info
  ::
  :badge[Warning]{type="warning"}
  :badge[Success]{type="success"}
  :badge[lime]{type="lime"}
  :badge[Danger]{type="danger"}
  :badge[Outline]{variant="outline"}
  :badge[Secondary]{variant="secondary"}
  ::badge{variant="outline" type="info" to="https://github.com/ZTL-UwU/shadcn-docs-nuxt" target="_blank"}
    Link
  ::
  ```
::
