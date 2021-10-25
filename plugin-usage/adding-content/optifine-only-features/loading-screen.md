# Loading screen

## Ванильный экран загрузки

![](<../../../.gitbook/assets/immagine (44).png>)

## Пользовательский экран загрузки

![](<../../../.gitbook/assets/immagine (51).png>)

## Как это сделать?

### До выхода Minecraft 1.16

![](<../../../.gitbook/assets/immagine (49).png>)

Вы можете получить [GIMP](https://www.gimp.org/downloads/) шаблон [здесь](https://github.com/LoneDev6/SpigotUtilities/blob/master/ItemsAdder/various\_files/mojang\_template.xcf).

* Отредактируйте мой файл:`plugins\ItemsAdder\data\resource_pack\assets\minecraft\textures\gui\title\mojang.png`.
* Сохраните файл в том же месте

### После выхода Minecraft 1.16

![](<../../../.gitbook/assets/immagine (48).png>)

{% hint style="warning" %}
**Предупреждение**: известная проблема заключается в том, что при использовании `/iazip` или `/iatexture` для наложения текстуры в игре логотип отображается с ошибкой.\
По какой-то причине логотип будет отображаться без проблем только при присоединении к серверу, возможно, это ошибка Optifine.
{% endhint %}

Немного сложно:\
В основном вам придется разделить изображение пополам, как это сделал я, поэтому вы должны уметь пользоваться программами для редактирования изображений(Photoshop, GIMP или Paint.net).\
Вы можете получить [GIMP](https://www.gimp.org/downloads/) шаблон \[здесь].(https://github.com/LoneDev6/SpigotUtilities/blob/master/ItemsAdder/various\_files/mojangstudios\_template.xcf).

* Отредактируйте мой файл: `plugins\ItemsAdder\data\resource_pack\assets\minecraft\textures\gui\title\mojangstudios.png`
* Сохраните файл в том же месте

### Как изменить цвет фона (1.16 только\\)

Создайте новый файл (или отредактируйте уже созданный): `plugins\ItemsAdder\data\resource_pack\assets\minecraft\optifine\color.properties`.

Поместите этот контент:

```yaml
###############################################################################
# Resource loading screen
###############################################################################
# Background color
screen.loading=14181c
# Loading bar background color
screen.loading.bar=14181c
# Loading bar outline
screen.loading.outline=303336
# Loading bar foreground color
screen.loading.progress=1f17ce
# Logo blend mode
# Where src, dst, srcA and dstA are one of: 
#   ZERO, ONE, SRC_COLOR, ONE_MINUS_SRC_COLOR, DST_COLOR, ONE_MINUS_DST_COLOR, 
#   SRC_ALPHA, ONE_MINUS_SRC_ALPHA, DST_ALPHA, ONE_MINUS_DST_ALPHA, SRC_ALPHA_SATURATE
screen.loading.blend=DST_COLOR
```

Вы можете редактировать цвета с помощью \[HEX color picker] (https://www.w3schools.com/colors/colors\_picker.asp).

{% hint style="warning" %}
Не включайте `#` в начало кода цвета.
{% endhint %}
