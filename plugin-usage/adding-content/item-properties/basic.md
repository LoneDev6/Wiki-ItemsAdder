---
description: 基础物品属性集合
---

# 基础

## `enabled`

```yaml
enabled: true
```

通过该设置，你可以完全禁用一个物品。

{% hint style="warning" %}
即使你禁用该物品，也不会从世界或玩家背包中删除。
{% endhint %}

## `name`

```yaml
name: "Test"
```

这是物品提示框中的名字。

{% hint style="warning" %}
ItemsAdder 4.0.8 及更低版本使用 `display_name` 属性。
{% endhint %}

## `permission_suffix`

```yaml
permission_suffix: myitem
```

该属性用于分辨玩家是否具有在 `/ia` 界面中看到某个物品的权限。\
示例的完整权限为 `ia.user.ia.seeitem.myitem`。

目前这是该权限的唯一用法。

{% content-ref url="permission.md" %}
[权限列表](permission.md)
{% endcontent-ref %}

## `lore`

```yaml
lore:
- '&7When you mine a block'
- '&7it drops exp orbs'
- '&750% of times.'
```

每行都是一行物品描述。

## `enchants`

```yaml
enchants:
  - ARROW_FIRE:1
  - anger_artifact:1
  - my_custom_plugin:custom_enchant:6
```

物品的附魔。\
你可以设置[原版附魔](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/enchantments/Enchantment.html)以及其他插件的自定义附魔(例如 [EcoEnchants](../../../compatibility-with-other-plugins/compatible/ecoenchants.md), [ExcellentEnchants](https://www.spigotmc.org/resources/goldenenchants-%E2%80%A2-more-vanilla-like-enchantments-1-14-1-16.61693/)...)。\
也支持**命名空间**（如果你使用了命名空间来创建自定义附魔）

## `attribute_modifiers`

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

这些是原版的属性修饰符，你可以在[这里](https://minecraft.gamepedia.com/Attribute#Attributes_available_on_all_living_entities)查看详情。

## `durability`

```yaml
durability:
  max_custom_durability: 200
  custom_durability: 32
  disappear_when_broken: false
  unbreakable: false
  usages: 5
```

`usages` : 物品的使用次数。记得通过[事件](events/)来降低。

`custom_durability` ：物品被制作出来时的耐久（如未指定，与 `max_custom_durability` 相同）

`max_custom_durability` ：物品的最大耐久值

## `item_flags`

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

{% hint style="info" %}
由于 Minecraft 1.20.4 的更改，该选项已过时，可能不会像旧版游戏一样工作。
{% endhint %}

## `blocked_enchants`

禁止物品附魔。

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

## `events_needed_player_stats`

仅当玩家状态（ItemsAdder 状态，通常在界面中显示）满足条件时生效的特殊属性。你可以将其设置为 `>`，`<` 与 `=`。

示例：[示例魔杖](../other-items-examples/magic-wand.md).

## `glow`

当物品掉落到地上时，你可以让其发光。\
对**珍稀物品**很有用.

{% hint style="warning" %}
ItemsAdder 4.0.9 及以上版本可用。
{% endhint %}

![](../../../.gitbook/assets/image_\(114\).png)

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

## `show_name`

你可以让掉落物显示名字。\
对于**珍稀物品**很有用。\

![](<../../../.gitbook/assets/image_(118) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (4) (1) (1) (1) (1).png>)

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

## `template` 与 `variant_of`

{% content-ref url="templates-and-variants.md" %}
[模板与变种](templates-and-variants.md)
{% endcontent-ref %}

## 使用官方编辑器读取所有属性

{% content-ref url="../../files-editor.md" %}
[文件编辑器](../../files-editor.md)
{% endcontent-ref %}
