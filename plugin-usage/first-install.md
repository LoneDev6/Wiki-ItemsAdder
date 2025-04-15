---
description: How to install the plugin
icon: gear
---

# First Install

{% hint style="danger" %}
**Make sure** that all of your plugins and server software are up to date!\
**Always check** the version of ItemsAdder which you are downloading!

- <mark style="color:red;">**v3 is only for 1.20.4 and lower**</mark>
- <mark style="color:red;">**v4 is only for 1.20.6 and greater**</mark>

### Version differences:

- v4 has updated textures and models optimized for 1.20.6+
- v4 includes performance improvements and new features
- v4 configurations are backward compatible with v3
- v4 no longer requires LoneLibs for 4.0.9+
  {% endhint %}

## Step 1 - Installing the plugin and libraries

- Stop your server
- Download and install the required dependencies:
  - [**ProtocolLib**](https://ci.dmulloy2.net/job/ProtocolLib/lastSuccessfulBuild/) - Required for both v3 and v4
  - [**LoneLibs**](https://www.spigotmc.org/resources/lonelibs.75974/) - Only required for v3 or v4 versions below 4.0.9
- Place **ItemsAdder** JAR file inside your `plugins` folder
- Start the server
- Wait for **ItemsAdder** to finish loading (you'll see a "ItemsAdder loaded successfully" message in console)

## Step 2 - Resourcepack installation

{% hint style="warning" %}

## Critical Step

The custom content <mark style="color:red;">**WILL NOT SHOW CORRECTLY**</mark> if you don't complete this step!
{% endhint %}

Before using the plugin, you need to decide how to host the resourcepack for your players to download automatically.

The recommended method is `self-host` as it's the easiest and most reliable option, but other methods are available for different hosting situations.

{% content-ref url="resourcepack-hosting/" %}
[resourcepack-hosting](resourcepack-hosting/)
{% endcontent-ref %}

## Step 3 - (optional) Add official ItemsAdder content packs

ItemsAdder comes with official content packs that include pre-made items, blocks, furniture, and more. These are optional but provide a great starting point and showcase what the plugin can do.

### Default Pack

![Sample items from the Default Pack](../.gitbook/assets/items_showcase_gif.apng)

The Default Pack includes essential items like custom currency, furniture, decorative blocks, weapons, and more.

### How to install the Default Pack:

1. Download the ["Default Pack" here](https://github.com/ItemsAdder/DefaultPack/releases/latest)
2. Extract the content into the `plugins/ItemsAdder` folder (overwrite files if asked)
3. Run the `/iazip` command in-game or from console
4. If you're not using self-hosting, follow your specific [hosting method instructions](resourcepack-hosting/)

<div align="left"><img src="../.gitbook/assets/image (47).png" alt="Default Pack contents preview"></div>

### Other Packs

ItemsAdder also offers additional content packs with more specialized items.

### How to install Other Packs:

1. Download the ["Other Packs" here](https://github.com/ItemsAdder/OtherPacks/releases/latest)
2. Extract the content into the `plugins/ItemsAdder` folder (overwrite files if asked)
3. Run the `/iazip` command in-game or from console
4. If you're not using self-hosting, follow your specific [hosting method instructions](resourcepack-hosting/)

<div align="left"><img src="../.gitbook/assets/image (50).png" alt="Other Packs contents preview"></div>

## Step 4 - Verify installation

After completing the above steps, you should verify that everything is working correctly:

1. Join your server and ensure you received and accepted the resourcepack
2. Run `/iainfo` to check plugin version and configuration status
3. Try spawning an item with `/iaget ia:ruby` (if you installed Default Pack)
4. Make sure item textures load correctly

If you encounter any issues, check the [FAQ section](../faq/plugin-doesnt-work.md) or [troubleshooting guide](../faq/identify-why-textures-are-not-shown.md).

## Next Steps

Now that you have successfully installed ItemsAdder, you can:

- Learn how to [create your own custom items](../plugin-usage/beginners/sword.md)
- Explore the [commands](commands/) and [permissions](permissions.md)
- Set up [custom crafting recipes](adding-content/crafting.md)
- Create [custom blocks](beginners/my-first-block.md) or [furniture](adding-content/furniture/)
