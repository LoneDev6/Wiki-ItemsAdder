---
description: Collection of basic item properties
---

# Basic

{% hint style="warning" %}
<mark style="color:red;">Don't forget the namespace!</mark>\
Don't forget to define a namespace for every of your config!
{% endhint %}

## Enabled

```yaml
enabled: true
```

With this setting you can disable an item completely.

{% hint style="warning" %}
**If a player has the item in inventory it won't be removed.**\
**Same thing for blocks, but when broken they won't drop anymore.**
{% endhint %}

## Display name

```yaml
display_name: "Test"
```

This is the name user will see on the item

## Permission

```yaml
permission_suffix: myitem
```

{% content-ref url="permission.md" %}
[permission.md](permission.md)
{% endcontent-ref %}

## Lore

```yaml
lore:
- '&7When you mine a block'
- '&7it drops exp orbs'
- '&750% of times.'
```

Lore lines of the item

## Enchants

```yaml
enchants:
  - ARROW_FIRE:1
  - anger_artifact:1
  - my_custom_plugin:custom_enchant:6
```

Enchants of the item.\
You can set [vanilla enchants](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/enchantments/Enchantment.html) and custom enchants of other plugins (for example [EcoEnchants](https://www.spigotmc.org/resources/%E2%9A%A1-1-16-1-16-5-ecoenchants-%E2%9C%A8-220-custom-enchantments-%E2%9C%85-essentials-cmi-support.79573/), [GoldenEnchants](https://www.spigotmc.org/resources/goldenenchants-%E2%80%A2-more-vanilla-like-enchantments-1-14-1-16.61693/)...).\
Supports also **namespaces** (if you are creating custom enchants using Namespaced keys)

## Attribute modifiers

```yaml
attribute_modifiers:
  mainhand:
    attackDamage: 19
    attackSpeed: 1.1
    maxHealth: 1.1
    movementSpeed: -1
    armor: 1.1
    armorToughness: 1.1
    attackKnockback: 1.1
    luck: 1.1
  offhand:
    attackDamage: 19
    attackSpeed: 1.1
    maxHealth: 1.1
    movementSpeed: 1.1
    armor: 1.1
    armorToughness: 1.1
    attackKnockback: 1.1
    luck: 1.1
```

These are the vanilla attribute modifiers, you can get more info here [https://minecraft.gamepedia.com/Attribute#Attributes\_available\_on\_all\_living\_entities](https://minecraft.gamepedia.com/Attribute#Attributes\_available\_on\_all\_living\_entities)

## Durability

```yaml
durability:
  max_custom_durability: 200
  custom_durability: 32
  disappear_when_broken: false
  unbreakable: false
  usages: 5
```

There are pretty self explanatory.\
`usages` are a special propery which allows you to set a number of usages for the current item. Remember to decrement it using events (check events tutorial).

`custom_durability` is the durability amount which the item has on crafting (if not specified is the same as `max_custom_durability`)

`max_custom_durability` is the max durability the item can reach

## Item flags

```yaml
item_flags:
  - HIDE_ATTRIBUTES
  - HIDE_DESTROYS
  - HIDE_ENCHANTS
  - HIDE_PLACED_ON
  - HIDE_POTION_EFFECTS
  - HIDE_UNBREAKABLE
```

Special item flags that can hide some vanilla info of the item.\
You can find a detailed info list here: [https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/ItemFlag.html](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/ItemFlag.html)

## blocked\_enchants

Special item property that disables enchants for this item, so your users won't be able to enchant it.

{% tabs %}
{% tab title="Disable some enchants" %}
```yaml
blocked_enchants:
      - DAMAGE_UNDEAD
      - DAMAGE_ALL
      - DAMAGE_ARTHROPODS
      - KNOCKBACK
      - DURABILITY
      - SWEEPING_EDGE
```
{% endtab %}

{% tab title="Disable all enchants" %}
```yaml
blocked_enchants:
      - ALL
```
{% endtab %}
{% endtabs %}

## events\_needed\_player\_stats

Special attribute to make events work only if the player stat (ItemsAdder player stat, which are usually shown in HUDs) satisfies the set rule.

You can set it to `>`, `<` ad `=`

#### Example:

{% content-ref url="../other-items-examples/magic-wand.md" %}
[magic-wand.md](../other-items-examples/magic-wand.md)
{% endcontent-ref %}

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
      mana: ">0" ### <---- for example. You could also set it to <5 or =1 for example.
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

## glow

You can make an item glowing when dropped on the ground.\
Very useful for **rare items**.

{% hint style="warning" %}
In order to use the glow feature you have to install two APIs.

[GlowAPI](https://www.spigotmc.org/resources/api-glowapi.19422/) and [PacketListenerAPI](https://www.spigotmc.org/resources/api-packetlistenerapi.2930/)

They are needed because this feature is impossible to implement without writing an extremely long code, someone already did it and we can use their API.
{% endhint %}

Example

![](../../../.gitbook/assets/image\_\(114\).png)

```yaml
items:
  glowing_item:
    display_name: Glowing Item
    resource:
      material: DIAMOND
      generate: true
      textures:
      - item/glowing_item.png
    drop:
      glow:
        enabled: true
        color: DARK_RED
```

## show\_name

You can make a drop show its name.\
Very useful for **rare items**.\
Example:

![](<../../../.gitbook/assets/image\_(118) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (4) (1) (1) (1) (1).png>)

```yaml
  glowing_item:
    display_name: Glowing Item
    resource:
      material: DIAMOND
      generate: true
      textures:
      - item/glowing_item.png
    drop:
      show_name: true
```

## template

{% content-ref url="templates-and-variants.md" %}
[templates-and-variants.md](templates-and-variants.md)
{% endcontent-ref %}

## variant\_of

{% content-ref url="templates-and-variants.md" %}
[templates-and-variants.md](templates-and-variants.md)
{% endcontent-ref %}

## Use the official files editor to read all the properties

{% content-ref url="../../files-editor.md" %}
[files-editor.md](../../files-editor.md)
{% endcontent-ref %}
