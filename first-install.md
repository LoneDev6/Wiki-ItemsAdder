---
description: How to install the plugin
---

# ⚙ First install

{% hint style="info" %}
**You should follow** this first configuration **on** your **test server** on your PC to **avoid mistakes** and too many restarts.. players don't like when the server is offline.\
You can upload files to your real server after you finished here.
{% endhint %}

{% hint style="danger" %}
**Make sure** that all of your plugins and server software are up to date.
{% endhint %}

## Step 1 - Installing the plugin and APIs

* install [**ProtocolLib**](https://ci.dmulloy2.net/job/ProtocolLib/lastSuccessfulBuild/)
* install [**LoneLibs**](https://www.spigotmc.org/resources/lonelibs.75974/)
* (optional) install **LightAPI** ([1.14, 1.15, 1.16](http://a.devs.beer/lightapi-old) | [1.17, 1.18](http://a.devs.beer/lightapi-new))
* put `ItemsAdder.jar` file inside your plugins folder
* start the server
* let ItemsAdder finish loading **everything**

First step is done.\
Now you must complete **step 2** to configure the resourcepack (don't worry it's not very hard).

## Step 2 - Resourcepack first installation

{% hint style="warning" %}
This step is important, the plugin <mark style="color:red;">**WILL NOT WORK,**</mark> if you won't complete this step.
{% endhint %}

Before using the plugin you have to decide the resourcepack hosting method. \
Click down here to decide an hosting method for the resourcepack (best method: `self-host`).

{% content-ref url="plugin-usage/resourcepack-hosting/" %}
[resourcepack-hosting](plugin-usage/resourcepack-hosting/)
{% endcontent-ref %}

## Step 3 - (optional) Add official ItemsAdder custom content

![](.gitbook/assets/items\_showcase\_gif.apng)

**ItemsAdder** comes with a lot of custom content already created for you.\
It's not automatically included in the downloaded plugin because some people might not want every item/feature automatically added into their server.

### Default pack

![](<.gitbook/assets/image (47).png>)

* Download the latest version of the **DefaultPack**: [DOWNLOAD](https://github.com/ItemsAdder/DefaultPack/releases/latest)
* Extract the content into the `ItemAdder` folder and overwrite the files if asked
* Run the `/iazip` command (and follow your [hosting method](plugin-usage/resourcepack-hosting/) if you're not using **self-host**).

### Other pack (optional)

![](<.gitbook/assets/image (50).png>)

* if you want you can download the **OtherPacks** which adds even more content: [DOWNLOAD](https://github.com/ItemsAdder/OtherPacks/releases/latest)
* extract the content into the `ItemAdder` folder and overwrite the files if asked
* run the `/iazip` command (and follow your [hosting method](plugin-usage/resourcepack-hosting/) if you're not using **self-host**).

If you're on 1.17 or lower you have to change the ores generation:

* Open these files and set `enabled: true`.
  * `contents\iaalchemy\configs\worlds_populators_old.yml`
  * `contents\iasurvival\ores\configs\worlds_populators_old.yml`
* Open these files and set `enabled: false`.
  * `contents\iaalchemy\configs\worlds_populators_1_18.yml`
  * `contents\iasurvival\ores\configs\worlds_populators_1_18.yml`

### Removing default items

{% content-ref url="faq/removing-default-stuff/" %}
[removing-default-stuff](faq/removing-default-stuff/)
{% endcontent-ref %}

### Avoid glitched blocks

{% content-ref url="faq/blocks-minerals-issues/custom-blocks-glitch-texture/avoid-glitched-blocks.md" %}
[avoid-glitched-blocks.md](faq/blocks-minerals-issues/custom-blocks-glitch-texture/avoid-glitched-blocks.md)
{% endcontent-ref %}
