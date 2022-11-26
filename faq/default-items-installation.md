---
description: Add Official Custom Content Provided Free By IA
---

# 🔩 Default Items Installation

{% hint style="info" %}
[Make Sure You Have Installed The Plugin Correctly Before Installing The Default Items](../first-install.md)
{% endhint %}

<figure><img src="https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FskYcczPGxczr9CpYlKqj%2Fuploads%2Fgit-blob-fb056ca03a9797276c6f3b686f55499bac879b3c%2Fitems_showcase_gif.apng?alt=media" alt=""><figcaption></figcaption></figure>

Write a caption​**ItemsAdder** comes with a lot of custom content already created for you. It's not automatically included in the downloaded plugin because some people might not want every item/feature automatically added to their server.

## Default Pack <a href="#default-pack" id="default-pack"></a>

<figure><img src="https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FskYcczPGxczr9CpYlKqj%2Fuploads%2Fgit-blob-2a5c745eaae043edd4e700af3df66fcec75e42b3%2Fimage%20(47).png?alt=media" alt=""><figcaption></figcaption></figure>

* Download the latest version of the **DefaultPack**: [DOWNLOAD 👇](https://github.com/ItemsAdder/DefaultPack/releases/latest)​

{% embed url="https://github.com/ItemsAdder/DefaultPack/releases/latest" %}

* Extract the content into the `ItemAdder` folder and overwrite the files if asked
* Run the `/iazip` command (and follow the [golden rule](https://app.gitbook.com/s/skYcczPGxczr9CpYlKqj/\~/changes/xrQavXlr15VhqA7bs6ZC/faq/the-golden-rule)).

## Other Official Packs <a href="#other-official-packs-optional" id="other-official-packs-optional"></a>

<figure><img src="https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FskYcczPGxczr9CpYlKqj%2Fuploads%2Fgit-blob-4a06d9c5cbe73f61b4ffd72936c0187da7f68b35%2Fimage%20(50).png?alt=media" alt=""><figcaption></figcaption></figure>

* If you want you can download the **OtherPacks** which adds even more content: [DOWNLOAD ](https://github.com/ItemsAdder/OtherPacks/releases/latest)​

{% embed url="https://github.com/ItemsAdder/OtherPacks/releases/latest" %}

* extract the content into the `ItemAdder` folder and overwrite the files if asked
* run the `/iazip` command (and follow the [golden rule](https://app.gitbook.com/s/skYcczPGxczr9CpYlKqj/\~/changes/xrQavXlr15VhqA7bs6ZC/faq/the-golden-rule)).

### **For Servers 1.17 - 1.15**

If you're on 1.17 or lower you have to change the ores generation:

* Open these files and set `enabled: true`.
  * `contents\iaalchemy\configs\worlds_populators_old.yml`
  * `contents\iasurvival\ores\configs\worlds_populators_old.yml`
* Open these files and set `enabled: false`.
  * `contents\iaalchemy\configs\worlds_populators_1_18.yml`
  * `contents\iasurvival\ores\configs\worlds_populators_1_18.yml`
