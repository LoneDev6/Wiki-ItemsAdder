---
icon: gear
description: How to install the plugin
---

# First install

{% hint style="danger" %}
**Make sure** that all of your plugins and server software are up to date!\
**Always check** the version of ItemsAdder which you are downloading!

* <mark style="color:red;">**v3 is only for 1.20.4 and lower**</mark>
* <mark style="color:red;">**v4 is only for 1.20.6 and greater**</mark>
{% endhint %}

## Guided installation

{% @guideflow/guideflow-embed requestedUrl="https://app.guideflow.com/player/qkqgg70u1p" fullWidth="true" %}

***

## Step 1 - Installing the plugin and libraries

* stop the server
* put [**ProtocolLib**](https://ci.dmulloy2.net/job/ProtocolLib/lastSuccessfulBuild/) JAR inside the `plugins` folder
* put [**LoneLibs**](https://www.spigotmc.org/resources/lonelibs.75974/) JAR inside the `plugins` folder
* put **ItemsAdder** JAR file inside your plugins folder
* start the server
* let ItemsAdder finish loading **everything**

## Step 2 - Resourcepack first installation

{% hint style="warning" %}
This step is important, the plugin <mark style="color:red;">**WILL NOT WORK**</mark> if you won't complete this step!
{% endhint %}

Before using the plugin you have to decide the resourcepack hosting method.\
Click down here to decide an hosting method for the resourcepack (best method: `self-host`).

{% content-ref url="plugin-usage/resourcepack-hosting/" %}
[resourcepack-hosting](plugin-usage/resourcepack-hosting/)
{% endcontent-ref %}

***

## Step 3 - (optional) Add official ItemsAdder custom content

![](.gitbook/assets/items\_showcase\_gif.apng)

**ItemsAdder** comes with a lot of custom content already created for you.\
It's not automatically included in the downloaded plugin because some people might not want every item/feature automatically added into their server.

### Download the ["Default pack" here](https://github.com/ItemsAdder/DefaultPack/releases/latest) (optional)

<div align="left">

<img src=".gitbook/assets/image (47).png" alt="">

</div>

* Extract the content into the `ItemAdder` folder and overwrite the files if asked
* Run the `/iazip` command
* Follow your [hosting method](plugin-usage/resourcepack-hosting/) if you're not using **self-host**

***

## Step 4 - (optional) Add other ItemsAdder custom content

### Download ["Other pack" here](https://github.com/ItemsAdder/OtherPacks/releases/latest) (optional)

<div align="left">

<img src=".gitbook/assets/image (50).png" alt="">

</div>

* Extract the content into the `ItemAdder` folder and overwrite the files if asked
* Run the `/iazip` command
* Follow your [hosting method](plugin-usage/resourcepack-hosting/) if you're not using **self-host**

## Step 5 - (optional) Removing default items

{% content-ref url="faq/removing-default-stuff/latest-itemsadder.md" %}
[latest-itemsadder.md](faq/removing-default-stuff/latest-itemsadder.md)
{% endcontent-ref %}
