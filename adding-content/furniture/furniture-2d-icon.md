---
icon: file-png
---

# Furniture 2D icon

{% hint style="warning" %}
This is to support clients older than 1.21.2.\
Minecraft 1.21.2 now supports 2D icons directly.

Refer to the [modern tutorial here](../item-properties/2d-icon.md).
{% endhint %}

{% embed url="https://youtu.be/FOLoAAjV_oI" %}

### Step 1

Create the 2D icon for the furniture

{% hint style="info" %}
Replace `myitems` with your own [namespace](../../beginners/configs-and-resourcepack.md#what-is-a-namespace).
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

Now create the `2d_furniture.png` file inside the folder `contents\myitems\resourcepack\myitems\textures\item\`.

### Step 2

Create the item which shows the placed furniture model. It is a different item form the one you see in the inventory (the one created in the **step 1**).

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

Now create the `furniture.json` file inside the folder `dcontents\myitems\resourcepack\myitems\models\decoration\`.

### Done!

Now try to right click with the `2d_furniture` item and you will see it places the `furniture` model.
