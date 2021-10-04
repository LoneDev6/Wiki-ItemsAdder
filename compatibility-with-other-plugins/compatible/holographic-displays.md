# Holographic Displays

## Как использовать эмоджи и другие юникод-картинки в holographic displays

Установите [Holographic Displays](https://dev.bukkit.org/projects/holographic-displays)  
Установите [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/)  
Обязательно установите [HolographicExtension аддон](https://www.spigotmc.org/resources/holographicextension.18461/)

Вы великолепны, теперь вы можете использовать эмоджи\_картинки \(эмоджи\) использовать внутри голограмм и других плагинов! \(которые поддерживают PlaceholderAPI\).  
Чтобы вставить эмоджи, используйте этот заполнитель: `%img_НАЗВАНИЕ КАРТИНКИ%` где вместо "название картинки" вы должны указать присвоенное символу\_картинке имя.  
Образец: `%img_smile%`

Пример команды для создания голограммы:

`/holo create test_itemsadder Hello! %img_smile%`

![](../../.gitbook/assets/image%20%2820%29.png)

## How to add a floating custom item?

* run `/iacustommodeldata <item>` \(for example `/iacustommodeldata ruby`\)
* copy the `CustomModelData`, for example `10000`
* create a new hologram, for example: `/hd create holo_icon Hello!`
* add the floating item to the hologram by specifying the **vanilla type** and the **CustomModelData**. Example:  `/hd addline holo_icon ICON: IRON_INGOT {CustomModelData: 10000}`

![](../../.gitbook/assets/immagine%20%28123%29.png)

\`\`

