# Holographic Displays

## 如何在全息图中使用表情

下载 [Holographic Displays](https://dev.bukkit.org/projects/holographic-displays)\
下载 [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/)\
下载 the [HolographicExtension addon](https://www.spigotmc.org/resources/holographicextension.18461/)

现在你可以使用 font\_images (emojis) 在任何地方！ (使用处必须支持 PlaceholderAPI).\
正确表达式为: `%img_NAME%` 而不是填写 font\_image 的名称.\
栗子: `%img_smile%`

要创建全息图，您可以使用以下命令，例如：

`/holo create test_itemsadder Hello! %img_smile%`

![](<../../.gitbook/assets/image (20).png>)

## How to add a floating custom item?

* run `/iacustommodeldata <item>` (for example `/iacustommodeldata ruby`)
* copy the `CustomModelData`, for example `10000`
* create a new hologram, for example: `/hd create holo_icon Hello!`
* add the floating item to the hologram by specifying the **vanilla type** and the **CustomModelData**. Example:  `/hd addline holo_icon ICON: IRON_INGOT {CustomModelData: 10000}`

![](<../../.gitbook/assets/immagine (124).png>)

\`\`
