# Actions List

## Actions

### `cancel`

Cancel the event that triggered this action

```yaml
cancel: true
```

### `play_sound`

Play a Vanilla sound or Custom sound

```yaml
play_sound:
  name: entity.villager.ambient # or a custom sound
  volume: 1.0 # Optional (Default value: 1.0)
  pitch: 1.0 # Optional (Default value: 1.0)
  category: MASTER # Optional (Default value: MASTER)
  stop_previous: false # Optional (Default value: true) - Whether to stop this sound if it was playing before playing it again
```

* `name`: Refer to [this link](https://minecraft.wiki/w/Sounds.json/Java_Edition_values) for the value or a custom sound with `namespace:value`
* `category`: Refer to [this link](https://jd.papermc.io/paper/org/bukkit/SoundCategory.html#enum-constant-summary) for the value

### `stop_sound`

Stop a Vanilla sound or Custom sound

```yaml
stop_sound:
  name: entity.villager.ambient # or a custom sound
```

* `name`: Refer to [this link](https://minecraft.wiki/w/Sounds.json/Java_Edition_values) for the value or a custom sound with `namespace:value`

### `execute_commands`

Execute these commands

```yaml
execute_commands:
  tellraw_action: # Use any name you want
    command: 'tellraw {player} {"text":"Action 1","color":"gold"}'
    as_console: true # Optional (Default value: false)
  # Execute another command
  give_gold:
    command: 'give {player} gold_ingot 16'
    as_console: true
```

### `play_particle`

Play this particle

```yaml
play_particle:
  name: heart
```

* `name`: Refer to [this link](https://minecraft.wiki/w/Particles_(Java_Edition)#Types_of_particles) for the value

### `shoot_particle`

Shoot this particle

```yaml
shoot_particle:
  name: spit
  distance: 5 # Optional (Default value: 7)
```

* `name`: Refer to [this link](https://minecraft.wiki/w/Particles_(Java_Edition)#Types_of_particles) for the value

### `play_effect`

Play this effect

```yaml
play_effect:
  name: SPAWN_COBWEB
```

* `name`: Refer to [this link](https://jd.papermc.io/paper/1.21.11/org/bukkit/Effect.html#enum-constant-summary) for the value

### `increment_durability`

Decrement/increment this item durability

```yaml
increment_durability:
  amount: 5
```

### `decrement_durability`

Decrement/increment this item durability

```yaml
decrement_durability:
  amount: 5
```

### `decrement_usages`

Decrement this item usages

```yaml
decrement_usages:
  amount: 1
```

### `increment_amount`

Increment this item amount

```yaml
increment_amount:
  amount: 3
```

### `decrement_amount`

Decrement this item amount

```yaml
decrement_amount:
  amount: 1
```

### `drop_exp`

Drop exp

```yaml
drop_exp:
  chance: 1.0 # Optional (Default value: 0.0) - Chance 1.0 = 100%
  min_amount: 4
  max_amount: 8
```

### `feed`

Feed player

```yaml
feed:
  amount: 6
  saturation: 8 # Optional (Default value: 0)
```

* `amount`: Refer to [this link](https://minecraft.wiki/w/Food#Hunger) for explanation
* `saturation`: Refer to [this link](https://minecraft.wiki/w/Food#Hunger) for explanation

### `give_item`

Give this player an item

```yaml
give_item:
  item: 'minecraft:gold_ingot'
  amount: 6 # Optional (Default value: 1)
```

* `item`: Refer to [this link](https://jd.papermc.io/paper/org/bukkit/inventory/ItemType.html#field-summary) for the value or a custom item with `namespace:value`

### `replace_near_blocks`

Replace vanilla/custom blocks near interact location (or near the player if this event is not an interact one)

```yaml
replace_near_blocks:
  from: minecraft:stone # Single vanilla/custom block to replace
  # Or use 'from_multiple' to replace several blocks at once:
  # from_multiple:
  #   - minecraft:dirt
  #   - minecraft:grass_block
  to: minecraft:diamond_block # Vanilla/custom block to place
  radius:
    x: 2
    y: 2
    z: 2
  decrement_durability: 1 # Optional - Decrement durability amount
  decrement_amount: 0 # Optional - Decrement item amount
  no_physics: false # Optional (Default value: false) - Whether to skip physics updates on the replaced blocks
```

* `from` / `from_multiple`: Refer to [this link](https://jd.papermc.io/paper/org/bukkit/Material.html#enum-constant-summary) for vanilla blocks or use `namespace:value` for custom blocks

### `glow_near_blocks`

Glow blocks near interact location (or near the player if this event is not an interact one)

```yaml
glow_near_blocks:
  material: DIAMOND_ORE # Vanilla block to highlight
  radius:
    x: 5
    y: 5
    z: 5
  ticks: 40 # Optional (Default value: 40) - Duration of the glow effect in ticks (20 ticks = 1 second)
```

* `material`: Refer to [this link](https://jd.papermc.io/paper/org/bukkit/Material.html#enum-constant-summary) for the value

### `replace_block`

Replace vanilla/custom blocks in interact location (or on the player location if this event is not an interact one)

```yaml
replace_block:
  from: minecraft:stone # Vanilla/custom block to replace
  to: minecraft:diamond_block # Vanilla/custom block to place
  decrement_durability: 1 # Optional - Decrement durability amount
  decrement_amount: 0 # Optional - Decrement item amount
  no_physics: false # Optional (Default value: false) - Whether to skip physics updates on the replaced block
```

* `from` / `to`: Refer to [this link](https://jd.papermc.io/paper/org/bukkit/Material.html#enum-constant-summary) for vanilla blocks or use `namespace:value` for custom blocks

### `multiple_break`

Break multiple blocks around the center of broken block

```yaml
multiple_break:
  size: 3
  depth: 3 # Optional (Default value: 1)
  vertical: true # Optional (Default value: false)
  keep_ores: true # Whether to break ores
  drop_all_blocks: # Optional
    enabled: true
    need_silk_touch: true
```

### `potion_effect`

Apply potion effect to player

```yaml
potion_effect:
  type: REGENERATION
  amplifier: 0 # Optional (Default value: 1) - Amplifier 0 = Level 1
  duration: 200 # Optional (Default value: 40) - Value in ticks (20 ticks = 1 second)
  ambient: true # Optional (Default value: false) - Whether to make the particles more translucent
  particles: false # Optional (Default value: true) - Whether to show the particles
  icon: false # Optional (Default value: true) - Whether to show the icon on screen
# Add another effect
potion_effect_1:
  type: FIRE_RESISTANCE
  amplifier: 0
  duration: 1200
  particles: false
```

* `type`: Refer to [this link](https://jd.papermc.io/paper/org/bukkit/potion/PotionEffectType.html#field-summary) for the value

### `remove_potion_effect`

Remove potion effect

```yaml
remove_potion_effect:
  type: RESISTANCE
```

* `type`: Refer to [this link](https://jd.papermc.io/paper/org/bukkit/potion/PotionEffectType.html#field-summary) for the value

### `explosion`

Spawn explosion

```yaml
explosion:
  power: 1
  fire: true # Optional (Default value: false) - Whether the TNT spreads fire when exploding
  break_blocks: false # Optional (Default value: true)
```

### `damage_near_entities`

Damage near entities

```yaml
damage_near_entities:
  damage: 5.0 # Optional (Default value: 1.0)
  radius: 3 # Optional (Default value: 3)
  entity_groups: # List of entity groups to damage
    - HOSTILE
    - PLAYERS
    - PASSIVE
```

* `entity_groups`: Available values are `HOSTILE`, `PLAYERS`, `PASSIVE`

### `damage_entity_in_sight`

Damage entity you're looking at

```yaml
damage_entity_in_sight:
  damage: 5.0
  distance: 4 # Optional (Default value: 3)
```

### `damage_entity`

Damage the entity of this event. For example on interact or attack or on event item\_hit\_entity

```yaml
damage_entity:
  damage: 5.0
```

### `target_potion_effect`

Apply potion effect to target entity

```yaml
target_potion_effect:
  type: REGENERATION
  amplifier: 0 # Optional (Default value: 1) - Amplifier 0 = Level 1
  duration: 200 # Optional (Default value: 40) - Value in ticks (20 ticks = 1 second)
  ambient: true # Optional (Default value: false) - Whether to make the particles more translucent
  particles: false # Optional (Default value: true) - Whether to show the particles
  icon: false # Optional (Default value: true) - Whether to show the icon on screen
# Add another effect
target_potion_effect_1:
  type: FIRE_RESISTANCE
  amplifier: 0
  duration: 1200
  particles: false
```

* `type`: Refer to [this link](https://jd.papermc.io/paper/org/bukkit/potion/PotionEffectType.html#field-summary) for the value

### `target_remove_potion_effect`

Remove potion effect from target entity

```yaml
target_remove_potion_effect:
  type: RESISTANCE
```

* `type`: Refer to [this link](https://jd.papermc.io/paper/org/bukkit/potion/PotionEffectType.html#field-summary) for the value

### `increment_player_stat`

Increment player stat (ItemsAdder stats, used by HUDs)

```yaml
increment_player_stat:
  name: 'my_hud:power'
  amount: 10.0
```

* `name`: Use a custom stat with `namespace:value`

### `decrement_player_stat`

Decrement player stat (ItemsAdder stats, used by HUDs)

```yaml
decrement_player_stat:
  name: 'my_hud:power'
  amount: 5.0
```

* `name`: Use a custom stat with `namespace:value`

### `play_totem_animation`

Play the totem animation with a particular item texture.

```yaml
play_totem_animation: 'my_namespace:my_totem_item'
```

* The value is a custom item with `namespace:value`

### `script`

Script that run custom code on that specific events.

```yaml
script:
  name: 'some_script'
```

* `name`: Use a custom script with `value`

### `drop_item`

Drops a vanilla/custom item.

```yaml
drop_item:
  item: 'minecraft:apple'
  chance: 50.0 # Optional (Default value: 100.0) - Chance 100.0 = 100%
  min_amount: 2 # Optional (Default value: 1)
  max_amount: 5 # Optional (Default value: 1)
```

* `item`: Refer to [this link](https://jd.papermc.io/paper/org/bukkit/inventory/ItemType.html#field-summary) for the value or a custom item with `namespace:value`

### `set_block`

Sets a block. Useful on interact events to place a custom/vanilla block.

```yaml
set_block:
  block: minecraft:diamond_block # Vanilla material or custom block (namespace:value)
  target: RELATIVE # Optional (Default value: RELATIVE) - Where to place the block
  decrement_amount: false # Optional (Default value: false) - Whether to decrement this item amount
```

* `block`: Refer to [this link](https://jd.papermc.io/paper/org/bukkit/Material.html#enum-constant-summary) for vanilla blocks or use `namespace:value` for custom blocks
* `target`: Possible values are `RELATIVE` (place on the face the player clicked) or `SELF` (replace the clicked block)

### `place_furniture`

Places a furniture. Useful on interact events to place a custom furniture.

```yaml
place_furniture:
  furniture: 'my_furniture:chair'
  decrement_amount: true # Optional (Default value: false)
```

* `furniture`: Use a custom furniture with `namespace:value`

### `remove_furniture`

{% hint style="warning" %}
Requires ItemsAdder 4.0.16+
{% endhint %}

Removes a furniture. Useful on interact events to remove a custom furniture.

```yaml
remove_furniture: true
```

### `replace_furniture`

{% hint style="warning" %}
Requires ItemsAdder 4.0.16+
{% endhint %}

Replaces a furniture. Useful on interact events to change out furniture for a different furniture.

```yaml
replace_furniture:
  furniture: 'my_furniture:table'
```

* `furniture`: Use a custom furniture with `namespace:value`

### `replace_properties`

Replace this item properties

```yaml
replace_properties:
  custom_model_data:
    copy_from_item: 'my_namespace:my_other_item' # Custom item to copy the CustomModelData from
    restorable: false # Optional (Default value: false) - Whether the original CustomModelData can be restored later
```

* `custom_model_data.copy_from_item`: Use a custom item with `namespace:value`

## ItemsAdderAdditions Actions

### `actionbar`
Check the documentation [here](https://itemsadderadditions.com/en/docs/actions/actionbar).

### `clear_item`
Check the documentation [here](https://itemsadderadditions.com/en/docs/actions/clear-item).

### `ignite`
Check the documentation [here](https://itemsadderadditions.com/en/docs/actions/ignite).

### `message`
Check the documentation [here](https://itemsadderadditions.com/en/docs/actions/message).

### `mythic_mobs_skill`
Check the documentation [here](https://itemsadderadditions.com/en/docs/actions/mythic-mobs-skill).

### `open_inventory`
Check the documentation [here](https://itemsadderadditions.com/en/docs/actions/open-inventory).

### `play_animation`
Check the documentation [here](https://itemsadderadditions.com/en/docs/actions/play-animation).

### `play_emote`
Check the documentation [here](https://itemsadderadditions.com/en/docs/actions/play-emote).

### `replace_biome`
Check the documentation [here](https://itemsadderadditions.com/en/docs/actions/replace-biome).

### `shoot_fireball`
Check the documentation [here](https://itemsadderadditions.com/en/docs/actions/shoot-fireball).

### `swing_hand`
Check the documentation [here](https://itemsadderadditions.com/en/docs/actions/swing-hand).

### `teleport`
Check the documentation [here](https://itemsadderadditions.com/en/docs/actions/teleport).

### `title`
Check the documentation [here](https://itemsadderadditions.com/en/docs/actions/title).

### `toast`
Check the documentation [here](https://itemsadderadditions.com/en/docs/actions/toast).

### `veinminer`
Check the documentation [here](https://itemsadderadditions.com/en/docs/actions/veinminer).