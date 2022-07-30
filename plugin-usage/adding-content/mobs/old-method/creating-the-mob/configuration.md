# 配置文件

## 创建您的第一个实体

### yml 配置文件

您需要在 [命名空间 ](../../../basic-concepts/namespace/)文件夹下创建一个 .yml 后缀的文件 (查看 [其他教程 ](../../../basic-concepts/namespace/creating-your-namespace.md)了解更多信息).

{% hint style="info" %}
考虑使用[ 官方在线工具](../../../../../files-editor.md) 来编辑 ItemsAdder 的文件. \
它具有自动补齐的功能 (按 CRTL+空格键) 以帮助您避免犯错.
{% endhint %}

在以下例子中, 我创建了一个名为 **Soul（灵魂）** 的自定义实体.\
正如您所见, 我将其设置为一个普通物品; 但不同的是, 它还具有一个命名为 **mob** 的 [behaviour（行为） ](../../../item-properties/behaviours.md) .

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

这个实体被 **锁定了头部旋转** (仅在 Y 轴上), 以避免当实体在更高处的位置看向玩家时会显得很愚蠢.

`hit_color` 是实体受到玩家攻击时所展现的颜色. \
您可以在以下网页找到原版颜色表:\
[https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Color.html](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Color.html)\
[https://minecraftcommand.science/armor-color](https://minecraftcommand.science/armor-color)\
[https://misode.github.io/worldgen/biome/](https://misode.github.io/worldgen/biome/) (使用其中一个颜色选择器并复制其右侧的值)

{% hint style="info" %}
注意: 我 **跳过了** `resource` 的 `material` 属性, 因为 **mobs** **并不需要这些属性**, ItemsAdder 会自动处理它的.
{% endhint %}

### 实体动画

您可能注意到了, 还有两个我在上面没有提到的属性: `attack（攻击）` 和 `walk（行走）` **动画**.\
**实体动画** 的 behaviors（行为）会告诉 ItemsAdder 这是一个实体的动画项目.\
如下所示, 这些应该是您必须创建的项目内容:

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
