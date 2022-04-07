---
description: Custom 3D models for Mythicmobs mobs
---

# Mythicmobs

## Reskinning a Mythicmob mob

You can use a custom model as skin for any Mythicmob mob.

{% hint style="success" %}
This plugin doesn't require Mythicmobs to work, but some servers might need to use it to create custom bosses and similar.
{% endhint %}

### Changing the model

Create a new Mythicmobs mob configuration file in this path:   `plugins/MythicMobs/Mobs/ninja_skeleton.yml`\
``(you can decide the filename).

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

In this example I'm changing the Mythicmobs mob skin to a ninja\_skeleton skin.

### Animations

As you can see I also added some Skills to replace the mob animation dynamically.

`{play=attack}` is used to make the attack animation play, in this case when the entity attacks.

\
`{walk=b_walk}` is used to replace the mob walk animation with another one, in this case `b_walk` which is an "angry" walk animation, because the mob has just attacked someone and has a target.

### Skills

* `customentity{model=custom:ninja_skeleton}` Change the current model
* `customentity{idle=ANIMATION}` To change the idle animation
* `customentity{walk=ANIMATION}` To change the walk animation
* `customentity{attack=ANIMATION}` To change the attack animation
* `customentity{death=ANIMATION}` To change the death animation
* `customentity{play=ANIMATION}` To play an animation right now
* `customentity{stop=ANIMATION}` To stop the current animation

### Done

![](../../../../.gitbook/assets/ezgif.com-gif-maker\(1\).webp)
