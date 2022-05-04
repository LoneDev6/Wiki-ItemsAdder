# Actions

## What are actions?

Actions are what will happen when an [event](./) is triggered.

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
* `replace_block`
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

### Delay

{% hint style="info" %}
Every action has a special attribute **delay**.\
It's the **delay** in ticks before starting the action.\
For example:

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

### Multiple actions of the same type

{% hint style="info" %}
You can set the same action multiple times. You just have to add `_anything` at the end.\
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
play_sound_3:
  name: minecraft:ambient.cave
  volume: 1
  pitch: 1
```
{% endhint %}

### Actions permission

{% hint style="info" %}
Every action has a special attribute **permission**.\
It's the **permission** the player must have before starting the **action**.\
For example the player must have `myitems.usage.secret_items_dispenser` permission to play the sound.\
In this example you will notice an "issue". The sound is played even if the user has no permission for the give event. That's because... well, permission check is only on the give\_item.

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

####

#### Setting the same permission to every action

If you want to set the same permission to every action without copy and paste you can!\
Use this special attribute `all_actions_permission`.\
For example:

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

## List of actions properties

Use the online editor to create your files easier.

{% content-ref url="../../../../files-editor.md" %}
[files-editor.md](../../../../files-editor.md)
{% endcontent-ref %}

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
damage_near_entities:
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
  
# Allows you to damage the entity of this event. For example on interact or attack
# or on event item_hit_entity
damage_entity:
  damage: 4
  
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

###
