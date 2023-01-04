---
description: Creating your first custom block
---

# Block

## My first custom block

### Creating the blocks file

{% hint style="warning" %}
This is an example block (remember to change `myitems` [namespace ](../basic-concepts/namespace.md)to the one you want).
{% endhint %}

For example I created a **file** which will contain all my **custom blocks.**\
****I created it in the folder: `plugins/ItemsAdder/contents/myitems/configs/`

In this file (`blocks.yml`) I start creating a simple block called `red_block`.

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

{% hint style="warning" %}
It's very important to use a **non placeable** vanilla **material**. For example **PAPER**.\
If you use a block (like STONE or DIRT) it will result a bit glitchy when placed.
{% endhint %}

## Block textures

### Creating the textures files

Now the fun part, let's set the textures!\
To do that you have to put the `.png` textures file inside the correct folder.

In this case your **namespace** is `myitems` so you have to put them in this folder:\
`plugins/ItemsAdder/contents/myitems/textures/block/`

<details>

<summary>Alternative textures location</summary>

Alternatively you can put them in this folder too:\
`plugins/ItemsAdder/contents/myitems/resourcepack/assets/myitems/textures/block/`

Read more here: [folders structure](../contents-folders-structure.md)

</details>

<figure><img src="../../../.gitbook/assets/red_block_textures_preview.png" alt=""><figcaption></figcaption></figure>

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
      textures:
        - block/red_block.png
```

## Final complete configuration

### Adding the block placing functionality

You have to add the `specific_properties` attribute.

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
        - block/red_block.png
    specific_properties:
      block:
        placed_model:
          type: REAL_NOTE
          break_particles: ITEM
```

{% hint style="info" %}
Click on the bottom link if you want to specify **tools** which can break the block, add **hardness** and **other attributes**.
{% endhint %}

## Final part

Now you just need to tell the plugin to load your just added block.\
Make sure to read the hosting tutorial or you won't see the block correctly.

{% content-ref url="../../resourcepack-hosting/" %}
[resourcepack-hosting](../../resourcepack-hosting/)
{% endcontent-ref %}

## Getting the block ingame

Run `/iaget red_block` to get the item.

![](../../../.gitbook/assets/image\_\(92\).png)

![](../../../.gitbook/assets/image\_\(91\).png)

![](../../../.gitbook/assets/image\_\(93\).png)

## Download the complete example&#x20;

{% embed url="https://addon.devs.beer/toolbox/assetsrepository/red_block" %}

## Drop exp from block

{% hint style="info" %}
**There are 2 ways to drop exp from your custom blocks.**
{% endhint %}

## 1. Add the exp drop directly in the custom block creation

This has a downside, you can only set the exp drop to custom blocks, not to vanilla blocks.

```yaml
  ruby_block:
    display_name: display-name-ruby_block
    permission: ruby_block
    resource:
      material: PAPER
      generate: true
      textures:
      - block/ruby_block.png
    specific_properties:
      block:
        placed_model:
          type: REAL_NOTE
          break_particles_material: REDSTONE_BLOCK
        break_tools_whitelist:
        - PICKAXE
        - pickaxe
    events:
      placed_block:
        break:
          drop_exp:
            chance: 100
            min_amount: 0
            max_amount: 3
```

## 2. Add the exp drop to loots

This is the best way because you can also apply this to vanilla blocks types and you can add as many as exp settings you want. This allows you to add more randomness and dynamicity to your drops.

```yaml
loots:
  blocks:
    ruby_ore:
      type: itemsadder:ruby_ore
      items:
        ruby:
          item: itemsadder:ruby
          min_amount: 1
          max_amount: 2
          chance: 100
      exp:
        exp_1:
          min_amount: 0
          max_amount: 3
          chance: 100
```
