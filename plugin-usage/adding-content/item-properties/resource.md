---
描述: 有关自定义物品显示的配置属性
---

# Resource

## 自动生成模型

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

Textures you listed in the `textures` attribute must be placed in the right folder.  
So if you set `textures` like in the example and your **namespace** \(is for example\) `myitems` you will have to put `example_item.png` ****file inside this folder: `plugins\ItemsAdder\data\resource_pack\assets\myitems\textures\item`

If the path doesn't exists create all the folders needed.

{% hint style="info" %}
You can avoid setting `.png` in the `textures` attribute, IA will recognize the file automatically
{% endhint %}

## 使用自定义模型

如果你拥有自定义的模型，你可以在配置时将 `generate:` 属性设置为 `false` 使 Itemsadder 不会自动生成模型，从而使用你自己的模型.
示例:

```yaml
  resource:
    material: DIAMOND_SWORD
    generate: false
    model_path: item/floating_sword

```

### 我应该将模型放在哪？

Model you set in the `model_path`attribute must be placed in the right folder.  
So if you set `model_path` like in the example and your **namespace** \(is for example\) `myitems` you will have to put `floating_sword.json` ****file inside this folder: `plugins\ItemsAdder\data\resource_pack\assets\myitems\models\item`

If the path doesn't exists create all the folders needed.

## 透明材质  \(类似玻璃之类的物品\)

{% page-ref page="../../../faq/can-i-create-slabs-stairs/transparent-textures.md" %}

