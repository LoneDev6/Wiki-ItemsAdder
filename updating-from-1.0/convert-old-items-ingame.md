# Конвертация старых предметов и блоков в игре

{% hint style="danger" %}
**Рекомендуется начать с создания нового, чистого мира, вместо того, чтобы использовать старый для работы над конвертацией.**
{% endhint %}

{% hint style="danger" %}
Данная функция может вызвать сильные лаги и нагрузки, включите ее только на пару дней.
{% endhint %}

## Как автоматически конвертировать старые предметы в мирах

После обновления ItemsAdder 1.0 до 2.0 вы заметите, что многие предметы изменились, но они являются теми же, что и до обновления.  
Поэтому я написал автоматическую функцию плагину, которая заменяет старые предметы на новые. Этот процесс происходит каждый раз, когда игрок открывает инвентарь в мире \(сундуки, другие контейнеры.. но НЕ свой инвентарь\).

Чтобы включить эту функцию - откройте файл конфигурации `converter.yml` плагина **ItemsAdder 2.0**

#### Убедитесь, что функция inventory-open установлена на значение true

```text
items-auto-update:
  debug: false
  inventory-open: true
```

## Как автоматически конвертировать блоки, которые установлены в мире

Откройте файл конфигурации `converter.yml` и сопоставьте **модели\_id** старых блоков с новыми, **уложенными в папки** блоками IA 2.0. В качестве примера - я уже добавил туда старые блоки ItemsAdder старой версии и сопоставил их с уложенными блоками версии 2.0.

#### Убедитесь, что enabled установлено на true

```text
blocks:
  enabled: true
  debug: false
  conversion-map:
    "1": "itemsadder:ruby_block"
    "2": "itemsadder:crystal_block"
    "3": "itemsadder:spinel_block"
    "4": "itemsadder:turquoise_block"
    "5": "itemsadder:aqua_aura_block"
    "6": "itemsadder:amethyst_block"
    "7": "itemsadder:amethyst_prism_block"
    "8": "itemsadder:crying_obsidian"
    "9": "itemsadder:nice_stone"
    "10": "itemsadder:nice_wood"
    "11": "itemsadder:modern_stone"
    "12": "itemsadder:modern_sandstone"
    "13": "itemsadder:modern_quartz"
    "14": "itemsadder:ruby_ore"
    "15": "itemsadder:spinel_ore"
    "16": "itemsadder:turquoise_ore"
    "17": "itemsadder:aqua_aura_ore"
    "18": "itemsadder:amethyst_ore"
    "19": "itemsadder:bronze_ore"
    "20": "itemsadder:mysterious_ore"
    "21": "itemsadder:end_ore"
    "22": "itemsadder:restoration_table"
    "23": "itemsadder:customization_table"
    "24": "itemsadder:iron_dirt_ore"
    "25": "itemsadder:gold_dirt_ore"
    "26": "itemsadder:coal_dirt_ore"
    "27": "itemsadder:blaze_powder_ore"
    "28": "itemsadder:nether_alchemy_ore"
```

