---
描述: >-
 如何在游戏过程中使用触发器自动增加/减少 HUD 的数值
---

# 更改触发值

## 使 HUDs 的值动态化

通过 ItemsAdder, 您可以轻松地在游戏过程中自动更改 HUD 的值, 例如: 您可以让 HUD 的值逐渐减小.

在以下的例子中, 我将解释 **口渴值** HUD 的工作原理.

## 口渴值的 HUD 是如何工作的?

口渴值会根据一些因素而自动减少: 生物群系, 您在建筑内休憩或是在户外探险; 
通常在游戏过程中, 会有许多特定因素导致口渴值的变更.

{% hint style="info" %}
我知道目前的 HUDs 缺少一些功能, 可能会显得很混乱.
未来我会对其进行改进, 让其变得更加完善.

如果您想使用 HUD 进行更多操作, 您可以使用 [Java API](../../../developers/java-api/).
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

## 触发器

在 ItemsAdder 中, 您可以使用触发器来决定如何更改 HUD 的值, 目前有三个触发器: `decrement`, `increment` 和 `on_min_value`.

其中, `decrement` 触发器会减少 HUD 的值, `increment` 触发器会增加 HUD 的值.

`on_min_value` 是一个特殊的触发器, 当 HUD 的值达到其最小值时, 会使该触发器运行.

每一个触发器都有特定的规则列表，来告诉 ItemsAdder 应该何时、如何更改 HUD 的数值.

## 规则

`triggers` 有一些特定的规则，并且它们不适用于每个触发器，因此请参阅此列表：

### `decrement` 触发器

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
（触发器的数值都可以自定义为你想要的数值）.\
* `generic_over_time` 当玩家处于环境光照为 0-13 的环境中（说明玩家处于结构建筑内）每 30000 ticks，玩家的HUD数值增加 0.5
* `biome_over_time` 当玩家处于环境光照为 14-15 的环境中（说明玩家处于野外，并且会检查生物群系是否为 `DESERT（沙漠）`.），每 30000 ticks，玩家的 HUD 数值增加 0.5
* `food_level_change` 当玩家饥饿值减少时 HUD 数值减少 0.1

### `increment` 触发器

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
（触发器的数值都可以自定义为你想要的数值）.\
* `generic_over_time` 当玩家处于环境光照为 0-13 的环境中（说明玩家处于结构建筑内）每 30000 ticks，玩家的HUD数值增加0.5
* `biome_over_time` 当玩家处于环境光照为 14-15 的环境中（说明玩家处于野外，并且会检查生物群系是否为 `DESERT（沙漠）`.），每 30000 ticks，玩家的HUD数值增加 0.5
* `food_level_change` 当玩家恢复饥饿值时为其减少 10 的 HUD 数值（玩家食用食物之后）
* `player_respawn` 当玩家死亡后重生时为其增加 10 HUD 数值（这样子有助于玩家重生之后将口渴值恢复至满值）

### `on_min_value` 触发器

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

* `damage_player` 每 100 ticks 对玩家造成 0.5 点伤害.
* `potion_effect` 每 100 ticks 给予玩家持续 100 ticks 的缓慢 I 的效果(如上所示, 意味着直到玩家的 HUD 值以某种方式增加之前, 将获得无限缓慢效果).
