---
icon: head-side-gear
---

# Manually creating font images

{% hint style="warning" %}
This is a tutorial for advanced users.
{% endhint %}

## How to create font images manually without ItemsAdder

Some servers may require font images to be created manually for various reasons, for example:

* you don't want ItemsAdder to manage the fonts
* you want to use a custom namespace and custom font name for some custom characters
* you want to manage them on your own

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

&#x20;If you have more entries you have to add a `,` after the previous entry, for example:

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

## Using a customized json file name

By using a customized json font file you can separate the default font characters from your custom characters.

To do so you just have to create a new json and call it whatever you want, for example `my_font.json`.\
The complete path will be: `assets/minecraft/font/my_font.json`.

## Using a customized json namespace

If you want to further organize your pack you can use a customized namespace for your font file.\
To do so you have to create a folder inside `assets` folder and use it instead of `minecraft` folder.\
The complete path will be (for example): `assets/your_namespace/font/my_font.json`.

### Showing the customized namespace/font name in-game

If you customized the font namespace and/or the font name you have to use a special syntax to show your images in-game.

Example if you set both custom namespace and custom font name:

`/tellraw @a [{"text":"Test message!","font":"your_namespace:my_font"}]`

Example if you set only custom font name:

`/tellraw @a [{"text":"Test message!","font":"my_font"}]`
