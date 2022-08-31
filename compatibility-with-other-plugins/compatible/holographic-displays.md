# Holographic Displays

## 如何在 Holographic（所有的全息显示插件） 中使用表情符号

* 下载 [Holographic Displays](https://dev.bukkit.org/projects/holographic-displays)
* 现在 [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/)
* 现在 [HolographicExtension addon](https://www.spigotmc.org/resources/holographicextension.18461/)

现在你可以使用 [font\_images ](../../plugin-usage/adding-content/font-images/)(**表情符号**) 在任何地方！ (使用处必须支持 PlaceholderAPI).

正确表达式为:: `%img_NAME%` 而不是填写 font_image 的名称.
例如: `%img_smile%`

如何创建一个带有表情符号的全息图
例如：

`/holo create test_itemsadder Hello! %img_smile%`

![](<../../.gitbook/assets/image (20).png>)

## 如何创建 Itemsadder 自定义物品的全息物品显示

* 使用命令 `/iacustommodeldata <item>` (例如 `/iacustommodeldata ruby`)
* 复制该物品的 `CustomModelData`, 例如 `10000`
* 创建一个全息显示，例如: `/hd create holo_icon Hello!`
* 通过设置 **原版物品id**（该id为自定义物品原材料的id） 和 **CustomModelData** 将自定义物品添加到全息图中. 例如：  `/hd addline holo_icon ICON: IRON_INGOT {CustomModelData: 10000}`

![](<../../.gitbook/assets/immagine (124).png>)



``
