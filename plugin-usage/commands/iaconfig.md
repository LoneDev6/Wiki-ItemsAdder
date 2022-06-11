# iaconfig

## Özellikler

### Yapılandırma dosyasından bir eşya silme

`/iaconfig item delete <eşya>`

İzin: `ia.admin.iaconfig.item.delete`

Bir eşyayı yapılandırma dosyasından TAMAMIYLA siler. Lütfen dikkatli olun.

### Yapılandırmadan bir eşyayı devre dışı bırak

`/iaconfig item disable <eşya>`

İzin: `ia.admin.iaconfig.item.disable`

Bir eşyayı onun yapılandırma dosyasından devre dışı bırakır. Lütfen dikkatli olun.

### Bir eşyayı kullanmak/yaratmak için kullanılan tarifi siler

`/iaconfig recipes deleteofitem <eşya>`

İzin `ia.admin.iaconfig.recipes.deleteofitem`

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
