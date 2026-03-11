---
icon: location-plus
---

# Entity Random Spawn

{% hint style="warning" %}
## Requires ItemsAdder 4.0.11 or greater!
{% endhint %}

You can make custom entities randomly spawn in your world, exactly how vanilla mobs do.

This is an example to make an example `red_zombie` spawn.

It will spawn only with a `20%` chance of when a vanilla zombie spawns. It will replace the vanilla zombie with the custom one.

It will spawn only in worlds of which name starts by `world`, between world height `0` and `150` during weather `RAIN` and with light level from `0` to `10`.

```yaml
info:
  namespace: test
entities:
  red_zombie:
    model_folder: entity/red_zombie
    can_sun_burn: false
    type: ZOMBIE
entities_populators:
  red_zombie_1:
    entity: test:red_zombie
    spawn_logic:
      method: REPLACE # or SPAWN_NEAR
      types:
      - ZOMBIE
    chance: 20.0
    amount: 1
    worlds:
    - world*
    # you can also use x and z as location_range parameters, for example
    # to make edge of the worlds harder with more dangerous mobs
    location_range:
      y:
        min: 0
        max: 150
    weather:
    - RAIN
    light_level:
      min: 0
      max: 10

```

## All properties

```yaml
entities_populators:
  red_zombie:
    entity: test:red_zombie
    # This sets how to actually spawn the entity. 
    # You can replace a vanilla mob when it's spawned or spawn your mob near it.
    # Note: This uses the Minecraft spawn logic, so gemerule `doMobSpawning false` 
    # will make this stop working.
    spawn_logic:
      method: REPLACE # or SPAWN_NEAR
      types:
      - ZOMBIE
    chance: 20.0
    amount: 1
    # Optional
    biomes:
    - FOREST
    - JUNGLE
    worlds:
    - world
    - "!banned_other_world"
    - "test_world_*"
    # you can also use x and z as location_range parameters, for example
    # to make edge of the worlds harder with more dangerous mobs
    # Optional
    location_range:
      y:
        min: 25
        max: 45
    # Optional
    weather:
    - CLEAR
    - RAIN
    - THUNDER
    - SNOW
    # you can create more intervals, this is useful 
    # to introduce dynamicity to your gameplay
    # Optional
    time:
      interval_1:
        min: 12000 # sunset. also supports the 'sunset' word directly
        max: 23000 # sunrise. also supports the 'sunrise' word directly
    # Optional
    light_level:
      min: 0
      max: 5
```

## Example pack

{% embed url="https://www.spigotmc.org/resources/vanillaex-custom-mobs-pack.125684/" %}

{% embed url="https://www.youtube.com/watch?v=CdcK4cSlBgg" %}
