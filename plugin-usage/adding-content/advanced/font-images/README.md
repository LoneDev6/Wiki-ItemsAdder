# Картинки из символов Юникода

### Картинки юникода?

Эта функция позволяет вам создавать изображения на основе неиспользуемых символов юникода (белых квадратов - □), конкретно, чтобы создать: GUI, HUDы, эмоджи, свои собственне символы, [графические префиксы и все](../ranks-textures-tags.md), что вы можете придумать. (вы можете добавить их рядом с любым текстом).

{% hint style="warning" %}
When you create a \*\*font\_image \*\*make sure the \*\*background \*\*is \*\*not \*\*fully **transparent**.\
You have to set \*\*ALPHA \*\*to \*\*7 \*\*instead of 0.

Minecraft удаляет все (альфа 0) прозрачные пиксели по краям изображения.
{% endhint %}

## Туториалы

{% content-ref url="../ranks-textures-tags.md" %}
[ranks-textures-tags.md](../ranks-textures-tags.md)
{% endcontent-ref %}

{% content-ref url="../emojis.md" %}
[emojis.md](../emojis.md)
{% endcontent-ref %}

## Используйте конкретный символ

ItemsAdder определит пользовательский символ за вас, если вы не укажете конкретный символ.\
Вам не нужно беспокоиться об этом для каждого `emoji`/`font_image`, но если вам действительно нужно указать пользовательский символ, который будет использоваться для пользовательского `font_image`, вы можете использовать специальное свойство `symbol`.\
Например:

```yaml
smile:
  permission: smile
  show_in_gui: true
  path: "font/emoji/smile.png"
  symbol: "鄿"
  scale_ratio: 9
  y_position: 8
```

Minecraft будет показывать эмодзи улыбки каждый раз, когда вы пишете `鄿` в чате.

## Меня не волнует ItemsAdder font\_image, я хочу обрабатывать default.json самостоятельно.

Вы можете сделать это, вам просто нужно отредактировать файл `default.json`.

## Примеры контента, созданного с помощью функции Font mages

![](<../../../../.gitbook/assets/immagine (106).png>)

![](<../../../../.gitbook/assets/image (27) (4) (1).png>)

![](<../../../../.gitbook/assets/immagine (107).png>)

![](<../../../../.gitbook/assets/immagine (108).png>)

![](<../../../../.gitbook/assets/immagine (109).png>)
