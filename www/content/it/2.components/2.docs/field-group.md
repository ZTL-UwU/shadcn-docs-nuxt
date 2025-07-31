---
title: Field Group
icon: lucide:settings-2
badges:
  - value: Nuxt UI Pro
    to: https://ui.nuxt.com/pro/prose/field-group
    target: _blank
  - value: Codice Sorgente
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/FieldGroup.vue
    target: _blank
---

## Utilizzo

::stack
  ::div{class="p-4"}
    ::field-group
      ::field{name="withDefault" type="boolean" defaultValue="true"}
      Un campo con un valore predefinito.
      ::
      ::field{name="requiredField" type="boolean" required}
      Un campo obbligatorio.
      ::
      ::field{name="clear (path?: string)" type="void"}
      Cancella gli errori del form associati a un percorso specifico. Se non viene fornito alcun percorso, cancella tutti gli errori del form.
      ::
      ::field{name="getErrors (path?: string)" type="FormError[]"}
      Recupera gli errori del form associati a un percorso specifico. Se non viene fornito alcun percorso, restituisce tutti gli errori del form.
      ::
      ::field{name="setErrors (errors: FormError[], path?: string)" type="void"}
      Imposta gli errori del form per un determinato percorso. Se non viene fornito alcun percorso, sovrascrive tutti gli errori.
      ::
      ::field{name="errors" type="Ref<FormError[]>"}
      Un riferimento all'array contenente gli errori di validazione. Usalo per accedere o manipolare le informazioni degli errori.
      ::
    ::
  ::

  ```mdc
  ::field-group
    ::field{name="withDefault" type="boolean" defaultValue="true"}
    Un campo con un valore predefinito.
    ::
    ::field{name="requiredField" type="boolean" required}
    Un campo obbligatorio.
    ::
    ::field{name="clear (path?: string)" type="void"}
    Cancella gli errori del form associati a un percorso specifico. Se non viene fornito alcun percorso, cancella tutti gli errori del form.
    ::
    ::field{name="getErrors (path?: string)" type="FormError[]"}
    Recupera gli errori del form associati a un percorso specifico. Se non viene fornito alcun percorso, restituisce tutti gli errori del form.
    ::
    ::field{name="setErrors (errors: FormError[], path?: string)" type="void"}
    Imposta gli errori del form per un determinato percorso. Se non viene fornito alcun percorso, sovrascrive tutti gli errori.
    ::
    ::field{name="errors" type="Ref<FormError[]>"}
    Un riferimento all'array contenente gli errori di validazione. Usalo per accedere o manipolare le informazioni degli errori.
    ::
  ::
  ```
::
