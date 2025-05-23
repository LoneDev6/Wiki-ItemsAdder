---
description: New advanced method to create custom mobs/entities
---

# Entity creation

{% hint style="warning" %}
Do not abuse the spawning of these mobs.\
The plugin is very optimized but it can cause lag if you are crazy enough to spawn 600+ entities in front of a player.
{% endhint %}

![](../../../../.gitbook/assets/ezgif.com-gif-maker.webp)

{% embed url="https://youtu.be/cQpIqExVpR0" %}
Advanced animation features
{% endembed %}

### Main features

* [Blockbench](https://www.blockbench.net/) extension to convert models
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
* MythicMobs compatibility
* Citizens compatibility

### Limitations

* Head bone rotation works only if the mob head is not too far from the center of the body
* Pressing SHIFT on flying mobs to move down works only on 1.15, 1.17 and 1.18 clients as 1.16 clients have this bug: [https://bugs.mojang.com/browse/MC-202202](https://bugs.mojang.com/browse/MC-202202) .\
  1.16 clients will see players flying if they press SHIFT while on a flying entity while they should still be riding the entity.
* This plugin uses multiple entities to create the animation. \
  Network delay can cause slight animation glitches. \
  It can cause a little lag on servers if you spawn too many entities around players and if your models have too many bones.\
  (NOTE: this plugin is highly optimized so you won't get lag if your server is not a potato)
* Hitbox of Citizens NPCs can't be changed for now, it's a Citizens limitation &#x20;

## Installing the Blockbench extension

{% hint style="warning" %}
**Before continuing:**

* Make sure you're running **Blockbench 4.1.5** or **greater**
* Make sure you're running the latest ItemsAdder and latest ItemsAdder Blockbench extension
{% endhint %}

[Download Blockbench](https://www.blockbench.net/) (don't use the web app).

![](<../../../../.gitbook/assets/image (131).png>)

Install the official extension [from here](https://github.com/LoneDev6/itemsadder-entity/releases/tag/1.2.6).

<figure><img src="../../../../.gitbook/assets/image (249).png" alt=""><figcaption></figcaption></figure>

## Converting the model

{% hint style="danger" %}
Remember to make a <mark style="color:red;">**backup**</mark> of your `.bbmodel` file before using this tool!
{% endhint %}

Open your `.bbmodel` project with Blockbench, then click on File -> Convert Project

![](<../../../../.gitbook/assets/image (215).png>)

![](<../../../../.gitbook/assets/image (58).png>)

Select "**ItemsAdder Entity Model**" in the **Format** setting, then press **Confirm**.\
Now save the new converted model file in a new folder where you will put only this file.

You will have something like that

![](<../../../../.gitbook/assets/image (182).png>)

### Saving the project

Now create a new folder inside `ItemsAdder/contents/`, it's your namespace folder. For example mine is `custom`, so the path is `ItemsAdder/contents/custom/`.

Save the project file `.iaentitymodel` into your ItemsAdder namespace folder, in this example into `contents/custom/`.

### Configuring the model

Now you can configure your model based on your preferences. The ItemsAdder extension automatically decided some settings for you but you might need to change them.\
Click on the **ItemsAdder** tab and press **Settings**.

![](<../../../../.gitbook/assets/image (220).png>)

Here you have to decide a namespace for your custom entities.\
The default one is `custom`, but you should decide your own, for example `my_entities`, `hell_mobs`, `npcs`...

![](<../../../../.gitbook/assets/image (69).png>)

The other thing you might need to change is the "**Model Scaling Mode**":

* Max Model size provides 7x7x7 block wide models but limits scaling to shrinking only.
* Max Scaling range provides shrinking and growing up to 3.125x in size, but limits the maximum model size to 3x3x3 blocks

Change "**Max Model Size**" only if you have animated the size of some bones.

![](<../../../../.gitbook/assets/image (170).png>)

### Export the model

Click on the **ItemsAdder** tab and press **Export**.

![](<../../../../.gitbook/assets/image (179).png>)

You should get a success message.

![](<../../../../.gitbook/assets/image (66).png>)

### Creating the ingame entity configuration

As you can see the extension created a file automatically, called `custom_entity_NAME.yml`. It will create it only on the first export.

You can customize it with more properties if needed.

{% code title="barman_robot.yml" %}
```yaml
info:
  namespace: custom
entities:
  barman_robot:
    display_name: "Barman Robot"
    type: ZOMBIE
    model_folder: entity/barman_robot
    silent: true
    can_sun_burn: false
    speed:
      movement: 1
      flying: 0
    max_health: 20
      
```
{% endcode %}

In this example my custom entity will use a ZOMBIE as base entity for its AI.\
You can use any living entity as base entity, depending on your needs.

### Summoning the entity

Use the summon command: `/iaentity summon <entity>`

## Notes

{% hint style="info" %}
Do not create too many bones, keep the model simple, remember this is a blocky pixelated game, use [its style](broken-reference/).
{% endhint %}
