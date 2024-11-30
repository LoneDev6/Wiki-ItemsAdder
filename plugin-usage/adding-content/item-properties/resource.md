---
description: 允许自定义物品图像的属性
icon: file-image
---

# 资源

{% hint style="danger" %}
确保你没有在资源的名称、命名空间、纹理文件名称 (png) 以及模型文件 (json) 中使用**大写字母**或**特殊字符**。
{% endhint %}

## 自动生成

为了让 ItemsAdder 知道应该为物品加载哪个纹理/模型，你需要添加 `resource` 属性。\
示例：

```yaml
  resource:
    material: DIAMOND_SWORD
    generate: true
    textures:
    - item/example_item.png
```

`material` 是该物品对应的原版材料

`generate` 告诉 ItemsAdder 是否依据你列出的纹理自动生成模型

`textures` 是 ItemsAdder 用于自动生成模型的纹理

### 我应该在哪里放纹理？

你在 `textures` 属性中列出的纹理必须放到正确的文件夹。\
所以如果你像示例一样设置了 `textures`，并且**命名空间**（假如）是 `my_items`，你需要将 `example_item.png` 放到 `contents/my_items/textures/item`。

如果目录不存在，请创建该目录。

{% hint style="info" %}
你可以不在 `textures` 属性中添加 `.png` 后缀， ItemsAdder 会自动识别。
{% endhint %}

## 使用 3D 模型 (`.json` file)

如果你有一个自定义了模型的剑或物品，你可以让 ItemsAdder 停止自动生成模型。\
示例：

```yaml
  resource:
    material: DIAMOND_SWORD
    generate: false
    model_path: item/floating_sword
```

### 我应该在哪里放模型？

你在 `model_path` 属性中列出的模型必须放到正确的文件夹。\
所以如果你像示例一样设置了 `model_path`，并且**命名空间**（假如）是 `my_items`，你需要将 `floating_sword.json` 放到 `contents/my_items/models/item`。

如果目录不存在，请创建该目录。

### **纹理不生效**

{% hint style="warning" %}
如果你的自定义模型纹理不显示，你需要打开模型文件，修复纹理路径。\
例如你有：

```yaml
  {
  "textures": {
    "4": "item/alchemy_candles/white_candle",
    "6": "item/alchemy_candles/candle_top",
    "7": "item/alchemy_candles/red_candle",
    "8": "item/alchemy_candles/fire"
  },
```

你需要将其改为如下内容 (`your_namespace` 是你的[命名空间](broken-reference))：

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

## 透明纹理（玻璃或相似的物品）

### 家具

{% content-ref url="../advanced-furniture-properties/transparent-furniture.md" %}
[透明家具](../advanced-furniture-properties/transparent-furniture.md)
{% endcontent-ref %}

### 方块

{% content-ref url="../block.md" %}
[方块](../block.md)
{% endcontent-ref %}

## 手动指定 custom\_model\_data

如果你想强制使用 `custom_model_data` (`CustomModelData`) 你可以：

```yaml
    resource:
      material: CLOCK
      model_id: 4000
      generate: false
      model_path: "item/my_custom_item_model"
```

你也可以让 ItemsAdder 以纹理为基础自动生成模型：

```yaml
info:
  namespace: my_items
items:
  my_item_4000_example:
    resource:
      material: DIAMOND
      generate: true
      model_id: 4000
      textures:
      - item/my_custom_texture.png
```

{% hint style="warning" %}
### **重要**

如果您之前创建了此物品，并且已经使用了 `/iazip` 命令，现在更改了 `model_id`，则必须使用此命令。\
运行 `/iacleancache items` 来**移除未使用的 ID** 并**更新改变了的 ID** 很重要。
{% endhint %}

## 创建 3D 模型

我使用 [BlockBench](https://blockbench.net/) 来创建 Minecraft 模型。

{% embed url="https://www.youtube.com/watch?v=aaJ8XgMAOno" %}

### 从纹理创建 3D 模型

{% embed url="https://www.youtube.com/watch?v=CSWxrAqjrKA" %}

{% hint style="warning" %}
**重要**

如果你在使用**非原版**纹理（png 文件），你需要打开模型的 .json 文件，进行些许修改。

如果您的模型使用自定义纹理，则必须确保将命名空间放在纹理名称之前。\
比如你 3D 模型的纹理路径为：`contents/my_items/textures/item/custom_item_1.png`

```javascript
 "textures":{
      "0":"item/custom_item_1"
   },
```

你需要在前面添加**命名空间**（本例为 `myitems`）。

```javascript
 "textures":{
      "0":"myitems:item/custom_item_1"
   },
```
{% endhint %}
