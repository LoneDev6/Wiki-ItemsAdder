---
description: Square character
---

# ☐ characters

## I see ☐ character after uninstalling Custom ESC addon

{% hint style="info" %}
This is useful to uninstall [Custom ESC addon](https://www.spigotmc.org/resources/addon-custom-esc-menu-and-death-screen-for-itemsadder.88809/)
{% endhint %}

You have to delete this folder lang folder: `data\resource_pack\assets\minecraft\lang`

Then run `/iazip` command.

![](<../../.gitbook/assets/immagine (140) (1).png>)

## I see ☐ instead of my emojis/ranks

{% hint style="warning" %}
Make sure to run `/iazip` and reupload the resourcepack if needed.

Read more here: [resourcepack hosting](../../plugin-usage/resourcepack-hosting/)
{% endhint %}

{% hint style="warning" %}
Make sure `y_position` property is not greater than the image height in pixels or `imagine height * scale_ratio`.

Minecraft doesn't support this, it won't work.
{% endhint %}

## 1.19 clients show ☐ instead of some font images

This is caused by this Minecraft bug I cannot fix: [https://bugs.mojang.com/browse/MC-253169](https://bugs.mojang.com/browse/MC-253169)

Reddit thread: [https://www.reddit.com/r/Mojira/comments/vis77z/mc253169\_bug\_report\_marked\_as\_resolved\_but\_its/](https://www.reddit.com/r/Mojira/comments/vis77z/mc253169\_bug\_report\_marked\_as\_resolved\_but\_its/)

### How to fix?

It's very easy: you just have to open your CLIENT LOG and find the error about the font shows which what caused other font images to stop loading: [reading client log](../identify-why-textures-are-not-shown.md)

You have one or more misconfigured images, these are the cause of that problem.

#### Example of misconfigured png:

This example pack has a PNG with `height` higher than the `y_position`.

```
Unable to load font 'minecraft:default' in fonts.json in resourcepack: '260e803a4ce18a1662a5ff9c59f9d758ab1026bb'
com.google.gson.JsonParseException: Ascent 30 higher than height 9
	at net.minecraft.class_386$class_387.method_2037(class_386.java:74)
```

