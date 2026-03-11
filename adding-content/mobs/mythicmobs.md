---
description: Custom 3D models for Mythicmobs mobs
icon: up-right-from-square
---

# MythicMobs

## Reskinning a Mythicmob mob

You can use a custom model as skin for any Mythicmob mob.

{% hint style="success" %}
This plugin doesn't require Mythicmobs to work, but some servers might want to use it.
{% endhint %}

## Changing the model

Create a new **Mythicmobs** mob configuration file in this path:   `plugins/MythicMobs/Mobs/ninja_skeleton.yml`\
(you can decide the filename).

{% hint style="warning" %}
Do not use `PLAYER` as type, it causes issues with head/body rotation.
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

### Animation

* `customentity{idle=ANIMATION}` To change the idle animation
* `customentity{walk=ANIMATION}` To change the walk animation
* `customentity{attack=ANIMATION}` To change the attack animation
* `customentity{death=ANIMATION}` To change the death animation
* `customentity{play=ANIMATION}` To play an animation right now
* `customentity{stop=ANIMATION}` To stop the current animation

## Bones

### Visibility

Hide/show a bone programmatically

```
- bone{name=BONE;visible=TRUE/FALSE} TARGETER ~EVENT
```

Example: hiding a leg bone on a particular event

```
- bone{name=leftLeg;visible=false} @self ~onDamaged
```

### Color

Change a bone color programmatically

```
- bone{name=BONE;color=COLOR} TARGETER ~EVENT
```

Default color (white): `16777215`\
[Color picker](https://minecraftcommand.science/armor-color)

Example: changing color of a bone when the custom entity is damaged

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

### Apply the previous properties to every bone

```
- bone{all=true;PROPERTY=VALUE} TARGETER ~EVENT
```

Example: hide every bone when the custom entity is damaged

```
- bone{all=true;visible=false} @self ~onDamaged
```

## Mounting a bone

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
