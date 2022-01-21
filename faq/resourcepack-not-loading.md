# 📷 Resourcepack not loading

### _Resourcepack not loading, I get an error in chat_ <a href="#resourcepack-not-loading-i-get-an-error-in-chat" id="resourcepack-not-loading-i-get-an-error-in-chat"></a>

* If you have **SkinsRestorer** please [read here](../compatibility-with-other-plugins/compatible/skinsrestorer.md).
* Check if you have another plugin that uses **custom resourcepacks**, if you have please **disable** its **resourcepack** feature or ItemsAdder won't be able to apply the pack correctly (you can make them compatible if you've a minimum knowledge on how to merge resourcepacks manually, be sure to not replace ItemsAdder files and you're done. The pack folder of ItemsAdder is `resouce_pack`)
* Make sure you don't have any resourcepack set in the `server.properties` file
* **Minecraft** limits servers resourcepacks **size** to **50MB** on Minecraft **1.14** and **100MB** on **1.15+**, be sure to **compress** your **textures** and your **music** files before creating the zip file.
* Be sure that your`url`is a **direct** download link to the zip file. If you paste the link on your browser (Firefox/Chrome) you must instantly see the download start, if you see a download page with buttons it's wrong. Resourcepack [hosting tutorials](../plugin-usage/resourcepack-hosting/).
* Be sure to follow all [tutorial ](../plugin-usage/resourcepack-hosting/)steps
* Be sure the port is opened if you use self-host.
* Run `/iainfo` command and make sure the resourcepack **URL** is reachable from your browser and it directly downloads the resourcepack `.zip` file.

### _My players can't see textures! But I've followed the whole tutorial_ <a href="#my-players-cant-see-textures-but-ive-followed-the-whole-tutorial" id="my-players-cant-see-textures-but-ive-followed-the-whole-tutorial"></a>

There are three ways to fix this issue:

* If your players can't see the new items just link them this simple screens to fix it! [http://imgur.com/a/SG0AU](http://imgur.com/a/SG0AU)​
* If you still have problems **delete** the **server** from your **servers list**, add it again and then **enable resource packs**.
* If you still have problems leave the server, go to **%appdata%/.minecraft/server-resource-packs** and **delete everything**. Then join the server again.

{% hint style="danger" %}
Make sure you're not using **UPPERCASE**, **space** or **special characters** in items **names**, **namespaces**, **texture** files (png) and **model** files (json)
{% endhint %}
