---
description: Create images which can be used in texts, also known as glyphs and symbols
icon: icons
---

# Font Images

Font images are custom characters that have a custom texture.\
You can use font images to create emojis, ranks, GUI and more.

## Creating a generic font image

In this example my namespace is `my_content` (you can decide your own).

* Create a `.png` file `contents/my_content/textures/font/image_1.png` .
* Create a `.yml` file `contents/my_content/my_config.yml`.

{% code title="contents/my_content/my_config.yml" %}
```yaml
info:
  namespace: my_content
font_images:
  image_1:
    path: font/image_1.png
    scale_ratio: 9
    y_position: 8
```
{% endcode %}

<figure><img src="../../.gitbook/assets/image (7) (1).png" alt=""><figcaption></figcaption></figure>

Access it ingame using `:image_1:` placeholder. If you have **PlaceholderAPI** you can access it using `%img_image_1%` in various places and other plugins.

## Properties

### `scale_ratio`

Resize the image to a specific height and width. Default value is the PNG file height.

### `y_position`

Move the image on the Y axist. Accepts positive and negative.

{% hint style="warning" %}
`y_position` must be lower or equal to `scale_ratio`.\
This is a limitation of the game and I cannot fix it.

To bypass this limitation you have to create an image with higher height, you can do it by adding some blank pixels on the bottom or on the top of the image.
{% endhint %}

## Built-in Placeholders

You can use these special placeholders in **chat**, **signs**, **books** and in **GUIs** names.

### Image

To show the image in-game you have to write down its name surrounded by `:` character.

```
:my_gui:
:blank_menu:
:my_emoji:
```

### Offset

This is a special placeholder that allows you to move a font image back and forward specifying pixels number.

```
:offset_-1:
:offset_-2:
:offset_-30:
:offset_25:
```

As you can see you have to write `:offset_`**`AMOUNT`**`:` (without spaces).\
If you would like to change the image's height, you will need to change it's 'y' value.\
This is located in the image's configuration.

For example:

* You can shift a _font image_ back by 16 pixels by writing `:offset_-16::smile:`.
* You can shift a _text_ back by 16 pixels by writing `:offset_-16:hello`.
* You can shift a _font image_ forward by 16 pixels by writing `:offset_16::smile:`.
* You can shift a _text_ forward by 16 pixels by writing `:offset_16:hello`.

## PlaceholderAPI Placeholders

### Font image

This is the code: `%img_NAME%` instead of `NAME` write the font image name.\
For example: `%img_smile%`

### Offsets

You can shift text or font images back and forward.\
For example

* You can shift it back of 16 pixels by writing `%img_offset_-16%`.
* You can shift it forward of 16 pixels by writing `%img_offset_16%`.

## More tutorials

{% content-ref url="ranks-prefixes.md" %}
[ranks-prefixes.md](ranks-prefixes.md)
{% endcontent-ref %}

{% content-ref url="emojis.md" %}
[emojis.md](emojis.md)
{% endcontent-ref %}

## Common mistakes

### I see only a white square

If you see a **white square** make sure the **height** of your image is not **greater** than the `y_position` value you set.\
To **bypass** this limitation you have to create an **image** with **higher height**.

Images must also not have **Uppercase** or **Bad Characters** (eg. `*`, `à`, `ù`, `=`, `$`, space etc.) in the filename or in the folders.

{% hint style="warning" %}
Keep in mind that the **max size** of a font image is **256x256**.\
This is a Minecraft limitation.\
To bypass this (if you're creating a GUI or HUD) you can split your image in multiple font images and merge them shifting them.
{% endhint %}

### Imprecise HUD shifting

Be sure to have each image size set to a multiple of 2 (2x2, 4x4, 6x6, 8x8, 10x10, etc.)

If you still have problems try to increase/decrease the size by 2 until the wrong shift disappears.\
This is an approximation problem I cannot fix.

### GUI image is colored

You need to specify the **GUI image name** in the name of the GUI\
`title: :myimage: My Custom GUI` which can be colored by the custom menu plugin automatically. Be sure to add `&f` before doing :myimage: in the GUI.
