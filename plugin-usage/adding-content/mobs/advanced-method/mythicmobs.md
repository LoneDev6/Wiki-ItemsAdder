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

In this example I'm changing the **Mythicmobs** mob skin to a `ninja_skeleton` skin.

```yaml
customentity{model=MODEL NAME} @self ~onSpawn
```

## Animations

As you can see I also added some Skills to replace the mob animation dynamically.\
`{play=attack}` is used to make the attack animation play, in this case when the entity attacks.

\
`{walk=b_walk}` is used to replace the mob walk animation `b_walk` which is an "angry" walk animation, because the mob has just attacked another entity and has a target.

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

Change a bone color programmatically

```
- bone{name=BONE;color=COLOR} TARGETER ~EVENT
```

默认颜色 (white): `16777215`\
``[拾色器](https://minecraftcommand.science/armor-color)

示例: 更改自定义实体受击时显示的颜色

```
- bone{name=leftLeg;color=16711790} @self ~onDamaged
```

### Enchant glint

Show the enchant effect on a bone programmatically

```
- bone{name=BONE;enchant=TRUE/FALSE} TARGETER ~EVENT
```

Example: show the enchant effect on a bone when the custom entity is damaged

```
- bone{name=leftLeg;enchant=true} @self ~onDamaged
```

### Mounting

```
- mountentity{bone=BONE;locked=TRUE/FALSE;control=TRUE/FALSE} TARGETER ~EVENT
```

Example: mounting a custom entity on right click, disable SHIFT to dismount (not working on < 1.16 clients) and disable entity control with WASD.

```
- mountentity{bone=mountbone;locked=true;control=false} @trigger ~onInteract
```

{% hint style="warning" %}
Warning: if you want to manually handle mounts like this you have to set this property in the **ItemAdder** configuration of your custom entity:

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

Removing passengers from some mount bones

```
- dismountentity{bones=BONE1,BONE2,BONE3} TARGETER ~EVENT
```

Removing passengers from a single mount bone

```
- dismountentity{bones=BONE1} TARGETER ~EVENT
```

Removing passengers from all the mount bones

```
- dismountentity{all=true} TARGETER ~EVENT
```

Examples:

```
- dismountentity{bones=mount1,mount2} @self ~onDamaged
- dismountentity{all=true} @self ~onDamaged
```

### Bone Targeter

Bone targeter returns the location of the specified bone.

```
@bone{bone=BONE}
```

Example: play a particle each 3 ticks on the bone center.

```
- effect:particles{vd=50;p=end_rod;amount=10;speed=0;hS=0.2;vS=0.2;repeat=270;repeatInterval=1} @bone{bone=rightArm} ~onTimer:3
```

{% embed url="https://youtu.be/LYCWCtmCzLc" %}

### 最终效果

![](../../../../.gitbook/assets/ezgif.com-gif-maker\(1\).webp)
