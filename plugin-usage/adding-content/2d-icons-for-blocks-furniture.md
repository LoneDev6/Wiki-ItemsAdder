# 为你的方块/家具应用2d图标

{% hint style="warning" %}
版本需求：
**ItemsAdder 3.1.6+**
{% endhint %}

{% embed url="https://youtu.be/FOLoAAjV_oI" %}

## Block

### 步骤 1

为你的方块制作2D图标

{% hint style="info" %}
Replace `my_items` with your [namespace](basic-concepts/namespace/#namespace)!
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


现在在文件夹 `data\resource_pack\assets\my_items\textures\item` 中创建 `rocks.png` 文件

### 步骤 2

Create the item which shows the placed rock model. It is a different item form the one you see in the inventory (the one created in the **步骤 1**).

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

Now create the `placed_rocks.json` file inside the folder `data\resource_pack\assets\my_items\models\block\`

### Done!

Now try to right click with the `rocks` item and you will see it places the `rocks_placed` model.

## Furniture

### 步骤 1

Create the 2D icon for the furniture

{% hint style="info" %}
Replace `my_items` with your [namespace](basic-concepts/namespace/#namespace)!
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

Now create the `2d_furniture.png` file inside the folder `data\resource_pack\assets\my_items\textures\item\`

### 步骤 2

Create the item which shows the placed furniture model. It is a different item form the one you see in the inventory (the one created in the **步骤 1**).

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

Now create the `furniture.json` file inside the folder `data\resource_pack\assets\my_items\models\decoration\`

### 完成!

Now try to right click with the `2d_furniture` item and you will see it places the `furniture` model.
现在尝试右键单击 `2d_furniture` 项目，您会看到它放置了 `furniture` 模型。
现在你右键 `2d_furniture` 这个物品，将会放置 `furniture` 的模型
