---
description: How to install the plugin
order: 900
icon: gear
---

# First install

{% hint style="info" %}
**You should do** this first configuration **on** your **test server** on your PC to **avoid mistakes** and too many restarts.. players don't like when server is down ;)\
You can upload files to your real server after you finished here.
{% endhint %}

{% hint style="danger" %}
You **should** complete ALL installation steps. Not only first.
{% endhint %}

## Step 1 - installing the plugin and APIs

* install [**ProtocolLib**](https://www.spigotmc.org/resources/protocollib.1997/)
* install [**LoneLibs**](https://www.spigotmc.org/resources/lonelibs.75974/)
* install [**LightAPI**](https://www.spigotmc.org/resources/lightapi-fork.48247/)** (**⚠️**do not install it if you're on 1.17.1 Paper/Tuinity/Purpur**⚠️ [It doesn't work for now](https://www.spigotmc.org/threads/lightapi-fork.278321/page-10#post-4237787).**)**
* (optional) install [**Lib's Disguises**](https://www.spigotmc.org/resources/libs-disguises-free.81/) if you plan to create custom mobs in the future.
* put **ItemsAdder.jar** file inside your plugins folder
* start the server
* let ItemsAdder finish loading **everything**

First step is done. Now you must complete step 2 to configure the resourcepack (don't worry it's not very hard).

## Step 2 - resourcepack first installation

#### Decide the resourcepack hosting method: 

{% content-ref url="plugin-usage/resourcepack-hosting/" %}
[resourcepack-hosting](plugin-usage/resourcepack-hosting/)
{% endcontent-ref %}

## Optional steps

### Removing default items

{% hint style="info" %}
If you don't care about my default stuff and you only want to make your own items, blocks and other things it's easy!
{% endhint %}

### Avoid glitched blocks (if you have Purpur installed)

{% content-ref url="faq/blocks-minerals-issues/custom-blocks-glitch-texture/avoid-glitched-blocks.md" %}
[avoid-glitched-blocks.md](faq/blocks-minerals-issues/custom-blocks-glitch-texture/avoid-glitched-blocks.md)
{% endcontent-ref %}
