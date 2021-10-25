# Цветные модели

{% hint style="warning" %}
Доступно только в **ItemsAdder 2.3.11+**.
{% endhint %}

{% hint style="info" %}
Если вы хотите сделать цветной элемент\(например, цветную мебель\) или цветное транспортное средство, вам не нужно делать отдельную модель для каждого элемента с разным цветом.
{% endhint %}

## Как я могу это сделать?

### 1. откройте вашу модель в blockbench

![](<../../../.gitbook/assets/immagine (90).png>)

### 2. выберите лицо, которое вы хотите раскрасить

![](<../../../.gitbook/assets/immagine (70).png>)

### 3. используйте белую/серую текстуру, для лучшего окрашивания

### 4. включите скрытую функцию "Оттенок"

![](<../../../.gitbook/assets/immagine (64).png>)

![](<../../../.gitbook/assets/immagine (56).png>)

### 5. включите раскраску для каждого лица, которое вы хотите раскрасить

![](<../../../.gitbook/assets/immagine (81).png>)

### 6. Установите атрибут конкретного цвета в вашем .yml-файле.

В этом примере я использовал `leather_horse_armor`, но вы также можете использовать `potion`.

```yaml
  orange_modern_lamp:
    display_name: "Orange Modern Lamp"
    specific_properties:
      leather_horse_armor:
        color: ORANGE
    resource:
      material: LEATHER_HORSE_ARMOR
      generate: false
      model_path: item/template_modern_lamp
```

{% hint style="info" %}
Если вы хотите использовать определенный цвет, вы можете воспользоваться[ этой программой выбора цвета](https://www.mathsisfun.com/hexadecimal-decimal-colors.html).  
Скопируйте **десятичный** цвет \(hex\).
{% endhint %}

### 7. теперь вы можете создать столько мебели, сколько захотите, просто измените цвет, и она будет автоматически раскрашена игрой

![](<../../../.gitbook/assets/immagine (92).png>)



