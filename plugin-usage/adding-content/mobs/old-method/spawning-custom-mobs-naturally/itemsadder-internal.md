# ItemsAdder 内部

## 使用 ItemsAdder 自然生成怪物

您需要设置 `replace_mobs_spawn` 属性, 让怪物自然地生成.

以下是一个被命名为 **Soul** 的自定义怪物示例.\
正如您所见, 我将其设置为一个普通物品; 但不同的是, 它还具有一个命名为 **mob** 的 [behaviour（行为） ](../../../item-properties/behaviours.md) .

\
此示例配置会让 ItemsAdder 在 `MIDNIGHT（午夜）` 时分的洞穴环境 (`max_sky_light: 0`) 内, 以 20% 的 `概率` 替换所有自然生成 `ZOMBIE（僵尸）`.

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

您可以创建任意数量的 replace（替换）规则, 例如: 您想同时 `ZOMBIE（僵尸）` 和 `SKELETON（骷髅）`, 您就可以创建第二条规则

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

您可以自行决定时 **替换** 怪物实体 **或是** 不替换 **原版怪物** 的情况下 **生成** 怪物实体.\
对此, 您需要使用 `spawn_another` 属性.

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
