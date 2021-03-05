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
* `increment_player_stat`
* `decrement_player_stat`
* `cancel`
* `target_potion_effect`
* `target_remove_potion_effect`
* `play_totem_animation`

{% hint style="info" %}
Вы можете указать несколько действий и по нескольку раз. Чтобы заставить его проигрываться несколько раз вам нужно добавить `_любой текст на английской раскладке` в конце.  
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
```
{% endhint %}

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

### 

