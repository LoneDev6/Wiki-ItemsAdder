---
icon: list-dropdown
---

# Item Tooltip

{% hint style="warning" %}
Requires ItemsAdder 4.0.9 or greater and at least Minecraft 1.21.2 (both client and server).
{% endhint %}

## Configuration

{% code title="contents/test_tooltip/test_tooltip_item.yml" %}
```yaml
info:
  namespace: test_tooltip
items:
  tooltip_rainbow_item:
    display_name: tooltip_rainbow_item
    resource:
      generate: false
      model_path: minecraft:item/emerald
      material: PAPER
    tooltip_style: test_tooltip:tooltip/rainbow

```
{% endcode %}

## Image files

Create the required files into `contents/test_tooltip/textures/tooltip/`.

<figure><img src="../../.gitbook/assets/image (9).png" alt=""><figcaption></figcaption></figure>

Non-animated image files dimensions should be `100x100`. They contain the color of the part of the tooltip.

`_background` contains the background and  `_frame` contains the frame.

{% hint style="info" %}
Tooltip support animated textures (`.png.mcmeta` files).
{% endhint %}

Run `/iazip` and then get the item ingame.

<figure><img src="../../.gitbook/assets/image (8).png" alt=""><figcaption></figcaption></figure>

Example download here:

{% file src="../../.gitbook/assets/test_tooltip.zip" %}

<details>

<summary>Old method (before 1.21.2)</summary>

## Old method

You can add custom textured tooltips for your items, please refer to this example addon:\
[https://www.spigotmc.org/resources/items-custom-tooltip-texture-example-itemsadder-addon.87883/](https://www.spigotmc.org/resources/items-custom-tooltip-texture-example-itemsadder-addon.87883/).

![https://i.imgur.com/eA7iz50.gif](https://i.imgur.com/eA7iz50.gif)

## Limitations

{% hint style="warning" %}
* You cannot show custom enchants as they will go out of the window if the image is too small.
* You have to write everything in the tooltip image, text would go out of the window if the image is too small.
{% endhint %}

</details>
