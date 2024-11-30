# 使用 ItemsAdder

## 使用 ItemsAdder 自然生成怪物

要自然生成怪物，你需要设置 `replace_mobs_spawn` 属性。

这是一个名为 **Soul** 的自定义怪物的示例。\
如你所见，我将其设置为一个普通物品，但具有一种特殊的[行为](../../../item-properties/behaviours.md)，名为 **mob**。

\
此示例配置告诉 ItemsAdder 以 20% 的 `几率` 在 `午夜` 并且仅在洞穴中（`max_sky_light: 0`）替换任何自然生成的 `ZOMBIE`。

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

你可以创建任意多的替换规则，例如，如果你想同时替换 `ZOMBIE` 和 `SKELETON`，你可以创建第二个规则

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

你可以决定是**替换**怪物**还是生成**自定义怪物**而不替换原始怪物**。\
你需要使用 `spawn_another` 属性。

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
