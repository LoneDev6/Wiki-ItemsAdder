---
icon: person-running-fast
---

# Behaviours List

## Behaviours

### `block_trade_machine`

Tells ItemsAdder that this item is a trade machine.\
You will be able to trade item with this machine like a villager.

```yaml
block_trade_machine:
  enabled: true
  title: 'Trades' # Optional (Default value: 'Trades')
  permission: 'example.trade.permission' # Optional - Permission needed to open the trade GUI
  gui_texture: # Optional - Reskin your trading GUI with a custom texture. Keep in mind that the title will be removed if you reskin this GUI.
    left: 'my_namespace:gui_left'
    right: 'my_namespace:gui_right'
    title_offset: -97 # Optional (Default value: -97)
  trades_list: # List of the trades this machine accepts
    change_me: # Trade recipe (use any name you want)
      ingredients:
        slot1:
          item: 'minecraft:diamond' # Vanilla / ItemsAdder custom item
          amount: 1
        slot2: # Optional - Second ingredient slot
          item: 'minecraft:emerald'
          amount: 2
      result:
        item: 'my_namespace:my_reward_item'
        amount: 1
    change_me_2:
      ingredients:
        slot1:
          item: 'minecraft:gold_ingot'
          amount: 5
      result:
        item: 'minecraft:netherite_ingot'
        amount: 1
```

### `complex_furniture`

Creates a complex furniture using a custom entity. They can be animated and have more rotations steps (not limited to 22.5 degrees).

```yaml
complex_furniture:
  enabled: true
  entity: 'my_namespace:my_entity' # Custom entity ID
  static: false # Optional (Default value: false) - If the model is static, it will not be animated
  light_level: 5 # Optional - Set this to make the furniture emit light
  max_per_chunk: 20 # Optional - Maximum number of complex furniture that can be placed in a chunk
  solid: false # Optional (Default value: false) - Solid furniture. Uses BARRIER block to simulate collisions
  drop_when_mined: true # Optional (Default value: true) - Whether the furniture is dropped when broken by players
  fixed_rotation: false # Optional (Default value: false)
  fixed_position: true # Optional (Default value: true)
  opposite_direction: false # Optional (Default value: false) - Rotate the model 180 degrees on placement
  permission_suffix: 'example.ceiling_fan' # Optional - Partial permission for place/break (e.g. 'ia.user.complex_furniture.break.example.ceiling_fan')
  sound: # Optional - Custom place/break sounds
    place:
      name: 'minecraft:block.wood.place'
      volume: 1.0
      pitch: 1.0
    break:
      name: 'minecraft:block.wood.break'
      volume: 1.0
      pitch: 1.0
  placement_offset: # Optional - Offset the placement of the complex furniture
    ceiling: 0.0
    floor: 0.0
    wall: 0.0
```

### `entity_summoner`

Spawn a specific vanilla entity or custom entity on interaction. Similar to the vanilla spawn egg.

```yaml
entity_summoner:
  enabled: true
  entity: 'minecraft:zombie' # Vanilla EntityType or custom entity (namespace:value)
  max_per_chunk: 5 # Optional - Maximum number of entities that can be spawned in a chunk
  decrement_durability: 1 # Optional - Decrement the item durability when the entity is spawned
  decrement_amount: 1 # Optional (Default value: 1) - Amount to decrement when the entity is spawned
```

* `entity`: Refer to [this link](https://jd.papermc.io/paper/org/bukkit/entity/EntityType.html#enum-constant-summary) for vanilla entity types or use `namespace:value` for custom entities

### `fuel`

Tells ItemsAdder that this item is a custom fuel.\
You will be able to place this item in furnaces.

{% hint style="warning" %}
PLEASE MAKE SURE TO USE ONLY MATERIALS THAT ARE ALREADY FUEL IN MINECRAFT! For example `COAL`, `COAL_BLOCK`, `LAVA_BUCKET`...
{% endhint %}

```yaml
fuel:
  enabled: true
  burn_ticks: 1600 # Optional (Default value: 1600) - Duration of the fuel in ticks (20 ticks = 1 second). Vanilla COAL burns for 1600 ticks. Max 32767
  machines: # Optional - List of the machines that will accept this fuel
    - FURNACE
    - BLAST_FURNACE
    - SMOKER
```

* `machines`: Possible values are `FURNACE`, `BLAST_FURNACE`, `SMOKER`

### `furniture`

Tells ItemsAdder that this item is a furniture.\
You will be able to place it on rightclick and remove it attacking the placed entity.

Limitations of furnitures:

* non solid furnitures can't receive interact events, they can only be removed using mouse left click but cannot be interacted with (only solid furnitures can get interact events).
* max size of the hitbox is 3x3x3 for performance reasons

```yaml
furniture:
  enabled: true
  entity: item_display # Type of entity to use to create this furniture (ARMOR_STAND, ITEM_FRAME, GLOW_ITEM_FRAME, ITEM_DISPLAY)
  gravity: false # Optional (Default value: false) - If the furniture has gravity
  small: true # Optional (Default value: true) - If the furniture is small or big, be sure to base your 3D model on this setting
  fixed_rotation: false # Optional (Default value: false) - If the furniture has fixed rotation (to place it precisely, for example use it for a wall picture)
  light_level: -1 # Optional (Default value: -1) - Set this to make the furniture emit light
  shift_interact_rotate: true # Optional (Default value: true) - If `true` the custom `item_frame` furniture can be rotated on shift interaction (right-click)
  solid: false # Optional (Default value: false) - If the furniture is solid. ItemsAdder will add hitbox made of BARRIER blocks to simulate furniture collisions
  opposite_direction: false # Optional (Default value: false) - Makes the model rotate 180 degrees automatically when placed
  drop_when_mined: true # Optional (Default value: true) - Whether the furniture is dropped when broken by players
  hitbox: # Optional - The hitbox of the furniture. It can be solid if 'solid' property is 'true'
    length: 1.0
    width: 1.0
    height: 1.0
    length_offset: 0.0
    width_offset: 0.0
    height_offset: 0.0
  placeable_on: # Optional - Valid placement locations of the furniture
    walls: true
    ceiling: true
    floor: true
  permission_suffix: # Optional - Partial permission used to allow a player to place/break the furniture
    break: 'example.red_chair'
    place: 'example.red_chair'
  sound: # Optional - Custom place/break sounds
    place:
      name: 'minecraft:block.wood.place'
      volume: 1.0
      pitch: 1.0
    break:
      name: 'minecraft:block.wood.break'
      volume: 1.0
      pitch: 1.0
  display_transformation: # Optional - `item_display` property that allows to resize, move or rotate the model freely (requires entity: item_display)
    adjust_legacy_model: armor_stand # Optional - Fixes models created for `item_frame`, `armor_stand` or `small_armor_stand` to work with `item_display`
    transform: FIXED # Optional - ItemDisplayTransform value
    translation:
      x: 0.0
      y: 0.0
      z: 0.0
    scale:
      x: 1.0
      y: 1.0
      z: 1.0
    right_rotation: # Use `axis_angle` or `quaternion`, not both
      axis_angle:
        angle: 0.0
        x: 0.0
        y: 1.0
        z: 0.0
    left_rotation:
      axis_angle:
        angle: 0.0
        x: 0.0
        y: 1.0
        z: 0.0
```

### `furniture_sit`

Tells ItemsAdder that this item is a chair.\
You will be able to sit on it rightclicking the furniture hitbox.

```yaml
furniture_sit:
  enabled: true
  sit_height: 0.5 # Height of the sit position
  opposite_direction: true # Optional (Default value: true) - Rotate the player 180 degrees when they sit on this furniture
  sit_all_solid_blocks: true # Optional (Default value: true) - Allow the player to sit on every BARRIER block of the furniture (for multi-seats chairs). This works only on solid furnitures!
  passenger_front_view_on_sit: true # Optional (Default value: true) - Rotate the player to face the front of the furniture when they sit on it
  passenger_rotate_body: false # Optional (Default value: false) - Rotate the player body while sitting on the furniture
```

### `furniture_trade_machine`

Tells ItemsAdder that this item is a trade machine.\
You will be able to trade item with this machine like a villager.

```yaml
furniture_trade_machine:
  enabled: true
  title: 'Trades' # Optional (Default value: 'Trades')
  permission: 'example.trade.permission' # Optional - Permission needed to open the trade GUI
  gui_texture: # Optional - Reskin your trading GUI with a custom texture. Keep in mind that the title will be removed if you reskin this GUI.
    left: 'my_namespace:gui_left'
    right: 'my_namespace:gui_right'
    title_offset: -97 # Optional (Default value: -97)
  trades_list: # List of the trades this machine accepts
    change_me: # Trade recipe (use any name you want)
      ingredients:
        slot1:
          item: 'minecraft:diamond' # Vanilla / ItemsAdder custom item
          amount: 1
        slot2: # Optional - Second ingredient slot
          item: 'minecraft:emerald'
          amount: 2
      result:
        item: 'my_namespace:my_reward_item'
        amount: 1
    change_me_2:
      ingredients:
        slot1:
          item: 'minecraft:gold_ingot'
          amount: 5
      result:
        item: 'minecraft:netherite_ingot'
        amount: 1
```

### `gun`

Tells ItemsAdder that this item is a gun.\
You will be able to shoot and reload it.

```yaml
gun:
  enabled: true
  projectile: 'my_namespace:my_bullet' # Vanilla / ItemsAdder custom item to use as a projectile
```

### `liquid_bucket`

Tells ItemsAdder that this item is a liquid bucket.\
You will be able to place a custom liquid and get it back.

```yaml
liquid_bucket:
  enabled: true
  name: 'my_namespace:my_liquid' # Liquid identifier (namespace:value)
```

### `music_disc`

{% hint style="warning" %}
**Deprecated.** This should be considered old and you should use the new `jukebox_disc` property instead.
{% endhint %}

Tells ItemsAdder that this item is a music disc.\
You will be able to put it inside a jukebox and make it play a song.

```yaml
music_disc:
  enabled: true
  song:
    name: 'my_song_name' # Specify a song name you defined in the songs.json file
    description: 'Artist - Title' # Description of the song. This will be shown in Actionbar when you put the disc inside a jukebox
```

* `song.name`: Please refer to the [sounds tutorial](../../../sounds/sounds.md)

### `vehicle`

Tells ItemsAdder that this item is a vehicle.\
You will be able to sit on it and move around / in air. You can also set fuel settings.

```yaml
vehicle:
  enabled: true
  sit_height: 1.0 # Optional (Default value: 1.0) - Height of the sit position
  fixed_rotation: false # Optional (Default value: false) - If the vehicle has fixed rotation (to place it precisely)
  small: true # Optional (Default value: true) - If the vehicle is small or big, be sure to base your 3D model on this setting
  step_height: 0.3 # Optional (Default value: 0.3) - Autojump height
  speed: # Different speed of the vehicle based on actions
    drive: 0.3 # Optional (Default value: 0.3) - Normal drive speed
    jump: 0.3 # Optional (Default value: 0.3) - Jump speed
    fly: 0.0 # Optional (Default value: 0.0) - Fly speed
  hitbox: # Size of the vehicle. This is the hitbox used when you drive the vehicles (hit walls/blocks). Max 6
    length: 1.0
    width: 1.0
    height: 1.0
  smoke: # Optional - Exhaust smoke effect
    amount: 0
    offset:
      x: 0.0
      y: 0.0
      z: -0.8
  sound: # Optional - Custom vehicle sounds
    drive:
      name: 'minecraft:entity.minecart.riding'
      volume: 1.0
      pitch: 1.0
  fuel: # Optional - Fuel settings
    start: -1 # Optional (Default value: -1) - Start fuel value when you craft/get this vehicle
    max: -1 # Optional (Default value: -1) - Max fuel value this vehicle can reach
    items: # Vehicle accepted fuel vanilla materials/custom items
      minecraft:coal: 100 # Simple form - fuel value
      my_namespace:special_fuel: # Advanced form - with return item
        fuel_amount: 200
        return_item: 'minecraft:bucket'
```

## ItemsAdderAdditions Behaviours

### `bed`
Check the documentation [here](https://itemsadderadditions.com/docs/behaviours/bed).

### `connectable`
Check the documentation [here](https://itemsadderadditions.com/en/docs/behaviours/connectable).

### `contact_damage`
Check the documentation [here](https://itemsadderadditions.com/en/docs/behaviours/contact-damage).

### `stackable`
Check the documentation [here](https://itemsadderadditions.com/en/docs/behaviours/stackable).

### `storage`
Check the documentation [here](https://itemsadderadditions.com/en/docs/behaviours/storage).

### `text_display`
Check the documentation [here](https://itemsadderadditions.com/en/docs/behaviours/text-display).
