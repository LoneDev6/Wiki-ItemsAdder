---
Описание: Сборник основных настроек предмета
---

# Основы

## Включение функции предметов в основном файле конфигурации плагина

```yaml
enabled: true
```

Этой строкой вы можете отключить всю предметы полностью.

{% hint style="warning" %}
**Важно - если игрок имеет предмет в инвентаре - он не исчезнет, игрок все еще будет иметь его.  
Точно так же и с блоками, но выбрасывать предметы при их поломке они перестанут.**
{% endhint %}

## Отображение имени \(Display name\)

```yaml
display_name: "Test"
```

Строка имени предмета, которое увидит игрок

## Права \(Permission\)

```yaml
permission: myitem
```

## Описание предмета \(Lore\)

```yaml
lore:
- '&7Когда вы сломаете блок'
- '&7из него выпадет опыт'
- '&7в 50% случаев.'
```

Строки лора \(описания\) предмета

## Enchants

```yaml
enchants:
  - ARROW_FIRE:1
  - anger_artifact:1
  - my_custom_plugin:custom_enchant:6
```

Enchants of the item.  
You can set [vanilla enchants](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/enchantments/Enchantment.html) and custom enchants of other plugins \(for example [EcoEnchants](https://www.spigotmc.org/resources/%E2%9A%A1-1-16-1-16-5-ecoenchants-%E2%9C%A8-220-custom-enchantments-%E2%9C%85-essentials-cmi-support.79573/), [GoldenEnchants](https://www.spigotmc.org/resources/goldenenchants-%E2%80%A2-more-vanilla-like-enchantments-1-14-1-16.61693/)...\).  
Supports also **namespaces** \(if you are creating custom enchants using Namespaced keys\)

## Атрибуты предмета \(Attribute modifiers\)

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

Это атрибуты ванили, вы можете узнать больше о них тут: [https://minecraft.gamepedia.com/Attribute\#Attributes\_available\_on\_all\_living\_entities](https://minecraft.gamepedia.com/Attribute#Attributes_available_on_all_living_entities)

## Прочность \(Durability\)

```yaml
durability:
  max_custom_durability: 200
  custom_durability: 32
  disappear_when_broken: false
  unbreakable: false
  usages: 5
```

Очень простое для вашего использования  
`usages` - параметр, который позволит вам выставить количество использований создаваемого предмета. Не забывайте уменьшать это количество событиями \(гляньте статью о событиях\).

`custom_durability` - параметр изначальной прочности предмета при создании, предмет может создаваться изначально поломанным \(если не указано - строка будет иметь значение строки `max_custom_durability`\)

`max_custom_durability` - параметр максимальной прочности предмета, которое можно достичь

## Флаги предметов

```yaml
item_flags:
  - HIDE_ATTRIBUTES
  - HIDE_DESTROYS
  - HIDE_ENCHANTS
  - HIDE_PLACED_ON
  - HIDE_POTION_EFFECTS
  - HIDE_UNBREAKABLE
```

Данный параметр позволяет скрыть лишнюю ванильную информацию о предмете в его описании \(лоре\).  
Вы можете найти больше информации об этом, а также список этих параметров тут: [https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/ItemFlag.html](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/ItemFlag.html)

## Блокировка зачарований предмета \(blocked\_enchants\)

Параметр, который отключит указанные зачарования для предмета.

{% tabs %}
{% tab title="Отключение некоторых зачарований" %}
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

{% tab title="Отключение всех зачарований" %}
```yaml
blocked_enchants:
      - ALL
```
{% endtab %}
{% endtabs %}

## Перезарядка событий \(events\_cooldown\)

Параметр, который не даст игроку спамить определенное событие. Число указано в тиках, поэтому 20 = 1 секунде.

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
    events_cooldown: 1200 ########### <-- ПРИМЕР 60 секунд перезарядки
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

## События, которым нужна статистики плагина \(events\_needed\_player\_stats\)

Параметр, который заставит работать событие только тогда, когда его статистика соотвествует указанному числу \(Статы плагина ItemsAdder, которые обычно используются в HUDах, например - шкала маны\).

Вы можете установить значение которые `>` - больше, чем указанное, `<` - меньше, чем указанное или `=` - ровно указанному

### Пример:

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
      mana: ">0" ### <---- для примера. Вы можете выставить значения <5 или =1 для примера.
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

![](../../../../../.gitbook/assets/immagine%20%28118%29%20%282%29%20%282%29.png)

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

{% page-ref page="templates-and-variants.md" %}

