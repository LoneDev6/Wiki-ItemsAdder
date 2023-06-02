# ExecutableItems

## [Şuradan İndir](https://www.spigotmc.org/resources/custom-items-free-executable-items-1-12-1-17.77578/)

## Bir ExecutableItem'i bir ItemsAdder özel öğesine bağlama

{% hint style="warning" %}
**ITEMSADDER**'ı **2.2.20+**'e Güncelleyin\
**ExecutableItems**'i **4.2.3.5+**'e Güncelleyin
{% endhint %}

## ItemsAdder öğesini oluşturun

### .yml dosyanızı her zamanki gibi oluşturun ve ItemsAdder öğesinin tüm özelliklerini ekleyin

Bu örnekte, ExecutableItem örnek dosyalarından örnek "spit" öğesine "executableitem_test" adlı bir **ItemsAdder** öğesini bağlayacağım.

```yaml
info:
  namespace: example
items:
  executableitem_test:
    display_name: executableitem_test
    permission: executableitem_test
    executableitem:
      id: Free_Spit
    resource:
      material: IRON_INGOT
      generate: true
      textures:
      - item/executableitem_test.png
    durability:
      max_custom_durability: 1324
```

{% hint style="success" %}
Gördüğünüz gibi \*\*`executableitem`\*\* ve **`id`**.\ adında yeni bir öznitelik belirledim.
Bunlar **iki öğeyi** **bağlamak** için kullanılır.
{% endhint %}

### Get the item

`/iaget executableitem_test` komutunu çalıştırın ve öğeyi alın!

![](<../../.gitbook/assets/image\_(140) (1) (1).png>)
