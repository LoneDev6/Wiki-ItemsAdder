# Actions List

## Actions

### `cancel`

Cancel the event that triggered this action

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

#### Properties:

* `from` (unknown): unknown
* `from_multiple` (array): List of vanilla/custom blocks to replace
* `to` (unknown): unknown
* `radius` (object): unknown
* `decrement_durability` (integer): Decrement durability amount
* `decrement_amount` (integer): Decrement item amount
* `no_physics` (boolean): unknown
* `delay` (integer): Delay in ticks before starting this action
* `flow` (object): Advanced options to change the flow of actions for this event section.
* `permission` (string): Permission needed to execute this action. You can negate it by putting a `!` at the beginning of the permission. Example: `!example.permission` will not execute this action if the player has the `example.permission` permission.

### `glow_near_blocks`

Glow blocks near interact location (or near the player if this event is not an interact one)

#### Properties:

* `material` (string): Vanilla blocks
* `radius` (object): unknown
* `delay` (integer): Delay in ticks before starting this action
* `flow` (object): Advanced options to change the flow of actions for this event section.
* `permission` (string): Permission needed to execute this action. You can negate it by putting a `!` at the beginning of the permission. Example: `!example.permission` will not execute this action if the player has the `example.permission` permission.

### `replace_block`

Replace vanilla/custom blocks in interact location (or on the player location if this event is not an interact one)

#### Properties:

* `from` (unknown): unknown
* `to` (unknown): unknown
* `decrement_durability` (integer): Decrement durability amount
* `decrement_amount` (integer): Decrement item amount
* `no_physics` (boolean): unknown
* `delay` (integer): Delay in ticks before starting this action
* `flow` (object): Advanced options to change the flow of actions for this event section.
* `permission` (string): Permission needed to execute this action. You can negate it by putting a `!` at the beginning of the permission. Example: `!example.permission` will not execute this action if the player has the `example.permission` permission.

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

#### Properties:

* `damage` (number): unknown
* `radius` (integer): unknown
* `entity_groups` (array): unknown
* `delay` (integer): Delay in ticks before starting this action
* `flow` (object): Advanced options to change the flow of actions for this event section.
* `permission` (string): Permission needed to execute this action. You can negate it by putting a `!` at the beginning of the permission. Example: `!example.permission` will not execute this action if the player has the `example.permission` permission.

### `damage_entity_in_sight`

Damage entity you're looking at

```yaml
damage_entity_in_sight:
  damage: 5.0 # Optional (Default value: 1.0)
  distance: 4 # Optional (Default value: 3)
```

### `damage_entity`

Damage the entity of this event. For example on interact or attack or on event item\_hit\_entity

```yaml
damage_entity:
  damage: 5.0 # Optional (Default value: 1.0)
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

#### Properties:

* `block` (unknown): unknown
* `target` (string): unknown
* `decrement_amount` (boolean): unknown
* `delay` (integer): Delay in ticks before starting this action
* `flow` (object): Advanced options to change the flow of actions for this event section.
* `permission` (string): Permission needed to execute this action. You can negate it by putting a `!` at the beginning of the permission. Example: `!example.permission` will not execute this action if the player has the `example.permission` permission.

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

#### Properties:

* `custom_model_data` (object): unknown