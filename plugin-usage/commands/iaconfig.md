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

Bir eşyayı  yapılandırma dosyalarındaki tüm tariflerini TAMAMEN siler. Lütfen dikkatli olun.

### Eşya kullanan/oluşturan tarifleri devre dışı bırakma

`/iaconfig item disableofitem <item>`

İzin: `ia.admin.iaconfig.recipes.disableofitem`

Tüm yapılandırma dosyalarından bir öğe içeren tüm tarifleri devre dışı bırakır. Lütfen dikkatli olun.

### Bir ad alanının tüm öğelerini ve bu öğelerin tariflerini siler

`/iaconfig namespace delete <namespace>`

İzin: `ia.admin.iaconfig.namespace.delete`

Bir ad alanının tüm öğelerini ve bu öğelerin tariflerini TAMAMEN siler. Lütfen dikkatli olun.

### Bir ad alanının her öğesini devre dışı bırakma

`/iaconfig namespace disable <namespace>`

İzin: `ia.admin.iaconfig.namespace.disable`

Bir ad alanının her öğesini ve bu öğelerin tariflerini devre dışı bırakır. Lütfen dikkatli olun.
