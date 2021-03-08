# Удаление заводского (изначального) контента плагина

## Как мне удалить весь заводской (изначальный) контент плагина, который мне не нужен?

Если вы хотите использовать плагин только для своих предметов и блоков и прочих штук без использования классических вещей плагина - воспользуйтесь инструкцией ниже, тут нет ничего сложного.  
Инструкция:  


### 1. Удаление из главной конфигурации (Config.yml)

Откройте главный файл конфигурации `config.yml` и установите на **false** следующие строки:

```yaml
  extract-default-items: false
  extract-default-resources: false
```

### 2. Удалите папки, которые вам не нужны. (Первое - файлы конфигурации контента, второе - текстуры контента)

#### Twitter emojis

`plugins\ItemsAdder\data\items_packs\twitteremojis`  
`plugins\ItemsAdder\data\resource_pack\assets\twitteremojis`

#### Magic craft

`plugins\ItemsAdder\data\items_packs\magiccraft`  
`plugins\ItemsAdder\data\resource_pack\assets\magiccraft`

#### Minecraft Emojis

`plugins\ItemsAdder\data\items_packs\mcemojis`  
`plugins\ItemsAdder\data\resource_pack\assets\mcemojis`

#### Предметы ItemsAdder

`plugins\ItemsAdder\data\items_packs\mcemojis`  
`plugins\ItemsAdder\data\resource_pack\assets\itemsadder`

####  Образец предметов

`plugins\ItemsAdder\data\items_packs\example`  
`plugins\ItemsAdder\data\resource_pack\assets\example`

{% hint style="danger" %}
## Не удаляйте другие папки, так как это может повредить работу плагина. Удаляйте только то, что указано в списке выше.

Если вы удалите папки minecraft, mcguis или mcicons - некоторые части плагина могут лишиться текстур или плагин может перестать работать.
{% endhint %}



