---
icon: file-png
---

# Block 2D icon

{% hint style="warning" %}
This feature requires **ItemsAdder 3.1.6+**
{% endhint %}

{% embed url="https://youtu.be/FOLoAAjV_oI" %}

### Step 1

Create the 2D icon for the block

{% hint style="info" %}
Replace `myitems` with your [namespace](../configs-and-resourcepack.md#what-is-a-namespace)!
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

Now create the `rocks.png` file inside the folder `contents\myitems\resourcepack\myitems\textures\item`

### Step 2

Create the item which shows the placed rock model. It is a different item form the one you see in the inventory (the one created in the **step 1**).

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

Now create the `placed_rocks.json` file inside the folder `contents\myitems\resourcepack\myitems\models\block\`

### Done!

Now try to right click with the `rocks` item and you will see it places the `rocks_placed` model.
