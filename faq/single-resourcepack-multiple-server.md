---
描述: >-
  Single resourcepack in Bungeecord network and disable individual features per
  server
---

# Single resourcepack Bungeecord different features

该教程由 [@itsmemac](https://github.com/LoneDev6/Wiki-ItemsAdder/pull/35) 编写

{% hint style="info" %}
在阅读该教程之前，请确保您已完成了 [**首次安装**](https://itemsadder.devs.beer/first-install)  的所有步骤，并且 Itemsadder 正常运行
{% endhint %}

**步骤 1**

Create the final pack for your server locally which includes everything you would need in your entire network (every item, GUI, mob, emoji, etc...).\
To do that you have to create a local Spigot server on your PC where you will configure everything you want.

**步骤 2**

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

**步骤 3**

Run `/iazip` and upload the generated pack to a file hosting and make sure it offers a DIRECT DOWNLOAD.\
For example [**MCPACKS**](https://mc-packs.net/)**,** [**DropBox**](../plugin-usage/resourcepack-hosting/resourcepack-on-dropbox.md)**,** [**GoogleDrive**](../plugin-usage/resourcepack-hosting/google-drive-1.17.1+.md)**.**

**步骤 4**

Use plugin like [**Force resourcepack**](https://www.spigotmc.org/resources/force-resourcepacks.10499/) or similar in your bungee to load the the resource pack when you enter the network.

**步骤 5**

Copy `ItemsAdder.jar` and the whole `ItemsAdder` plugin folder from local Spigot server to the first network server (for example `lobby`) to your `/plugins` folder.

**步骤 6**

Open the config.yml of ItemsAdder and disable the features you don't need.\
Also remove unwanted files from `plugins/ItemsAdder/data/items_packs` .

{% hint style="danger" %}
DONT REMOVE dictionaries, mcemojis, mcguis, mcicons, realcraft, various\_configs FOLDER.\
Read more here: [Removing default stuff](removing-default-stuff/)
{% endhint %}

You basically have to keep the folders of features you want to keep in this particular server (`lobby` in this example).

**步骤 7**

Restart the server and join it. The server should ask you to download resource pack.\
You will then see only the items you have left in the `items_packs` folder.

**步骤 8**

Redo the 步骤 5,6,7 for each server you have in your network.
每个子服重复步骤5,6,7

{% hint style="info" %}
**BungeePackFix** plugin is not needed for this tutorial.
使用 **BungeePackFix**  插件不需要阅读此教程
{% endhint %}
