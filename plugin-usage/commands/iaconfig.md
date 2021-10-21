# iaconfig

## Features

### Delete an item from config

`/iaconfig item delete <item>`

Permission: `ia.admin.iaconfig.item.delete`

Deletes an item COMPLETELY from its config file. Please be careful.

### Disable an item in configs

`/iaconfig item disable <item>`

Permission: `ia.admin.iaconfig.item.disable`

Disables an item from its config file. Please be careful.

### Delete recipes which use/create an item

`/iaconfig recipes deleteofitem <item>`

Permission `ia.admin.iaconfig.recipes.deleteofitem`

Deletes COMPLETELY all recipes which contain an item from all the config files. Please be careful.

### Disable recipes which use/create an item

`/iaconfig item disableofitem <item>`

Permission: `ia.admin.iaconfig.recipes.disableofitem`

Disables all recipes which contain an item from all the config files. Please be careful.

### Delete all items of a namespace and recipes of these items

`/iaconfig namespace delete <namespace>`

Permission: `ia.admin.iaconfig.namespace.delete`

Deletes all items of a namespace and recipes of these items COMPLETELY. Please be careful.

### Disable every item of a namespace

`/iaconfig namespace disable <namespace>`

Permission: `ia.admin.iaconfig.namespace.disable`

Disables every item of a namespace and recipes of these items. Please be careful.
