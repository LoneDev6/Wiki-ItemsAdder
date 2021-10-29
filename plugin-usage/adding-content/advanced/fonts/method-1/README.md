# TTF Способ

Этот метод позволит вам использовать файлы шрифтов .ttf

## Пример

![](<../../../../../.gitbook/assets/immagine (1).png>)

Чтобы сделать это:

* скачайте японский шрифт [тут](http://matteodev.it/spigot/itemsadder/res/v2/font.zip)
* разорхивируйте контент в эту папку - `plugins\ItemsAdder\data\resource_pack\assets\minecraft\font`
* откройте основной файл конфигурации config.yml и установите значение для этой строки - `custom-font enabled: true`
* и как всегда, если вы используете [dropbox](https://github.com/LoneDev6/Wiki-ItemsAdder/tree/b6ca0e098a470a4971b25346a7a58c6ba6fb5a38/plugin-usage/adding-content/resourcepack-hosting/resourcepack-on-dropbox.md) вы должны обновить pack.zip, после - перезагрузить сервер.

{% hint style="warning" %}
Minecraft has a bug that will make the game crash when using custom TTF fonts.

This happens only on some Intel integrated GPUs and old versions of the game, I can't fix this bug, [read more here](https://bugs.mojang.com/browse/MC-180529?jql=text%20\~%20%22ttf%20crash%22).
{% endhint %}