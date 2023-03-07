# 👁 I see crisp textures far away!

{% hint style="warning" %}
If you see dotted and not smooth textures in far away it's a common mistake of resourcepacks maker.\
Minecraft has a bug that disables mipmap if you set textures which their size is not a power of 2!
{% endhint %}

![LEFT: without mipmap. RIGHT: with mipmap](<../.gitbook/assets/image (19).png>)

## **How to fix?**

It's easy! Just follow this:

* read this tutorial to know [how to read game logs](identify-why-textures-are-not-shown.md) (not server logs).
* search for this text `limits mip level`
* identify the problematic texture, for example `Texture mcicons:item/icon_toggle_off with size 30x30 limits mip level from 3 to 1`
* Fix the texture. \
  To fix it you have to resize it to a size of: 16x16, 32x32, 64x64, 128x128, 256x256, etc.\
  You decide one of these.
