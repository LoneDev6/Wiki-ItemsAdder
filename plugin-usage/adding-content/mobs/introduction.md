---
icon: info
---

# Introduction

{% embed url="https://youtu.be/cQpIqExVpR0" %}
Advanced animation features
{% endembed %}

{% embed url="https://www.youtube.com/watch?v=CdcK4cSlBgg" %}

### Main features

* [Blockbench](https://www.blockbench.net/) extension to convert models
* Protection
  * No one can edit your pack and resell it as the Blockbench project is not required to share your resource online
* Completely Async, no TPS drops
* Optimized for big servers
* Damage animation
* Fire animation when entity is on fire
* Animate size of bones
* Animate rotation of bones without angles limitations
* Multiple mount seats
* Play sounds and particles in animations
* Show entity hands equipment
* Custom hitbox
* Smooth movements
* [MythicMobs](mythicmobs.md) compatibility
* [Citizens](citizens.md) compatibility

### Limitations

* Hitbox of Citizens NPCs can't be changed for now, it's a Citizens limitation &#x20;

<details>

<summary>v3 limitations</summary>

* Head bone rotation works only if the mob head is not too far from the center of the body
* Pressing SHIFT on flying mobs to move down works only on 1.15, 1.17 and 1.18 clients as 1.16 clients have this bug: [https://bugs.mojang.com/browse/MC-202202](https://bugs.mojang.com/browse/MC-202202) .\
  1.16 clients will see players flying if they press SHIFT while on a flying entity while they should still be riding the entity.
* This plugin uses multiple entities to create the animation. \
  Network delay can cause slight animation glitches. \
  It can cause a little lag on servers if you spawn too many entities around players and if your models have too many bones.\
  (NOTE: this plugin is highly optimized so you won't get lag if your server is not a potato)

</details>

## Installing the Blockbench extension

{% hint style="warning" %}
**Before continuing:**

* Make sure you're running **Blockbench 4.1.5** or **greater**
* Make sure you're running the latest ItemsAdder and latest ItemsAdder Blockbench extension
{% endhint %}

[Download Blockbench](https://www.blockbench.net/) (don't use the web app).

![](<../../../.gitbook/assets/image (131).png>)

Download the [official extension](https://github.com/LoneDev6/itemsadder-entity/releases).

<figure><img src="../../../.gitbook/assets/image (249).png" alt=""><figcaption></figcaption></figure>
