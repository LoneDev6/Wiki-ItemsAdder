---
description: How to install the plugin
icon: gear
---

# First Install

{% hint style="danger" %}
**Make sure** that all of your plugins and server software are up to date!\
**Always check** the version of ItemsAdder you are downloading!

* <mark style="color:red;">**v3 is only for 1.20.4 and lower**</mark>
* <mark style="color:red;">**v4 is only for 1.20.6 and greater**</mark>
{% endhint %}

## Step 1 - Installing the plugin and libraries

* Stop the server.
* Put **ProtocolLib** JAR inside the `plugins` folder
  * Download the 1.21.5 version [here](https://ci.dmulloy2.net/job/ProtocolLib/745/artifact/build/libs/ProtocolLib.jar)
  * Download 1.21.4 and older versions [here](https://ci.dmulloy2.net/job/ProtocolLib/)
* Put [**LoneLibs**](https://www.spigotmc.org/resources/lonelibs.75974/) JAR inside the `plugins` folder (not required on 4.0.9 and greater)
* Put the **ItemsAdder** JAR file inside your plugins folder
* Start the server
* Let **ItemsAdder** finish loading **everything**

## Step 2 - Resourcepack first installation

{% hint style="warning" %}
### Important Step

The content <mark style="color:red;">**WILL NOT SHOW CORRECTLY**</mark> if you won't complete this step!
{% endhint %}

Before using the plugin you have to decide the resourcepack hosting method.\
Click down here to decide a hosting method for the resourcepack (best method: `self-host`).

{% content-ref url="resourcepack-hosting/" %}
[resourcepack-hosting](resourcepack-hosting/)
{% endcontent-ref %}

***

## Step 3 - (optional) Add official ItemsAdder custom content

![](../.gitbook/assets/items_showcase_gif.apng)

**ItemsAdder** comes with a lot of custom content already created for you.\
It's not automatically included in the downloaded plugin because some people might not want every item/feature automatically added into their server.

### Download the ["Default pack" here](https://github.com/ItemsAdder/DefaultPack/releases/latest)

<div align="left"><img src="../.gitbook/assets/image (63).png" alt=""></div>

* Extract the content into the `ItemAdder` folder and overwrite the files if asked.
* Run the `/iazip` command.
* Follow your [hosting method](resourcepack-hosting/) if you're not using **self-host**.

***

## Step 4 - (optional) Add other ItemsAdder custom content

### Download ["Other pack" here](https://github.com/ItemsAdder/OtherPacks/releases/latest)

<div align="left"><img src="../.gitbook/assets/image (94).png" alt=""></div>

* Extract the content into the `ItemAdder` folder and overwrite the files if asked.
* Run the `/iazip` command.
* Follow your [hosting method](resourcepack-hosting/) if you're not using **self-host**.
