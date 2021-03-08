---
Информация: ItemsAdder совместим с MMOItems и крайне прост в использовании для него.
---

# MMOItems

Загрузить **MMOItems** можно [тут](https://www.spigotmc.org/resources/mmoitems-premium.39267/)

## По этой ссылке вы можете загрузить пример, который использован в этом туториале:

{% embed url="https://www.spigotmc.org/resources/items-mmoitem-example-integration.88351/" %}

## Как присоединить MMOItem к предмету ItemsAdder

{% hint style="warning" %}
ОБНОВИТЕ **ITEMSADDER** ДО ВЕРСИИ **2.1.29+** И **MMOITEM** ДО ВЕРСИИ **6.5.1+**
{% endhint %}

### - используйте команду /mmoitems browse

![](../../.gitbook/assets/immagine%20%2829%29.png)

### - создайте новый предмет MMOItem

![](../../.gitbook/assets/immagine%20%2835%29.png)

![](../../.gitbook/assets/immagine%20%2836%29.png)

### - и все атрибуты плагина, если хотите. Магический урон, к примеру

![](../../.gitbook/assets/immagine%20%2828%29.png)

### - Превью предмета MMOItem в /mmoitems browse

![](../../.gitbook/assets/immagine%20%2838%29.png)

## Создайте предмет ItemsAdder 

### - Создайте конфигурационный файл .yml как и обычно и задайте все нужные параметры ItemsAdder предмету

![](../../.gitbook/assets/immagine%20%2830%29.png)

{% hint style="success" %}
Как вы можете заметить, я использовал новый атрибут **`mmoitem`**, а так же **`type`** и **`id`**.  
Они нужны для **связки** двух предметов в **один**.
{% endhint %}

```yaml
info:
  namespace: mmoitems_example
items:
  test:
    display_name: ""
    permission: example_item
    mmoitem:
      type: SWORD
      id: TEST
    resource:
      material: DIAMOND_SWORD
      generate: true
      textures:
      - item/test.png
    durability:
      max_custom_durability: 1324
```

### - Создайте текстуру .png для предмета ItemsAdder, как и обычно

![](../../.gitbook/assets/immagine%20%2832%29.png)

### - Получите свой предмет

Используйте команду `/iaget mmoitems_example:example_item` чтобы получить свой готовый предмет

![](../../.gitbook/assets/immagine%20%2833%29.png)

![](../../.gitbook/assets/immagine%20%2837%29.png)

