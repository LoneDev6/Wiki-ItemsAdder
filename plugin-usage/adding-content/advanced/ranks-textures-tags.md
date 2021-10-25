# Текстурированные префиксы \(тэги\)

## Придайте своему серверу профессиональный вид с помощью пользовательских званий

![](../../../.gitbook/assets/image%20%2827%29%20%284%29%20%281%29.png)

{% hint style="warning" %}
### Вы должны использовать [LuckPerms](https://www.spigotmc.org/resources/luckperms.28140/) и [TAB](https://www.spigotmc.org/resources/tab-1-7-x-1-16-5.57806/) следовая этому руководству, метод может отличаться, если вы используете другие разрешения и плагины TABs.

### Если вы используете другой префиксный плагин, вам может понадобиться использовать [этот метод](../../using-font_images-emojis-everywhere.md) для показа ранга
{% endhint %}

## Как создать свои ранги?

### Скачать пример рангов

* Обновление до версии **ItemsAdder 2.1.30** или следующей.
* Загрузите [примеры рангов здесь](https://www.spigotmc.org/resources/ranks-betterranks-with-custom-textures-itemsadder-addon.84852/)

### Создайте новую конфигурацию ранга

Откройте файл `plugins\ItemsAdder\data\items_packs\betterranks\ranks.yml` и **скопируйте** и **вставьте** один из них.  
Затем переименуйте его в свой ранг, также определите новое **.png** имя файла, например `custom`.

```yaml
  custom:
    permission: "ranks.custom"
    show_in_gui: true
    suggest_in_command: false
    path: "font/rank/custom.png"
    scale_ratio: 9
    y_position: 8
```

{% hint style="warning" %}
Не изменяйте `scale_ratio` и `y_position`. Это приведет к тому, что звания будут выглядеть пикселированными
{% endhint %}

### Создание png-изображения

**Скопируйте** один из моих рангов **.png** и отредактируйте его из папки `plugins\ItemsAdder\data\resource_pack\assets\betterranks\textures\font\rank\`.

Вы можете редактировать его с помощью **Photoshop**, **GIMP**, **Paint.NET** или любой другой программы редактирования, которую вы используете.  
Например, скопируйте файл `admin.png`, назовите его `custom.png` и отредактируйте его.

{% hint style="danger" %}
### Не изменяйте высоту изображения ранга! Изменяйте только ширину, иначе изображение будет выглядеть пикселированным!
{% endhint %}

### Пример:

Например, чтобы сделать ранг, похожий на мой аддон **BetterRanks**, нужно просто использовать шрифт [Minecraftia](https://www.dafont.com/andrew-tyler.d2526) и обрезать несколько пикселей.

![](../../../.gitbook/assets/image%20%2839%29.png)

![](../../../.gitbook/assets/image%20%2836%29.png)

![](../../../.gitbook/assets/image%20%2838%29.png)

![](../../../.gitbook/assets/image%20%2837%29.png)

## Использование ранга в игре

### Лакпермы (Luckperms)

#### Создание группы, Пример \(admin\)

Используйте команду - `/lp creategroup admin`

#### Добавление префикса

Используйте эту команду - `/lp group admin meta addprefix 100 :admin:`

#### Выдача группы игроку

Используйте эту команду \(поменяйте мой ник LoneDev на нужный\) `/lp user LoneDev group add admin`

![](../../../.gitbook/assets/immagine%20%2843%29.png)

### TAB

{% hint style="warning" %}
Убедитесь, что у вас установлен [PlaceholderAPI](../../using-font_images-emojis-everywhere.md)
{% endhint %}

#### Откройте файл конфигурации config.yml плагина TAB

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

