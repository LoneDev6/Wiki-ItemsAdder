---
description: Create images which can be used in texts, also known as glyphs and symbols
icon: icons
---

{% tabs %}
{% tab title="Simple" %}
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
{% endtab %}
{% tab title="Advanced (Experts Users Only)" %}
# Font Images - Advanced

{% hint style="warning" %}
### This is a tutorial for advanced users
{% endhint %}

## Using specific a character

ItemsAdder will automatically decide the custom character for you if you don't include the `symbol` property at all.

You don't have to worry about it for each `emoji`/`font_image`, but if you really need to specify a custom character to be used for the custom `font_image` you can use the special property `symbol`.

### Example

```yaml
smile:
  permission: smile
  show_in_gui: true
  path: "font/emoji/smile.png"
  symbol: "鄿"
  scale_ratio: 9
  y_position: 8
```

Minecraft will show the smile emoji every time you write `鄿` in chat.

## Creating font images manually

Create a `default.json` file and handle it on your own.

Some servers may require font images to be created manually for various reasons, for example:

* You don't want ItemsAdder to manage the fonts.
* You want to use a custom namespace and custom font name for some custom characters.
* You want to manage them on your own.

## Creating a custom character

```json
{
   "file":"image_test.png",
   "chars":[
      "\uE250"
   ],
   "height":8,
   "ascent":9,
   "type":"bitmap"
}
```

Create or edit the file `assets/minecraft/font/default.json` in your resourcepack.

{% code title="default.json" %}
```json
{
   "providers":[
      {
         "file":"image_test.png",
         "chars":[
            "\uE250"
         ],
         "height":8,
         "ascent":9,
         "type":"bitmap"
      }
   ]
}
```
{% endcode %}

If you have more entries you have to add a `,` after the previous entry, for example:

```json
{
   "providers":[
      {
         "file":"image1.png",
         "chars":[
            "\uE233"
         ],
         "height":8,
         "ascent":9,
         "type":"bitmap"
      },
      {
         "file":"image_test.png",
         "chars":[
            "\uE250"
         ],
         "height":8,
         "ascent":9,
         "type":"bitmap"
      }
   ]
}
```

### Using a customized json file name

By using a customized json font file you can separate the default font characters from your custom characters.

To do so you just have to create a new json and call it whatever you want, for example `my_font.json`.\
The complete path will be: `assets/minecraft/font/my_font.json`.

### Using a customized json namespace

If you want to further organize your pack you can use a customized namespace for your font file.\
To do so you have to create a folder inside `assets` folder and use it instead of `minecraft` folder.\
The complete path will be (for example): `assets/your_namespace/font/my_font.json`.

### Showing the customized namespace/font name in-game

If you customized the font namespace and/or the font name you have to use a special syntax to show your images in-game.

Example if you set both custom namespace and custom font name:

`/tellraw @a [{"text":"Test message!","font":"your_namespace:my_font"}]`

Example if you set only custom font name:

`/tellraw @a [{"text":"Test message!","font":"my_font"}]`

## Customize / remove shadow

{% hint style="warning" %}
Requires ItemsAdder 4.0.12 and Minecraft client 1.21.4 or greater
{% endhint %}

(does not require regenerating the pack)

### Example

Custom shadow color

<figure><img src="../../.gitbook/assets/image (264).png" alt=""><figcaption></figcaption></figure>

```yaml
  smile:
    permission: twitteremojis.smile
    show_in_gui: true
    path: font/emoji/smile
    scale_ratio: 9
    y_position: 8
    shadow: # new property
      enabled: true
      color: AA4A44
```

### Example

Remove shadow completely

<figure><img src="../../.gitbook/assets/image (265).png" alt=""><figcaption></figcaption></figure>

```yaml
  smile:
    permission: twitteremojis.smile
    show_in_gui: true
    path: font/emoji/smile
    scale_ratio: 9
    y_position: 8
    shadow: # new property
      enabled: false
```
{% endtab %}
{% endtabs %}