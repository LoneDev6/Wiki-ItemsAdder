---
icon: exclamation
---

# Failed to load required shader programs

`Caught error loading resourcepacks, removing all selected resourcepacks java.util.concurrent.CompletionException: java.lang.RuntimeException: Failed to load required shader programs:`

* `minecraft:core/rendertype_armor_cutout_no_cull (VertexFormat[Position, Color, UV0, UV1, UV2, Normal]): Could not find shader: minecraft:rendertype_armor_cutout_no_cull (VERTEX)`
* `minecraft:core/rendertype_text (VertexFormat[Position, Color, UV0, UV2]): Could not find shader: minecraft:rendertype_text (VERTEX)`

## Why does it happen?

This happens because Minecraft 1.21.2 changed where shaders `.vsh` and `.fsh` files have to be put.

The default shaders path is changed to `assets/minecraft/shaders/<name>.vsh` instead of `assets/minecraft/shaders/core/<name>.vsh`.

This made the `core` folder not mandatory and not automatically taken into account by the game.

To fix this you have to open each of your custom shaders `.json` files in the `core` folder and update the `vertex` and `fragment` path including `core/` as prefix folder.

The overlay folder is called `ia_overlay_1_21_2` on the final `.zip` file.

## How to fix automatically

ItemsAdder offers a setting that automatically fixes these shaders for you.

It will update the `.json` files automatically and create an overlay to allow older clients to still recognize the old format and the new clients (1.21.2+) to recognize the old format.

This requires you to run `/iazip` to regenerate your pack.

{% code title="config.yml" %}
```yaml
pre_1_21_2_shaders_fix:
  enabled: true
```
{% endcode %}
