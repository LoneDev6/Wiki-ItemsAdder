# Редактирование меню /ia

## Настройка меню и категории "All"

ia\_gui.yml содержит в себе настройки всего меню из команды `/ia`.  
Кроме того, там содержатся категория "all", которая отоюражает все предметы и блоки ItemsAdder.

{% hint style="info" %}
Все остальные классические категории находятся тут: `plugins\ItemsAdder\data\items_packs\various_configs\ia_gui_default_categories.yml`
{% endhint %}

## Создание своей категории предметов

Если вы хотите создать свою собственную категорию вы должны создать свой собственный файл .yml в вашей собственной [папке](adding-content/beginners/basic-concepts/namespace.md).  
Пример файла конфигурации категории:

```yaml
info:
  namespace: your_namespace
categories:
  armors:
    enabled: true
    icon: "itemsadder:ruby_head"
    name: 'Armors'
    permission: "ia.menu.armors"
    #THIS IS OPTIONAL. Plugin will take the one in ia_gui.yml if not set.
    font_image:
      name: "mcguis:blank_menu"
      x_position_pixels: -16
    #THIS IS OPTIONAL. Plugin will take the one in ia_gui.yml if not set.
    title_position_pixels: 0
    items:
      - "itemsadder:ruby_sword"
      - "itemsadder:ruby_head"
      - "itemsadder:ruby_chest"
      - "itemsadder:ruby_legs"
      - "itemsadder:ruby_boots"
      - "itemsadder:spinel_head"
      - "itemsadder:spinel_chest"
      - "itemsadder:spinel_legs"
```

Не забывайте выдавать игрокам права на каждую добавленную категори, если вы хотите, чтобы они их видели.  
Пример прав для игрока: **ia.menu.armors**

{% hint style="info" %}
**font\_image и title\_position\_pixels являются необязательными.**.  
Если они не заданы, плагин возьмет те, что указаны в `ia_gui.yml`.
{% endhint %}

{% hint style="success" %}
**Категории** с **одинаковыми именами**, но отличными друг от друга папками **будут соединены в одну**, это довольно **полезно**, если вы имеете 2 категори для мечей. Это дает возможность видеть одну организованную категорию для мечей вместо двух в меню **/ia**.
{% endhint %}

