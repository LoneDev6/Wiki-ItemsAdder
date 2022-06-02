# 2D icons for blocks/furniture

{% hint style="warning" %}
This feature requires **ItemsAdder 3.1.6+**
{% endhint %}

{% embed url="https://youtu.be/FOLoAAjV_oI" %}

## Block

### Step 1

Create the 2D icon for the block

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

Now create the `rocks.png` file inside the folder `data\resource_pack\assets\my_items\textures\item`

### Step 2

Create the item which shows the placed rock model. It is a different item form the one you see in the inventory (the one created in the **step 1**).

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

### Step 1

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

### Step 2

Create the item which shows the placed furniture model. It is a different item form the one you see in the inventory (the one created in the **step 1**).

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

### Done!

Now try to right click with the `2d_furniture` item and you will see it places the `furniture` model.
