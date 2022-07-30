---
描述: 基本物品属性的集合
---

# 基础属性


## Enabled

```yaml
enabled: true
```

使用该选项, 您可以完全禁用一个物品.

{% hint style="warning" %}
**即使玩家的背包中有被禁用的物品, 也不会将其移除.**\
**已放置的方块也是同理, 但破坏后不会再掉落任何东西.**
{% endhint %}

## Display name

```yaml
display_name: "Test"
```

这是玩家能看到的物品显示名称.

## Permission

```yaml
permission: myitem
```

{% content-ref url="item-permission.md" %}
[item-permission.md](item-permission.md)
{% endcontent-ref %}

## Lore

```yaml
lore:
- '&7When you mine a block'
- '&7it drops exp orbs'
- '&750% of times.'
```

物品的展示文本.

## Enchants

```yaml
enchants:
  - ARROW_FIRE:1
  - anger_artifact:1
  - my_custom_plugin:custom_enchant:6
```

物品的附魔属性.\
您可以设置 [原版附魔列表](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/enchantments/Enchantment.html) 和其他插件的自定义附魔 (例如 [EcoEnchants](https://www.spigotmc.org/resources/%E2%9A%A1-1-16-1-16-5-ecoenchants-%E2%9C%A8-220-custom-enchantments-%E2%9C%85-essentials-cmi-support.79573/), [GoldenEnchants](https://www.spigotmc.org/resources/goldenenchants-%E2%80%A2-more-vanilla-like-enchantments-1-14-1-16.61693/)...).\
支持 **namespaces** (如果您使用 Namespaced keys 创建自定义附魔的话)

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

这里是原版属性编辑项, 您可以在这里找到更多内容 [https://minecraft.gamepedia.com/Attribute#Attributes\_available\_on\_all\_living\_entities](https://minecraft.gamepedia.com/Attribute#Attributes\_available\_on\_all\_living\_entities)

## Durability

```yaml
durability:
  max_custom_durability: 200
  custom_durability: 32
  disappear_when_broken: false
  unbreakable: false
  usages: 5
```


`usages` 是每当玩家使用一次该物品会消耗的物品耐久值.（例如：当玩家使用一次法杖将会消耗该法杖的5点耐久度）

`custom_durability` 是物品合成时的耐久度 (如果未指定, 则与 `max_custom_durability` 相同)

`max_custom_durability` 是物品可达到的最大耐久度.

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

特殊的物品标志, 可以隐藏物品的一些原版信息.\
您可以在这里找到详细的信息列表: [https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/ItemFlag.html](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/ItemFlag.html)

## blocked\_enchants

特殊的物品配置项, 用于禁用为物品附上指定附魔, 您也可以填写 `ALL` 以禁用所有附魔.

{% tabs %}
{% tab title="禁止某些附魔" %}
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

{% tab title="禁止所有附魔" %}
```yaml
blocked_enchants:
      - ALL
```
{% endtab %}
{% endtabs %}

## events\_cooldown

限制玩家触发事件的特殊属性. 使用 `ticks` 作为单位, 20 ticks = 1 秒.

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
    events_cooldown: 1200 ########### <-- 这儿的例子代表 60 秒冷却时间
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

## events\_needed\_player\_stats

一个特殊的属性.
使事件仅在玩家的特定数据 (ItemsAdder player stat, 通常会在 HUDs 中显示) 满足特定规则时触发.

您可以使用符号 `>`, `<` 和 `=`

#### 示例:

{% content-ref url="../../creating-a-custom-item/magic-wand.md" %}
[magic-wand.md](../../creating-a-custom-item/magic-wand.md)
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
      mana: ">0" ### <---- 例子, 您也可以设置成 <5 或 =1 或其他不等式.
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

物品掉落在地面上时是否会发光.\
这很适合用来做 **稀有物品**.

{% hint style="warning" %}
若要使用发光功能, 您需要安装以下两个 API 以正常工作.

[GlowAPI](https://www.spigotmc.org/resources/api-glowapi.19422/) 和 [PacketListenerAPI](https://www.spigotmc.org/resources/api-packetlistenerapi.2930/)

之所以需要它们, 是因为这个功能需要编写非常多的代码, 而目前已有现成的 API 可以使用.
{% endhint %}

例子

![](<../../../../.gitbook/assets/immagine (114).png>)

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

物品掉落在地面上时是否显示名称.\
这很适合用来做 **稀有物品**.\
以下是个例子:

![](<../../../../.gitbook/assets/immagine (118) (1) (1) (1) (1) (1) (1) (1) (2).png>)

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

## 子级物品模板

{% content-ref url="templates-and-variants.md" %}
[templates-and-variants.md](templates-and-variants.md)
{% endcontent-ref %}

## variant\_of（子级物品）

{% content-ref url="templates-and-variants.md" %}
[templates-and-variants.md](templates-and-variants.md)
{% endcontent-ref %}
