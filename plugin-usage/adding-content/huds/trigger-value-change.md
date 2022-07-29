---
描述: >-
  How to use triggers to automatically increase/decrease HUD value during
  gameplay.
---

# 更改触发值

## 让 HUDs 的值动态化

通过 ItemsAdder, 您可以轻松地在游戏过程中自动更改 HUD 的值, 例如: 您可以让 HUD 的值逐渐减小.

在以下的例子中, 我将解释 **口渴值** HUD 的工作原理.

## 口渴值的 HUD 是如何工作的?

口渴值会根据一些因素而自动减少: 生物群系, 您在家中还是在野外探险, 通常在游戏过程中没有任何特定因素.

{% hint style="info" %}
我知道目前的 HUDs 系统缺少一些功能, 可能会显得很混乱, 未来我会对它进行改进, 让它变得更加完善.

If you want to have more control over HUDs, 你可以使用 [Java API](../../../developers/java-api/).
{% endhint %}

以下是 HUD 的配置文件:

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

在 ItemsAdder 中, 您可以使用触发器来决定如何更改 HUD 的值, 目前有两个触发器: `decrement`, `increment` 和 `on_min_value`.

其中, `decrement` 触发器会减少使 HUD 的值, `increment` 触发器会增加 HUD 的值.

`on_min_value` 是一个特殊的触发器, 当 HUD 的值达到其最小值时, 该触发器会运行.

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

这是一个特殊的触发器, 它不会改变 HUD 的值, 但会在 HUD 的值达到其设定的最小值时触发某些事情.

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

* `damage_player` 每 100 ticks（游戏刻）对玩家造成 0.5 点伤害 .
* `potion_effect` 每 100 ticks（游戏刻）给予玩家持续 100 ticks 的缓慢 1 效果(在这种情况下, 意味着直到玩家的 HUD 值以某种方式增加之前, 将获得无限缓慢效果).
