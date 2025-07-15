---
icon: icons
---

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

```yml
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

```yml
  smile:
    permission: twitteremojis.smile
    show_in_gui: true
    path: font/emoji/smile
    scale_ratio: 9
    y_position: 8
    shadow: # new property
      enabled: false
```
