---
description: contents 文件夹是什么以及它的结构
icon: folder
---

# 内容文件夹

## 文件夹类型

### contents

这是一个包含一组子文件夹的文件夹。\
每个子文件夹包含一个独立的包，其中包含配置和模型/纹理/声音等。

你可以看到 **contents** 中各文件夹的名字是不同资源的**命名空间**。

### resourcepack

你可以将此文件夹和 **configs** 视为非常相似的东西，但 **resourcepack** 文件夹包含所有 **物品** 的“**图形**”部分（以及声音、GUI 等）。

{% hint style="danger" %}
**重要**

记住始终保持 **contents** 子文件夹的顺序！\
不要随意粘贴内容，不要创建太多子文件夹，不要留下未使用的纹理/模型，否则将很难发现错误和错误。
{% endhint %}

### 配置

为了创建自定义物品、配方等，ItemsAdder 使用 `.yml` 文件。你可以使用多个配置文件来管理你的工作。

## 什么是 `命名空间`？

ItemsAdder 使用 **`命名空间`** 来识别由它管理的大多数内容。\
&#xNAN;**`命名空间`** 是一 **组** 元素，在这种情况下是一组 **物品、方块、生物等**。\
使用命名空间，你可以轻松了解特定 **物品**、**声音**、**方块** 等来自哪里。

### 示例

所有 **realcraft** 物品都在 `realcraft` 命名空间下，因此当你使用 `/iaget` 命令时，你可以看到所有物品 ID 都以 `realcraft:` 开头

![](<../../.gitbook/assets/image (7) (1).png>)

## 如何定义自己的命名空间？

在 `plugins/ItemsAdder/contents/` 目录下创建子文件夹。

本例中我会创建一个叫做 `my_items` 的**命名空间**

打开 `my_items` 文件夹并创建一个新文件，你可以随意命名它。\
例如：`contents/my_items/myswords.yml`

![](../../.gitbook/assets/my_swords_yml.png)

**命名空间** 也必须在文件中指定，因此打开 `myswords.yml` 并复制：

```yaml
info:
  namespace: my_items
```

记住根据你的 **namespace** 进行更改。

你可以创建任意多的**命名空间**！这允许你轻松地管理你的物品包。

你也可以在相同的命名空间中创建任意多的 `.yml` 文件！这能够帮你更容易来管理内容。\
For example I divided swords, blocks, food, drinks in differnent `.yml` files.

{% hint style="warning" %}
**这些"嵌套"可能很无聊**，但可以降低错误，并更容易寻找内容。
{% endhint %}

## 为什么选择不同的文件夹结构？

**ItemsAdder** 允许你决定使用哪种文件夹结构来组织你的各种包。

这对管理员很有用，因为他们可以自由管理物品包，而不用担心过多嵌套。\
最容易使用的结构是 **结构 1**.

{% hint style="warning" %}
每个\*\*命名空间\*\*\*\*一次只能使用一种结构。\
**不要在同一个子包中混合使用它们！**
{% endhint %}

### 文件夹结构方法 1 - 最佳和最简单的方法

{% hint style="success" %}
这是创建一个简单包的最简单方法，其中包含一些物品，而无需创建太多子文件夹。\
这避免了你创建 `resourcepack`、`assets`、`<namespace>` 文件夹，并使一切更清晰。
{% endhint %}

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

{% hint style="warning" %}
#### 高级用户

如果你计划在使用多个命名空间，例如 `minecraft` 与 `my_items`，不要使用该结构，使用另一个结构，因为它们不会自动检测纹理/模型文件夹的命名空间。
{% endhint %}

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

此结构避免了你创建 `resourcepack` 文件夹，该文件夹是隐含的，只会增加不必要的复杂性。

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
