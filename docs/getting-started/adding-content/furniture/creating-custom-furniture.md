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

Let's first fill our file with the following settings:

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
      furniture:
        solid: true
        small: true
        light_level: 13
        placeable_on:
          floor: true
          ceiling: false
          walls: false
        hitbox:
          height: 1
          width: 1
          length: 1
        sound:
          place:
            name: block.metal.fall
          break:
            name: block.metal.break
```