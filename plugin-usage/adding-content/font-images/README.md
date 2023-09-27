---
description: >-
  Allows you to create images which can be used in texts, also known as glyphs
  and symbols
---

# 🖼 Font Images

### What are Font images?

This feature allows you to create images that can be used to make: **GUIs**, **HUDs**, **Emojis**, custom characters,[ **custom player prefixes**](../ranks-textures-prefix.md) and anything else you imagine! (you can put these images inside any text).

## Tutorials

{% content-ref url="../ranks-textures-prefix.md" %}
[ranks-textures-prefix.md](../ranks-textures-prefix.md)
{% endcontent-ref %}

{% content-ref url="emojis.md" %}
[emojis.md](emojis.md)
{% endcontent-ref %}

## Use specific a character

ItemsAdder will decide the custom character for you if you don't include the `symbol` property at all.\
You don't have to worry about it for each `emoji`/`font_image`, but if you really need to specify a custom character to be used for the custom `font_image` you can use the special property `symbol`.

#### For example:

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

## I don't care about ItemsAdder font\_image, I want to handle `default.json` by myself

You can do it, you just have to create a `default.json` file and handle it on your own.

{% content-ref url="manually-creating-font-images.md" %}
[manually-creating-font-images.md](manually-creating-font-images.md)
{% endcontent-ref %}

## Examples of content created with Font images feature

![](<../../../.gitbook/assets/immagine (77).png>)

![](<../../../.gitbook/assets/image (27) (4) (4).png>)

![](<../../../.gitbook/assets/immagine (65).png>)

![](<../../../.gitbook/assets/immagine (86).png>)

![](<../../../.gitbook/assets/immagine (90).png>)
