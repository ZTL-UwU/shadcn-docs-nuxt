---
title: Groupe de Champs
icon: lucide:settings-2
badges:
  - value: Nuxt UI Pro
    to: https://ui.nuxt.com/pro/prose/field-group
    target: _blank
  - value: Source
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/FieldGroup.vue
    target: _blank
---

## Utilisation

::stack
  ::div{class="p-4"}
    ::field-group
      ::field{name="withDefault" type="boolean" defaultValue="true"}
      Un champ avec une valeur par défaut.
      ::
      ::field{name="requiredField" type="boolean" required}
      Un champ requis.
      ::
      ::field{name="clear (path?: string)" type="void"}
      Efface les erreurs de formulaire associées à un chemin spécifique. Si aucun chemin n'est fourni, efface toutes les erreurs de formulaire.
      ::
      ::field{name="getErrors (path?: string)" type="FormError[]"}
      Récupère les erreurs de formulaire associées à un chemin spécifique. Si aucun chemin n'est fourni, retourne toutes les erreurs de formulaire.
      ::
      ::field{name="setErrors (errors: FormError[], path?: string)" type="void"}
      Définit les erreurs de formulaire pour un chemin donné. Si aucun chemin n'est fourni, remplace toutes les erreurs.
      ::
      ::field{name="errors" type="Ref<FormError[]>"}
      Une référence au tableau contenant les erreurs de validation. Utilisez ceci pour accéder ou manipuler les informations d'erreur.
      ::
    ::
  ::

  ```mdc
  ::field-group
    ::field{name="withDefault" type="boolean" defaultValue="true"}
    Un champ avec une valeur par défaut.
    ::
    ::field{name="requiredField" type="boolean" required}
    Un champ requis.
    ::
    ::field{name="clear (path?: string)" type="void"}
    Efface les erreurs de formulaire associées à un chemin spécifique. Si aucun chemin n'est fourni, efface toutes les erreurs de formulaire.
    ::
    ::field{name="getErrors (path?: string)" type="FormError[]"}
    Récupère les erreurs de formulaire associées à un chemin spécifique. Si aucun chemin n'est fourni, retourne toutes les erreurs de formulaire.
    ::
    ::field{name="setErrors (errors: FormError[], path?: string)" type="void"}
    Définit les erreurs de formulaire pour un chemin donné. Si aucun chemin n'est fourni, remplace toutes les erreurs.
    ::
    ::field{name="errors" type="Ref<FormError[]>"}
    Une référence au tableau contenant les erreurs de validation. Utilisez ceci pour accéder ou manipuler les informations d'erreur.
    ::
  ::
  ```
::
