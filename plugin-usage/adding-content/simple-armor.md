---
icon: shirt
---

# 简单盔甲

这是一个自动创建的简单盔甲，没有纹理，ItemsAdder会根据你决定的颜色生成它，它类似于铁/钻石护甲，但颜色不同。

## 完成 `yml` 配置

<details>

<summary>点击阅读配置文件</summary>

```yaml
info:
  namespace: my_items
items:
  my_armor_simple_helmet:
    display_name: my_armor_simple helmet
    permission: my_armor_simple
    resource:
      generate: true
    durability:
      max_custom_durability: 275
    specific_properties:
      armor:
        slot: head
        color: '#ff0001'
    attribute_modifiers:
      head:
        armor: 9
        armorToughness: 1
  my_armor_simple_chestplate:
    display_name: my_armor_simple chestplate
    permission: myarmor
    resource:
      generate: true
    durability:
      max_custom_durability: 400
    specific_properties:
      armor:
        slot: chest
        color: '#ff0001'
    attribute_modifiers:
      chest:
        armor: 7
        armorToughness: 1
  my_armor_simple_leggings:
    display_name: my_armor_simple leggings
    permission: myarmor
    resource:
      generate: true
    durability:
      max_custom_durability: 375
    specific_properties:
      armor:
        slot: legs
        color: '#ff0001'
    attribute_modifiers:
      legs:
        armor: 5
        armorToughness: 1
  my_armor_simple_boots:
    display_name: my_armor_simple boots
    permission: myarmor
    resource:
      generate: true
    durability:
      max_custom_durability: 325
    specific_properties:
      armor:
        slot: FEET
        color: '#ff0001'
    attribute_modifiers:
      feet:
        armor: 3
        armorToughness: 1
```



</details>

{% file src="../../.gitbook/assets/myarmor_example_simple.zip" %}
将 zip 解压缩到 ItemsAdder 的 `contents` 文件夹中
{% endfile %}

### 创建盔甲部件

让我们创建一个胸甲\
要创建其他部件，你只需要重复下述方法，并更改 `slot`。

```yaml
  my_armor_simple_chestplate:
    display_name: my_armor_simple chestplate
    permission: myarmor
    resource:
      generate: true
    durability:
      max_custom_durability: 400
    specific_properties:
      armor:
        slot: chest
        color: '#ff0001'
    attribute_modifiers:
      chest:
        armor: 7
        armorToughness: 1
```

`颜色`属性很重要，它是盔甲在游戏内的颜色。

## 完成

没什么可做的。你只是创建了一个简单的盔甲，没有绘制任何纹理！

<figure><img src="../../.gitbook/assets/armor_items_preview_tutorial.png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/armor_items_preview_tutorial_2.png" alt=""><figcaption></figcaption></figure>
