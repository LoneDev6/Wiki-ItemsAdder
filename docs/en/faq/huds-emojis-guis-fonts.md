---
title: "HUDs, Emojis, GUIs, Fonts"
description: "Various questions/topics about HUDs, Emojis, GUIs and Fonts"
---

Here is a collection of known issues/questions in regards to custom HUDs, custom GUIs, Emojis and fonts.

## Thirst/Mana Bar

### How to fill the thirst/mana bar?

Use the command `/iaplayerstat write <player> <type> float <value>`

**Arguments:**

- `<player>` - The target player to update the HUD of.
- `<type>` - The type of Bar to update. This would be either `thirst` or `mana`
- `<value>` - The new value to set. For type `thirst` would the value be between 1 and 10. For `mana` between 1 and 5.

### How to disable the thirst/mana bar?

To disable the thirst bar, go to `/plugins/ItemsAdder/data/items_packs/realcraft/`, open `huds.yml` and set `enabled` to `false`.  
For the mana bar, do the exact same, but instead go to `/plugins/ItemsAdder/data/items_packs/magiccraft/huds.yml`

After saving your changes, run `/iareload` to apply them.

----

## I can't see Emojis, custom GUIs or custom HUDs

When you have set `Force Unicode` to `On` in your client settings, will you not be able to see Emojis, custom GUIs or custom HUDs.

To fix this, you have to disable the `Force Unicode` setting.  
If you still want to use Minecraft's thinner font, can you open the `config.yml` of ItemsAdder and under `thin-font` set `enabled` to true.  
```yaml
thin-font:
  enabled: true
```

--8<-- "iazip.md"

----

## I see squares instead of actual images

### Using [Custom ESC Add-On][custom-esc]?

Delete any lang files in `plugins/ItemsAdder/data/resource_pack/assets/minecraft/lang` and refresh the resource pack as usual.

### Using Emojis/Rank Icons

Make sure the texture's `y_position` is not greater than the image's height in pixels. Minecraft doesn't support this.

--8<-- "iazip.md"

[custom-esc]: https://www.spigotmc.org/resources/88809/