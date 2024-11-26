---
description: 基础物品属性集合
---

# 基础

{% hint style="warning" %}
<mark style="color:red;">不要忘记命名空间！</mark>\
不要忘记为你所有配置设定一个命名空间！
{% endhint %}

## 启用

```yaml
enabled: true
```

通过该设置，你可以完全禁用一个物品。

{% hint style="warning" %}
**如果玩家背包中有这个物品，它不会被移除。**\
**对于方块也一样，但在被破坏时不会掉落任何物品。**
{% endhint %}

## 物品名

```yaml
display_name: "Test"
```

这是玩家会看到的物品名。

## 权限

```yaml
permission_suffix: myitem
```

{% content-ref url="permission.md" %}
[权限列表](permission.md)
{% endcontent-ref %}

## 描述

```yaml
lore:
- '&7When you mine a block'
- '&7it drops exp orbs'
- '&750% of times.'
```

每行都是一行物品描述。

## 附魔

```yaml
enchants:
  - ARROW_FIRE:1
  - anger_artifact:1
  - my_custom_plugin:custom_enchant:6
```

物品的附魔。\
你可以设置[原版附魔](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/enchantments/Enchantment.html)以及其他插件的自定义附魔（如 [EcoEnchants](https://www.spigotmc.org/resources/%E2%9A%A1-1-16-1-16-5-ecoenchants-%E2%9C%A8-220-custom-enchantments-%E2%9C%85-essentials-cmi-support.79573/), [GoldenEnchants](https://www.spigotmc.org/resources/goldenenchants-%E2%80%A2-more-vanilla-like-enchantments-1-14-1-16.61693/)...）。\
也支持**命名空间**（如果你使用了命名空间来创建自定义附魔）

## 属性修饰符

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

这些是原版的属性修饰符，你可以在[这里](https://minecraft.gamepedia.com/Attribute#Attributes\_available\_on\_all\_living\_entities)查看详情。

## 耐久

```yaml
durability:
  max_custom_durability: 200
  custom_durability: 32
  disappear_when_broken: false
  unbreakable: false
  usages: 5
```

这无需多言。\
`usages` 是一个特殊的属性，允许你为该物品设定特定的使用次数。记得使用事件来减少它（查看事件教程）。

`custom_durability` 是物品被制作出来时的耐久（如未指定，与 `max_custom_durability` 相同）

`max_custom_durability` 是物品的最大耐久值

## 物品标记

```yaml
item_flags:
  - HIDE_ATTRIBUTES
  - HIDE_DESTROYS
  - HIDE_ENCHANTS
  - HIDE_PLACED_ON
  - HIDE_POTION_EFFECTS
  - HIDE_UNBREAKABLE
```

特定的物品标记可以隐藏一些原版信息。\
你可以在此找到详细信息：[https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/ItemFlag.html](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/ItemFlag.html)

## 方块附魔（blocked\_enchants）

禁止将特定附魔添加至物品的特殊属性，玩家无法将对应附魔添加至该物品。

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

## 以玩家状态为基础的事件（events\_needed\_player\_stats）

仅当玩家状态（ItemsAdder 状态，通常以 HUD 显示）满足设定条件时才执行事件的特殊属性。

你可以将其设置为 `>`, `<` 与 `=`

#### 示例：

{% content-ref url="../other-items-examples/magic-wand.md" %}
[魔杖](../other-items-examples/magic-wand.md)
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

## 发光（glow）

当物品掉落到地上时，你可以让其发光。\
对**珍稀物品**很有用.

{% hint style="warning" %}
为了启用发光功能，你需要安装两个 API。

[GlowAPI](https://www.spigotmc.org/resources/api-glowapi.19422/) 与 [PacketListenerAPI](https://www.spigotmc.org/resources/api-packetlistenerapi.2930/)

之所以需要它们，是因为如果不编写非常长的代码，就不可能实现此功能。有人已经做了，我们可以使用他们的API。
{% endhint %}

示例：

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

## 显示名字（show\_name）

你可以让掉落物显示名字。\
对于**珍稀物品**很有用。\
示例：

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

## 模板（template）

{% content-ref url="templates-and-variants.md" %}
[模板与变种](templates-and-variants.md)
{% endcontent-ref %}

## 变种（variant\_of）

{% content-ref url="templates-and-variants.md" %}
[模板与变种](templates-and-variants.md)
{% endcontent-ref %}

## 使用官方编辑器读取所有属性

{% content-ref url="../../files-editor.md" %}
[文件编辑器](../../files-editor.md)
{% endcontent-ref %}
