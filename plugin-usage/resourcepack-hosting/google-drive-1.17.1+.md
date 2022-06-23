---
cover: ../../.gitbook/assets/Google-Drive.jpg
coverY: 0
---

# 🗂 Google Drive (1.17.1+)

## How to use Google Drive

{% hint style="warning" %}
This method has some problems on some PCs in Minecraft versions before 1.17 because of a Minecraft bug, read more here: [https://bugs.mojang.com/browse/MC-143768](https://bugs.mojang.com/browse/MC-143768)

This method works 100% of the times on Minecraft 1.17.1 and most recent versions.
{% endhint %}

### Step 1

Rightclick on your resourcepack zip file and press "Get link"

![](<../../.gitbook/assets/immagine (156).png>)

### Step 2

Important: set the permission to "Anyone with the link"

![](<../../.gitbook/assets/immagine (145).png>)

Press "Copy link"

![](<../../.gitbook/assets/immagine (150).png>)

### Step 3

Visit this website: [http://a.devs.beer/gdrive-direct](http://a.devs.beer/gdrive-direct)

Paste the link and press on "Get direct link"

<img src="../../.gitbook/assets/immagine (144).png" alt="" data-size="original">

### Step 4

The website automatically adds the generated link in your clipboard.

![](<../../.gitbook/assets/immagine (147).png>)

You can now paste the link inside **ItemsAdder** configuration file `config.yml`, then use `/iareload` command.

{% code title="config.yml" %}
```yaml
external-host:
  enabled: true
  url: 'http://drive.google.com/uc?export=view&id=10g3whim95Hab40KZNjUkwY9FUuqKMGh5'
```
{% endcode %}

### Done!

You can now see that the pack is correctly loaded by the game.

## Common issues

### Long time on "Making Request... 100%"

### ![](<../../.gitbook/assets/immagine (146).png>)

This is normal. This happens because Google Drive is doing some stuff before authorizing the download of the resourcepack.

This happens only when the player downloads the resourcepack for the first time and it will take from 5 to 10 seconds.

### Resourcepack not loading at all

This method has some problems on some PCs in Minecraft versions before 1.17 because of a Minecraft bug, read more here: [https://bugs.mojang.com/browse/MC-143768](https://bugs.mojang.com/browse/MC-143768)

This method works 100% of the times on Minecraft 1.17.1 and most recent versions.
