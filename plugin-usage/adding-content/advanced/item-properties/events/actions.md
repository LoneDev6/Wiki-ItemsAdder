# Actions

## What are actions?

Actions are what will happen when an event is triggered.

### List of actions:

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
You can set the same action multiple times. You just have to add `_anything` at the end.  
For example if you want to play two sounds you have to write this:

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
    command: 'tellraw {player} {"text":"wow you did something!","color":"gold"}'
    as_console: true
  second:
    command: 'help'
    as_console: false
  third:
    command: 'give {player} diamond'
    as_console: true


play_particle:
  name: "ENCHANTMENT_TABLE"

# Shoots particle (useful for wands and weapons)
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
    
# Vanilla saturation values: 
# https://minecraft.gamepedia.com/Hunger#Food_level_and_saturation_level_restoration
feed:
  amount: 6
  saturation: 2 # <--- this is optional, default is 0
    
# Replaced properties of the current item copying them from another.
# For now you can only do that with custom_model_data. More will be added.
replace_properties:
  custom_model_data:
    copy_from_item: "itemsadder:closed_lightsaber"
    restorable: true


give_item:
  item: empty_cup
  amount: 1

# Replaces blocks around the block you interacted with or break
replace_near_blocks:
  radius:
    x: 2
    y: 2
    z: 2
  from: LAVA
  to: OBSIDIAN
  decrement_durability: 8
  no_physics: false #default is false

# Glows blocks around the block you interacted with or break
glow_near_blocks:
  decrement_durability:
    amount: 1
  radius:
    x: 50
    y: 50
    z: 50
  material: DIAMOND_ORE

# Breaks multiple blocks around the block you interacted with or break
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
  
# Allows you to damage entities around you
damange_near_entities:
  entity_groups:
   - HOSTILE
   - PLAYERS
   - PASSIVE
  damage: 4
  range: 7
  
# Allows you to damage the entity you're looking at
damage_entity_in_sight:
  damage: 4
  distance: 7
  
# Special action that allows you to increment player stat linked to an hud
#in this case hud named: "itemsadder:mana_bar"
increment_player_stat:
  name: "itemsadder:mana_bar"
  amount: 1

# Special action that allows you to decrement player stat linked to an hud
#in this case hud named: "itemsadder:mana_bar"
decrement_player_stat:
  name: "itemsadder:mana_bar"
  amount: 1

# Special action to make the event cancelled (the event that called this action)
cancel: true

# Adds potion effect to target entity (attack, interact...)
target_potion_effect:
  type: GLOWING
  duration: 70
  amplifier: 15

# Removes potion effect to target entity (attack, interact...)
target_remove_potion_effect:
  type: GLOWING

play_totem_animation: animatedtitles:bruh
```

