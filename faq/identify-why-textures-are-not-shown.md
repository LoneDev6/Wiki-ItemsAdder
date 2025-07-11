---
icon: spinner-scale
---

# Resourcepack is not loading correctly

{% hint style="danger" %}
#### Please read this page CAREFULLY before asking for support.

Most of the times the issue can be easily fixed by reading this page.
{% endhint %}

* resourcepack not loaded at all
* an error shown fullscreen when the player joins
* black and purple texture is shown
* your model doesn't load correctly
* the pack failed to load
* custom sounds don't play
* infinite resourcepack loading glitch

## How to read the SERVER logs

* run the command `/iazip`
* wait it to finish
* read your server console or open the file `logs/latest.log` using any text editor (for example [VSCode](https://code.visualstudio.com/))
* check if any error or warning was thrown and read them carefully, they contain useful information most of the times

## How to read the CLIENT logs (not SERVER)

{% hint style="warning" %}
## Always use the Vanilla client when something is broken!

The log provided by the game will often be asked from support when necessary.\
A non-bloated log is better for supporting you, and finding a solution easily.
{% endhint %}

#### Any launcher:

Join the server and let the pack load.\
Open your Minecraft GAME log file, **not server** logs.\
It is usually located here: `%appdata%\.minecraft\logs\latest.log`\
You can clearly see which files failed to load and why, the errors are clear in most of the cases.

#### Original launcher:

Enable output log

![](<../.gitbook/assets/immagine (52).png>)

Join the server and read the log

![](<../.gitbook/assets/immagine (61).png>)

You can clearly see which files failed to load and why. The errors are clear in most of the cases.

In this example I had two broken files `gem_vending_machine` and `whitebathroom_sink`.\
The error tells me that the JSON files are broken, they probably have bad characters inside or they are corrupted.

## Common issues <a href="#resourcepack-not-loading-i-get-an-error-in-chat" id="resourcepack-not-loading-i-get-an-error-in-chat"></a>

* Be sure to follow all resourcepack hosting [tutorial ](../plugin-usage/resourcepack-hosting/)steps.
* If you use [`self-host`](../plugin-usage/resourcepack-hosting/resourcepack-self-hosting.md) make sure the **port** is opened. Ask your hosting about it.
* Make sure you're not using **UPPERCASE**, **space** or **special characters** in items **names**, **namespaces**, **texture** files (`png`) and **model** files (`json`).\
  For example an ID for a custom item: `CustomSword` is wrong, use `custom_sword`.
* If you have **SkinsRestorer** please [read here](../compatibility-with-other-plugins/compatible/skinsrestorer.md).
* Check if you have another plugin that uses **custom resourcepacks**.\
  **I**f you have a similar plugins please **disable** its **resourcepack** feature or **ItemsAdder** won't be able to apply the pack correctly. If you want to apply both packs [read here](../plugin-usage/merge-resourcepacks.md).
* Make sure you don't have any resourcepack set in the `server.properties` file.
* **Minecraft** limits servers resourcepacks **size** to **50MB** on Minecraft **1.14**, **100MB** on **1.15+** and **250MB** on **1.18+**.\
  Make sure to **compress** your **textures** and your **music** files before creating the zip file.
* Run `/iainfo` command and make sure the resourcepack **URL** is reachable from your browser and it directly downloads the resourcepack `.zip` file.\
  If you paste the link on your browser (Firefox/Chrome) you must instantly see the download start.\
  If you see a download page with buttons it is an invalid URL.\
  Read the resourcepack [hosting tutorials](../plugin-usage/resourcepack-hosting/).

### Resourcepack not sent at all <a href="#my-players-cant-see-textures-but-ive-followed-the-whole-tutorial" id="my-players-cant-see-textures-but-ive-followed-the-whole-tutorial"></a>

* Enable the resourcepack in the server list settings: [http://imgur.com/a/SG0AU](http://imgur.com/a/SG0AU)
* Make sure you don't have any inventory (GUI) or book opening on join.\
  This can cause the resourcepack prompt to disappear and the player won't be able to click on it.\
  In order to fix this you can use the free plugin [ResourcePackBroadcast](https://www.spigotmc.org/resources/resourcepackbroadcast.88318/).\
  This allows you to run commands as soon as the resourcepack is accepted (and various other features).
* Increasing the `delay-ticks` in `config.yml` of **ItemsAdder** to `10` or greater.
* Leave the server, go to `%appdata%/.minecraft/server-resource-packs` and delete everything. Then join the server again.

### Errors about downloading vanilla assets

Please read the tutorial here.

{% content-ref url="failed-to-download-minecraft-assets.md" %}
[failed-to-download-minecraft-assets.md](failed-to-download-minecraft-assets.md)
{% endcontent-ref %}
