---
description: 基本物品属性集合
---

# 基本内容

## Enabled\[启用\]

```yaml
enabled: true
```

通过这个设置,你可以完全禁用一个物品. 

{% hint style="warning" %}
**很明显,如果玩家在背包里有该物品的话,它不会因为禁用而消除. 方块也是这样,当物品被破坏时就不会掉落出掉落物出来**
{% endhint %}

## Display name\[名称\]

```yaml
display_name: "Test"
```

这是玩家在使用物品时看到的名称

## Permission\[权限\]

```yaml
permission: myitem
```

{% page-ref page="item-permission.md" %}

## Lore\[描述\]

```yaml
lore:
- '&7When you mine a block'
- '&7it drops exp orbs'
- '&750% of times.'
```

对物品的描述

## Enchants\[附魔\]

```yaml
enchants:
  - ARROW_FIRE:1
  - anger_artifact:1
  - my_custom_plugin:custom_enchant:6
```

该物品的附魔 你可以设置[原版附魔](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/enchantments/Enchantment.html)或者其他扩展附魔插件\(比如:[EcoEnchants](https://www.spigotmc.org/resources/%E2%9A%A1-1-16-1-16-5-ecoenchants-%E2%9C%A8-220-custom-enchantments-%E2%9C%85-essentials-cmi-support.79573/), [GoldenEnchants](https://www.spigotmc.org/resources/goldenenchants-%E2%80%A2-more-vanilla-like-enchantments-1-14-1-16.61693/)等等...\).  
也支持**namespaces\[命名空间\]** \(如果你使用Namespacedkey来创建自定义附魔\)

## Attribute modifiers\[物品的功能属性\]

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

这些是原版属性的修改,你可以在这里查阅到更多信息[https://minecraft.gamepedia.com/Attribute\#Attributes\_available\_on\_all\_living\_entities](https://minecraft.gamepedia.com/Attribute#Attributes_available_on_all_living_entities)

## Durability\[耐久\]

```yaml
durability:
  max_custom_durability: 200
  custom_durability: 32
  disappear_when_broken: false
  unbreakable: false
  usages: 5
```

Itemsadder有超级好的自我解释功能.

`usages`是一个特殊的属性,它为当前物品设置一个使用次数\(检查事件教程\).

`custom_durability`是物品的自定义耐久度\(如果无法使用,则使用`max_custom_durability`\)

`max_custom_durability`是该物品可以达到的最大耐久度.

## Item Flag 标志

```yaml
item_flags:
  - HIDE_ATTRIBUTES
  - HIDE_DESTROYS
  - HIDE_ENCHANTS
  - HIDE_PLACED_ON
  - HIDE_POTION_EFFECTS
  - HIDE_UNBREAKABLE
```

特殊的物品标志,可以隐藏物品的一些原版的信息 在这可以找到一个详细的信息列表:[https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/ItemFlag.html](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/ItemFlag.html)

## blocked\_enchants \[无法附魔属性\]

这也是一个特殊的物品属性,使这个物品附魔失效,所以你的玩家将不能对该物品进行附魔.

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

## events\_cooldown \[限制属性\]

这是一个特殊属性,可以限制玩家对事件的高频率使用.它的单位是ticks,记住:20ticks=1秒.

```yaml
  healing_crystals:
    display_name: display-name-healing_crystals
    permission: healing_crystals
    resource:
      material: IRON_SWORD
      generate: true
      textures:
      - item/healing_crystals.png
    durability:
      max_custom_durability: 6
      custom_durability: 6
      disappear_when_broken: true
    item_flags:
    - HIDE_ATTRIBUTES
    events_cooldown: 1200 ########### <-- EXAMPLE 60 seconds
    events:
      interact:
        right:
          play_particle:
            name: HEART
          decrement_durability:
            amount: 1
          potion_effect:
            type: REGENERATION
            duration: 70
            amplifier: 4
```

## events\_needed\_player\_stats \[玩家状态判断\]

这个特殊属性使事件只能在玩家的状态\(添加玩家状态,通常是通过HUD进行显示\)来满足设定规则.

你可以把它设置为 `>`, `<` 和 `=`

#### 栗子:

{% page-ref page="../../../beginners/creating-a-custom-item/magic-wand.md" %}

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
      mana: ">0" ### <---- 比如说.你也可以把它设置为<5或=1,例如.
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

You can make an item glowing when dropped on the ground.  
Very useful for **rare items**.  
Example:

![](../../../../../.gitbook/assets/immagine%20%28117%29.png)

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

You can make a drop show its name.  
Very useful for **rare items**.  
Example:

![](../../../../../.gitbook/assets/immagine%20%28112%29.png)

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

{% page-ref page="templates-and-variants.md" %}

## variant\_of

