# ItemsAdder internal

## 使用ItemsAdder自然生成怪物

如果你想让怪物自然生成的话,你一定要添加`replace_mobs_spawn`属性.

这是一个自定义怪物名字Soul[灵魂]的栗子   
如你们所见.我把它设置成一个普通的物品项目,但是这里却有一个特别的[功能](../item-properties/behaviours.md)叫为**mob[怪物]**.

  
这个功能在告诉ItemsAdder以20%`chance[几率]`替换任何自然生成的`ZOMBIE[僵尸]`,在`MIDNIGHT[夜晚]`并且只能在洞穴中进行替换\(`max_sky_light: 0`\).  

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

你可以根据你的需要来添加多条替换规则,比如你想同时替换`ZOMBIE[僵尸]`和`SKELETON[骷髅]`.你可以添加第二条替换规则.

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

你可以决定**替换原版怪物**还是在**不替换原版怪物**的情况下生成**自定义怪物**
你可以使用`spawn_another`属性.

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

