---
description: Emotes textures look broken when using custom shaders mods (1.17+)
---

# Textures broken by shaders mod

{% hint style="warning" %}
#### This "bug" can't be fixed for now

It's a Optifine/Iris mod incompatibility I cannot fix for now without a change on these two shaders mods.
{% endhint %}

{% tabs %}
{% tab title="With shaders (bug)" %}
![](<../../.gitbook/assets/image (51) (2) (1).png>)
{% endtab %}

{% tab title="Without shaders (no bug)" %}
![](<../../.gitbook/assets/image (64).png>)
{% endtab %}
{% endtabs %}

## What was the cause of this bug?

### Optifine issue

Optifine has a limitation which doesn't allow custom emotes to work correctly if you have any custom Optifine shader installed.

You have to disable the **Optifine** shaders temporarily or temporarily live with the issue.

I already contacted Optifine developer about this: [https://github.com/sp614x/optifine/issues/6391](https://github.com/sp614x/optifine/issues/6391)

### Iris Shaders issue

Iris has a limitation which doesn't allow custom emotes to work correctly if you have any custom Iris custom shader installed.

I already contacted Iris developers about this: [https://github.com/IrisShaders/Iris/issues/1042](https://github.com/IrisShaders/Iris/issues/1042)

### 3DSkinLayers

When using the [3DSkinLayers](https://www.curseforge.com/minecraft/mc-mods/skin-layers-3d) mod will Emotes not render properly.\
This is because the mod alters how the extra layers are rendered, which messes up the placement of the skin parts in ItemsAdder.

This is nothing that can be fixed (yet). Dev has been contacted about this here: [https://github.com/tr7zw/3d-Skin-Layers/issues/45](https://github.com/tr7zw/3d-Skin-Layers/issues/45)
