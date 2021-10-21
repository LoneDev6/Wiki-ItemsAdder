# Текстуры для надетой брони

Если вы хотите добавить к броне не только цвет, но и текстуру, вы можете использовать **Optifine**.

### Загрузите [пример аддона здесь](https://www.spigotmc.org/resources/optifine-example-custom-textured-armor-itemsadder-addon.87846/)

## Пример пользовательской текстуры брони

![](../../../.gitbook/assets/image%20%2823%29.png)

![](../../../.gitbook/assets/image%20%2825%29.png)

### Шаг 1

Создайте свое **настраиваемый namespace** \(если вы этого еще не сделали\), следуйте [этому руководству](../beginners/creating-your-namespace.md).  
В этом руководстве **мой namespace** называется `mystuff`.

### Шаг 2

Создайте **собственные текстуры** для **инвентарных предметов**. Я поместил их в папку 
`plugins\ItemsAdder\data\resource_pack\assets\mystuff\textures\item\example_1`.

![](../../../.gitbook/assets/image%20%2821%29.png)

### Шаг 3

Создайте **собственные текстуры** для **брони на теле**.  Вы можете взять **шаблон** отсюда:  
`plugins\ItemsAdder\data\resource_pack\assets\minecraft\textures\models\armor\leather_layer_1.png`  
`plugins\ItemsAdder\data\resource_pack\assets\minecraft\textures\models\armor\leather_layer_2.png`

**Редактируйте текстуры** по своему усмотрению\\ (используйте Paint.NET, Photoshop, GIMP или подобные программы\) и **сохраните** их как `layer_1.png` и `layer_2.png`.

### Шаг 4

Создайте папку `optifine`, сюда мы хотим поместить **настроенные текстуры** для **ношеной брони**: `plugins\ItemsAdder\data\resource_pack\assets\minecraft\optifine`.

{% hint style="warning" %}
Вы **должны создать** ее в папке `minecraft`, к сожалению, вы **не можете** создать папку `optifine` в папке вашего **namespace** \ (в данном случае `mystuff`\), это ограничение **Optifine**.
{% endhint %}

### Шаг 5

Теперь сохраните **предыдущие созданные текстуры тела** \(`layer_1.png` и `layer_2.png` \) в этой папке: `plugins\ItemsAdder\data\resource_pack\assets\minecraft\optifine\cit\mystuff\armors\example_1\entity`.

Итак, у вас есть это:

![](../../../.gitbook/assets/image%20%2824%29.png)

### Шаг 6

**Создайте** эти файлы: **boots.properties**, **chestplate.properties**, **helmet.properties**, **leggings.properties** внутри `plugins\ItemsAdder\data\resource_pack\assets\minecraft\optifine\cit\mystuff\armors\example_1\entity`.

Каждый из файлов должен содержать следующее:

```elixir
nbt.itemsadder.namespace=mystuff
nbt.itemsadder.id=example_chestplate_1

type=armor
items=diamond_chestplate
texture.diamond_layer_1=layer_1
texture.diamond_layer_2=layer_2
```

Для каждого из файлов `.properties` вы должны **изменить 1-ю** строку, установив **ваш namespace** вместо "mystuff", **2-ю строку** на ваш **идентификатор элемента** и **5-ю строку** на **тип элемента** \(`diamond_leggings` , `diamond_boots` ....\)

Теперь у вас должен быть такой вид:

![](../../../.gitbook/assets/image%20%2826%29.png)

### Шаг 7

**Создайте файл**, который будет содержать эту пользовательскую броню, чтобы лучше ее организовать. Назовите его **example\_1.yml** и **разместите его** в вашем пространстве имен, в данном примере: `plugins\ItemsAdder\data\items_packs\mystuff\example_1.yml`.

### Шаг 8

**Добавьте содержимое** в **yml-файл**. Как вы видите, я решил взять за основу броню Minecraft DIAMOND и не указал цвет, потому что мне не нужно ее окрашивать, Optifine наложит на нее текстуру.

```yaml
info:
  namespace: mystuff
items:
  example_helmet_1:
    display_name: Example
    permission: example_helmet_1
    resource:
      generate: true
      material: DIAMOND_HELMET
      textures:
      - item/example_1/helmet.png
    durability:
      max_custom_durability: 275
    specific_properties:
      armor:
        slot: head
    attribute_modifiers:
      head:
        armor: 9
        armorToughness: 1
  example_chestplate_1:
    display_name: Example
    permission: example_chestplate_1
    resource:
      generate: true
      material: DIAMOND_CHESTPLATE
      textures:
      - item/example_1/chestplate.png
    durability:
      max_custom_durability: 400
    specific_properties:
      armor:
        slot: chest
    attribute_modifiers:
      chest:
        armor: 7
        armorToughness: 1
  example_leggings_1:
    display_name: Example
    permission: example_leggings_1
    resource:
      generate: true
      material: DIAMOND_LEGGINGS
      textures:
      - item/example_1/leggings.png
    durability:
      max_custom_durability: 375
    specific_properties:
      armor:
        slot: legs
    attribute_modifiers:
      legs:
        armor: 5
        armorToughness: 1
  example_boots_1:
    display_name: Example
    permission: example_boots_1
    resource:
      generate: true
      material: DIAMOND_BOOTS
      textures:
      - item/example_1/boots.png
    durability:
      max_custom_durability: 325
    specific_properties:
      armor:
        slot: feet
    attribute_modifiers:
      feet:
        armor: 3
        armorToughness: 1
```

### Готово!

## Примечания:

{% hint style="warning" %}
Если вы **создадите другой namespace**, содержащее **другие доспехи**, настоятельно рекомендуется **сохранить** **такую же структуру**, как я сделал в учебнике, чтобы **избежать ошибок**.

Например, если вы создадите новой namespace `space_armors`, у вас будет такая папка **optifine**: `plugins\ItemsAdder\data\resource_pack\assets\minecraft\optifine\cit\space_armors\armors`.
{% endhint %}

