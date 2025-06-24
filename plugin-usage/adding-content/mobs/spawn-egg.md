---
icon: egg
---

# Spawn Egg

You can create spawn eggs for your custom entities using the `entity_summoner` behaviour.

Example

```yaml
items:
  happy_creeper_spawn_egg:
    name: Happy Creeper Spawn Egg
    resource:
      generate: true
      texture: item/happy_creeper_spawn_egg
      material: PAPER
    behaviours:
      entity_summoner:
        entity: happy_creeper
```
