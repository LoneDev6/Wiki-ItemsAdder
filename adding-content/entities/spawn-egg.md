---
icon: egg
---

# Spawn Egg

You can create spawn eggs for your custom entities using the `entity_summoner` behaviour.

Example

{% tabs %}
{% tab title="Modern (Recommended)" %}
```yaml
items:
  happy_creeper_spawn_egg:
    name: Happy Creeper Spawn Egg
    graphics:
      texture: item/happy_creeper_spawn_egg
    behaviours:
      entity_summoner:
        entity: happy_creeper
```
{% endtab %}

{% tab title="Old (1.21.3 and lower)" %}
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
{% endtab %}
{% endtabs %}
