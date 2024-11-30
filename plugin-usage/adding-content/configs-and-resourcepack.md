---
icon: folder
description: contents 文件夹是什么以及它的结构
---

# contents 文件夹

## 文件夹类型

### contents

这是一个包含一组子文件夹的文件夹。\
每个子文件夹包含一个独立的包，其中包含配置和模型/纹理/声音等。

你可以看到 **contents** 中每个文件夹的名称是它包含的资源的[命名空间](broken-reference)。

### configs

每个 `contents` 文件夹内包含一个名为 `configs` 的子文件夹。\
这是一个包含一组文件夹和文件的文件夹。\
它包含组织良好的 `.yml` 文件，这些文件包含物品行为、设置、附魔、配方、战利品、物品属性、配方等。

{% hint style="warning" %}
**命名空间** 也在 `.yml` 文件本身中设置，不要忘记在顶部部分设置它：

```yaml
info:
  namespace: example
```
{% endhint %}

### resourcepack

你可以将此文件夹和 **configs** 视为非常相似的东西，但 **resourcepack** 文件夹包含所有 **物品** 的“**图形**”部分（以及声音、GUI 等）。

{% hint style="danger" %}
#### **重要**

记住始终保持 **contents** 子文件夹的顺序！\
不要随意粘贴内容，不要创建太多子文件夹，不要留下未使用的纹理/模型，否则将很难发现错误和错误。
{% endhint %}

## 什么是 `命名空间`？

正如你肯定注意到的，ItemsAdder 使用 **`命名空间`** 来识别它管理的大多数内容。\
**`命名空间`** 是一 **组** 元素，在这种情况下是一组 **物品、方块、生物等**。\
使用命名空间，你可以轻松了解特定 **物品**、**声音**、**方块** 等来自哪里。

### 示例

所有 **realcraft** 物品都在 **realcraft** 命名空间下，因此当你使用 `/iaget` 命令时，你可以看到所有物品 ID 都以 `realcraft:` 开头

![](<../../.gitbook/assets/image (7) (1).png>)

## 如何定义自己的命名空间？

为了保持一切井井有条，你必须创建**你自己的**命名空间。\
第一步是在：`plugins/ItemsAdder/contents/` 中创建一个子文件夹

在此示例中，**命名空间** 将是 `my_items`，因此创建一个与命名空间同名的文件夹：`contents/my_items/`

![](../../.gitbook/assets/my\_items\_namespace.png)

打开 `my_items` 文件夹并创建一个新文件，你可以随意命名它。\
例如：`contents/my_items/myswords.yml`

![](../../.gitbook/assets/my\_swords\_yml.png)

打开新的 `.yml` 文件并粘贴以下内容：

```yaml
info:
  namespace: my_items
```

如你所见，我将 **namespace** 设置为 `my_items`，这是我之前选择的 **namespace**，它与 **文件夹** 的名称相同。\
记住根据你的 **namespace** 进行更改。

{% hint style="info" %}
你可以创建任意数量的 **namespaces**！\
这使你可以轻松组织你的物品包。
{% endhint %}

{% hint style="info" %}
你可以在同一命名空间中创建任意数量的 `.yml` 文件！\
这使你可以更好地组织物品/事物类型。\
例如，我将我的物品分为剑、方块、食物、饮料等...
{% endhint %}

{% hint style="warning" %}
**所有这些“嵌套”可能看起来很无聊，** 但它尽可能减少错误并使你能够轻松找到所有内容。
{% endhint %}

## 为什么选择不同的文件夹结构？

**ItemsAdder** 允许你决定使用哪种文件夹结构来组织你的各种包。

这对于管理员来说非常有用，可以自由地快速组织他们的包，而无需担心不必要的文件夹嵌套。\
最简单的文件夹结构是[结构 5](configs-and-resourcepack.md#folders-structure-method-5)。

{% hint style="warning" %}
每个子包一次只能使用一种结构。\
**不要在同一个子包中混合使用它们！**
{% endhint %}

### 文件夹结构方法 1 - 最佳和最简单的方法

{% hint style="success" %}
这是创建一个简单包的最简单方法，其中包含一些物品，而无需创建太多子文件夹。\
这避免了你创建 `resourcepack`、`assets`、`NAMESPACE` 文件夹，并使一切更清晰。
{% endhint %}

如果你的子包不使用多个命名空间，这很有用，否则你将无法指定它们。

```
plugins
└── ItemsAdder
    └── contents
        └── my_items
            ├── configs
            │   ├── example.yml
            │   └── example_1.yml
            ├── models
            │   └── items
            │       └── example_item.json
            └── textures
                └── items
                    └── example_texture.png
```

### 文件夹结构方法 2

此结构是默认的和最完整的。

```
plugins
└── ItemsAdder
    └── contents
        └── my_items
            ├── configs
            │   ├── example.yml
            │   └── example_1.yml
            └── resourcepack
                └── assets
                    └── my_items
                        ├── models
                        │   └── items
                        │       └── example_item.json
                        └── textures
                            └── items
                                └── example_texture.png
```

### 文件夹结构方法 3

此结构避免了你创建 `assets` 文件夹，该文件夹是隐含的，只会增加不必要的复杂性。

```
plugins
└── ItemsAdder
    └── contents
        └── my_items
            ├── configs
            │   ├── example.yml
            │   └── example_1.yml
            └── resourcepack
                └── my_items
                    ├── models
                    │   └── items
                    │       └── example_item.json
                    └── textures
                        └── items
                            └── example_texture.png
```

### 文件夹结构方法 4

此结构避免了你创建 `resource_pack` 文件夹，该文件夹是隐含的，只会增加不必要的复杂性。

```
plugins
└── ItemsAdder
    └── contents
        └── my_items
            ├── configs
            │   ├── example.yml
            │   └── example_1.yml
            └── assets
                └── my_items
                    ├── models
                    │   └── items
                    │       └── example_item.json
                    └── textures
                        └── items
                            └── example_texture.png
```

### 文件夹结构方法 5

此结构避免了你创建 `assets` 文件夹，该文件夹是隐含的，只会增加不必要的复杂性。

```
plugins
└── ItemsAdder
    └── contents
        └── my_items
            ├── configs
            │   ├── example.yml
            │   └── example_1.yml
            └── my_items
                ├── models
                │   └── items
                │       └── example_item.json
                └── textures
                    └── items
                        └── example_texture.png
```
