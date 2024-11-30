# DecentHolograms

## [此处下载](https://www.spigotmc.org/resources/96927/)

## 如何展示自定义物品？

- 运行 `/iacustommodeldata <item>` （例如 `/iacustommodeldata ruby`）
- 记下物品 ID 以及该物品的 `CustomModelData` （即 `IRON_INGOT` 与 `10000`）
- 使用 `/dh create <name> [Line]` 创建一个新的全息（如果你已经有了，可以跳过该步骤）
- 使用 `/dh l add <name> <page> #ICON: <item> {CustomModelData: <cmd>}` 将物品添加至全息 （即 `/dh l add example 1 #ICON: IRON_INGOT {CustomModelData: 10000}`）

{% hint style="success" %}
创建全息时，你可以将 `#ICON: <item> {CustomModelData: <cmd>}` 作为 `/dh create` 的第一行。
例如：`/dh create example #ICON: IRON_INGOT {CustomModelData: 10000}`
{% endhint %}
