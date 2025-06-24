---
icon: bullseye
---

# Entity Goals

You can customize entities brain by using goals.

### Note

`clear_all` is used to clear every base goal in the vanilla entity.\
`replace_vanilla` is used to clear any base goal of the same type in the vanilla entity.

### Example

```yaml
entities:
  happy_creeper:
    model_folder: entity/happy_creeper
    type: ZOMBIE
    can_sun_burn: false
    eyes_height: 0.1
    goals:
      clear_all: true
      move_to_block:
        priority: 7
        blocks:
        - POPPY
      attack_near:
        priority: 8
        entity: CREEPER
      look_at_entity:
        priority: 8
        entity: PLAYER
      melee_attack:
        priority: 10
        enabled: true
      random_teleport_timed:
        min_delay: 60
        max_delay: 100
      random_teleport_on_hit:
        check_visibility: false
        chance: 100
      hurt_by_target:
        enabled: true
```
