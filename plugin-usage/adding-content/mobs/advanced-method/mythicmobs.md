---
描述： 为 Mythicmobs 怪物使用自定义模型
---

# Mythicmobs

## 为 Mythicmobs 怪物使用自定义模型

你可以为 Mythicmobs 怪物使用自定义模型

{% hint style="success" %}
_Itemsadder 本身就可以创建自定义实体.所以该功能不需要 Mythicmobs 也能使用_.\
Mythicmobs 为可选前置，因为有的服务器可能需要该插件来创建自定义BOSS之类的怪物.

{% endhint %}

{% hint style="danger" %}
版本需求： **ItemsAdder 3.2.1-beta1+**
{% endhint %}

## 为 Mythicmobs 怪物 应用模型
在 `plugins/MythicMobs/Mobs/ninja_skeleton.yml`路径中创建一个新的 Mythicmobs 怪物配置\
``(文件名称自定).

{% hint style="warning" %}
不要使用 `PLAYER` 类型，否则会导致 头部/身体 旋转出现问题
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

在该示例中我将 **Mythicmobs** 怪物模型更换为 `ninja_skeleton` 

```yaml
customentity{model=MODEL NAME} @self ~onSpawn
```

## 动画

在该配置中，我为自定义实体添加了技能来替换怪物的动画.\
`{play=attack}` 播放动画（在该示例中为，当实体进行攻击时播放 `attack` 动画）

\
`{walk=b_walk}` 则会替换自定义实体的行走动画.\
（在该示例中为，当实体有一个攻击目标，行走时会播放 `b_walk` 动画)

### 技能动画

* `customentity{playerskin=SKIN}` 更改皮肤
* `customentity{idle=ANIMATION}` 静止时的动画
* `customentity{walk=ANIMATION}` 行走时的动画
* `customentity{attack=ANIMATION}` 攻击时播放的动画
* `customentity{death=ANIMATION}` 死亡时播放的动画
* `customentity{play=ANIMATION}` 播放自定义动画
* `customentity{stop=ANIMATION}` 停止播放动画

## 骨骼

### Visibility（是否可见）

显示/隐藏 骨骼

```
- bone{name=BONE;visible=TRUE/FALSE} TARGETER ~EVENT
```

示例：在特定事件中隐藏某个骨骼

```
- bone{name=leftLeg;visible=false} @self ~onDamaged
```

### Color

为模型骨骼着色

```
- bone{name=BONE;color=COLOR} TARGETER ~EVENT
```

默认颜色 (white): `16777215`\
``[拾色器](https://minecraftcommand.science/armor-color)

示例: 更改自定义实体受击时显示的颜色

```
- bone{name=leftLeg;color=16711790} @self ~onDamaged
```

### 附魔光效

为模型骨骼添加附魔光效

```
- bone{name=BONE;enchant=TRUE/FALSE} TARGETER ~EVENT
```

示例：当自定义实体受击时显示附魔效果在骨骼效果

```
- bone{name=leftLeg;enchant=true} @self ~onDamaged
```

### 实体骑乘

```
- mountentity{bone=BONE;locked=TRUE/FALSE;control=TRUE/FALSE} TARGETER ~EVENT
```

如下示例：右键点击自定义实体来骑乘它，禁用 SHIFT 键离开自定义实体（无法在低于 1.16 的客户端正常工作）以及禁用 WASD 方向键控制实体.

```
- mountentity{bone=mountbone;locked=true;control=false} @trigger ~onInteract
```

{% hint style="warning" %}
警告: 如果您想自行决定某个实体的触发骑乘方式.\
必须在自定义实体的 **ItemAdder** 配置中设置如下属性:

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

### Dismounting

从实体身上移除正坐在某个骨骼上、正在骑乘该实体的玩家（强制让其离开）（多人）

```
- dismountentity{bones=BONE1,BONE2,BONE3} TARGETER ~EVENT
```

从实体身上移除正坐在某个骨骼上、正在骑乘该实体的玩家（强制让其离开）（单人）

```
- dismountentity{bones=BONE1} TARGETER ~EVENT
```

移除所有正在骑乘该实体的玩家（强制让其离开）

```
- dismountentity{all=true} TARGETER ~EVENT
```

以下是个例子:

```
- dismountentity{bones=mount1,mount2} @self ~onDamaged
- dismountentity{all=true} @self ~onDamaged
```

### Bone Targeter

`Bone targeter` 会返回指定骨骼的位置, 如下所示.

```
@bone{bone=BONE}
```

Example: 在骨骼中心处每 3 ticks 播放一个粒子效果.

```
- effect:particles{vd=50;p=end_rod;amount=10;speed=0;hS=0.2;vS=0.2;repeat=270;repeatInterval=1} @bone{bone=rightArm} ~onTimer:3
```

{% embed url="https://youtu.be/LYCWCtmCzLc" %}

### 最终效果

![](../../../../.gitbook/assets/ezgif.com-gif-maker\(1\).webp)
