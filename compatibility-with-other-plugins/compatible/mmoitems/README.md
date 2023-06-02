---
description: ItemsAdder, MMOItems ile uyumludur ve entegrasyonu çok kolaydır.
---

# MMOItems

**MMOItems** Yükle [burdan](https://www.spigotmc.org/resources/mmoitems-premium.39267/)

### Bu eğitimde gösterilen örnek paketi buradan indirebilirsiniz.

{% embed url="https://www.spigotmc.org/resources/items-mmoitem-example-integration.88351/" %}

## Bilinen sınırlamalar

{% embed url="https://github.com/PluginBugs/Issues-ItemsAdder/issues/2008" %}

## Bir MMOItem'i bir ItemsAdder öğesine bağlayın

### /mmoitems browse komutunu kullanın

![](<../../../.gitbook/assets/image_(25).png>)

### Yeni bir MMOItem oluşturun

![](<../../../.gitbook/assets/image_(26).png>)

![](<../../../.gitbook/assets/image_(29).png>)

### Add all the attributes you want, for example magic damage etc

![](<../../../.gitbook/assets/image_(28).png>)

### MMOItem preview inside /mmoitems browse

![](<../../../.gitbook/assets/image_(30).png>)



### .yml dosyanızı her zamanki gibi oluşturun ve ItemsAdder öğesinin tüm özelliklerini ekleyin

`ItemsAdder/contents/mmoitems_example/configs/example.yml`

{% hint style="success" %}
Gördüğünüz gibi **`mmoitem`** ve ayrıca **`type`** ve **`id`**.\ adında yeni bir özellik belirledim.
Bunlar **iki öğeyi** **bağlamak** için kullanılır.
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

### .png dokunuzu her zamanki gibi oluşturun

`ItemsAdder/contents/mmoitems_example/resourcepack/mmoitems_example/textures/item/test.png`

### öğeyi al

Use the command `/iaget mmoitems_example:test` to get your finished item

![](<../../../.gitbook/assets/image_(33).png>)

![](<../../../.gitbook/assets/image_(34).png>)
