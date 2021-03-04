# Популяция в мире

### Два примера популяции блоков

```yaml
worlds_populators:
  custom_block:
    block: myitems:custom_block
    worlds:
    - world
    replaceable_blocks:
    - STONE
    - DIRT
    - ANDESITE
    - GRANITE
    - COBBLESTONE
    - GRAVEL
    biomes:
    - PLAINS
    chance: 70.0
    max_height: 45
    min_height: 25
    amount: 6
    iterations: 1
  custom_block_2:
    block: myitems:custom_block_2
    worlds:
    - world
    replaceable_blocks:
    - DIRT
    chance: 100.0
    max_height: 64
    min_height: 40
    amount: 3
    iterations: 1
```

Эти настройки укажут ItemsAdder генерировать блок "myitems:custom\_block" в мире с названием "world" и заменять блоки следующего списка: `STONE, DIRT, ANDESITE, GRANITE, COBBLESTONE, GRAVEL` только в биоме `PLAINS`.

### количество, итерация, шанс

{% hint style="warning" %}
Я советую вам копировать значения из файла blocks.yml, который я создал в папке itemsadder.  
Не выставляйте огромные значения, иначе сервер начнет лагать или подохнет.  
Берите за основу мои значения.  
  
Единственная вещь, которую вы можете смело менять без рисков - **шанс**.
{% endhint %}

**iterations**: количество жил, которые должны быть созданы (итерация)  
**amount**: количество блоков в одной жиле \(или по другому **размер жилы**\)  
**chance**: шанс генерации такой руды на каждый чанк, вы можете выставить это на значение 100, для обычных руд и выставить этот шанс ниже для крайне редкой руды.

### Биомы

Вы можете не использовать эту строку, тогда плагин будет генерировать руду во всех биомах.

```yaml
  custom_block:
    block: myitems:custom_block
    worlds:
    - world
    replaceable_blocks:
    - STONE
    - DIRT
    - ANDESITE
    - GRANITE
    - COBBLESTONE
    - GRAVEL
    chance: 70.0
    max_height: 45
    min_height: 25
    amount: 6
    iterations: 1
```

### Заменяемые блоки

Вы можете не использовать эту строку, тогда плагин будет создавать свою руду, заменяя все блоки без их проверки.

```yaml
  custom_block:
    block: myitems:custom_block
    worlds:
    - world
    chance: 70.0
    max_height: 45
    min_height: 25
    amount: 6
    iterations: 1
```



