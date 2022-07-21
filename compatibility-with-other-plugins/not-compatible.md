# 不兼容

_**XX插件能够与Itemsadder兼容吗？**_

对于这个问题，没有准确的答复。每款插件都有不同的实现方式，无法对每款插件都进行准确兼容，只能通过大家进行测试后反馈给开发者。
<br>当然有一些类型的插件是容易与Itemsadder产生冲突的，请参阅下方内容：

* 任何与 **自定义资源包** 有关的插件 （如果您对资源包架构有一定的了解，在确保不改变Itemsadder资源包内容的情况下将其合并，即可使其兼容）
* [CraftEnhance](https://www.spigotmc.org/resources/custom-recipes-and-crafting-craftenhance.65058/), 该插件会使ItemsAdder的合成配方出现重复的逻辑错误，请避免使用该插件
* 自定义合成台以及合成配方的插件
* [LootChest](https://www.spigotmc.org/resources/lootchest.61564/)会导致一些[问题](https://github.com/LoneDev6/ItemsAdder/issues/15#issuecomment-512990849)
* 目前， **无法兼容** 使用自定义生成器生成各种面的蘑菇块来实现自定义材质的插件（容易出现显示问题），该问题将在未来进行修复。