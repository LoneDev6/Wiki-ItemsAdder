# 📷 Resourcepack not loading

### "_Resourcepack not loading, I get an error in chat"_ <a href="#resourcepack-not-loading-i-get-an-error-in-chat" id="resourcepack-not-loading-i-get-an-error-in-chat"></a>

* If you have **SkinsRestorer** please [read here](../compatibility-with-other-plugins/compatible/skinsrestorer.md).
* Check if you have another plugin that uses **custom resourcepacks**\
  **I**f you have a similar plugins please **disable** its **resourcepack** feature or **ItemsAdder** won't be able to apply the pack correctly. If you want to apply both packs [read here](../plugin-usage/merge-resourcepacks/).
* Make sure you don't have any resourcepack set in the `server.properties` file.
* **Minecraft** limits servers resourcepacks **size** to **50MB** on Minecraft **1.14** and **100MB** on **1.15+**, be sure to **compress** your **textures** and your **music** files before creating the zip file.
* Be sure that your`url`is a **direct** download link to the zip file. If you paste the link on your browser (Firefox/Chrome) you must instantly see the download start.\
  If you see a download page with buttons it's wrong. Read the resourcepack [hosting tutorials](../plugin-usage/resourcepack-hosting/).
* Be sure to follow all resourcepack hosting [tutorial ](../plugin-usage/resourcepack-hosting/)steps.
* Be sure the port is opened if you use [`self-host`](../plugin-usage/resourcepack-hosting/resourcepack-self-hosting.md).
* Run `/iainfo` command and make sure the resourcepack **URL** is reachable from your browser and it directly downloads the resourcepack `.zip` file.

{% hint style="danger" %}
Make sure you're not using **UPPERCASE**, **space** or **special characters** in items **names**, **namespaces**, **texture** files (png) and **model** files (json)
{% endhint %}

### _"My players won't load the resourcepack! But I've followed the whole tutorial"_ <a href="#my-players-cant-see-textures-but-ive-followed-the-whole-tutorial" id="my-players-cant-see-textures-but-ive-followed-the-whole-tutorial"></a>

There are three ways to fix this issue:

* If your players can't see the new items just link them this simple screens to fix it! [http://imgur.com/a/SG0AU](http://imgur.com/a/SG0AU)​
* If you still have problems **delete** the **server** from your **servers list**, add it again and then **accept resource packs**.
* If you still have problems leave the server, go to `%appdata%/.minecraft/server-resource-packs` and delete everything. Then join the server again.
* Make sure you don't have any inventory (GUI) or book opening on join.\
  This can cause the resourcepack prompt to disappear and the player won't be able to click on it.\
  In order to fix this you can use the free plugin [ResourcePackBroadcast](https://www.spigotmc.org/resources/resourcepackbroadcast.88318/). This allows you to run commands as soon as the resourcepack is accepted (and various other features).\
  You can also try increasing the `delay-ticks` in config.yml of ItemsAdder to `10` or greater.
