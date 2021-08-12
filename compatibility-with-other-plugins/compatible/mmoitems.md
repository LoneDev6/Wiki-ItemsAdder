---
描述: ItemsAdder 与 MMOItems 兼容，并且容易上手搭配使用
---

# MMOItems

下载 **MMOItems** [点击](https://www.spigotmc.org/resources/mmoitems-premium.39267/)

## 在这里您可以下载本教程中示例使用的资源包

{% embed url="https://www.spigotmc.org/resources/items-mmoitem-example-integration.88351/" caption="" %}

## 如何让 MMOItem 使用 ItemsAdder 的自定义物品

{% hint style="warning" %}
将 **ITEMSADDER** 更新为 **2.1.29+** 并且确保 **MMOITEM** 版本为 **6.5.1+**
{% endhint %}

### - 使用命令 /mmoitems browse

![](../../.gitbook/assets/immagine%20%2829%29.png)

### - 创建新的MMO物品

![](../../.gitbook/assets/immagine%20%2835%29.png)

![](../../.gitbook/assets/immagine%20%2836%29.png)

### - 添加需要的属性，例如魔法伤害 等数值

![](../../.gitbook/assets/immagine%20%2828%29.png)

### - 打开预览界面 /mmoitems browse 查看物品是否完成

![](../../.gitbook/assets/immagine%20%2838%29.png)

在这里我们已经完成了一半，接下来就是与ia的关联了

## 创建 ia 物品

### - 创建 .yml 文件并编写物品属性

![](../../.gitbook/assets/immagine%20%2830%29.png)

{% hint style="success" %}
如下所示，我设置了名为 **`mmoitem`** 的新属性以及 **`type`** 和 **`id`** 子项 这个属性以及子项用于**适配\*\***mmoitem的物品\*\* 只需要对应于mmoitem创建的物品 即可
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

### - 应用贴图

![](../../.gitbook/assets/immagine%20%2832%29.png)

### - 获得物品

使用命令 `/iaget mmoitems_example:example_item` 获取物品

![](../../.gitbook/assets/immagine%20%2833%29.png)

![](../../.gitbook/assets/immagine%20%2837%29.png)

