# Entity Goals List

## Entity Goals

### `attack_near`

Entity goal to make the entity find the nearest attackable target

#### Properties:

* `enabled` (boolean)
* `replace_vanilla` (boolean): Replace the vanilla goal (if any of this type) with this one. If false, this goal will be added to the existing goals.
* `priority` (integer): Priority of this goal. Higher priority means this goal will be executed before other goals with lower priority.
* `entity` (string): Custom and Bukkit Entity Type
* `selector` (unknown)
  * `min_health` (number): (default `0.0`) Minimum health of the entity to apply this goal. If the entity's health is below this value, the goal will not be applied.
  * `max_health` (number): (default `20.0`) Maximum health of the entity to apply this goal. If the entity's health is above this value, the goal will not be applied.
  * `equipment` (object): Equipment of the entity to apply this goal. If the entity's equipment does not match this value, the goal will not be applied.
    * `match_all` (boolean): (default `false`) If true, the entity's equipment must match all the specified items. If false, the entity's equipment must match at least one of the specified items.
    * `head` (string): Vanilla / ItemsAdder custom item
    * `chest` (string): Vanilla / ItemsAdder custom item
    * `legs` (string): Vanilla / ItemsAdder custom item
    * `feet` (string): Vanilla / ItemsAdder custom item
    * `main_hand` (string): Vanilla / ItemsAdder custom item
    * `off_hand` (string): Vanilla / ItemsAdder custom item
* `must_be_angry_at` (boolean): (default `true`) If true, the entity will only target entities that it is angry at. This is useful for entities that have a specific target they are angry at, like wolves.
* `interval` (integer): (default `10`) Interval in ticks between each target search action.
* `check_visibility` (boolean): (default `true`) If true, the entity will only target entities that are visible to it.
* `check_can_navigate` (boolean): (default `true`) If true, the entity will only target entities that it can navigate to.

### `avoid_entity`

Entity goal to make the entity avoid another entity

#### Properties:

* `enabled` (boolean)
* `replace_vanilla` (boolean): Replace the vanilla goal (if any of this type) with this one. If false, this goal will be added to the existing goals.
* `priority` (integer): Priority of this goal. Higher priority means this goal will be executed before other goals with lower priority.
* `entity` (string): Custom and Bukkit Entity Type
* `selector` (unknown)
  * `min_health` (number): (default `0.0`) Minimum health of the entity to apply this goal. If the entity's health is below this value, the goal will not be applied.
  * `max_health` (number): (default `20.0`) Maximum health of the entity to apply this goal. If the entity's health is above this value, the goal will not be applied.
  * `equipment` (object): Equipment of the entity to apply this goal. If the entity's equipment does not match this value, the goal will not be applied.
    * `match_all` (boolean): (default `false`) If true, the entity's equipment must match all the specified items. If false, the entity's equipment must match at least one of the specified items.
    * `head` (string): Vanilla / ItemsAdder custom item
    * `chest` (string): Vanilla / ItemsAdder custom item
    * `legs` (string): Vanilla / ItemsAdder custom item
    * `feet` (string): Vanilla / ItemsAdder custom item
    * `main_hand` (string): Vanilla / ItemsAdder custom item
    * `off_hand` (string): Vanilla / ItemsAdder custom item

### `avoid_sun`

Entity goal to make the entity avoid sunlight

#### Properties:

* `enabled` (boolean)
* `replace_vanilla` (boolean): Replace the vanilla goal (if any of this type) with this one. If false, this goal will be added to the existing goals.
* `priority` (integer): Priority of this goal. Higher priority means this goal will be executed before other goals with lower priority.

### `break_door`

Entity goal to make the entity break a door

#### Properties:

* `enabled` (boolean)
* `replace_vanilla` (boolean): Replace the vanilla goal (if any of this type) with this one. If false, this goal will be added to the existing goals.
* `priority` (integer): Priority of this goal. Higher priority means this goal will be executed before other goals with lower priority.

### `eat_block`

Entity goal to make the entity eat a block

#### Properties:

* `enabled` (boolean)
* `replace_vanilla` (boolean): Replace the vanilla goal (if any of this type) with this one. If false, this goal will be added to the existing goals.
* `priority` (integer): Priority of this goal. Higher priority means this goal will be executed before other goals with lower priority.
* `blocks` (array): List of blocks that the entity will eat. Example: `STONE`, `minecraft:cherry_trapdoor[open=true]`, `test:my_block`.
* `blocks` (array): List of blocks that the entity will eat. Example: `STONE`, `minecraft:cherry_trapdoor[open=true]`, `test:my_block`.

### `float`

Entity goal to make the entity float on water

#### Properties:

* `enabled` (boolean)
* `replace_vanilla` (boolean): Replace the vanilla goal (if any of this type) with this one. If false, this goal will be added to the existing goals.
* `priority` (integer): Priority of this goal. Higher priority means this goal will be executed before other goals with lower priority.

### `hurt_by_target`

Entity goal to make the entity remember the last entity that hurt it

#### Properties:

* `enabled` (boolean)
* `replace_vanilla` (boolean): Replace the vanilla goal (if any of this type) with this one. If false, this goal will be added to the existing goals.
* `priority` (integer): Priority of this goal. Higher priority means this goal will be executed before other goals with lower priority.
* `ignore_damage_from_entities` (array): List of vanilla entity types that will not trigger revenge.
* `ignore_damage_from_entities` (array): List of vanilla entity types that will not trigger revenge.
* `alert_others_types` (array): List of entity types that will be alerted when this entity is hurt.
* `alert_others_types` (array): List of entity types that will be alerted when this entity is hurt.

### `look_at_entity`

Entity goal to make the entity look at another entity

#### Properties:

* `enabled` (boolean)
* `replace_vanilla` (boolean): Replace the vanilla goal (if any of this type) with this one. If false, this goal will be added to the existing goals.
* `priority` (integer): Priority of this goal. Higher priority means this goal will be executed before other goals with lower priority.
* `entity` (string): Custom and Bukkit Entity Type
* `selector` (unknown)
  * `min_health` (number): (default `0.0`) Minimum health of the entity to apply this goal. If the entity's health is below this value, the goal will not be applied.
  * `max_health` (number): (default `20.0`) Maximum health of the entity to apply this goal. If the entity's health is above this value, the goal will not be applied.
  * `equipment` (object): Equipment of the entity to apply this goal. If the entity's equipment does not match this value, the goal will not be applied.
    * `match_all` (boolean): (default `false`) If true, the entity's equipment must match all the specified items. If false, the entity's equipment must match at least one of the specified items.
    * `head` (string): Vanilla / ItemsAdder custom item
    * `chest` (string): Vanilla / ItemsAdder custom item
    * `legs` (string): Vanilla / ItemsAdder custom item
    * `feet` (string): Vanilla / ItemsAdder custom item
    * `main_hand` (string): Vanilla / ItemsAdder custom item
    * `off_hand` (string): Vanilla / ItemsAdder custom item
* `chance` (number): (default `20`) Chance of this goal being executed in percentage.
* `range` (integer): (default `8`) Maximum distance in blocks from the target entity at which the entity will look at it.
* `look_forward` (boolean): (default `false`) If true, the entity will look at the target entity's forward direction instead of its position.

### `melee_attack`

Entity goal to make the entity attack with melee attacks

#### Properties:

* `enabled` (boolean)
* `replace_vanilla` (boolean): Replace the vanilla goal (if any of this type) with this one. If false, this goal will be added to the existing goals.
* `priority` (integer): Priority of this goal. Higher priority means this goal will be executed before other goals with lower priority.
* `speed_modifier` (number): (default `1.0`) Speed modifier of the entity while attacking.
* `pause_when_idle` (boolean): (default `true`) If true, the entity will pause its attack when it is not moving.

### `move_to_block`

Entity goal to make the entity move to a specific block

#### Properties:

* `enabled` (boolean)
* `replace_vanilla` (boolean): Replace the vanilla goal (if any of this type) with this one. If false, this goal will be added to the existing goals.
* `priority` (integer): Priority of this goal. Higher priority means this goal will be executed before other goals with lower priority.
* `blocks` (array): List of blocks that the entity will move to. Example: `STONE`, `minecraft:cherry_trapdoor[open=true]`, `test:my_block`.
* `blocks` (array): List of blocks that the entity will move to. Example: `STONE`, `minecraft:cherry_trapdoor[open=true]`, `test:my_block`.
* `speed_modifier` (number): (default `1.0`) Speed modifier of the entity while moving to the block.
* `search_range` (integer): (default `16`) Maximum distance in blocks from the entity at which the entity will search for a block to move to.

### `open_door`

Entity goal to make the entity open a door

#### Properties:

* `enabled` (boolean)
* `replace_vanilla` (boolean): Replace the vanilla goal (if any of this type) with this one. If false, this goal will be added to the existing goals.
* `priority` (integer): Priority of this goal. Higher priority means this goal will be executed before other goals with lower priority.
* `close` (boolean): (default `false`) If true, the entity will close the door after opening it.

### `random_look_around`

Entity goal to make the entity look around randomly

#### Properties:

* `enabled` (boolean)
* `replace_vanilla` (boolean): Replace the vanilla goal (if any of this type) with this one. If false, this goal will be added to the existing goals.
* `priority` (integer): Priority of this goal. Higher priority means this goal will be executed before other goals with lower priority.

### `random_wander_around`

Entity goal to make the entity look around randomly

#### Properties:

* `enabled` (boolean)
* `replace_vanilla` (boolean): Replace the vanilla goal (if any of this type) with this one. If false, this goal will be added to the existing goals.
* `priority` (integer): Priority of this goal. Higher priority means this goal will be executed before other goals with lower priority.
* `speed_modifier` (number): (default `1.0`) Speed modifier of the entity while wandering around.
* `interval` (integer): (default `10`) Interval in ticks between each random wander action.
* `check_no_action_time` (boolean): (default `true`) If true, the entity will only wander around if it has not performed any action in the last 10 seconds (hardcoded vanilla value, not customizable).

### `ranged_bow_attack`

Entity goal to make the entity attack with a bow. Note: This goal will only work with vanilla base entity types: `BOGGED`, `DROWNED`, `ILLUSIONER`, `LLAMA`, `PIGLIN`, `PILLAGER`, `SKELETON`, `SNOW_GOLEM`, `STRAY`, `TRADER_LLAMA`, `WITCH`, `WITHER`, `WITHER_SKELETON`.

#### Properties:

* `enabled` (boolean)
* `replace_vanilla` (boolean): Replace the vanilla goal (if any of this type) with this one. If false, this goal will be added to the existing goals.
* `priority` (integer): Priority of this goal. Higher priority means this goal will be executed before other goals with lower priority.
* `speed_modifier` (number): (default `1.0`) Speed modifier of the entity while attacking.
* `attack_interval_min` (integer): (default `20`) Minimum interval in ticks between each ranged attack.
* `attack_radius` (integer): (default `16`) Maximum distance in blocks from the target entity at which the entity will attack.
