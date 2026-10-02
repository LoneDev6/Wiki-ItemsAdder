---
icon: bullseye
---

# Entity Goals

`type` selects the real vanilla base mob. It keeps that mob's built-in AI unless you change its goals. Start with `vanilla_defaults: true` when you also want unspecified gameplay properties such as movement speed, sounds, sunlight and vanilla drops to follow the base mob. Existing configs without this option keep their previous ItemsAdder defaults.

Goals can be configured individually or through one preset. A preset expands to the same vanilla goal types listed in [Entity Goals List](entity-goals-list.md); it does not replace the base mob or clear its other goals. An explicit goal section overrides a preset goal field by field. Use `enabled: false` to omit a preset goal, and add another goal section to extend the preset.

| Preset | Goals added |
| --- | --- |
| `wanderer` | `random_wander_around`, `random_look_around` |
| `observer` | `look_at_entity` (players), `random_look_around` |
| `timid` | `avoid_entity` (players), `random_wander_around` |
| `retaliator` | `hurt_by_target`, `melee_attack` |
| `melee_hunter` | `attack_near` (players), `melee_attack` |
| `bow_hunter` | `attack_near` (players), `ranged_bow_attack` |

`bow_hunter` requires a base type supported by `ranged_bow_attack`. A ranged mob also needs its usual weapon and vanilla conditions to attack.

Lower numeric `priority` values take precedence when goals compete. `replace_vanilla: true` (the default for individual goals) removes vanilla goals of the same implementation type before adding the configured goal. Set it to `false` to keep both. `clear_all: true` removes **all** built-in action and target goals; use it only when you intend to specify the complete AI. It does not remove other vanilla mob mechanics such as damage rules.

## Vanilla cow with a custom model (V1)

```yaml
info:
  namespace: farm
entities:
  painted_cow:
    model_folder: entity/painted_cow
    type: COW
    vanilla_defaults: true
```

With no `goals`, the cow keeps its vanilla goals. `vanilla_defaults` changes only properties that the config leaves unspecified; explicitly configured properties still apply.

## Extend a zombie's AI (V1)

```yaml
info:
  namespace: monsters
entities:
  cave_zombie:
    model_folder: entity/cave_zombie
    type: ZOMBIE
    vanilla_defaults: true
    goals:
      preset: melee_hunter
      attack_near:
        entity: COW
        selector:
          min_health: 10
      melee_attack:
        priority: 3
      random_look_around:
        priority: 9
```

This retains the zombie's other vanilla goals. The preset's `attack_near.priority` remains `2`; its target and health filter are overridden. `selector` filters candidate targets. For `attack_near` and `avoid_entity`, it works with vanilla entity types and ItemsAdder custom entity IDs.

## V2 sidecar

Place this beside the exported `zombie_v2.iaentity` in the same namespace. The YAML entity key must match the bundle ID.

```yaml
info:
  namespace: monsters
entities:
  zombie_v2:
    vanilla_defaults: true
    goals:
      preset: retaliator
      melee_attack:
        priority: 3
```

`look_at_entity` currently matches the vanilla base type only; its `selector` and custom entity ID cannot filter individual custom entities. An unsupported filter logs a warning.
