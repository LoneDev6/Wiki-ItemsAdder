---
title: Creating custom furniture
description: "How to add custom furniture"
---

## Creating simple furniture

This page will cover how to make some simple custom furniture.  
In our example will me make an (honestly ugly) lamp that should emit light when placed.

!!! info "Note"
    ItemsAdder does by default not handle light stuff.  
    You need to install LightAPI for it to work.

### Creating the configuration

The first step is to make a YAML file within your own namespace folder.  
Our example is called `lamp.yml` and is saved under `items_packs/example/`.

Let's first fill our file with the following settings (Click the :material-plus-circle: for further information):

```yaml
info:
  namespace: example
items:
  lamp:
    display_name: "Lamp"
    permission: example.deco.lamp
    lore:
    - "it's a lamp!"
    resource:
      material: PAPER
      generate: false
      model_path: lamp
    behaviours:
      furniture: # (1)
        solid: true # (2)
        small: true # (3)
        light_level: 13
        placeable_on: # (4)
          floor: true
          ceiling: false
          walls: false
        hitbox: # (5)
          height: 1
          width: 1
          length: 1
        sound:
          place:
            name: block.metal.fall
          break:
            name: block.metal.break
```

1.  This tells ItemsAdder to apply furniture functionality to our item.
2.  Allows the furniture to have a solid hitbox using barrier blocks.
3.  When set to true, uses a small armor stand as the entity.
4.  Sets on what you can place the furniture. This also has certain effects (i.e. rotation) when using `item_frame` as entity.
5.  Sets the dimensions of the hitbox. This is only used when `solid` is set to `#!yaml true`