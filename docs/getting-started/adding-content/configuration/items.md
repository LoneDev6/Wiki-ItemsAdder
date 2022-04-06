---
title: Items
description: "All settings found under 'info:'"
---

# Items

## :item_name

The section right after `items` is used to set the name of the item, which would then be used for commands such as `/iaget <namespace>:<item_name>`.  
Please only use lowercased, alphanummeric letters and underscores.

### enabled

> **Format:**
> 
> ```yaml
> enabled: <boolean>
> ```

Enables/Disables the item. When disabled can the item no longer be obtained through commands and won't generate when used in world/surface-populators.  
Already existing Items and Blocks will not get removed, but blocks won't drop anything when broken.

### display_name

> **Format:**
> 
> ```yaml
> display_name: <string>
> ```

Sets the Name of the item.  
When a [Dictionary File](#dictionary-lang) with a matching string exists, will the item use whatever has been defined within that file.

### lore

> **Format:**
> 
> ```yaml
> lore:
> - <string>
> - <string>
> - ...
> ```

Sets the lore of the Item.  
You can add as many lines as you like. If a [Dictionary File](#dictionary-lang) with a matching String exists will the corresponding value be used.

### permission

> **Format:**
> 
> ```yaml
> permission: <string>
> ```

Sets the permission required to obtain this item.

### enchants

> **Format:**
> 
> ```yaml
> enchants:
> - <string>:<integer>
> - <string>:<integer>
> - ...
> ```

List of Enchantments to apply. The format is `<enchantment_name>:<level>`. 
You can use [Vanilla enchantments][vanilla-enchant] or custom ones from plugins such as [EcoEnchants][ecoenchants], [GoldenEnchants][goldenenchants], etc.  
Custom namespaces are also supported, if you're creating custom enchantments using those.

### attribute_modifiers

> **Format:**
> 
> ```yaml
> attribute_modifiers:
>   <slot>:
>     <attribute>: <value>
>     <attribute>: <value>
>     ...
> ```

Allows to set specific attributes to use when the item is held or worn on a specific slot.

Please visit the [Minecraft Wiki][mc-wiki] for a full list of available attributes (Leave away the `generic.` when setting the attribute).

### durability

> **Format:**
> 
> ```yaml
> durability:
>   max_custom_durability: <integer>
>   custom_durability: <integer>
>   disappear_when_broken: <boolean>
>   unbreakable: <boolean>
>   usages: <integer>
> ```

!!! info "Important"
    This setting can only be used when the [`material`](#resource) is an Item that has durability (i.e. `DIAMOND_SWORD`).

Sets the different durability settings for the custom item.

**Options:**

- `#!yaml max_custom_durability: <Integer>`  
  Sets the custom durability the item should have.
- `#!yaml custom_durability: <Integer>`  
  Sets the durability the item should have **in crafting**. If not set will be the same as `max_custom_durability`.
- `#!yaml disappear_when_broken: <Boolean>`  
  Whether the Item should be removed when it breaks.
- `#!yaml unbreakable: <Boolean>`  
  Sets the Item as Unbreakable.
- `#!yaml usages: <Integer>`  
  Sets the number of times the item can be used. Remember to decrease the number using events.

### item_flags

> **Format:**
> 
> ```yaml
> item_flags:
> - <string>
> - <string>
> - ...
> ```

When set will certain infos be hidden on the Item such as enchantments or the "Unbreakable" text. This all depends on what flags you have set in the list.  
Please see the [Spigot Javadocs][jd-item-flags] for a full list of available Item Flags.

### blocked_enchants

> **Format:**
> 
> ```yaml
> blocked_enchants:
> - <string>
> - <string>
> - ...
> ```

List of Enchantments that shouldn't be allowed on the item.  
See the [Spigot Javadocs][vanilla-enchant] for a full list of all available Enchantments.

To deny **all** enchantments, use `ALL`

### events_cooldown

> **Format:**
> 
> ```yaml
> events_cooldown: <integer>
> ```

Sets a cooldown in ticks to delay further events for an item. This is useful to prevent spam.

### events_needed_player_stats

> **Format:**
> 
> ```yaml
> events_needed_player_stats:
>   <stats_name>: <string>
> ```

Allows you to set a required value for a specific custom statistic to trigger the events.  
You can use the following expressions:

- `>:number` - Perform the events when the statistic is larger than `:number`
- `<:number` - Perform the events when the statistic is smaller than `:number`
- `=:number` - Perform the events when the statistic is equal to `:number`

**Example:**

```yaml
  magic_wand:
    display_name: "Magic wand"
    permission: magic_wand
    resource:
      material: DIAMOND_SWORD
      generate: true
      textures:
      - item/example_item.png
    durability:
      max_custom_durability: 512
    attribute_modifiers:
      mainhand:
        attackDamage: 0.1
    blocked_enchants:
    - ALL
    events_needed_player_stats:
      mana: ">0" ### <---- Only allows usage if stat "mana" is higher than 0.
    events:
      interact:
        entity:
          target_potion_effect:
            type: GLOWING
            duration: 70
            amplifier: 15
          decrement_player_stat:
            name: mana
            amount: 1
```

### glow

> **Format:**
> 
> ```yaml
> glow:
>   enabled: <boolean>
>   color: <string>
> ```

!!! info "Plugin required"
    This feature requires [GlowAPI][glowapi] and [PacketListenerAPI][packetlistenerapi] to be installed to work.

Makes the dropped item glow.

**Options:**

- `#!yaml enabled: <Boolean>`  
  Enables/Disables the glow effect.
- `#!yaml color: <String>`  
  Sets the glow color to use. This needs to be a [valid color name][colors].

### show_name

> **Format:**
> 
> ```yaml
> show_name: <boolean>
> ```

Whether the Item's name should be visible when droped.

### resource

> **Format:**
> 
> ```yaml
> resource:
>   material: <string>
>   generate: <boolean>
>   model_path: <string>
>   textures:
>   - <string>
>   - <string>
>   - ...
> ```

Sets the different resource settings for the item such as what model and/or textures should be used.

**Options:**

- `#!yaml material: <String>`  
  Sets the Item Material to use as a base.  
  Depending on what your item should do, will you need to use specific items (i.e. custom weapons need an item with durability).
- `#!yaml generate: <Boolean>`  
  Sets if ItemsAdder should generate a default model file for the item.  
  Set this to `#!yaml false` if you want to use a custom model.
- `#!yaml model_path: <String>`
  Sets the relative path to the JSON file of the item model to use.  
  The path will be relative from `/data/resource_packs/assets/:namespace/models/`. You can ommit the `.json` extension from the path.
- `#!yaml textures: <List>`  
  List of Strings representing relative paths to PNG files.  
  The paths will be relative from `/data/resource_packs/assets/:namespace/textures/`.  
  Custom Blocks allow you to set up to 6 textures (one for each side), but you can also use only one to apply to all sides.


[vanilla-enchant]: https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/enchantments/Enchantment.html
[ecoenchants]: https://www.spigotmc.org/resources/%E2%9A%A1-1-16-1-16-5-ecoenchants-%E2%9C%A8-220-custom-enchantments-%E2%9C%85-essentials-cmi-support.79573/
[goldenenchants]: https://www.spigotmc.org/resources/goldenenchants-%E2%80%A2-more-vanilla-like-enchantments-1-14-1-16.61693/
[mc-wiki]: https://minecraft.fandom.com/wiki/Attribute#Attributes_available_on_all_living_entities
[jd-item-flags]: https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/ItemFlag.html
[glowapi]: https://www.spigotmc.org/resources/19422/
[packetlistenerapi]: https://www.spigotmc.org/resources/2930/
[colors]: https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Color.html