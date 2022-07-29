---
描述: 允许自定义物品材质的属性
---

# 🖼 Resource

{% hint style="danger" %}
请确保未在 items names, namespaces, texture files (png) and model files (json) 中使用大写字母或特殊字符.
{% endhint %}

## Automatic generation

为了让 ItemsAdder 识别有哪些 模型/材质 用于该物品, 您必须设定 `resource` 属性.  
示例：

```yaml
  resource:
    material: DIAMOND_SWORD
    generate: true
    textures:
    - item/example_item.png
```

`material` 是使用基于原版材质的物品.

`generate` 告诉 IA 是否要根据您列出的材质自动生成物品模型

`textures` 是 IA 用于自动生成模型的材质列表（文件）.

### 我应该将材质放在哪里？

您在 `textures` 属性中列出的材质必须放置在正确的文件夹中.\
因此, 如果您向示例那样设置 `textures` 属性, 并且您的 **namespace** (参照示例) 为 `myitems`, 就需要将材质文件 `example_item.png` **** 放置在此路径的文件夹中: `plugins\ItemsAdder\data\resource_pack\assets\myitems\textures\item`

如果指定的路径不存在, 请手动创建所需的所有文件夹.

{% hint style="info" %}
无需在 `textures` 属性中设置材质的 `.png` 文件后缀, IA 会自动识别它.
{% endhint %}

## 使用属于你的 3D 模型 (.json 文件)

如果您有自定义的剑或者物品模型, 您可以让 IA 不要自动生成模型.\
这是一个例子:

```yaml
  resource:
    material: DIAMOND_SWORD
    generate: false
    model_path: item/floating_sword

```

### 我应该把模型放在哪里?

在 `model_path` 属性中设置的模型必须放置在正确的文件夹中.\
因此, 如果您向示例那样设置 `model_path` 属性, 并且您的 **namespace** (参照示例) 为 `myitems`, 就需要将模型文件 `floating_sword.json` **** 放置在此路径的文件夹中: `plugins\ItemsAdder\data\resource_pack\assets\myitems\models\item`

如果指定的路径不存在, 请手动创建所需的所有文件夹.

{% hint style="warning" %}
### 我的材质不加载/不工作!

如果自定义模型材质不显示, 则必须打开模型文件并尝试修复材质路径.\
这是一个例子:

```yaml
  {
  "textures": {
    "4": "item/alchemy_candles/white_candle",
    "6": "item/alchemy_candles/candle_top",
    "7": "item/alchemy_candles/red_candle",
    "8": "item/alchemy_candles/fire"
  },
```

您需要把它改成如下所示 (`your_namespace` 是您的 [namespace ](../../basic-concepts/namespace/)文件夹):

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

## 透明纹理 (玻璃和类似方块)

{% content-ref url="../../../../faq/create-slabs-stairs-tridents-armors-etc/transparent-textured-furnitures.md" %}
[transparent-textured-furnitures.md](../../../../faq/create-slabs-stairs-tridents-armors-etc/transparent-textured-furnitures.md)
{% endcontent-ref %}

## 手动指定 custom\_model\_data

如果您想强制使用已被定义的 custom\_model\_data (CustomModelData), 您可以这样设置:

```yaml
    resource:
      material: CLOCK
      model_id: 4000
      generate: false
      model_path: "item/multimeter"
```

You also have to create the model file named "multimeter" (in this example) inside this folder: `assets\YOUR_NAMESPACE\models\item`

您也可以让 IA 根据材质自动生成模型:

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
### IMPORTANT

如果您之前创建了该物品并使用 `/iazip` 命令且您现在更改了 **model\_id**:\
**非常重要** 请运行命令 `/iacleancache items` 以 **删除未使用的 IDs** 并 **更新修改后的 IDs**.
{% endhint %}

