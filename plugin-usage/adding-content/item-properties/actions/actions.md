# Actions List

## Actions

### `play_sound`

Play a Vanilla sound or Custom sound

#### Properties:

* `name` (string): Vanilla and custom sounds
* `volume` (number): unknown
* `pitch` (number): unknown
* `delay` (integer): Delay in ticks before starting this action
* `flow` (object): Advanced options to change the flow of actions for this event section.
* `category` (string): Category of the sound.
* `permission` (string): Permission needed to execute this action. You can negate it by putting a `!` at the beginning of the permission. Example: `!example.permission` will not execute this action if the player has the `example.permission` permission.
* `stop_previous` (boolean): unknown

### `stop_sound`

Stop a Vanilla sound or Custom sound

#### Properties:

* `name` (string): Vanilla and custom sounds
* `delay` (integer): Delay in ticks before starting this action
* `flow` (object): Advanced options to change the flow of actions for this event section.
* `permission` (string): Permission needed to execute this action. You can negate it by putting a `!` at the beginning of the permission. Example: `!example.permission` will not execute this action if the player has the `example.permission` permission.

### `cancel`

Cancel the event that triggered this action

### `execute_commands`

Execute these commands

#### Properties:

* `change_me_1` (object): unknown
* `change_me_2` (object): unknown
* `change_me_3` (object): unknown
* `change_me_4` (object): unknown
* `change_me_xx` (object): unknown

### `play_particle`

Play this particle

#### Properties:

* `name` (string): Vanilla particles
* `delay` (integer): Delay in ticks before starting this action
* `flow` (object): Advanced options to change the flow of actions for this event section.
* `permission` (string): Permission needed to execute this action. You can negate it by putting a `!` at the beginning of the permission. Example: `!example.permission` will not execute this action if the player has the `example.permission` permission.

### `shoot_particle`

Shoot this particle

#### Properties:

* `name` (string): Vanilla particles
* `distance` (integer): unknown
* `delay` (integer): Delay in ticks before starting this action
* `flow` (object): Advanced options to change the flow of actions for this event section.
* `permission` (string): Permission needed to execute this action. You can negate it by putting a `!` at the beginning of the permission. Example: `!example.permission` will not execute this action if the player has the `example.permission` permission.

### `play_effect`

Play this effect

#### Properties:

* `name` (string): Bukkit effect
* `delay` (integer): Delay in ticks before starting this action
* `flow` (object): Advanced options to change the flow of actions for this event section.
* `permission` (string): Permission needed to execute this action. You can negate it by putting a `!` at the beginning of the permission. Example: `!example.permission` will not execute this action if the player has the `example.permission` permission.

### `increment_durability`

Decrement/increment this item durability

#### Properties:

* `amount` (integer): unknown
* `delay` (integer): Delay in ticks before starting this action
* `flow` (object): Advanced options to change the flow of actions for this event section.
* `permission` (string): Permission needed to execute this action. You can negate it by putting a `!` at the beginning of the permission. Example: `!example.permission` will not execute this action if the player has the `example.permission` permission.

### `decrement_durability`

Decrement/increment this item durability

#### Properties:

* `amount` (integer): unknown
* `delay` (integer): Delay in ticks before starting this action
* `flow` (object): Advanced options to change the flow of actions for this event section.
* `permission` (string): Permission needed to execute this action. You can negate it by putting a `!` at the beginning of the permission. Example: `!example.permission` will not execute this action if the player has the `example.permission` permission.

### `decrement_usages`

Decrement this item usages

#### Properties:

* `amount` (integer): unknown
* `delay` (integer): Delay in ticks before starting this action
* `flow` (object): Advanced options to change the flow of actions for this event section.
* `permission` (string): Permission needed to execute this action. You can negate it by putting a `!` at the beginning of the permission. Example: `!example.permission` will not execute this action if the player has the `example.permission` permission.

### `increment_amount`

Increment this item amount

#### Properties:

* `amount` (integer): unknown
* `delay` (integer): Delay in ticks before starting this action
* `flow` (object): Advanced options to change the flow of actions for this event section.
* `permission` (string): Permission needed to execute this action. You can negate it by putting a `!` at the beginning of the permission. Example: `!example.permission` will not execute this action if the player has the `example.permission` permission.

### `decrement_amount`

Decrement this item amount

#### Properties:

* `amount` (integer): unknown
* `delay` (integer): Delay in ticks before starting this action
* `flow` (object): Advanced options to change the flow of actions for this event section.
* `permission` (string): Permission needed to execute this action. You can negate it by putting a `!` at the beginning of the permission. Example: `!example.permission` will not execute this action if the player has the `example.permission` permission.

### `drop_exp`

Drop exp

#### Properties:

* `chance` (number): unknown
* `min_amount` (integer): unknown
* `max_amount` (integer): unknown
* `delay` (integer): Delay in ticks before starting this action
* `flow` (object): Advanced options to change the flow of actions for this event section.
* `permission` (string): Permission needed to execute this action. You can negate it by putting a `!` at the beginning of the permission. Example: `!example.permission` will not execute this action if the player has the `example.permission` permission.

### `feed`

Feed player

#### Properties:

* `amount` (integer): Vanilla saturation and feed values: https://minecraft.gamepedia.com/Hunger#Food\_level\_and\_saturation\_level\_restoration
* `saturation` (number): Vanilla saturation and feed values: https://minecraft.gamepedia.com/Hunger#Food\_level\_and\_saturation\_level\_restoration
* `delay` (integer): Delay in ticks before starting this action
* `flow` (object): Advanced options to change the flow of actions for this event section.
* `permission` (string): Permission needed to execute this action. You can negate it by putting a `!` at the beginning of the permission. Example: `!example.permission` will not execute this action if the player has the `example.permission` permission.

### `replace_properties`

Replace this item properties

#### Properties:

* `custom_model_data` (object): unknown

### `give_item`

Give this player an item

#### Properties:

* `item` (string): Vanilla / ItemsAdder custom item
* `amount` (integer): unknown
* `delay` (integer): Delay in ticks before starting this action
* `flow` (object): Advanced options to change the flow of actions for this event section.
* `permission` (string): Permission needed to execute this action. You can negate it by putting a `!` at the beginning of the permission. Example: `!example.permission` will not execute this action if the player has the `example.permission` permission.

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

#### Properties:

* `size` (integer): unknown
* `depth` (integer): unknown
* `keep_ores` (boolean): unknown
* `drop_all_blocks` (object): unknown
* `delay` (integer): Delay in ticks before starting this action
* `flow` (object): Advanced options to change the flow of actions for this event section.
* `permission` (string): Permission needed to execute this action. You can negate it by putting a `!` at the beginning of the permission. Example: `!example.permission` will not execute this action if the player has the `example.permission` permission.

### `potion_effect`

Apply potion effect to player

#### Properties:

* `every_ticks` (integer): unknown
* `type` (string): Bukkit potion effect type
* `amplifier` (integer): Amplifier level
* `duration` (integer): unknown
* `ambient` (boolean): unknown
* `particles` (boolean): unknown
* `icon` (boolean): unknown

### `remove_potion_effect`

Remove potion effect

#### Properties:

* `type` (string): Bukkit potion effect type
* `delay` (integer): Delay in ticks before starting this action
* `flow` (object): Advanced options to change the flow of actions for this event section.
* `permission` (string): Permission needed to execute this action. You can negate it by putting a `!` at the beginning of the permission. Example: `!example.permission` will not execute this action if the player has the `example.permission` permission.

### `explosion`

Spawn explosion

#### Properties:

* `power` (integer): unknown
* `fire` (boolean): unknown
* `break_blocks` (boolean): unknown
* `delay` (integer): Delay in ticks before starting this action
* `flow` (object): Advanced options to change the flow of actions for this event section.
* `permission` (string): Permission needed to execute this action. You can negate it by putting a `!` at the beginning of the permission. Example: `!example.permission` will not execute this action if the player has the `example.permission` permission.

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

#### Properties:

* `damage` (number): unknown
* `distance` (integer): unknown
* `delay` (integer): Delay in ticks before starting this action
* `flow` (object): Advanced options to change the flow of actions for this event section.
* `permission` (string): Permission needed to execute this action. You can negate it by putting a `!` at the beginning of the permission. Example: `!example.permission` will not execute this action if the player has the `example.permission` permission.

### `damage_entity`

Damage the entity of this event. For example on interact or attack or on event item\_hit\_entity

#### Properties:

* `damage` (number): unknown
* `delay` (integer): Delay in ticks before starting this action
* `flow` (object): Advanced options to change the flow of actions for this event section.
* `permission` (string): Permission needed to execute this action. You can negate it by putting a `!` at the beginning of the permission. Example: `!example.permission` will not execute this action if the player has the `example.permission` permission.

### `target_potion_effect`

Apply potion effect to target entity

#### Properties:

* `type` (string): Bukkit potion effect type
* `amplifier` (integer): Amplifier level
* `duration` (integer): unknown
* `ambient` (boolean): unknown
* `particles` (boolean): unknown
* `icon` (boolean): unknown
* `delay` (integer): Delay in ticks before starting this action
* `flow` (object): Advanced options to change the flow of actions for this event section.
* `permission` (string): Permission needed to execute this action. You can negate it by putting a `!` at the beginning of the permission. Example: `!example.permission` will not execute this action if the player has the `example.permission` permission.

### `target_remove_potion_effect`

Remove potion effect from target entity

#### Properties:

* `type` (string): Bukkit potion effect type
* `delay` (integer): Delay in ticks before starting this action
* `flow` (object): Advanced options to change the flow of actions for this event section.
* `permission` (string): Permission needed to execute this action. You can negate it by putting a `!` at the beginning of the permission. Example: `!example.permission` will not execute this action if the player has the `example.permission` permission.

### `increment_player_stat`

Increment player stat (ItemsAdder stats, used by HUDs)

#### Properties:

* `name` (string): unknown
* `amount` (number): unknown
* `delay` (integer): Delay in ticks before starting this action
* `flow` (object): Advanced options to change the flow of actions for this event section.
* `permission` (string): Permission needed to execute this action. You can negate it by putting a `!` at the beginning of the permission. Example: `!example.permission` will not execute this action if the player has the `example.permission` permission.

### `decrement_player_stat`

Decrement player stat (ItemsAdder stats, used by HUDs)

#### Properties:

* `name` (string): unknown
* `amount` (number): unknown
* `delay` (integer): Delay in ticks before starting this action
* `flow` (object): Advanced options to change the flow of actions for this event section.
* `permission` (string): Permission needed to execute this action. You can negate it by putting a `!` at the beginning of the permission. Example: `!example.permission` will not execute this action if the player has the `example.permission` permission.

### `play_totem_animation`

Play the totem animation with a particular item texture.

### `script`

Script that run custom code on that specific events.

#### Properties:

* `name` (string): unknown
* `delay` (integer): Delay in ticks before starting this action
* `flow` (object): Advanced options to change the flow of actions for this event section.
* `permission` (string): Permission needed to execute this action. You can negate it by putting a `!` at the beginning of the permission. Example: `!example.permission` will not execute this action if the player has the `example.permission` permission.

### `drop_item`

Drops a vanilla/custom item.

#### Properties:

* `item` (string): Vanilla / ItemsAdder custom item
* `min_amount` (integer): unknown
* `max_amount` (integer): unknown
* `chance` (number): unknown
* `delay` (integer): Delay in ticks before starting this action
* `flow` (object): Advanced options to change the flow of actions for this event section.
* `permission` (string): Permission needed to execute this action. You can negate it by putting a `!` at the beginning of the permission. Example: `!example.permission` will not execute this action if the player has the `example.permission` permission.

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

#### Properties:

* `furniture` (string): unknown
* `decrement_amount` (boolean): unknown
* `delay` (integer): Delay in ticks before starting this action
* `flow` (object): Advanced options to change the flow of actions for this event section.
* `permission` (string): Permission needed to execute this action. You can negate it by putting a `!` at the beginning of the permission. Example: `!example.permission` will not execute this action if the player has the `example.permission` permission.

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

#### Properties

* `furniture` (string): unknown
* `delay` (integer): Delay in ticks before starting this action
* `flow` (object): Advanced options to change the flow of actions for this event section.
* `permission` (string): Permission needed to execute this action. You can negate it by putting a `!` at the beginning of the permission. Example: `!example.permission` will not execute this action if the player has the `example.permission` permission.
