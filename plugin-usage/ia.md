---
icon: square-list
description: /ia 命令菜单
---

# 配方菜单

## 菜单设置和“全部”类别

`ia_gui.yml` 包含关于 `/ia` 命令 GUI 的设置。\
它还包含显示每个 ItemsAdder 项目的 **“全部”** 类别。

{% hint style="info" %}
默认的 ItemsAdder 包类别位于每个 `namespace` 文件夹中的 `categories.yml` 文件中。\
例如：`contents/iasurvival/configs/categories.yml`
{% endhint %}

## 创建自定义类别

如果你想创建自己的类别，你必须在你的 [namespace](adding-content/configs-and-resourcepack.md#what-is-a-namespace) 中创建并添加到你自己的 `.yml` 文件中。\
<mark style="color:red;">不要将你的类别添加到</mark> <mark style="color:red;"></mark><mark style="color:red;">`ia_gui.yml`</mark> <mark style="color:red;"></mark><mark style="color:red;">文件中！</mark>\
这是一个例子:

```yaml
info:
  namespace: my_items
categories:
  swords:
    enabled: true
    icon: "my_items:custom_item"
    name: 'Swords'
    permission: "ia.menu.seecategory.swords"
    # THIS IS OPTIONAL. Plugin will take the one in ia_gui.yml if not set.
    font_image:
      name: "mcguis:blank_menu"
      x_position_pixels: -16
    # THIS IS OPTIONAL. Plugin will take the one in ia_gui.yml if not set.
    title_position_pixels: 0
    items:
      - "my_items:custom_item"
      - "my_items:custom_item_2"
      - "my_items:custom_item_3"
```

记得给你的用户每个类别的权限，如果你希望他们看到这些类别的话。\
这个示例类别的权限是：`ia.menu.seecategory.swords`

{% hint style="info" %}
**`font_image` 与 `title_position_pixels` 是可选的**。\
如未设置，插件将使用 `ia_gui.yml` 中的设置。

如果你想要让不同目录展现不同背景，该选项可提供帮助。
{% endhint %}

{% hint style="success" %}
含有**相同名称**与不同命名空间的**目录**将会被**合并**，如果你含有两个“剑”目录，这很有用。\
这允许你打开**`/ia`**菜单后，在同一目录下看到所有的剑，而非分布在不同目录。
{% endhint %}

## 向目录添加大量物品

### 通配符

匹配任意处于 `example` 命名空间中的物品。

```yml
categories:
  test:
    enabled: true
    skip_if_already: false
    icon: example:my_item
    name: TEST
    permission: ia.menu.seecategory.test
    items:
      - "example:*"
```

匹配任意含有 `some_item` 的命名空间。

```yml
categories:
  test:
    enabled: true
    skip_if_already: false
    icon: example:my_item
    name: TEST
    permission: ia.menu
```

### 正则表达式（高级内容）

匹配任意处于 `iasurvival` 命名空间中的护甲。

{% hint style="info" %}
访问[此网站](https://regex101.com/)来测试你的正则表达式
{% endhint %}

```yml
  armors:
    enabled: true
    skip_if_already: false
    icon: iasurvival:ruby_helmet
    name: display-category-armors
    permission: ia.menu.seecategory.armors
    items:
      - "iasurvival\:(.*)_helmet"
      - "iasurvival\:(.*)_chestplate"
      - "iasurvival\:(.*)_leggings"
      - "iasurvival\:(.*)_boots"
```
