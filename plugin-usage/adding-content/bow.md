---
icon: bow-arrow
---

# 弓

弓在拉动时会有动画，这允许你为每个状态使用单一纹理。

{% hint style="warning" %}
非常重要的是为你的弓物品设置纹理，以避免缺少纹理的问题：

<img src="../../.gitbook/assets/bow_without_item_states.gif" alt="" data-size="original">
{% endhint %}

要使用状态纹理，你需要在模型文件名或纹理上添加后缀。

如果你计划使用纹理（png），你需要设置 `generate: true`。\
如果你计划使用模型（json），你需要设置 `generate: false`，因为你已经有模型了。

## 物品的后缀

* `BOW`
  * `_0` - 第一个拉动状态
  * `_1` - 第二个拉动状态
  * `_2` - 第三个拉动状态
* `FISHING_ROD`
  * `_cast` - 显示抛竿时的钓鱼竿
* `SHIELD`
  * `_blocking` - 显示格挡时的盾牌模型
* `BUNDLE`
  * `_filled` - 显示装满时的收纳袋

## 使用后缀添加物品状态（弓）

首先你需要为我们的弓创建三个拉动状态

![](../../.gitbook/assets/bow\_pulling\_states.gif)

保存它们，放到你的原始弓纹理所在的目录，并为你的纹理添加后缀，如下所示：

我将它们放入资源包的 `contents/myitems/textures/item/` 文件夹中。

<div align="left">

<img src="../../.gitbook/assets/bow_suffixes_textures.png" alt="">

</div>

{% hint style="info" %}
后缀也适用于模型名称（json）。\
我将它们放入资源包的 `contents/myitems/models/item/` 文件夹中。

<img src="../../.gitbook/assets/bow_suffixes_models.png" alt="" data-size="original">
{% endhint %}

```yaml
items:
  ruby_bow:
    enabled: true
    display_name: Example Ruby Bow
    permission: myitems.bows.ruby_bow
    resource:
      material: BOW
      generate: true
      textures:
        - item/bows/ruby_bow
```

## 完成

你现在有了一个带有物品状态的弓

![](../../.gitbook/assets/bow\_with\_item\_states.gif)
