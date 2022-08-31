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

在 `texture` 中设置的纹理材质必须放在正确的路径下,
例如：你像示例中一样设置 `textures` 且 **命名空间** （将命名空间换为你自定的名称）为 `myitems`，则你需要将 `example_item.png` 放至该路径下 `plugins\ItemsAdder\data\resource_pack\assets\myitems\textures\item`
如果路径不存在，则创建所需的文件夹

{% hint style="info" %}
你可以忽略 `textures` 属性下 贴图文件的 `.png` 后缀,IA将会自动识别文件
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

在 `model_path` 中设置的模型必须放在正确的路径下,
例如：你像示例中一样设置 `model_path` 且 **命名空间**（将命名空间换为你自定的名称） 为 `myitems` ，则你需要将 `floating_sword.json` 放至该路径下 `plugins\ItemsAdder\data\resource_pack\assets\myitems\models\item`
如果路径不存在，则创建所需的文件夹

## 半透明材质  \(类似玻璃之类的物品\)

{% page-ref page="../../../faq/can-i-create-slabs-stairs/transparent-textures.md" %}

