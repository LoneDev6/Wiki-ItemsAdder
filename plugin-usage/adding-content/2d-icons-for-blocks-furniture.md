# 为你的方块/家具应用2d图标

{% hint style="warning" %}
版本需求：
**ItemsAdder 3.1.6+**
{% endhint %}

{% embed url="https://youtu.be/FOLoAAjV_oI" %}
<br>归纳：
_通俗的来讲，就是创建一个新的 项目 并应用贴图，并为其添加事件，当玩家右键时会放置事件中设置的物品_

## 方块

### 步骤 1

为你的方块制作2D图标

{% hint style="info" %}
将 `my_items` 替换成 [你的命名空间](basic-concepts/namespace/#namespace)!
{% endhint %}

```yaml
info:
  namespace: my_items
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
```

在 `data\resource_pack\assets\my_items\textures\item` 中创建 `rocks.png` 文件

### 步骤 2

现在创建 **放置后的rock模型** 项目，该物品为 **使用 2D 贴图（步骤1中创建的rocks）时** 所放置的模型.

```yaml
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
```

在 `data\resource_pack\assets\my_items\models\block\` 中创建 `placed_rocks.json` 文件

### 完成!

现在右键 "rocks" 物品，将能够放置出 "rocks_placed" 的模型

## 家具

### 步骤 1

创建家具的2D图标

{% hint style="info" %}
将 `my_items` 替换成 [你的命名空间](basic-concepts/namespace/#namespace)!
{% endhint %}

```yaml
info:
  namespace: my_items
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
```

在 `data\resource_pack\assets\my_items\textures\item\` 创建 `2d_furniture.png` 文件

### 步骤 2

现在创建 **放置的家具模型** 项目，该物品为 **使用 2D 贴图（步骤1中创建的2d_furniture）时** 所放置的模型.

```yaml
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
```

在 `data\resource_pack\assets\my_items\models\decoration\` 中创建 `furniture.json` 文件

### 完成!

现在你右键 `2d_furniture` 这个物品，将会放置 `furniture` 的模型.\

_通俗的来讲，就是创建一个新的 项目 并应用贴图，并为其添加事件，当玩家右键时会放置事件中设置的物品_
