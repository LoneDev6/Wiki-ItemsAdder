---
description: Creating your first custom block
icon: cube
---

# My First Block

{% hint style="danger" %}
#### **Resourcepack hosting**

Remember to **decide** a [**resourcepack hosting**](../plugin-configuration/resourcepack-hosting/) method **before** you **start**.\
I **advise** you to use **self-host** which is **easier** and **faster**, but you can also use **Dropbox** and similar\\
{% endhint %}

### Configuration file

{% hint style="warning" %}
This is an example block (remember to change `myitems` namespace to the one you want).
{% endhint %}

For example I created a **file** which will contain all my **custom blocks.**\
I created it in the folder: `contents/myitems/configs/`

I start creating a simple block called `red_block` in the file `blocks.yml`**.**

### Creating the textures files

To do that you have to put the `.png` textures file inside the correct folder.

In this case your **namespace** is `myitems` so you have to put them in this folder:\
`contents/myitems/textures/block/`

<details>

<summary>Alternative textures location</summary>

Alternatively you can put them in this folder too:\
`contents/myitems/resourcepack/assets/myitems/textures/block/`

Read more here: [folders structure](configs-and-resourcepack.md#why-different-folder-structures-choices)

</details>

<figure><img src="../../.gitbook/assets/red_block_textures_preview.png" alt=""><figcaption></figcaption></figure>

### Using the same texture for each face

{% tabs %}
{% tab title="Modern (1.21.4+)" %}
{% hint style="warning" %}
Requires ItemsAdder **4.0.13** and Minecraft **1.21.4+**.
{% endhint %}

```yaml
info:
  namespace: myitems
items:
  red_block:
    name: Red Block
    permission: red_block
    graphics:
      texture: block/red_block
    behaviours:
      block:
        placed_model:
          type: REAL_NOTE
          break_particles: ITEM
```
{% endtab %}

{% tab title="Legacy (1.21.3 and lower)" %}
{% hint style="info" %}
It's very important to use a **non placeable** vanilla **material**. For example **`PAPER`**.\
If you use a block (like `STONE` or `DIRT`) it will result a bit glitchy when placed.
{% endhint %}

```yaml
info:
  namespace: myitems
items:
  red_block:
    display_name: Red Block
    permission: red_block
    resource:
      generate: true
      material: PAPER
      texture: block/red_block.png
    behaviours:
      block:
        placed_model:
          type: REAL_NOTE
          break_particles: ITEM
```
{% endtab %}
{% endtabs %}

### Using different textures for each face

{% hint style="warning" %}
**Important**: keep the correct cardinal directions order as shown in the example.
{% endhint %}

{% tabs %}
{% tab title="Modern (1.21.4+)" %}
```yaml
info:
  namespace: myitems
items:
  red_block:
    name: Red Block
    permission: red_block
    graphics:
      textures:
        north: block/red_block_north
        south: block/red_block_south
        east: block/red_block_east
        west: block/red_block_west
        up: block/red_block_up
        down: block/red_block_down
    behaviours:
      block:
        placed_model:
          type: REAL_NOTE
          break_particles: ITEM
```
{% endtab %}

{% tab title="Legacy (1.21.3 and lower)" %}
```yaml
info:
  namespace: myitems
items:
  red_block:
    display_name: Red Block
    permission: red_block
    resource:
      generate: true
      material: PAPER
      textures:
        - block/red_block_down.png
        - block/red_block_east.png
        - block/red_block_north.png
        - block/red_block_south.png
        - block/red_block_up.png
        - block/red_block_west.png
    behaviours:
      block:
        placed_model:
          type: REAL_NOTE
          break_particles: ITEM
```
{% endtab %}
{% endtabs %}

## Getting the block ingame

Run `/iaget red_block` to get the item.

![](<../../.gitbook/assets/immagine (48).png>)

![](<../../.gitbook/assets/immagine (87).png>)

![](<../../.gitbook/assets/immagine (12).png>)

## Download the complete example

{% embed url="https://addon.devs.beer/toolbox/assets-repository/red_block" %}

## Block loot

{% tabs %}
{% tab title="Modern (1.21.4+)" %}
```yaml
info:
  namespace: myitems
items:
  red_block:
    name: Red Block
    permission: red_block
    graphics:
      texture: block/red_block
    behaviours:
      block:
        drop_when_mined: false # IMPORTANT! To avoid duplication
        placed_model:
          type: REAL_NOTE
          break_particles: ITEM
          

loots: # Here the custom loots list
  blocks:
    ruby_ore: # Here your custom block loot
      type: myitems:red_block
      biomes:
        - PLAINS
        - SUNFLOWER_PLAINS
        - MOUNTAINS
      items:
        drop1: # Here the dropped item
          item: DIAMOND
          min_amount: 1
          max_amount: 2
          chance: 100 # Percentage
```
{% endtab %}

{% tab title="Legacy (1.21.3 and lower)" %}
```yaml
info:
  namespace: myitems
items:
  red_block:
    display_name: Red Block
    permission: red_block
    resource:
      generate: true
      material: PAPER
      texture: block/red_block.png
    behaviours:
      block:
        drop_when_mined: false # IMPORTANT! To avoid duplication
        placed_model:
          type: REAL_NOTE
          break_particles: ITEM
          

loots: # Here the custom loots list
  blocks:
    ruby_ore: # Here your custom block loot
      type: myitems:red_block
      biomes:
        - PLAINS
        - SUNFLOWER_PLAINS
        - MOUNTAINS
      items:
        drop1: # Here the dropped item
          item: DIAMOND
          min_amount: 1
          max_amount: 2
          chance: 100 # Percentage
```
{% endtab %}
{% endtabs %}
