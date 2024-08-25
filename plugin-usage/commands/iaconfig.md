# iaconfig

## Fonctionnalités

### Supprimer un item de la config.

`/iaconfig item delete <item>`

Permission: `ia.admin.iaconfig.item.delete`

Supprime un item COMPLETEMENT de son fichier de configuration. Veuillez faire preuve de prudence.

### Désactiver un item des configs

`/iaconfig item disable <item>`

Permission: `ia.admin.iaconfig.item.disable`

Désactive un item dans son fichier de configuration. Veuillez faire preuve de prudence.

### Supprimer les recettes utilisant/créant un item

`/iaconfig recipes deleteofitem <item>`

Permission `ia.admin.iaconfig.recipes.deleteofitem`

Supprime COMPLETEMENT toutes les recettes contenant un item de tous les fichiers de configuration. Veuillez faire preuve de prudence.

### Désactiver les recettes utilisant/créant un item

`/iaconfig item disableofitem <item>`

Permission: `ia.admin.iaconfig.recipes.disableofitem`

Désactive toutes les recettes contenant un item de tous les fichiers de configuration. Veuillez faire preuve de prudence.

### Supprimer tous les items d'un namespace et les recettes de ces items

`/iaconfig namespace delete <namespace>`

Permission: `ia.admin.iaconfig.namespace.delete`

Supprime COMPLETEMENT tous les items d'un namespace et les recettes de ces items. Veuillez faire preuve de prudence.

### Désactiver tous les items d'un namespace

`/iaconfig namespace disable <namespace>`

Permission: `ia.admin.iaconfig.namespace.disable`

Désactive tous les items d'un namespace et les recettes de ces items. Veuillez faire preuve de prudence.
