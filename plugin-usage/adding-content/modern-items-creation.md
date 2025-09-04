---
icon: file-plus
---

# 1.21.4+ - Modern Items Creation

{% hint style="warning" %}
This requires ItemsAdder 4.0.13 and Minecraft 1.21.4+ (both client and server).
{% endhint %}

## What is the modern item method?

This is a new way to create items graphics. The old `resource` property is replaced by the new property `graphics` which is easier to use and has more features.

{% hint style="warning" %}
`resource` property for now will stay and will still work fine.

You should and must continue using it if your server accepts 1.21.3 and lower clients, otherwise they won't see the graphics of the item!
{% endhint %}

## Generating items automatically

`material` property is not mandatory anymore. `paper` will be used by default.

### From a texture

Automatically generate the modern item + model from a texture.

```yaml
  modern_texture:
    name: Modern Texture
    graphics:
      texture: item/modern_texture
```

### From a model

Automatically generate the modern item and use a specific model file.

```yaml
  modern_model:
    name: Modern Model
    graphics:
      model: item/modern_model
```

### Block from textures

In this case ItemsAdder automatically detects you want to create a block (because it has the block `behaviour`) so the parent will automatically be `block/cube`.

If you do not specify the block behaviour, it would use the `paper` parent which is `minecraft:item/generated`.

```yaml
  modern_textures_block:
    name: Modern Model Block Textures
    graphics:
      textures:
        north: block/modern_textures_block_north
        south: block/modern_textures_block_south
        east: block/modern_textures_block_east
        west: block/modern_textures_block_west
        up: block/modern_textures_block_up
        down: block/modern_textures_block_down
    behaviours:
      block:
        placed_model:
          type: REAL_NOTE
```

### Block from a single texture

Automatically generate the modern item and use a specific model file (in this case it generates a multi face block).

```yaml
  modern_textures_block_2:
    name: Modern Model Block Textures 2
    graphics:
      texture: block/modern_textures_block_all
    behaviours:
      block:
        placed_model:
          type: REAL_NOTE
```

### Block from a specific parent (`cross` for example)

Automatically generate the modern item + model from textures (in this case it generates a multi face block).

In this case I set a custom parent for the model to be generated. I can specify the textures to be linked to the cross template in this case.

```yaml
  modern_textures_block_cross:
    name: Modern Model Block Textures Cross
    graphics:
      icon: block/modern_textures_block_all
      parent: block/cross
      textures:
        cross: block/modern_textures_block_all
    behaviours:
      block:
        placed_model:
          type: REAL_WIRE
```

You can even just set `texture` instead, since the vanilla `block/cross` model has only one layer (`cross`), so ItemsAdder will automatically assign the texture to it.

```yaml
  modern_textures_block_cross:
    name: Modern Model Block Textures Cross
    graphics:
      icon: block/modern_textures_block_all
      parent: block/cross
      texture: block/modern_textures_block_all
    behaviours:
      block:
        placed_model:
          type: REAL_WIRE
```

### Bow from textures

```yaml
  modern_bow:
    name: Modern Bow
    material: bow
    graphics:
      textures:
        normal: item/modern_bow
        pulling_0: item/modern_bow_0
        pulling_1: item/modern_bow_1
        pulling_2: item/modern_bow_2
```

### Bow from models

```yaml
  modern_bow_models:
    name: Modern Bow Models
    material: bow
    graphics:
      models:
        normal: item/modern_bow
        pulling_0: item/modern_bow_0
        pulling_1: item/modern_bow_1
        pulling_2: item/modern_bow_2
```

### Fishing rod from textures

```yaml
  modern_fishing_rod:
    name: Modern Fishing Rod
    material: fishing_rod
    graphics:
      textures:
        normal: item/modern_bow
        cast: item/modern_bow_2
```

### Fishing rod from models

```yaml
  modern_fishing_rod_models:
    name: Modern Fishing Rod Models
    material: fishing_rod
    graphics:
      models:
        normal: item/modern_bow
        cast: item/modern_bow_2
```

### Crossbow from textures

You can create as many `pulling_` states as you want.

```yaml
  modern_crossbow:
    name: Modern Crossbow
    material: crossbow
    graphics:
      textures:
        normal: item/modern_bow
        pulling_0: item/modern_bow_0
        pulling_1: item/modern_bow_1
        pulling_2: item/modern_bow_2
        rocket: minecraft:item/diamond
        arrow: minecraft:item/emerald
```

### Crossbow from models

You can create as many `pulling_` states as you want.

```yaml
  modern_crossbow_model:
    name: Modern Crossbow Model
    material: crossbow
    graphics:
      models:
        normal: item/modern_bow
        pulling_0: item/modern_bow_0
        pulling_1: item/modern_bow_1
        pulling_2: item/modern_bow_2
        rocket: minecraft:item/diamond
        arrow: minecraft:item/emerald
```

### Trident from a model

```yaml
  modern_trident_model:
    name: Modern Trident Model
    material: trident
    graphics:
      icon: minecraft:item/diamond
      models:
        normal: item/modern_bow
        throwing: item/modern_bow_2
```

### Shield from a model

```yaml
  modern_shield_model:
    name: Modern Crossbow Model
    material: shield
    graphics:
      models:
        normal: item/modern_bow
        blocking: item/modern_bow_2
```

## Other optional properties

### Material

```yaml
  modern_texture:
    name: Modern Texture
    material: paper
    graphics:
      texture: item/modern_texture
```

### Icon

Show a different texture on the inventory slots compared to the in-game appearance.

```yaml
  modern_texture:
    name: Modern Texture
    graphics:
      texture: item/modern_texture
      icon: item/modern_texture_icon
```

### Disable hand animation on item swap

```yaml
  modern_texture:
    name: Modern Texture
    graphics:
      texture: item/modern_texture
      hand_animation_on_swap: false
```

## Experts configuration

### `item_model`

Manually handling the item model on your own using the new 1.21.4 format.

{% embed url="https://www.youtube.com/watch?v=eGjDxMrwpRk" fullWidth="false" %}

```yaml
  modern_item:
    name: Modern Texture
    material: paper
    item_model: test:modern_item
```

## Templates and variants

You can make variants of an item pretty easily.\
Variants inherit everything from a template item (that won't be available ingame).

```yaml
info:
  namespace: test_template_furniture
items:
  chair_template:
    template: true # Here
    name: ""
    graphics:
      model: furniture/chair
    behaviours:
      furniture:
        entity: item_display
        solid: true
        fixed_rotation: true
        hitbox:
          length: 1
          width: 1
          height: 1
        placeable_on:
          walls: false
          ceiling: false
          floor: true
      furniture_sit:
        sit_height: 0.75
  black_acacia_chair:
    variant_of: chair_template
    name: "Black Acacia Chair"
    graphics:
      parent: furniture/chair
      textures:
        wood: minecraft:block/acacia_planks
        wool: minecraft:block/black_wool
  red_chair:
    variant_of: chair_template # Here
    name: "Black Acacia Chair"
    graphics:
      parent: furniture/chair
      textures:
        wood: minecraft:block/red_wool
        wool: minecraft:block/red_wool

```

{% code title="contents/example/models/furniture/chair.json" %}
```json
{
  "textures": {
    "wool": "block/white_wool",
    "particle": "block/oak_planks",
    "wood": "block/oak_planks"
  },
  "elements": [
  //.....
```
{% endcode %}
