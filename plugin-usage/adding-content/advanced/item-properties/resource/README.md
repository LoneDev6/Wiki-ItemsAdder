---
Описание: 'Настройки, которые позволят изменить графику (модели/текстуры) для предметов'
---

# Настройка материала

{% hint style="danger" %}
Важно - прежде чем начать, следует знать о том, что использование ЗАГЛАВНЫХ и "особых" символов \(!?@; и так далее\) в именах предметов, в названиях папок и в именах файлов текстур \(PNG\) или моделей \(JSON\) запрещено!
{% endhint %}

## Генерация модели

Эти параметры указывают плагину ItemsAdder какие текстуры/модели должны использоваться, эти параметры указываются под "категорией" `resource`.  
Небольшой пример:

```yaml
  resource:
    material: DIAMOND_SWORD
    generate: true
    textures:
    - item/example_item.png
```

`material` - ванильный предмет, взятый за основу создания нового предмета.

`generate` - Указывает IA нужно ли генерировать модель автоматически \(ванильные плоские предметы, взятые в руку или блоки\) или использовать именно вашу модель с вашей текстурой.

`textures` - путь к текстуре или нескольким текстурам для автоматической генерации модели.

### Куда класть файл текстуры для автоматической генерации?

Текстуры, которые указаны в параметре `textures` должны находится в правильной папке.  
Пример использования - если вы хотите установить в параметре `textures` что-то подобное, как в примере выше с вашей уже **папкой**, допустим, `myitems` \(имя папки взято для примера\) и хотите положить туда текстуру с названием `example_item.png` _\*\*_то вы должны положить файл по данному пути: `plugins\ItemsAdder\data\resource_pack\assets\`myitems`\textures\item\`example\_item.png

Если папок по вашему пути нет - создайте их. Путь в конфигурации предмета нужно указывать после папки textures, как пример: Из полного пути `ItemsAdder\data\resource_pack\assets\myitems\textures\item\example_item.png` вам нужно указать только `item\example_item.png`

{% hint style="info" %}
Вы можете не указывать формат файла `.png` в параметре `textures`, IA найдет файл по его имени автоматически и сам распознает формат
{% endhint %}

## Использование своих 3D-моделей \(.json файлы\)

Если у вас есть своя модель меча или предмета - вы должны указать плагину IA не генерировать модель предмета автоматически.  
Пример:

```yaml
  resource:
    material: DIAMOND_SWORD
    generate: false
    model_path: item/floating_sword
```

### Куда класть свою модель?

Модель, которую вы указываете в параметре `model_path` должна находится в правильной папке.  
Если вы хотите установить параметр `model_path` как в примере, но со своей **папкой**, допустим, `myitems` \(имя папки взято для примера\) и хотите положить туда модель `floating_sword.json` _\*\*_то вы должны положить файл по данному пути: `plugins\ItemsAdder\data\resource_pack\assets\myitems\models\item`

Если папок по вашему пути нет - создайте их.

{% hint style="warning" %}
### Текстура модели не работает!

Если ваша модель отображается без нужных текстур, то вы должны открыть файл модели и исправить пути к файлам текстур.  
Пример, если вы имеете, допустим, что-то подобное:

```yaml
  {
  "textures": {
    "4": "item/alchemy_candles/white_candle",
    "6": "item/alchemy_candles/candle_top",
    "7": "item/alchemy_candles/red_candle",
    "8": "item/alchemy_candles/fire"
  },
```

Вы должны заменить это, на это \(`your_namespace` это имя вашей [папки ](../../../beginners/basic-concepts/namespace.md)folder\):

```yaml
{
  "textures": {
    "4": "your_namespace:item/alchemy_candles/white_candle",
    "6": "your_namespace:item/alchemy_candles/candle_top",
    "7": "your_namespace:item/alchemy_candles/red_candle",
    "8": "your_namespace:item/alchemy_candles/fire"
  },
```
{% endhint %}

## Прозрачность в текстурах \(стекло или что-то в этом духе\)

{% page-ref page="../../../../../faq/can-i-create-slabs-stairs/transparent-textures.md" %}

## Указать custom\_model\_data вручную

Если вы хотите указать custom\_model\_data \(CustomModelData\) вручную, то используйте:

```yaml
    resource:
      material: CLOCK
      model_id: 4000
      generate: false
      model_path: "item/multimeter"
```

Вы должны создать модель с именем "multimeter" \(в данном примере\) внутри этой папки: `assets\ВАША_ПАПКА\models\item`

Также, вы можете указать плагину IA автоматически создать новую модель из одной лишь текстуры на основе конкретной модели по ее ID:

```yaml
info:
  namespace: slimefun
items:
  carbonado:
    resource:
      material: PLAYER_HEAD
      generate: true
      model_id: 4000
      textures:
      - slimefun/carbonado.png
```

{% hint style="warning" %}
### IMPORTANT

If you previously created this item and already used `/iazip` command and now you change the **model\_id**:  
it's **very important** to run the command `/iacleancache items` to **remove unused IDs** and **update** the **changed ID**.
{% endhint %}



