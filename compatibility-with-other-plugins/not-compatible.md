---
icon: triangle-exclamation
---

# 不兼容

_**是否与插件X兼容?**_

我无法准确回答这个问题，因为我不可能知道世界上所有的插件，但下列插件会引起一定问题:

* 所有使用 **自定义资源包** 的插件(如果你至少知道怎么手动合并资源包，你可以在不替换ItemsAdder文件的前提下使其兼容)
* [CraftEnhance](https://www.spigotmc.org/resources/custom-recipes-and-crafting-craftenhance.65058/), 这个插件会破坏ItemsAdder自定义配方的逻辑, 同时会导致刷物品的问题，请勿使用.
* 自定义工作台行为与配方的插件
* [LootChest ](https://www.spigotmc.org/resources/lootchest.61564/)可能导致 [问题](https://github.com/LoneDev6/ItemsAdder/issues/15#issuecomment-512990849)
* 目前与会生成不同面**蘑菇**块以创建自定义纹理的**插件**与世界生成器不兼容. 未来我会为其增添兼容性.
