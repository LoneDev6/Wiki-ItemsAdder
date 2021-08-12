# 配置

## 创建你的第一只怪物

### yml配置

你必须在创建一个内容有[namespace\[命名空间\]](https://github.com/LoneDev6/Wiki-ItemsAdder/tree/4edf485be30302572fd2cbcbb3873eb94e0dcbc7/plugin-usage/adding-content/advanced/beginners/basic-concepts/namespace.md)的文件\(查看[其他的教程](https://github.com/LoneDev6/Wiki-ItemsAdder/tree/4edf485be30302572fd2cbcbb3873eb94e0dcbc7/plugin-usage/adding-content/advanced/beginners/creating-your-namespace.md)来获得更多信息\).

{% hint style="info" %}
推荐使用[官方在线工具](../../../../../files-editor.md)来添加你的怪物/物品.  
它会使添加物品/怪物更容易,因为有自动补全功能.\(按CRTL+SPACE键\)可以减少写配置时错误.
{% endhint %}

这是一个自定义怪物名字Soul\[灵魂\]的栗子  
如你们所见.我把它设置成一个普通的物品,但是有一个特别的[功能](https://github.com/LoneDev6/Wiki-ItemsAdder/tree/4edf485be30302572fd2cbcbb3873eb94e0dcbc7/plugin-usage/adding-content/advanced/mobs/item-properties/behaviours.md)叫为**mob**.

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

怪物的头部旋转也将被锁定\(仅在Y轴上\),这将会避免怪物在较高的位置看着玩家会显得比较奇怪.

`hit_color`是怪物被玩家攻击时的颜色.  
你可以从这些网站里获得有用的颜色:  
[https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Color.html](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Color.html)  
[https://minecraftcommand.science/armor-color](https://minecraftcommand.science/armor-color)  
[https://misode.github.io/worldgen/biome/](https://misode.github.io/worldgen/biome/) \(使用其中一个颜色选择网站,并从右边复制数值.\)

{% hint style="info" %}
提醒: **怪物**不用写`物品`的使用`属性`,ItemsAdder将会自动处理.
{% endhint %}

### 动作

你可能会注意到这两个属性:`attack[攻击]`和`walk[行走]`**动作**.  
**mob\_animation**在告诉ItemsAdder,该项目是一个怪物的动作  
实际上,这些都是你必须创建的其他项目,就像这样:

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

