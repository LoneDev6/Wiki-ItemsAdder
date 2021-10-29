# Картинки из символов Юникода

### Картинки юникода?

Эта функция позволяет вам создавать изображения на основе неиспользуемых символов юникода (белых квадратов - □), конкретно, чтобы создать: GUI, HUDы, эмоджи, свои собственне символы, [графические префиксы и все](../ranks-textures-tags.md), что вы можете придумать. (вы можете добавить их рядом с любым текстом).

{% hint style="warning" %}
When you create a **font\_image **make sure the **background **is **not **fully **transparent**.\
You have to set **ALPHA **to **7 **instead of 0.

Minecraft removes all (alpha 0) transparent pixels on the edges of the image.
{% endhint %}

## Туториали

{% content-ref url="../ranks-textures-tags.md" %}
[ranks-textures-tags.md](../ranks-textures-tags.md)
{% endcontent-ref %}

{% content-ref url="../emojis.md" %}
[emojis.md](../emojis.md)
{% endcontent-ref %}

## Use specific a character

ItemsAdder will decide the custom character for you if you don't specify a specific symbol.\
You don't have to worry about it for each `emoji`/`font_image`, but if you really need to specify a custom character to be used for the custom `font_image` you can use the special property `symbol`.\
For example:

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

## I don't care about ItemsAdder font\_image, I want to handle default.json by myself.

You can do it, you just have to edit the `default.json` file.

## Examples of content created with Font mages feature

![](<../../../../.gitbook/assets/immagine (106).png>)

![](<../../../../.gitbook/assets/image (27) (4) (1).png>)

![](<../../../../.gitbook/assets/immagine (107).png>)

![](<../../../../.gitbook/assets/immagine (108).png>)

![](<../../../../.gitbook/assets/immagine (109).png>)
