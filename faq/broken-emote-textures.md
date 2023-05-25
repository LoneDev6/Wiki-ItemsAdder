---
description: Emotes have bugged textures (1.17+)
---

# 💃 Broken emote textures

## Shader Mod issues

Mods that allow the usage of custom shaders will break emotes due to them overriding/replacing the vanilla Shader which ItemsAdder uses for the Emotes feature.

The only way to _"fix"_ this is by disabling the shaders themself or removing the shader mod in question.

{% tabs %}
{% tab title="With Shaders on (Bug)" %}
![shader bug](<../.gitbook/assets/image (51) (2) (1) (1).png>)
{% endtab %}

{% tab title="With Shaders off (No Bug)" %}
![no shader bug](<../.gitbook/assets/image (64).png>)
{% endtab %}
{% endtabs %}

Known shader mods that cause issues:

### Optifine

Related issue: [https://github.com/sp614x/optifine/issues/6391](https://github.com/sp614x/optifine/issues/6391)

### IrisShaders

Related issue: [https://github.com/IrisShaders/Iris/issues/1042](https://github.com/IrisShaders/Iris/issues/1042)

## Mods that change the player skins

A mod may change the default player model/skin and can therefore be affected by ItemsAdder's shader manipulations, or vice-versa.

Known Mods that cause issues:

### 3DSkinLayers

The mod alters the outer skin layer to make them appear in 3D, which alters the player model itself.

A possible fix is to disable `3D Skulls` and `3D Skull Items` in the mod's settings.\
There is currently no workaround for using 3D layers in Emote animations.

Additional information can be found in the related issue: [https://github.com/tr7zw/3d-Skin-Layers/issues/45](https://github.com/tr7zw/3d-Skin-Layers/issues/45)

### Customizable Player Models

This mod allows the complete customization of the player model including replacing parts of it or the model as a whole.\
Due to this will Emotes not display properly in ItemsAdder and there is currently no fix available outside of not using the mod or not using the Emote animations.
