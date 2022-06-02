---
description: How to install the plugin
---

# ⚙ First install

{% hint style="info" %}
**You should follow** this first configuration **on** your **test server** on your PC to **avoid mistakes** and too many restarts.. players don't like when server is offline.\
You can upload files to your real server after you finished here.
{% endhint %}

{% hint style="danger" %}
You **should** complete ALL installation steps. Not only the first.
{% endhint %}

## Step 1 - installing the plugin and APIs

* install [**ProtocolLib**](https://www.spigotmc.org/resources/protocollib.1997/)
* install [**LoneLibs**](https://www.spigotmc.org/resources/lonelibs.75974/)
* (optional) install **LightAPI** ([1.14, 1.15, 1.16](http://a.devs.beer/lightapi-old) | [1.17, 1.18](http://a.devs.beer/lightapi-new))
* (optional) install [**Lib's Disguises**](https://www.spigotmc.org/resources/libs-disguises-free.81/) if you plan to create custom mobs in the future.
* put **ItemsAdder.jar** file inside your plugins folder
* start the server
* let ItemsAdder finish loading **everything**

First step is done.\
Now you must complete **step 2** to configure the resourcepack (don't worry it's not very hard).

## Step 2 - resourcepack first installation

#### Decide the resourcepack hosting method:

{% content-ref url="plugin-usage/resourcepack-hosting/" %}
[resourcepack-hosting](plugin-usage/resourcepack-hosting/)
{% endcontent-ref %}

## Optional steps

### Adding official ItemsAdder custom content

![](.gitbook/assets/items\_showcase\_gif.apng)

**ItemsAdder** comes with a lot of custom content already created for you.\
It's not automatically included into the downloaded plugin because some people might not want every item/feature automatically added into their server.

#### Default pack

![](<.gitbook/assets/image (47).png>)

* download the latest version of the DefaultPack [here](https://github.com/ItemsAdder/DefaultPack/releases/latest)&#x20;
* extract the content into the **ItemAdder** folder and overwrite the files if asked
* run the `/iazip` command (and follow your [hosting method](plugin-usage/resourcepack-hosting/) if you're not using **self-host**).

#### Other pack (optional)

![](<.gitbook/assets/image (50).png>)

* if you want you can download the OtherPacks file [here](https://github.com/ItemsAdder/OtherPacks/releases/latest) which adds even more content
* extract the content into the **ItemAdder** folder and overwrite the files if asked
* run the `/iazip` command (and follow your [hosting method](plugin-usage/resourcepack-hosting/) if you're not using **self-host**).

If you're on 1.17 or lower you have to change the ores generation:

* Open these files and set `enabled: true`.\
  `ItemsAdder\data\items_packs\iaalchemy\worlds_populators_old.yml`\
  `ItemsAdder\data\items_packs\iasurvival\ores\worlds_populators_old.yml`
* Open these files and set `enabled: false`.\
  `ItemsAdder\data\items_packs\iaalchemy\worlds_populators_1_18.yml`\
  `ItemsAdder\data\items_packs\iasurvival\ores\worlds_populators_1_18.yml`

### Removing default items

{% content-ref url="faq/removing-default-stuff/" %}
[removing-default-stuff](faq/removing-default-stuff/)
{% endcontent-ref %}

### Avoid glitched blocks

{% content-ref url="faq/blocks-minerals-issues/custom-blocks-glitch-texture/avoid-glitched-blocks.md" %}
[avoid-glitched-blocks.md](faq/blocks-minerals-issues/custom-blocks-glitch-texture/avoid-glitched-blocks.md)
{% endcontent-ref %}
