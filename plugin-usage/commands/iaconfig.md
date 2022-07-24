# iaconfig

## 介绍

### 在config中删除物品

`/iaconfig item delete <item>`

权限: `ia.admin.iaconfig.item.delete`

可以将Ia物品的config给他"完全"清理干净.

### 在config中禁用物品

`/iaconfig item disable <item>`

权限: `ia.admin.iaconfig.item.disable`

在配置文件中禁用Ia物品.

### 删除Ia物品合成配方

`/iaconfig recipes deleteofitem <item>`

权限 `ia.admin.iaconfig.recipes.deleteofitem`

"完全"删除config中包含该Ia物品的合成配方

### 禁用Ia物品合成配方

`/iaconfig item disableofitem <item>`

权限: `ia.admin.iaconfig.recipes.disableofitem`

禁用config中包含该Ia物品的合成配方

### 删除整个Namespace[命名空间][包括内含物品]

`/iaconfig namespace delete <namespace>`

权限: `ia.admin.iaconfig.namespace.delete`

"完全"删除整个Namespace[命名空间],当然包括内含物品,以及合成配方

### 禁用整个Namespace[命名空间]

`/iaconfig namespace disable <namespace>`

权限: `ia.admin.iaconfig.namespace.disable`

禁用整个Namespace[命名空间],当然包括内含物品,以及合成配方.