---
description: 自定义物品材质的属性
---

# 材质内容

{% hint style="danger" %}
请确保你在物品名称,命名空间,材质\(png\)和模型文件\(json\)中没有使用大写字母或者特殊字符!可能会导致报错!
{% endhint %}

## 自动生成

为了让ItemsAdder知道一个物品使用的是哪个材质/模型,你必须添加`resource`属性.
这是一个栗子:

```yaml
  resource:
    material: DIAMOND_SWORD
    generate: true
    textures:
    - item/example_item.png
```

`material` 是这个物品将使用该原版物品为基础.

`generate` 告诉Itemsadder是否需要根据你设置的材质来自动生成物品模型.

`textures` 是Itemsadder用于自动生成模型的材质列表.

### 我应该把材质放在哪?

`textures`在设置属性时必须放置在放在正确的文件路径里.
因此,如果你想像栗子里那样设置来设置`textures`并且你的**namespace**\(例如\)`myitems`你将必须把`example_item.png`放入_\*\*_内的文件: `plugins\ItemsAdder\data\resource_pack\assets\myitems\textures\item`

如果路径不存在,则会创建所有需要的文件.

{% hint style="info" %}
你可以不在`textures`设置的内容后面写上`.png`,因为Itemsadder会自动识别文件.
{% endhint %}

## 使用你自己的3D模型 \(.json\)

如果你是要设置一个自定义模型的剑或物品,你可以让Itemsadder不要自动生成模型.
这是个栗子:

```yaml
  resource:
    material: DIAMOND_SWORD
    generate: false
    model_path: item/floating_sword
```

### 我应该把我的模型放在哪?

你在`model_path`属性中设置的模型必须放在正确的文件里.
因此,如果你像栗子里的那样设置了`model_path`并且你的**namespace**\(例如\)`myitems`你将不得不把`floating_sword.json` _\*\*_放在这个文件中:`plugins\ItemsAdder\data\resource_pack\assets\myitems\models\item`

如果路径文件不存在的话,IA会创建所有需要的文件.

{% hint style="warning" %}
### 我的材质无法显示了!

如果你的自定义模型材质无法显示,你必须打开你的模型文件并修复材质路径.
假如,如果你有这个的话:

```yaml
  {
  "textures": {
    "4": "item/alchemy_candles/white_candle",
    "6": "item/alchemy_candles/candle_top",
    "7": "item/alchemy_candles/red_candle",
    "8": "item/alchemy_candles/fire"
  },
```

你必须把它改成这样\(`your_namespace`是你的[namespace[命名空间]](../../../beginners/basic-concepts/namespace.md)文件\

```yaml
{
  "textures": {
    "4": "your_namespace:item/alchemy_candles/white_candle",
    "6": "your_namespace:item/alchemy_candles/candle_top",
    "7": "your_namespace:item/alchemy_candles/red_candle",
    "8": "your_namespace:item/alchemy_candles/fire"
  },
```
{% endhint %}

## 透明的材质\(玻璃或类似\)

{% page-ref page="../../../../../faq/can-i-create-slabs-stairs/transparent-textures.md" %}

## 手动指定custom\_model\_data

如果你想强制使用已定义的custom\_model\_data\(CustomModelData\)你可以像这样设置:

```yaml
    resource:
      material: CLOCK
      model_id: 4000
      generate: false
      model_path: "item/multimeter"
```

你还必须在这个文件里创建名为"multimeter"的文件\(在这个例子里\)在这个文件夹中: `assets\YOUR_NAMESPACE\models\item`

你也可以让IA根据材质来自动生成模型:

```yaml
info:
  namespace: slimefun
items:
  carbonado:
    resource:
      material: PLAYER_HEAD
      generate: true
      model_id: 4000
      textures:
      - slimefun/carbonado.png
```

{% hint style="warning" %}
### 重要

如果你在之前创建了这个物品,并且已经使用了`/iazip`指令,而现在你改变了**model\_id**:  
运行`/iacleancache items`指令以**删除未使用的ID**和**更新**变化的ID**是超级重要的流程!
{% endhint %}



