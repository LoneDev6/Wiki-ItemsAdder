# 能否新增自定义台阶、楼梯、三叉戟、盔甲……

### 可放置的自定义台阶、楼梯

{% hint style="warning" %}
 除了方块以外无法创建具有碰撞箱的自定义台阶，楼梯和可放置的物品.
 问题是Minecraft会因为这个[bug](https://bugs.mojang.com/browse/MC-54254)会将其显示为透明方块（如果想实现自定义台阶、楼梯必须得等mojang修复该bug）
 还有另一个重要的原因是由于Minecraft的限制 无法更改方块的碰撞箱
{% endhint %}

### 三叉戟

{% hint style="warning" %}
无法为投掷的三叉戟使用自定义模型
 [CustomModelData无法应用至投掷出的三叉戟](https://bugs.mojang.com/browse/MC-155286)
{% endhint %}

### 盔甲

{% hint style="warning" %}
~Minecraft 无法以任何方式向盔甲添加自定义材质/自定义 3D 盔甲模型~
~你可以更改盔甲的颜色，但无法更改其材质~
<br>
（雾）（实际上有很多种方法，本wiki中也有实现方法，详情参阅插件用法指南）
{% endhint %}

{% page-ref page="../plugin-usage/adding-content/creating-a-custom-item/armor.md" %}



