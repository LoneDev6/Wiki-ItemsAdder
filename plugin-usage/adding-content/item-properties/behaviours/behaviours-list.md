# Behaviours List

## Behaviours

### `block_trade_machine`

Tells ItemsAdder that this item is a trade machine.\
You will be able to trade item with this machine like a villager

#### Properties:

* `enabled` (boolean)
* `title` (string)
* `gui_texture` (object): Reskin your trading GUI with a custom texture. Keep in mind that the title will be removed if you reskin this GUI.
* `trades_list` (object): List of the trades this machine accepts
  * `change_me` (object): Trade recipe
    * `ingredients` (object): Ingredients needed for this recipe
      * `slot1` (object)
        * `item` (string): Vanilla / ItemsAdder custom item
        * `amount` (integer)
      * `slot2` (object)
        * `item` (string): Vanilla / ItemsAdder custom item
        * `amount` (integer)
    * `result` (object): Resulting item for this recipe
      * `item` (string): Vanilla / ItemsAdder custom item
      * `amount` (integer)
  * `change_me_2` (object): Trade recipe
    * `ingredients` (object): Ingredients needed for this recipe
      * `slot1` (object)
        * `item` (string): Vanilla / ItemsAdder custom item
        * `amount` (integer)
      * `slot2` (object)
        * `item` (string): Vanilla / ItemsAdder custom item
        * `amount` (integer)
    * `result` (object): Resulting item for this recipe
      * `item` (string): Vanilla / ItemsAdder custom item
      * `amount` (integer)
  * `change_me_xxx` (object): Trade recipe
    * `ingredients` (object): Ingredients needed for this recipe
      * `slot1` (object)
        * `item` (string): Vanilla / ItemsAdder custom item
        * `amount` (integer)
      * `slot2` (object)
        * `item` (string): Vanilla / ItemsAdder custom item
        * `amount` (integer)
    * `result` (object): Resulting item for this recipe
      * `item` (string): Vanilla / ItemsAdder custom item
      * `amount` (integer)

### `complex_furniture`

Creates a complex furniture using a custom entity. They can be animated and have more rotations steps (not limited to 22.5 degrees).

#### Properties:

* `enabled` (boolean)
* `entity` (string): Custom entity ID
* `static` (boolean): (default `false`) if the model is static, it will not be animated.
* `light_level` (integer): Set this to make the furniture emit light.
* `solid` (boolean): (default `false`) Solid furniture. Uses BARRIER block to simulate collisions.
* `permission_suffix` (string): Partial permission used to allow a player to place/break the complex furniture. For example `example.ceiling_fan` is a suffix permission for `ia.user.complex_furniture.break.example.ceiling_fan`.
* `sound` (unknown)
* `drop_when_mined` (boolean): (default `true`) This option allows you to avoid furniture from being dropped when broken by players.
* `max_per_chunk` (integer): Maximum number of complex furniture that can be placed in a chunk. Overrides the `config.yml` setting `max_per_chunk`.
* `placement_offset` (object): Offset the placement of the complex furniture.
  * `ceiling` (number): Offset the placement of the complex furniture on the ceiling. Can be positive or negative.
  * `floor` (number): Offset the placement of the complex furniture on the floor. Can be positive or negative.
  * `wall` (number): Offset the placement of the complex furniture on the wall. Can be positive or negative.

### `entity_summoner`

Spawn a specific vanilla entity or custom entity on interaction. Similar to the vanilla spawn egg

#### Properties:

* `enabled` (boolean)
* `entity` (unknown)
* `max_per_chunk` (integer): Maximum number of entities that can be spawned in a chunk.
* `decrement_durability` (boolean): Decrement the item durability when the entity is spawned.
* `decrement_amount` (integer): (default `1`) amount of durability to decrement when the entity is spawned.

### `fuel`

Tells ItemsAdder that this item is a custom fuel.\
You will be able to place a this item in furnaces. PLEASE MAKE SURE TO USE ONLY MATERAILS THAT ARE ALREADY FUEL IN MINECRAFT! For example COAL, COAL\_BLOCK, LAVA\_BUCKET...

#### Properties:

* `enabled` (boolean)
* `burn_ticks` (integer): Duration of the fuel in ticks (20 ticks = 1 second). Vanilla COAL burns for 1600 ticks
* `machines` (array): List of the machines that will accept this fuel
* `machines` (array): List of the machines that will accept this fuel Possible values: `FURNACE`, `BLAST_FURNACE`, `SMOKER`

### `furniture`

Tells ItemsAdder that this item is a furniture.\
You will be able to place it on rightclick and remove it attacking the placed entity.

Limitations of furnitures:

* non solid furnitures can't receive interact events, they can only be removed using mouse left click but cannot be interacted with (only solid furnitures can get interact events).
* max size of the hitbox is 3x3x3 for performance reasons

#### Properties:

* `enabled` (boolean)
* `entity` (string): Type of entity to use to create this furniture.
* `gravity` (boolean): If the furniture has gravity
* `small` (boolean): If the furniture is small or big, be sure to base your 3D model on this setting. Resize your model using Blockbench accordingly
* `fixed_rotation` (boolean): If the furniture has fixed rotation (to place it precisely, for example use it for a wall picture)
* `light_level` (integer): Set this to make the furniture emit light.
* `shift_interact_rotate` (boolean): Default is `true`. If `true` the custom `item_frame` furniture can be rotated on shift interaction (right-click).
* `solid` (boolean): If the furniture is solid. ItemsAdder will add hitbox made of BARRIER blocks to simulate furniture collisions. You can customize hitbox size using 'hitbox' property.
* `hitbox` (object): This is the hitbox of the furniture. Hitbox is the area that the player can click to remove the furniture. It can be solid if 'solid' property is 'true'
  * `length` (number)
  * `width` (number)
  * `height` (number)
  * `length_offset` (number)
  * `width_offset` (number)
  * `height_offset` (number)
* `opposite_direction` (boolean): Makes the model rotate 180 degrees automatically when placed
* `permission_suffix` (unknown)
* `sound` (unknown)
* `placeable_on` (object): You can decide the valid placement locations of the furniture. THIS IS VALID ONLY FOR item\_frame FURNITURE!
  * `walls` (boolean)
  * `ceiling` (boolean)
  * `floor` (boolean)
* `drop_when_mined` (boolean): This option allows you to avoid furniture from being dropped when broken by players.
* `display_transformation` (object): `item_display` property that allows to resize, move or rotate the model freely.
  * `adjust_legacy_model` (string): Fixes models created for `item_frame` or `armor_stand` to work correctly with `item_display` without having to adjust all models manually.
  * `transform` (string)
  * `right_rotation` (object): Rotate the model. Use `axis_angle` or `quaternion`, not both.
  * `left_rotation` (object): Rotate the model. Use `axis_angle` or `quaternion`, not both.
  * `translation` (object)
    * `x` (number)
    * `y` (number)
    * `z` (number)
  * `scale` (object)
    * `x` (number)
    * `y` (number)
    * `z` (number)

### `furniture_sit`

Tells ItemsAdder that this item is a chair.\
You will be able to sit on it rightclicking the furniture hitbox.

#### Properties:

* `enabled` (boolean)
* `sit_height` (number): Height of the sit position
* `opposite_direction` (boolean): Default: true. Enable if you want the player rotate of 180 degrees when they sit on this furniture.
* `sit_all_solid_blocks` (boolean): Default: true. Enable if you want the player to be able to sit on every BARRIER block of the furniture (for multi-seats chairs). This works only on solid furnitures!
* `passenger_front_view_on_sit` (boolean): Default: true. Rotate the player to face the front of the furniture when they sit on it.
* `passenger_rotate_body` (boolean): Default: false. Rotate the player body while sitting on the furniture.

### `furniture_trade_machine`

Tells ItemsAdder that this item is a trade machine.\
You will be able to trade item with this machine like a villager

#### Properties:

* `enabled` (boolean)
* `title` (string)
* `gui_texture` (object): Reskin your trading GUI with a custom texture. Keep in mind that the title will be removed if you reskin this GUI.
* `trades_list` (object): List of the trades this machine accepts
  * `change_me` (object): Trade recipe
    * `ingredients` (object): Ingredients needed for this recipe
      * `slot1` (object)
        * `item` (string): Vanilla / ItemsAdder custom item
        * `amount` (integer)
      * `slot2` (object)
        * `item` (string): Vanilla / ItemsAdder custom item
        * `amount` (integer)
    * `result` (object): Resulting item for this recipe
      * `item` (string): Vanilla / ItemsAdder custom item
      * `amount` (integer)
  * `change_me_2` (object): Trade recipe
    * `ingredients` (object): Ingredients needed for this recipe
      * `slot1` (object)
        * `item` (string): Vanilla / ItemsAdder custom item
        * `amount` (integer)
      * `slot2` (object)
        * `item` (string): Vanilla / ItemsAdder custom item
        * `amount` (integer)
    * `result` (object): Resulting item for this recipe
      * `item` (string): Vanilla / ItemsAdder custom item
      * `amount` (integer)
  * `change_me_xxx` (object): Trade recipe
    * `ingredients` (object): Ingredients needed for this recipe
      * `slot1` (object)
        * `item` (string): Vanilla / ItemsAdder custom item
        * `amount` (integer)
      * `slot2` (object)
        * `item` (string): Vanilla / ItemsAdder custom item
        * `amount` (integer)
    * `result` (object): Resulting item for this recipe
      * `item` (string): Vanilla / ItemsAdder custom item
      * `amount` (integer)

### `gun`

Tells ItemsAdder that this item is a gun.\
You will be able to shot and reload it.

#### Properties:

* `enabled` (boolean)
* `projectile` (string): Vanilla / ItemsAdder custom item

### `liquid_bucket`

Tells ItemsAdder that this item is a liquid bucket.\
You will be able to place a custom liquid and get it back.

#### Properties:

* `enabled` (boolean)
* `name` (string): Liquid identifier.

### `music_disc`

(**Deprecated**) Tells ItemsAdder that this item is a music disc.\
You will be able to put it inside a jukebox and make it play a song.**NOTE**: This should be considered old and you should use the new `jukebox_disc` property instead.

#### Properties:

* `enabled` (boolean)
* `song` (object): Song properties
  * `name` (string): Specify a song name you defined in the songs.json file. Please refer to the tutorial here: https://itemsadder.devs.beer/plugin-usage/adding-content/sounds
  * `description` (string): Description of the song. This will be shown in Actionbar when you put the disc inside a jukebox

### `vehicle`

Tells ItemsAdder that this item is a vehicle.\
You will be able to sit on it and move around / in air. You can also set fuel settings.

#### Properties:

* `enabled` (boolean)
* `sit_height` (number): Height of the sit position
* `fixed_rotation` (boolean): If the vehicle has fixed rotation (to place it precisely)
* `small` (boolean): If the vehicle is small or big, be sure to base your 3D model on this setting. Resize your model using Blockbench accordingly
* `step_height` (number): Autojump height
* `speed` (object): Different speed of the vehicle based on actions
  * `drive` (number): Normal drive speed
  * `jump` (number): Jump speed
  * `fly` (number): Fly speed
* `sound` (unknown)
* `fuel` (object): Fuel settings
  * `start` (number): Start fuel value when you craft/get this vehicle
  * `max` (number): Max fuel value this vehicle can reach
  * `items` (unknown): Vehicle accepted fuel vanilla materials/custom items. You can set **any Vanilla material** or your **custom items**. (it **won't autocomplete** everything here, just some examples)
* `hitbox` (object): Size of the vehicle. This is the hitbox used when you drive the vehicles (hit walls/blocks).
  * `length` (number)
  * `width` (number)
  * `height` (number)
* `smoke` (object): Exhaust smoke effect
  * `amount` (number)
  * `x` (number)
  * `y` (number)
  * `z` (number)
