---
icon: burger-cheese
---

# Consumable

{% tabs %}
{% tab title="Modern (Recommended)" %}
{% hint style="success" %}
The `consumable` property replaces the old `events.eat` / `events.drink` events on 1.21.2+.
{% endhint %}

## Basic examples

### Food

```yaml
info:
  namespace: my_items
items:
  my_food:
    name: My Food
    graphics:
      texture: item/my_food
    consumable:
      nutrition: 7
      saturation: 4
```

### Drink

```yaml
info:
  namespace: my_items
items:
  my_drink:
    name: My Drink
    graphics:
      texture: item/my_drink
    consumable:
      nutrition: 1
      saturation: 0.5
      animation: drink
      sound: entity.generic.drink
```

## Properties

### `nutrition`

```yaml
consumable:
  nutrition: 7
```

Hunger points restored. Integer.

### `saturation`

```yaml
consumable:
  saturation: 4
```

Saturation restored.

### `can_always_eat`

```yaml
consumable:
  can_always_eat: true
```

Allow eating when the hunger bar is full, like a golden apple. Default: `false`.

### `consume_seconds`

```yaml
consumable:
  consume_seconds: 1.6
```

Time in seconds to finish consuming. Default: `1.6`.

{% hint style="info" %}
`eat_seconds` works as an alias.
{% endhint %}

### `animation`

```yaml
consumable:
  animation: eat
```

Use animation played while consuming. One of:

* `none`
* `eat`
* `drink`
* `block`
* `brush`
* `crossbow`
* `spear`
* `spyglass`
* `toot_horn`

{% hint style="warning" %}
Requires Minecraft 1.21.2 or newer.
{% endhint %}

### `sound`

```yaml
consumable:
  sound: entity.generic.drink
```

Sound played while consuming. Accepts any vanilla sound key or a custom ItemsAdder sound.

{% hint style="warning" %}
Requires Minecraft 1.21.2 or newer.
{% endhint %}

### `particles`

```yaml
consumable:
  particles: false
```

Show food particles while consuming. Default: `true`.

{% hint style="warning" %}
Requires Minecraft 1.21.2 or newer.
{% endhint %}

### `effects`

Side effects that run after the item is fully consumed.

```yaml
consumable:
  nutrition: 4
  saturation: 0.3
  effects:
    - type: apply_status_effects
      probability: 1.0
      effects:
        - potion: speed
          duration: 200
          amplifier: 1
          ambient: false
          show_icon: true
        - potion: jump_boost
          duration: 200
          amplifier: 0
    - type: play_sound
      sound: entity.player.levelup
```

Effect types:

#### `apply_status_effects`

```yaml
- type: apply_status_effects
  probability: 1.0  # Chance from 0.0 to 1.0 (default: 1.0)
  effects:
    - potion: speed          # Vanilla potion effect name
      duration: 200          # Duration in ticks
      amplifier: 0           # 0 = level I
      ambient: false         # default: false
      show_icon: true        # Show effect icon in HUD (default: true)
```

#### `remove_status_effects`

```yaml
- type: remove_status_effects
  effects:
    - speed
    - jump_boost
```

#### `clear_all_status_effects`

```yaml
- type: clear_all_status_effects
```

Removes all active potion effects.

#### `teleport_randomly`

```yaml
- type: teleport_randomly
  diameter: 16.0  # Default: 16.0
```

Teleports to a random location within the given diameter, like a chorus fruit.

#### `play_sound`

```yaml
- type: play_sound
  sound: entity.player.levelup
```

Plays a sound when the item finishes being consumed.
{% endtab %}

{% tab title="Old (1.21.3 and lower)" %}
### Food

```yaml
info:
  namespace: my_items
items:
  my_food:
    enabled: true
    display_name: My Food
    resource:
      material: COOKED_PORKCHOP
      generate: true
      textures:
        - item/my_food
    events:
      eat:
        feed:
          amount: 7
          saturation: 4
```

### Drink

```yaml
info:
  namespace: my_items
items:
  my_drink:
    enabled: true
    display_name: My Drink
    resource:
      material: POTION
      generate: true
      textures:
        - item/my_drink
    specific_properties:
      potion:
        type: WATER
        color: WHITE
    item_flags:
      - HIDE_POTION_EFFECTS
    events:
      drink:
        feed:
          amount: 1
          saturation: 0
```
{% endtab %}
{% endtabs %}
