---
description: Mythicmobs 怪物的自定义 3D 模型
---

# Mythicmobs

## 重新皮肤化 Mythicmob 怪物

你可以为任何 Mythicmob 怪物使用自定义模型作为皮肤。

{% hint style="success" %}
这个插件不需要 Mythicmobs 才能工作，但有些服务器可能需要使用它来创建自定义 Boss 和类似的东西。
{% endhint %}

{% hint style="danger" %}
这需要 **ItemsAdder 3.2.1-beta1** 或更高版本
{% endhint %}

## 更改模型

在此路径中创建一个新的 **Mythicmobs** 怪物配置文件：`plugins/MythicMobs/Mobs/ninja_skeleton.yml`（你可以决定文件名）。

{% hint style="warning" %}
不要使用 `PLAYER` 作为类型，它会导致头部/身体旋转问题。
{% endhint %}

{% code title="ninja_skeleton.yml" %}
```yaml
ninja_skeleton:
  Type: ZOMBIE
  Display: '&aNinja Skeleton'
  Health: 10
  Damage: 2
  Options:
    MovementSpeed: 0
    Silent: true
  Skills:
  - customentity{model=custom:ninja_skeleton} @self ~onSpawn
  - customentity{play=attack} @self ~onAttack
  - customentity{walk=b_walk} @self ~onAttack
```
{% endcode %}

在这个例子中，我将 **Mythicmobs** 怪物的皮肤更改为 `ninja_skeleton` 皮肤。

```yaml
customentity{model=MODEL NAME} @self ~onSpawn
```

## 动画

如你所见，我还添加了一些技能来动态替换怪物动画。\
`{play=attack}`用于在实体攻击时播放攻击动画。

\
`{walk=b_walk}`用于替换怪物的行走动画`b_walk`，这是一种“愤怒”的行走动画，因为怪物刚刚攻击了另一个实体并有了目标。

### 动画

* `customentity{idle=ANIMATION}` 更改空闲动画
* `customentity{walk=ANIMATION}` 更改行走动画
* `customentity{attack=ANIMATION}` 更改攻击动画
* `customentity{death=ANIMATION}` 更改死亡动画
* `customentity{play=ANIMATION}` 立即播放动画
* `customentity{stop=ANIMATION}` 停止当前动画

## 骨骼

### 可见性

以编程方式隐藏/显示骨骼

```
- bone{name=BONE;visible=TRUE/FALSE} TARGETER ~EVENT
```

示例：在特定事件中隐藏腿骨

```
- bone{name=leftLeg;visible=false} @self ~onDamaged
```

### 颜色

以编程方式更改骨骼颜色

```
- bone{name=BONE;color=COLOR} TARGETER ~EVENT
```

默认颜色（白色）：`16777215`\
[颜色选择器](https://minecraftcommand.science/armor-color)

示例：在自定义实体受伤时更改骨骼颜色

```
- bone{name=leftLeg;color=16711790} @self ~onDamaged
```

### 附魔光效

以编程方式在骨骼上显示附魔效果

```
- bone{name=BONE;enchant=TRUE/FALSE} TARGETER ~EVENT
```

示例：在自定义实体受伤时在骨骼上显示附魔效果

```
- bone{name=leftLeg;enchant=true} @self ~onDamaged
```

### 将之前的属性应用于每个骨骼

```
- bone{all=true;PROPERTY=VALUE} TARGETER ~EVENT
```

示例：在自定义实体受伤时隐藏每个骨骼

```
- bone{all=true;visible=false} @self ~onDamaged
```

## 骑乘骨骼

```
- mountentity{bone=BONE;locked=TRUE/FALSE;control=TRUE/FALSE} TARGETER ~EVENT
```

示例：右键单击时骑乘自定义实体，禁用 SHIFT 下马（在 <1.16 客户端上不起作用）并禁用 WASD 控制实体。

```
- mountentity{bone=mountbone;locked=true;control=false} @trigger ~onInteract
```

{% hint style="warning" %}
警告：如果你想手动处理骑乘，如此你必须在 **ItemAdder** 配置中设置此属性：

`mount_on_interact: false`

```yaml
info:
  namespace: custom
entities:
  testmm:
    display_name: "testmm"
    type: ZOMBIE
    model_folder: entity/testmm
    speed:
      movement: 0.25
      flying: 0.25
    mount_on_interact: false
```
{% endhint %}

### 下马

从某些骑乘骨骼中移除乘客

```
- dismountentity{bones=BONE1,BONE2,BONE3} TARGETER ~EVENT
```

从单个骑乘骨骼中移除乘客

```
- dismountentity{bones=BONE1} TARGETER ~EVENT
```

从所有骑乘骨骼中移除乘客

```
- dismountentity{all=true} TARGETER ~EVENT
```

示例：

```
- dismountentity{bones=mount1,mount2} @self ~onDamaged
- dismountentity{all=true} @self ~onDamaged
```

### 骨骼搜寻器

骨骼搜寻器返回指定骨骼的位置。

```
@bone{bone=BONE}
```

示例：每 3 刻在骨骼中心播放粒子效果。

```
- effect:particles{vd=50;p=end_rod;amount=10;speed=0;hS=0.2;vS=0.2;repeat=270;repeatInterval=1} @bone{bone=rightArm} ~onTimer:3
```

{% embed url="https://youtu.be/LYCWCtmCzLc" %}

### 最终结果

![](broken-reference)
