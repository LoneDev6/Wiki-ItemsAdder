---
icon: file-png
---

# 2D 方块图标

{% embed url="https://youtu.be/FOLoAAjV_oI" %}

### 步骤 1

为方块创建 2D 图标

{% hint style="info" %}
将 `myitems` 替换为你的[命名空间](../configs-and-resourcepack.md#what-is-a-namespace)!
{% endhint %}

```yaml
info:
  namespace: myitems
items:
  rocks:
    display_name: Rocks
    permission: blocks.rocks
    lore:
     - 'lore-decorative-item'
    resource:
      material: PAPER
      generate: true
      textures:
      - item/rocks
    events:
      interact:
        right:
          set_block:
            block: rocks_placed
            target: RELATIVE
            decrement_amount: true
        right_shift:
          set_block:
            block: rocks_placed
            target: RELATIVE
            decrement_amount: true
```

在文件夹 `contents\myitems\resourcepack\myitems\textures\item` 中创建 `rocks.png` 文件

### 步骤 2

创建用于显示被放置的岩石模型的物品。这与我们在背包中看到的物品(**步骤 1** 创建的物品)不同。

```yaml
info:
  namespace: myitems
items:
  rocks_placed:
    display_name: ""
    permission: admin.blocks.rocks_placed
    resource:
      material: PAPER
      generate: false
      model_path: block/rocks_placed
    specific_properties:
      block:
        placed_model:
          type: REAL_WIRE
        cancel_drop: true
        sound:
          place:
            name: block.stone.place
    events:
      placed_block:
        break:
          drop_item:
            item: rocks
  rocks:
    display_name: Rocks
    permission: blocks.rocks
    lore:
     - 'lore-decorative-item'
    resource:
      material: PAPER
      generate: true
      textures:
      - item/rocks
    events:
      interact:
        right:
          set_block:
            block: rocks_placed
            target: RELATIVE
            decrement_amount: true
        right_shift:
          set_block:
            block: rocks_placed
            target: RELATIVE
            decrement_amount: true
```

现在在 `contents\myitems\resourcepack\myitems\models\block\` 中创建 `placed_rocks.json`

### 完成

现在尝试右键放置 `rocks`，你应该能够看到 `rocks_placed` 模型。
