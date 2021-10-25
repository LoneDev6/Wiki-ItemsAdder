# Действия

## Что это такое?

Действия происходят тогда, когда считалось определенное событие.

### Список всех действий:

* `play_sound`
* `stop_sound`
* `execute_commands`
* `play_particle`
* `shoot_particle`
* `play_effect`
* `increment_durability`
* `decrement_durability`
* `decrement_usages`
* `increment_amount`
* `decrement_amount`
* `drop_exp`
* `feed`
* `replace_properties`
* `give_item`
* `replace_near_blocks`
* `glow_near_blocks`
* `multiple_break`
* `potion_effect`
* `remove_potion_effect`
* `explosion`
* `damage_near_entities`
* `damage_entity_in_sight`
* `damage_entity`
* `increment_player_stat`
* `decrement_player_stat`
* `cancel`
* `target_potion_effect`
* `target_remove_potion_effect`
* `play_totem_animation`

### Задержка

{% hint style="info" %}
У каждого действия есть специальный атрибут **delay**.\
Это **задержка** в тиках перед началом действия.\
Например:

```yaml
items:
  chain_events:
    display_name: "%#FE5A00%chain_events"
    permission: test.chain_events
    resource:
      material: COAL
      generate: true
      textures:
      - "minecraft:item/diamond.png"
    events:
      interact:
        right:
          execute_commands:
            cmd1:
              command: 'tellraw {player} {"text":"Action 1","color":"gold"}'
              as_console: true
              delay: 0
            cmd2:
              command: 'tellraw {player} {"text":"Action 2","color":"gold"}'
              as_console: true
              delay: 20
            cmd3:
              command: 'tellraw {player} {"text":"Action 3","color":"gold"}'
              as_console: true
              delay: 40
          play_sound_1:
            name: minecraft:block.note_block.banjo
            delay: 0
          play_sound_2:
            name: minecraft:block.note_block.banjo
            pitch: 1.2
            delay: 20
          play_sound_3:
            name: minecraft:block.note_block.banjo
            pitch: 1.5
            delay: 40
```
{% endhint %}

### Несколько действий одного типа

{% hint style="info" %}
Вы можете указать несколько действий и по нескольку раз. Чтобы заставить его проигрываться несколько раз вам нужно добавить `_любой текст на английской раскладке` в конце.\
Пример, если вам нужно проиграть 2 звука игроку сразу:

```yaml
play_sound_first:
  name: itemsadder:ambient.creepy
  volume: 1
  pitch: 1
play_sound_second:
  name: minecraft:ambient.cave
  volume: 1
  pitch: 1
play_sound_3:
  name: minecraft:ambient.cave
  volume: 1
  pitch: 1
```
{% endhint %}

### Разрешение на действия

{% hint style="info" %}
У каждого действия есть специальный атрибут **разрешение**.\
Это **разрешение**, которое игрок должен иметь перед началом **действия**.\
Например, игрок должен иметь разрешение `myitems.usage.secret_items_dispenser`, чтобы воспроизвести звук.\
В этом примере вы заметите "проблему". Звук воспроизводится, даже если у пользователя нет разрешения на событие give. Это потому что... ну, проверка разрешения происходит только на элементе give\_.

```yaml
  test_block:
    display_name: display-name-test_block
    permission: test_block
    resource:
      material: PAPER
      generate: true
      textures:
      - block/test_block.png
    specific_properties:
      block:
        placed_model:
          type: REAL_NOTE
          break_particles_material: SMITHING_TABLE
    events:
      placed_block:
        interact:
          give_item:
            permission: "myitems.usage.secret_items_dispenser"
            item: DIAMOND
          play_sound:
            name: itemsadder:ambient.creepy
            volume: 1
            pitch: 1
```

#### Установка одинакового разрешения для каждого действия

Если вы хотите установить одинаковое разрешение для каждого действия без копирования и вставки, вы можете это сделать!\
Используйте специальный атрибут `all_actions_permission`.\
Например:

```yaml
  test_block:
    display_name: display-name-test_block
    permission: test_block
    resource:
      material: PAPER
      generate: true
      textures:
      - block/test_block.png
    specific_properties:
      block:
        placed_model:
          type: REAL_NOTE
          break_particles_material: SMITHING_TABLE
    all_actions_permission: "myitems.usage.secret_items_dispenser"
    events:
      placed_block:
        interact:
          give_item:
            item: DIAMOND
      play_sound:
        name: itemsadder:ambient.creepy
        volume: 1
        pitch: 1
```
{% endhint %}

## Список свойств действий

```yaml
play_sound:
  name: itemsadder:ambient.creepy
  volume: 1
  pitch: 1


stop_sound:
  name: "itemsadder:music_disc.cdk_sunday"


execute_commands:
  first_example:
    command: 'tellraw {player} {"text":"ого, ты что-то сделал!","color":"gold"}'
    as_console: true
  second:
    command: 'help'
    as_console: false
  third:
    command: 'give {player} diamond'
    as_console: true


play_particle:
  name: "ENCHANTMENT_TABLE"

# Создает частицы при стрельбе (полезно для посохов или оружия)
shoot_particle:
  name: FLAME
  distance: 7

play_effect:
  name: SMOKE

increment_durability:
  amount: 10


decrement_durability:
  amount: 10


decrement_usages:
  amount: 1


increment_amount:
  amount: 1


decrement_amount:
  amount: 1    


drop_exp:
  chance: 50
  min_amount: 1
  max_amount: 3

# Для ванильной шкалы сытости (голода): 
# https://minecraft.gamepedia.com/Hunger#Food_level_and_saturation_level_restoration
feed:
  amount: 6
  saturation: 2 # <--- настраивается, изначально равно 0

# Изменение данных нынешнего предмета на данные другого.
# Сейчас вы можете делать это только через тэг custom_model_data. Позже добавлю еще.
replace_properties:
  custom_model_data:
    copy_from_item: "itemsadder:closed_lightsaber"
    restorable: true


give_item:
  item: empty_cup
  amount: 1

# Заменяют блоки вокруг игрока, когда он контактирует с ними или ломает их
replace_near_blocks:
  radius:
    x: 2
    y: 2
    z: 2
  from: LAVA
  to: OBSIDIAN
  decrement_durability: 8
  no_physics: false #изначально установлено false

# Подсветит блоки вокруг игрока, когда он контактирует с блоком или ломает его.
glow_near_blocks:
  decrement_durability:
    amount: 1
  radius:
    x: 50
    y: 50
    z: 50
  material: DIAMOND_ORE

# Дает возможность несколько блоков сразу, когда вы контактируете с одним из них или ломаете его.
multiple_break:
  keep_ores: true
  drop_all_blocks:
    enabled: true
    need_silk_touch: true
  size: 3
  depth: 3


potion_effect:
  type: UNLUCK
  duration: 100
  amplifier: 0


remove_potion_effect:
  type: GLOWING


explosion:
  power: 2
  fire: true
  break_blocks: true

# Наносит урон существам вокруг
damange_near_entities:
  entity_groups:
   - HOSTILE
   - PLAYERS
   - PASSIVE
  damage: 4
  range: 7

# Наносит урон существу, на которое вы смотрите
damage_entity_in_sight:
  damage: 4
  distance: 7

# Allows you to damage the entity of this event. For example on interact or attack
# or on event item_hit_entity
damage_entity:
  damage: 4

# Позволяет влиять на статы игрока в положительную сторону, которые привязаны к хаду
#в данном случае это шкала маны: "itemsadder:mana_bar"
increment_player_stat:
  name: "itemsadder:mana_bar"
  amount: 1

# Позволяет влиять на статы игрока в отрицательную сторону, которые привязаны к хаду
#в данном случае это шкала маны: "itemsadder:mana_bar"
decrement_player_stat:
  name: "itemsadder:mana_bar"
  amount: 1

# Действие, которое отменяет событие (событие, которое проиграло это действие)
cancel: true

# Наложение эффекта на цель (при атаках, взаимодействии с целью...)
target_potion_effect:
  type: GLOWING
  duration: 70
  amplifier: 15

# Действие, удаляющее эффект с цели (при атаках, взаимодействии с целью...)
target_remove_potion_effect:
  type: GLOWING

play_totem_animation: animatedtitles:bruh
```
