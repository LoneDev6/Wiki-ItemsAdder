# ItemsAdder 自定义怪物

## 创建你的第一个自定义怪物

在你的 [命名空间](../../beginners/basic-concepts/namespace.md)文件夹中新建一个 `.yml ` \(阅读 [命名空间指南] ](../../beginners/creating-your-namespace.md)获取更多信息\).

{% hint style="info" %}
建议使用 [官方文件编辑器](../../../../files-editor.md)来进行编辑，该编辑器具有自动补全功能，可以避免拼写错误等问题.
{% endhint %}

（一个名为 soul 的自定义怪物） 
从示例配置中，你可以发现自定义怪物仍是在`items:`分支下，但其中应用了 **mob**的 [behaviour ](../item-properties/behaviours.md) 行为属性

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

该配置中的 behaviour（行为属性），使 Itemsadder 有 `20%` 的几率在 `午夜` \(`max_sky_light: 0`\). 的洞穴中将自然生成的 `僵尸` 替换为 自定义怪物.
并且该怪物的头部旋转（仅锁定Y轴）将会被锁定，这样设置可以有效防止当怪物看向高处的玩家时不会那么蠢！

`hit_color` 是指怪物受到玩家伤害时显示的颜色 
你可以从下列的地址中获取可用的颜色：
<br>
[https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Color.html](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Color.html)  
[https://minecraftcommand.science/armor-color](https://minecraftcommand.science/armor-color)  
[https://misode.github.io/worldgen/biome/](https://misode.github.io/worldgen/biome/) \(选取一个颜色，并从右侧复制其颜色数值\)

{% hint style="info" %}
提醒：你可以发现在自定义的配置中忽略了`resource`下的`material`属性，Itemsadder 会自动处理 **自定义怪物** 的 **meterial** 属性
{% endhint %}

### 动画

你会发现还有 `attack` 和 `walk` 这两个 **动画** 属性.
你只需要像导入物品一样导入即可，如下配置：

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

## 完整配置

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

## 自定义怪物的自然生成

设置自定义怪物的自然生成只需要 设置 `replace_mobs_spawn` 属性

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

当然，你可以设置不止一种替换规则，例如：你想同时替换 `僵尸` 和 `骷髅`，你可以接着设置第二种规则，详情如下配置：

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

在使用 `spawn_another` 属性时，你可以决定 **替换原版怪物** 来生成自定义怪物 或 直接生成 **自定义怪物** 而不 **替换原版怪物**

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

