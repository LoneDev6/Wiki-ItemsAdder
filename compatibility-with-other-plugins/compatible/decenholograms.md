# DecentHolograms

## [下载插件](https://www.spigotmc.org/resources/96927/)

## 如何显示一个自定义物物品.

- 使用 `/iacustommodeldata <item>` (f.e. `/iacustommodeldata ruby`)
- 记住基础物品和自定义物品使用的 `CustomModelData` (i.e. `IRON_INGOT` 和 `10000`)
- 创建一个Holograms,使用 `/dh create <name> [Line]` (You can skip this if you already have a hologram)
- 将物品添加到Holograms中,并使用 `/dh l add <name> <page> #ICON: <item> {CustomModelData: <cmd>}` (i.e. `/dh l add example 1 #ICON: IRON_INGOT {CustomModelData: 10000}`)
- 注 i.e 跟 f.e 都是例子的意思


{% hint style="success" %}
在创建Holograms时,你能否提供 `#ICON: <item> {CustomModelData: <cmd>}` 作为 `/dh create` 的第一行.  
比如: `/dh create example #ICON: IRON_INGOT {CustomModelData: 10000}`
{% endhint %}
