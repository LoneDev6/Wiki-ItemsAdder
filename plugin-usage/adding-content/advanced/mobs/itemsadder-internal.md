# ItemsAdder 内创建

## 创建你第一个怪物

你需要在你的[命名空间](../../beginners/basic-concepts/namespace.md)文件夹下创建一个 .yml 文件 \(查看[其他教程](../../beginners/creating-your-namespace.md)\).

{% hint style="info" %}
考虑使用[官方在线工具](../../../../files-editor.md)来编辑 ItemsAdder 文件。借助自动补全（ctrl+空格），可以避免一些错误以让你更轻松。
{% endhint %}

这是一个名为 Soul 的自定义怪物示例。
如你所见，我像一个正常物品一样进行了设置，只是添加了一个叫做 **mob** 的特殊[行为](../item-properties/behaviours.md)。

```yaml
info:
  namespace: creaturesplus
items:
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
        y_offset: 0
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

该行为让 ItemsAdder 以 20% 的`几率`在`午夜`替换任意在洞穴（`max_sky_light: 0`）中自然生成的 `ZOMBIE`。
该怪物头颅的旋转也有所限制（仅在 Y 轴），这会避免怪物在高处看见玩家时变得滑稽。

当该怪物被玩家击伤时，会显示 `hit_color` 的颜色。
你可以在这些网站查看有效颜色：
[https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Color.html](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Color.html)  
[https://minecraftcommand.science/armor-color](https://minecraftcommand.science/armor-color)  
[https://misode.github.io/worldgen/biome/](https://misode.github.io/worldgen/biome/)\
\(使用其中一个颜色选择器并从右侧复制\)

{% hint style="info" %}
注意：我**跳过**了 `resource` 的 `material` 属性，因为对**怪物**来说**不需要**，ItemsAdder 会自动解决。
{% endhint %}

### 动画

你可能注意到有两个额外属性：`attack` 与 `walk` **动画**.  
这些实际上是你必须像这样创建的项目：

```yaml
  soul_walking:
    display_name: soul_walking
    permission: creaturesplus
    show_in_ia_gui: false
    resource:
      generate: false
      model_path: "mob/soul/walking"
    behaviours:
      mob_animation: true
  soul_attack:
    display_name: soul_attack
    permission: creaturesplus
    show_in_ia_gui: false
    resource:
      generate: false
      model_path: "mob/soul/attack"
    behaviours:
      mob_animation: true
```

## 最终结果

```yaml
info:
  namespace: creaturesplus
items:
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
  soul_walking:
    display_name: soul_walking
    permission: creaturesplus
    show_in_ia_gui: false
    resource:
      generate: false
      model_path: "mob/soul/walking"
    behaviours:
      mob_animation: true
  soul_attack:
    display_name: soul_attack
    permission: creaturesplus
    show_in_ia_gui: false
    resource:
      generate: false
      model_path: "mob/soul/attack"
    behaviours:
      mob_animation: true
```

![](../../../../.gitbook/assets/image%20%2816%29.png)

## 自然生成怪物

为了自然生成该怪物，你需要设置 `replace_mobs_spawn` 属性。

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
```

你可以创建尽可能多的替换规则，例如你想要同时替换 `ZOMBIE` 与 `SKELETON`，你可以创建第二条规则。

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

你可以决定是否**替换**怪物或**生成而不替换原有怪物**。\
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

