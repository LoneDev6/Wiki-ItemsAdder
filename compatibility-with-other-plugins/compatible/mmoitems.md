---
description: ItemsAdder is compatible with MMOItems and it's very easy to integrate.
---

# MMOItems

Download **MMOItems** [here](https://www.spigotmc.org/resources/mmoitems-premium.39267/)

## Here you can download the example package shown in this tutorial

{% embed url="https://www.spigotmc.org/resources/items-mmoitem-example-integration.88351/" caption="" %}

## How to connect an MMOItem to a ItemsAdder custom item

{% hint style="warning" %}
UPDATE **ITEMSADDER** TO **2.1.29+** AND **MMOITEM** to **6.5.1+**
{% endhint %}

### - use the command /mmoitems browse

![](../../.gitbook/assets/immagine%20%2829%29.png)

### - create a new MMOItem

![](../../.gitbook/assets/immagine%20%2835%29.png)

![](../../.gitbook/assets/immagine%20%2836%29.png)

### - add all the attributes you want, for example magic damage etc

![](../../.gitbook/assets/immagine%20%2828%29.png)

### - MMOItem preview inside /mmoitems browse

![](../../.gitbook/assets/immagine%20%2838%29.png)

## Create the ItemsAdder item

### - create your .yml file as usual and add all the properties for the ItemsAdder item

![](../../.gitbook/assets/immagine%20%2830%29.png)

{% hint style="success" %}
As you can see I set a new attribute called **`mmoitem`** and also **`type`** and **`id`**.  
These are used to **connect** the **two items**.
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

### - create your .png texture as usual

![](../../.gitbook/assets/immagine%20%2832%29.png)

### - get the item

Use the command `/iaget mmoitems_example:example_item` to get your finished item

![](../../.gitbook/assets/immagine%20%2833%29.png)

![](../../.gitbook/assets/immagine%20%2837%29.png)

