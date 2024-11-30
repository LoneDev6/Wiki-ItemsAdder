# 配置

## 创建第一个怪物

### 配置

你需要在[命名空间](broken-reference)文件夹创建一个 .yml 文件([查看更多](broken-reference))。

{% hint style="info" %}
考虑使用[官方在线工具](../../../../files-editor.md)来编辑 ItemsAdder 文件。\
它具有自动完成功能（CRTL+空格），可以帮助你避免错误，使你更轻松。
{% endhint %}

这是一个名为 **Soul** 的自定义怪物的示例。\
如你所见，我将其设置为一个普通物品，但具有一个特殊的[行为](../../../item-properties/behaviours.md)，名为 **mob**。

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
```

这个生物的**头部旋转将被锁定**（仅在 Y 轴上），这将避免它在处于更高位置看玩家时看起来很滑稽。

`hit_color` 是该怪物被玩家击伤时显示的颜色。\
你可以从下述网络获取有效的颜色：\
[https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Color.html](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Color.html)\
[https://minecraftcommand.science/armor-color](https://minecraftcommand.science/armor-color)\
[https://misode.github.io/worldgen/biome/](https://misode.github.io/worldgen/biome/)\
(使用其中一个颜色选择器并复制右侧的值)

{% hint style="info" %}
注意：我**跳过**了 `resource` 的 `material` 属性，因为对于生物来说不需要，ItemsAdder 会自动处理。
{% endhint %}

### 动画

你可能注意到还有两个其他属性：`attack` 和 `walk` **动画**。\
`mob_animation` 行为告诉 ItemsAdder 该物品是一个生物动画。\
这些实际上是你必须像这样创建的其他物品：

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
