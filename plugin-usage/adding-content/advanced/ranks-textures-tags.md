# Текстурированные префиксы \(тэги\)

Вы можете сделать свои текстуры и использовать их в качестве рангов на вашем сервере, чтобы сделать ваш сервер более "профессиональным", привлекательным и уникальным.  
Ознакомьтесь с этим аддоном, чтобы создать свои собственные префиксы, это очень просто: [https://www.spigotmc.org/resources/ranks-betterranks-with-custom-textures-itemsadder-addon.84852/](https://www.spigotmc.org/resources/ranks-betterranks-with-custom-textures-itemsadder-addon.84852/)

![](../../../.gitbook/assets/image%20%2827%29.png)

{% hint style="danger" %}
### Обновите [ItemsAdder до версии 2.1.30](https://www.spigotmc.org/resources/%E2%9C%85must-have%E2%9C%85-itemsadder%E2%9C%A8textures-3d-models-huds-gui-emojis-ores-blocks-wings-tails-hats.73355/) или выше
{% endhint %}

{% hint style="warning" %}
### Используйте [LuckPerms](https://www.spigotmc.org/resources/luckperms.28140/) и [TAB](https://www.spigotmc.org/resources/tab-1-7-x-1-16-5.57806/) чтобы следовать последующей инструкции, метод добавления рангов в плагины будет отличаться, если вы решите использовать другие плагины.
{% endhint %}

{% hint style="info" %}
### Если вы используйте иной плагин для префиксов - [обратитесь к этой статье](../../using-font_images-emojis-everywhere.md), чтобы отображать ваши ранги
{% endhint %}

## Luckperms

### Создание группы, Пример \(admin\)

Используйте команду - `/lp creategroup admin`

### Добавление префикса

Используйте эту команду - `/lp group admin meta addprefix 100 :admin:`

### Выдача группы игроку

Используйте эту команду \(поменяйте мой ник LoneDev на нужный\) `/lp user LoneDev group add admin`

![](../../../.gitbook/assets/immagine%20%2843%29.png)

## TAB

{% hint style="warning" %}
Убедитесь, что у вас установлен [PlaceholderAPI](../../using-font_images-emojis-everywhere.md)
{% endhint %}

### Откройте файл конфигурации config.yml плагина TAB

**Добавьте** эти строки под категорией `groups` или измените существующие.  
\(Вы должны использовать запонитель `%img_admin%`, вместо `:admin:`, так как **TAB** распознает только заполнители **PlaceholderAPI**, игнорируя заполнители **ItemsAdder**. Так же может быть с **другими плагинами**\)

```yaml
  Admin:
    tabprefix: '%img_admin%  '
    tagprefix: '%img_admin%  '
```

После этого используйте команду - `/tab reload`

![](../../../.gitbook/assets/immagine%20%2841%29.png)

![](../../../.gitbook/assets/immagine%20%2842%29.png)

