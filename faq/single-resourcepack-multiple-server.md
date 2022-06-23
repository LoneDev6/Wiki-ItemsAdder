---
description: >-
  Single resourcepack in Bungeecord network and disable individual features per
  server
---

# Single resourcepack Bungeecord different features

Tutorial by [@itsmemac](https://github.com/LoneDev6/Wiki-ItemsAdder/pull/35)

{% hint style="info" %}
Before you follow this guide, make sure you have gone through [**First Install**](https://itemsadder.devs.beer/first-install) and have a working IA installation
{% endhint %}

**STEP 1**

Create the final pack for your server locally which includes everything you would need in your entire network (every item, GUI, mob, emoji, etc...).\
To do that you have to create a local Spigot server on your PC where you will configure everything you want.

**STEP 2**

Open each one of your Spigot servers and set host method to `no-host` in the ItemsAdder config and disable extract of items to false

{% code title="config.yml" %}
```yaml
  hosting:
    no-host:
      enabled: true
  extract-default-items: false
  extract-default-resources: false
```
{% endcode %}

**STEP 3**

Run `/iazip` and upload the generated pack to a file hosting and make sure it offers a DIRECT DOWNLOAD.\
For example [**MCPACKS**](https://mc-packs.net/)**,** [**DropBox**](../plugin-usage/resourcepack-hosting/resourcepack-on-dropbox.md)**,** [**GoogleDrive**](../plugin-usage/resourcepack-hosting/google-drive-1.17.1+.md)**.**

**STEP 4**

Use plugin like [**Force resourcepack**](https://www.spigotmc.org/resources/force-resourcepacks.10499/) or similar in your bungee to load the the resource pack when you enter the network.

**STEP 5**

Copy `ItemsAdder.jar` and the whole `ItemsAdder` plugin folder from local Spigot server to the first network server (for example `lobby`) to your `/plugins` folder.

**STEP 6**

Open the config.yml of ItemsAdder and disable the features you don't need.\
Also remove unwanted files from `plugins/ItemsAdder/data/items_packs` .

{% hint style="danger" %}
DONT REMOVE dictionaries, mcemojis, mcguis, mcicons, realcraft, various\_configs FOLDER.\
Read more here: [Removing default stuff](removing-default-stuff.md)
{% endhint %}

You basically have to keep the folders of features you want to keep in this particular server (`lobby` in this example).

**STEP 7**

Restart the server and join it. The server should ask you to download resource pack.\
You will then see only the items you have left in the `items_packs` folder.

**STEP 8**

Redo the step 5,6,7 for each server you have in your network.

{% hint style="info" %}
**BungeePackFix** plugin is not needed for this tutorial.
{% endhint %}
