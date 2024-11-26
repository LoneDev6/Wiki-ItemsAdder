---
icon: file-png
---

# 2D 家具图标

{% hint style="warning" %}
此功能需要 **ItemsAdder 3.1.6+**
{% endhint %}

{% embed url="https://youtu.be/FOLoAAjV_oI" %}

### 步骤 1

为家具创建 2D 图标

{% hint style="info" %}
将 `myitems` 替换为你自己的[命名空间](../configs-and-resourcepack.md#what-is-a-namespace)。
{% endhint %}

```yaml
info:
  namespace: myitems
items:
  2d_furniture:
    display_name: 2d_furniture
    permission: 2d_furniture
    resource:
      material: PAPER
      generate: true
      textures:
      - item/2d_furniture
    events:
      interact:
        right:
          place_furniture:
            furniture: furniture
            decrement_amount: true
        right_shift:
          place_furniture:
            furniture: furniture
            decrement_amount: true
```

现在在文件夹 `contents\myitems\resourcepack\myitems\textures\item\` 中创建 `2d_furniture.png` 文件

### 步骤 2

创建显示已放置家具模型的物品。它是与您在背包中看到的物品（在**步骤 1** 中创建的物品）不同的物品。

```yaml
info:
  namespace: myitems
items:
  furniture:
    display_name: furniture
    permission: furniture
    lore:
    - 'lore-decorative-item'
    resource:
      material: PAPER
      generate: false
      model_path: decoration/furniture
    behaviours:
      furniture:
        solid: true
        cancel_drop: true
        hitbox:
          length: 1
          width: 1
          height: 1
    events:
      placed_armorstand:
        break:
          drop_item:
            item: 2d_furniture
  2d_furniture:
    display_name: 2d_furniture
    permission: 2d_furniture
    resource:
      material: PAPER
      generate: true
      textures:
      - item/2d_furniture
    events:
      interact:
        right:
          place_furniture:
            furniture: furniture
            decrement_amount: true
        right_shift:
          place_furniture:
            furniture: furniture
            decrement_amount: true
```

现在在文件夹 `dcontents\myitems\resourcepack\myitems\models\decoration\` 中创建 `furniture.json` 文件

### 完成！

现在尝试右键单击 `2d_furniture` 项目，您会看到它放置了 `furniture` 模型。
