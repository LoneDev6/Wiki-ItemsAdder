---
description: Custom 3D models for Mythicmobs mobs
---

# Mythicmobs

## Reskinning a Mythicmob mob

You can use a custom player skin for any Mythicmob mob.

{% hint style="success" %}
This plugin doesn't require Mythicmobs to work, but some servers might need to use it to create custom bosses and similar.
{% endhint %}

### Changing the model

Create a new Mythicmobs mob configuration file in this path: `plugins/MythicMobs/Mobs/custom_player.yml`\
\`\`(you can decide the filename).

{% hint style="warning" %}
Do not use `PLAYER` as type, it causes issues with head/body rotation.
{% endhint %}

{% code title="custom_player.yml" %}
```yaml
custom_player:
  Type: ZOMBIE
  Display: '&aCustom Player'
  Health: 10
  Damage: 2
  Options:
    MovementSpeed: 0
    Silent: true
  Skills:
  - customentity{playerskin=https://minesk.in/5f1e7ff6409e428bb500cc9315bf7ffb} @self ~onSpawn
```
{% endcode %}

In this example I'm changing the Mythicmobs mob skin to **Notch**'s skin.

![](<../../../../.gitbook/assets/image (111).png>)

### Custom skin

{% content-ref url="../../mobs/custom-skin.md" %}
[custom-skin.md](../../mobs/custom-skin.md)
{% endcontent-ref %}

### Skills

* `customentity{playerskin=SKIN}` Change the player skin
* `customentity{idle=ANIMATION}` To change the idle animation
* `customentity{walk=ANIMATION}` To change the walk animation
* `customentity{attack=ANIMATION}` To change the attack animation
* `customentity{death=ANIMATION}` To change the death animation
* `customentity{play=ANIMATION}` To play an animation right now
* `customentity{stop=ANIMATION}` To stop the current animation

### Done

![](<../../../../.gitbook/assets/ezgif.com-gif-maker (1).webp>)
