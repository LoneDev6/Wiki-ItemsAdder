---
description: Creating your first custom block
icon: cube
---

# My First Block

<details>

<summary>Tutorial for ItemsAdder 4.1.17 and older</summary>

{% hint style="danger" %}
**Resourcepack hosting**

Remember to **decide** a [**resourcepack hosting**](../plugin-configuration/resourcepack-hosting/) method **before** you **start**.\
I **advise** you to use **self-host** which is **easier** and **faster**, but you can also use **Dropbox** and similar.
{% endhint %}

### Configuration file

{% hint style="warning" %}
This is an example block (remember to change `myitems` namespace to the one you want).
{% endhint %}

For example I created a **file** which will contain all my **custom blocks.**\
I created it in the folder: `contents/myitems/configs/`

I start creating a simple block called `red_block` in the file `blocks.yml`**.**

{% code title="ItemsAdder/contents/myitems/configs/blocks.yml" %}
```yaml
info:
  namespace: myitems
items:
  red_block:
    display_name: Red Block
    permission: red_block
    resource:
      material: PAPER
```
{% endcode %}

{% hint style="warning" %}
It's very important to use a **non placeable** vanilla **material**. For example **`PAPER`**.\
If you use a block (like `STONE` or `DIRT`) it will result a bit glitchy when placed.
{% endhint %}

### Creating the textures files

To do that you have to put the `.png` textures file inside the correct folder.

In this case your **namespace** is `myitems` so you have to put them in this folder:\
`contents/myitems/textures/block/`

<figure><img src="../../.gitbook/assets/red_block_textures_preview.png" alt=""><figcaption></figcaption></figure>

### Applying the textures files to your item

Now open `blocks.yml` file again and add the `resource` part as I did.\
As you can see I set `generate: true` and I set the textures for the item.\
This tells the plugin to generate the 3D model automatically using your texture.

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
```

### Using different texture for each face

{% hint style="warning" %}
**Important**: keep the correct cardinal directions order as shown in the example.
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
      textures:
        - block/red_block_down.png
        - block/red_block_east.png
        - block/red_block_north.png
        - block/red_block_south.png
        - block/red_block_up.png
        - block/red_block_west.png
```

### Using the same texture for each face

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
```

### Adding the block placing functionality

You have to add the `behaviours` attribute.

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

## Getting the block ingame

Run `/iaget red_block` to get the item.

![](<../../.gitbook/assets/immagine (48).png>)

![](<../../.gitbook/assets/immagine (87).png>)

![](<../../.gitbook/assets/immagine (12).png>)

## Block loot

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

</details>

### Configuration file

{% hint style="warning" %}
This is an example block (remember to change `myitems` namespace to the one you want).
{% endhint %}

For example I created a **file** which will contain all my **custom blocks.**\
I created it in the folder: `contents/myitems/configs/`

I start creating a simple block called `red_block` in the file `blocks.yml`**.**

{% code title="ItemsAdder/contents/myitems/configs/blocks.yml" %}
```yaml
info:
  namespace: myitems
items:
  red_block:
    name: Red Block
    permission: red_block
```
{% endcode %}

{% hint style="info" %}
Blocks don't need a `material` to be specified, the plugin will handle that for you based on the block type (set later).
{% endhint %}

### Creating the textures files

To do that you have to put the `.png` textures file inside the correct folder.

In this case your **namespace** is `myitems` so you have to put them in this folder:\
`contents/myitems/textures/block/`

<figure><img src="../../.gitbook/assets/red_block_textures_preview.png" alt=""><figcaption></figcaption></figure>

### Using different texture for each face

{% hint style="warning" %}
**Important**: keep the correct cardinal directions order as shown in the example.
{% endhint %}

```yaml
info:
  namespace: myitems
items:
  red_block:
    name: Red Block
    permission: red_block
    graphics:
      textures:
        down: block/red_block_down.png
        east: block/red_block_east.png
        north: block/red_block_north.png
        south: block/red_block_south.png
        up: block/red_block_up.png
        west: block/red_block_west.png
```

### Using the same texture for each face

```yaml
info:
  namespace: myitems
items:
  red_block:
    name: Red Block
    permission: red_block
    graphics:
      texture: block/red_block.png
```

### Adding the block placing functionality

You have to add the `behaviours` attribute.

```yaml
info:
  namespace: myitems
items:
  red_block:
    name: Red Block
    permission: red_block
    graphics:
      texture: block/red_block.png
    behaviours:
      block:
        placed_model:
          type: REAL_NOTE
```

## Getting the block ingame

Run `/iaget red_block` to get the item.

![](<../../.gitbook/assets/immagine (48).png>)

![](<../../.gitbook/assets/immagine (87).png>)

![](<../../.gitbook/assets/immagine (12).png>)

## Download the complete example

{% file src="../../.gitbook/assets/red_block.zip" %}

## Block loot

```yaml
info:
  namespace: myitems
items:
  red_block:
    name: Red Block
    permission: red_block
    graphics:
      texture: block/red_block.png
    behaviours:
      block:
        drop_when_mined: false # IMPORTANT! To avoid duplication
        placed_model:
          type: REAL_NOTE

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
