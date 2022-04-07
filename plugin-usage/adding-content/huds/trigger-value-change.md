---
description: >-
  How to use triggers to automatically increase/decrease HUD value during
  gameplay.
---

# Trigger value change

## Making the HUD value dynamic

With ItemsAdder you can easily make your HUD value change automatically during gameplay, for example you can make a HUD value gradually decrease.

In this example I will explain how the **thirst** HUD works.

## How does the thirst HUD work?

The thirst HUD automatically decreases based on some factors: biome, if you're inside a home or outside and also generally during gameplay without any particular factor.

{% hint style="info" %}
I know this HUDS system lacks some features and it may be a bit confusing, in the future I'll revamp it to add more features and make it better.

If you want to have more control over HUDs you should use the [Java API](../../../developers/java-api/).
{% endhint %}

This is the HUD configuration file:

```yaml
info:
  namespace: realcraft
huds:
  thirst_bar:
    enabled: true
    show:
      auto: true
      creative: false
      underwater: false
      riding: false
    type: STATUS
    x_position_pixels: 10
    direction: LEFT
    value:
      player_stat_name: thirst
      start: 10
      min: 0
      max: 10
      triggers:
        decrement:
          generic_over_time_60_minutes_inside:
            min_sky_light: 0
            max_sky_light: 13
            every_ticks: 30000
            amount: 0.5
          generic_over_time_45_minutes_outside:
            min_sky_light: 14
            max_sky_light: 15
            every_ticks: 30000
            amount: 0.5
          biome_over_time_desert_30_minutes_outside:
            min_sky_light: 14
            max_sky_light: 15
            biome: DESERT
            every_ticks: 30000
            amount: 0.5
          food_level_change:
            amount: 0.1
        increment:
          food_level_change:
            amount: 0.1
          player_respawn:
            amount: 10
        on_min_value:
          damage_player:
            every_ticks: 100
            damage: 0.5
          potion_effect:
            every_ticks: 100
            type: SLOW
            amplifier: 1
            duration: 100
    images:
      positive: realcraft:thirst_bar_positive
      half: realcraft:thirst_bar_half
      negative: realcraft:thirst_bar_negative

```

## The triggers

In ItemsAdder you can use triggers to decide how to make the HUD value change, and there are two triggers: `decrement`, `increment` and `on_min_value`.

The `decrement` triggers makes the HUD value decrease, the `increment` trigger makes it increase.

`on_min_value` is a special trigger which makes its rules ran when the HUD value reached its min value.

Each trigger has a list of possible rules which tells the ItemsAdder if it can change the HUD value or not.

## The rules

`triggers` have some specific rules and they are not available on each one of the triggers, so please refer to this list:

### `decrement` trigger

```yaml
      triggers:
        decrement:
          generic_over_time:
            min_sky_light: 0
            max_sky_light: 13
            every_ticks: 30000
            amount: 0.5
          biome_over_time:
            min_sky_light: 14
            max_sky_light: 15
            biome: DESERT
            every_ticks: 30000
            amount: 0.5
          food_level_change:
            amount: 0.1
```

* `generic_over_time` makes the HUD value decrement of 0.5 each 30000 ticks if the sky light is between 0 and 13 (which means the player is inside a structure).
* `biome_over_time` makes the HUD value decrement of 0.5 each 30000 ticks if the sky light is between 14 and 15 (which means the player is outside, in the wild) and also checks if the biome is `DESERT`.
* `food_level_change` makes the HUD value decrement of 0.1 when the food level decreases (vanilla).

### `increment` trigger

```yaml
  triggers:
    increment:
      generic_over_time:
        min_sky_light: 0
        max_sky_light: 13
        every_ticks: 30000
        amount: 0.5
      biome_over_time:
        min_sky_light: 14
        max_sky_light: 15
        biome: DESERT
        every_ticks: 30000
        amount: 0.5
      food_level_change:
        amount: 0.1
      player_respawn:
        amount: 10
```

* `generic_over_time` makes the HUD value increment of 0.5 each 30000 ticks if the sky light is between 0 and 13 (which means the player is inside a structure).
* `biome_over_time` makes the HUD value increment of 0.5 each 30000 ticks if the sky light is between 14 and 15 (which means the player is outside, in the wild) and also checks if the biome is `DESERT`.
* `food_level_change` makes the HUD value decrement of 0.1 when the food level increases (vanilla, when the player eats something).
* `player_respawn` makes the HUD value increase of 10 when the player respawns after death, in this case this is useful o make the player thirst increase to the max value on respawn.

### `on_min_value` trigger

This is a special trigger which doesn't alter the HUD value, but is used to make something happen when the HUD value reaches the min value.

```yaml
  triggers:
    on_min_value:
      damage_player:
        every_ticks: 100
        damage: 0.5
      potion_effect:
        every_ticks: 100
        type: SLOW
        amplifier: 1
        duration: 100
```

* `damage_player` deals a damage of 0.5 to the player each 100 ticks.
* `potion_effect` gives SLOW effect to the player with amplifier 1 and duration 100, each 100 ticks (in this case it means that the player gets infinite slowness until their HUD value increases somehow).
