# ItemsAdder internal

## Spawn the mob naturally using ItemsAdder

To spawn the mob naturally you have to setup the `replace_mobs_spawn` property.

This is an example for a custom mob names **Soul**.\
As you can see I set it up like a normal item, but with a special [behaviour ](../../../item-properties/behaviours.md)named **mob**.

\
This example configuration tells ItemsAdder to replace any naturally spawned `ZOMBIE`with 20% `chance`, at `MIDNIGHT` and only in caves (`max_sky_light: 0`).

```yaml
  soul:
    display_name: Soul
    permission: creaturesplus
    click_in_ia_gui: false
    resource:
      generate: false
      model_path: "mob/soul/soul"
    behaviours:
      mob:
        ai: HUSK
        hit_color: ff7e7e
        max_health: 40
        lock_head_rotation:
          y: 0
        animation:
          attack: soul_attack
          walk: soul_walking
        replace_mobs_spawn:
          mob1:
            type: ZOMBIE
            reason: NATURAL
            chance: 20
            max_sky_light: 0
            time:
              start: MIDNIGHT
            biomes:
             - DESERT
             - DESERT_HILLS
             - DESERT_LAKES
```

You can create as much as replace rules as you want, for example if you want to replace both `ZOMBIE` and `SKELETON` you can create a second rule

```yaml
        replace_mobs_spawn:
          rule1:
            type: ZOMBIE
            reason: NATURAL
            chance: 20
            max_sky_light: 0
            time:
              start: MIDNIGHT
          rule2:
            type: SKELETON
            reason: NATURAL
            chance: 50
            max_sky_light: 0
            time:
              start: NOON
```

You can decide if to **replace** the mob **or** to **spawn** the custom **mob without replacing** the **original** one.\
You have to use the `spawn_another` property.

```yaml
          rule3:
            type: ZOMBIE
            spawn_another: true
            reason: NATURAL
            chance: 10
            max_sky_light: 0
            time:
              start: MIDNIGHT
```
