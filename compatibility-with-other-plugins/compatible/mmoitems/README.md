---
description: ItemsAdder与MMOItems兼容, 并且很容易合并.
---

# MMOItems

在[此处](https://www.spigotmc.org/resources/mmoitems-premium.39267/)下载 **MMOItems**

### 你可以在此处下载教程中的示例

{% embed url="https://www.spigotmc.org/resources/items-mmoitem-example-integration.88351/" %}

## 已知限制

{% embed url="https://github.com/PluginBugs/Issues-ItemsAdder/issues/2008" %}

## 将MMOItem与ItemsAdder物品连接

### 使用 /mmoitems 进行预览

![](<../../../.gitbook/assets/image_(25).png>)

### 创建一个新的 MMOItem

![](<../../../.gitbook/assets/image_(26).png>)

![](<../../../.gitbook/assets/image_(29).png>)

### 添加你想要的所有属性,如魔法伤害等

![](<../../../.gitbook/assets/image_(28).png>)

### 在 /mmoitems 界面中预览 MMOItem

![](<../../../.gitbook/assets/image_(30).png>)



### 正常创建你的.yml文件，并添加 ItemsAdder 物品的所有属性

`ItemsAdder/contents/mmoitems_example/configs/example.yml`

{% hint style="success" %}
如你所见, 我设置了一个叫做 **`mmoitem`** 的新属性, 同时还有 **`type`** 与 **`id`** 。\
这些属性用于**连接**这**两个物品**.
{% endhint %}

```yaml
info:
  namespace: mmoitems_example
items:
  test:
    display_name: ""
    permission: example_item
    mmoitem:
      type: SWORD
      id: TEST
    resource:
      material: DIAMOND_SWORD
      generate: true
      textures:
      - item/test.png
    durability:
      max_custom_durability: 1324
```

### 正常创建你的.png纹理

`ItemsAdder/contents/mmoitems_example/resourcepack/mmoitems_example/textures/item/test.png`

### 获得物品

使用指令`/iaget mmoitems_example:test`来得到成品

![](<../../../.gitbook/assets/image_(33).png>)

![](<../../../.gitbook/assets/image_(34).png>)
