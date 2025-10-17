# Introduction

## Emotes / Gestures

Emotes allow you to express yourself with some particular player animations.\
They integrate perfectly with the game and look like an official update.

{% embed url="https://www.youtube.com/watch?v=posxlbudF8I" %}

## Method for 1.21.4+ clients

{% hint style="success" %}
Thanks so much to **Misieur** (**Thomas**) which helped me to implement this new method with his ideas 🩷
{% endhint %}

{% code title="config.yml" %}
```yaml
emotes:
  1_21_4_plus_modern_method: true
```
{% endcode %}

### Main features

* [Blockbench](https://www.blockbench.net/) extension to animate the Minecraft player model
* Completely Async, no TPS drops
* Optimized for big servers
* Play sounds and particles in animations
* Shows items in player hands and helmet
* Doesn't overwrite any vanilla shader
* Compatible with shader mods (Optifine, Iris, etc.)
* Supports slim arms
* Doesn't cause any issue with placed player heads (skulls)

### Limitations

* Requires Minecraft 1.21.4 or greater
* More info about emotes issues [here](../../../faq/emotes-issues.md)

## Method for 1.17 to 1.21.3 clients (old)

{% code title="config.yml" %}
```yaml
emotes:
  legacy_shaders: true
  1_21_5_to_1_21_9_shaders: true
```
{% endcode %}

### Main features

* [Blockbench](https://www.blockbench.net/) extension to animate the Minecraft player model
* Completely Async, no TPS drops
* Optimized for big servers
* Play sounds and particles in animations
* Shows items in player hands and helmet

### Limitations

* Won't show the player armor equipment, only mainhand, offhand and helmet.
* Works only on 1.17 to 1.21.3 clients
* More info about emotes issues [here](../../../faq/emotes-issues.md)

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
