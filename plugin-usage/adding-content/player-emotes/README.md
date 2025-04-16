---
description: Adding animated player emotes
icon: person-walking
---

# Player Emotes

{% hint style="warning" %}
This method requires **Minecraft 1.17+ clients.**\
**Old clients cannot see them, it's a limitation of the game itself!**
{% endhint %}

{% embed url="https://www.youtube.com/watch?v=posxlbudF8I" %}

### Main features

* [Blockbench](https://www.blockbench.net/) extension to animate the Minecraft player model
* Completely Async, no TPS drops
* Optimized for big servers
* Play sounds and particles in animations
* Shows player hands and helmet equipment

## Limitations

* Won't show the player armor equipment, only mainhand, offhand and helmet.
* Works only on Minecraft 1.17+
* Shaders mods (_**Optifine**_, _**Iris**_) can cause rendering problems, [read more here](../../../faq/broken-emote-textures.md).
* Placed heads won't be shown correctly in some cases, [read more here](../../../faq/placed-heads-texture-glitched.md).

## Installing the Blockbench extension

{% hint style="warning" %}
**Before continuing:**

* Make sure you're running **Blockbench 4.7.4** or **greater**
* Make sure you're running the latest ItemsAdder and latest ItemsAdder Blockbench extension
{% endhint %}

[Download Blockbench](https://www.blockbench.net/) (don't use the web app).

![](<../../../.gitbook/assets/image (131).png>)

\
[Download](https://github.com/LoneDev6/itemsadder-entity/releases) the extension file.

<figure><img src="../../../.gitbook/assets/ia-entities-download-js.png" alt=""><figcaption></figcaption></figure>

Then open **Blockbench** and click on File -> Plugins.

![](<../../../.gitbook/assets/image (183).png>)

Click on the icon to load plugins from file, then select the file `iaentitymodel.js`.

![](<../../../.gitbook/assets/image (184).png>)

Press OK

![](<../../../.gitbook/assets/image (152).png>)

## Enabling emotes

Open `config.yml` of ItemsAdder and enable these two options, then run `/iazip` command.

{% code title="config.yml" %}
```yaml
entities:
  custom-entitites:
    enabled: true
    emotes: true
```
{% endcode %}

## Opening the animations editor

Create a new "`ItemsAdder Entity Model`"

You can create as many as animations files you want (**ItemsAdder 3.2.1+**).

<figure><img src="../../../.gitbook/assets/ia-entities-new.png" alt=""><figcaption></figcaption></figure>

Decide if you want to create an emotes file with examples or a blank emotes file.

<figure><img src="../../../.gitbook/assets/ia-entities-new2.png" alt=""><figcaption></figcaption></figure>

Decide a name for your emotes pack.

<figure><img src="../../../.gitbook/assets/ia-entities-new3.png" alt=""><figcaption></figcaption></figure>

You can notice a lot of example animations on the left.

![](<../../../.gitbook/assets/image (180).png>)

Delete all the emotes and edit/rename the ones you want. \
They are useful only as base for your new emotes, to have an example to learn from.

![](<../../../.gitbook/assets/image (161).png>)

Now create a new animation (emote) and save your `.iaentitymodel` project file into this folder (change `my_emotes` to your namespace, this one is an example):\
`ItemsAdder/contents/my_emotes/resourcepack/`

![](<../../../.gitbook/assets/image (205).png>)

Then continue following the tutorial to know how to export the emotes into ItemsAdder.

### Apply the changes to ItemsAdder

Click on the **ItemsAdder** tab and press **Export**.

![](<../../../.gitbook/assets/image (60).png>)

You should get a success message.

![](<../../../.gitbook/assets/image (66).png>)

{% hint style="success" %}
If you didn't add any custom model into your emote there is <mark style="color:green;">no need</mark> to use `/iazip`!\
Use the command `/iareload` to load the new animation in the game.
{% endhint %}

## Playing the animations

Use the emote command: `/iaemote <emote> [player]` or `/emote <emote> [player]`

## Emote permission

Use the `/iaemote` command: `ia.user.iaemote`

Use an emote: `ia.user.iaemote.use.<emote>`\
Example: `ia.user.iaemote.use.yes`

### More info about permissions

{% content-ref url="../../permissions.md" %}
[permissions.md](../../permissions.md)
{% endcontent-ref %}

## Adding custom models into emotes

### Showcase of some examples

{% embed url="https://youtu.be/VnFNzmhAVIM" %}

{% embed url="https://youtu.be/aP5Jz9OW208" fullWidth="false" %}

### Here you can download an example project:

{% embed url="https://raw.githubusercontent.com/LoneDev6/SpigotUtilities/master/ItemsAdder/various_files/example_advanced_emotes.iaentitymodel" %}

You can add custom models to your emotes, for example: items, monsters, furniture, animated effects.

### Important

{% hint style="warning" %}
This requires ItemsAdder 3.5.0 or greater.

* DO NOT delete any built-in player bone.
* DO NOT resize any built-in player bone, it simply won't work ingame.
* Edit built-in player bones only in the animation view (rotate, move).
* You can hide the built-in player bones using scale to `0,0,0`. Set to `1,1,1` to show them again.
{% endhint %}

### Different type of emotes

* `.player_advanced_animations` file format is now used to identify player animations which also add custom models to the emote.
* `.player_animations` are the player animations which don't add any custom model but will be loaded into the default player model.

In order to decide that you have to set this option in the **Blockbench** extension settings.

[![image](../../../.gitbook/assets/emotes_advanced_1.png)](https://user-images.githubusercontent.com/27242001/244145963-c9ca9a77-bb79-4804-92e4-8708eac41517.png)

<figure><img src="../../../.gitbook/assets/emotes_advanced_2.png" alt=""><figcaption></figcaption></figure>

### Importing elements into the scene

You can import any `.bbmodel` into the scene and use it in your animation.\
You can also import extruded textures to show items dynamically.

<figure><img src="../../../.gitbook/assets/emotes_advanced_3.png" alt=""><figcaption></figcaption></figure>

### Hiding unused elements in other animations of the game `.iaentitymodel` emotes file

1. select the animation
2. select the element you want to hide for a particular animation
3. move to the first frame of the animation, using the timeline
4. create a new scale key, make sure to set it to the first keyframe
5. set scale to 0

Now your model won't be shown for this particular animation.\
You can show/hide it in the middle of the animation just by doing the same thing but setting scale to 1.

<figure><img src="../../../.gitbook/assets/emotes_advanced_4.png" alt=""><figcaption></figcaption></figure>
