# 能否新增自定义台阶、楼梯、三叉戟、盔甲……

### 可放置的自定义台阶、楼梯

{% hint style="warning" %}
 除了方块以外无法创建具有碰撞箱的自定义台阶，楼梯和可放置的物品.
 问题是Minecraft会因为这个[bug](https://bugs.mojang.com/browse/MC-54254)会将其显示为透明方块（如果想实现自定义台阶、楼梯必须得等mojang修复该bug）
 还有另一个重要的原因是由于Minecraft的限制 无法更改方块的碰撞箱
{% endhint %}

### 三叉戟

{% hint style="warning" %}
无法为投掷的三叉戟使用自定义模型 [CustomModelData无法应用至投掷出的三叉戟 ](https://bugs.mojang.com/browse/MC-155286)
{% endhint %}

### 盔甲

{% hint style="warning" %}

Minecraft 1.16 （以及更低版本）只能够使用 Optifine 实现自定义盔甲材质 和 自定义盔甲模型


### 自定义盔甲 1.17

在 1.17+ 版本中创建自定义盔甲请[阅读此教程](../../plugin-usage/adding-content/armors/texture.md) (无需Optifine).

### 自定义盔甲 1.16（或更低版本）

ItemsAdder 可以自动将自定义盔甲添加到 1.16 及更低版本，但前提是玩家安装了 Optifine [详情阅读此教程](../../plugin-usage/adding-content/armors/texture.md).
{% endhint %}

### 鞘翅

{% hint style="warning" %}
~Minecraft 无法以任何方式给鞘翅添加自定义材质/自定义 3D 鞘翅模型~、
（目前可以使用 optifine 为鞘翅添加自定义材质）
{% endhint %}
