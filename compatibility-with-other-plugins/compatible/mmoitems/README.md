---
description: ItemsAdder is compatible with MMOItems and it's very easy to integrate.
---

# MMOItems

Download **MMOItems** [here](https://www.spigotmc.org/resources/mmoitems-premium.39267/)

### Here you can download the example package shown in this tutorial

{% embed url="https://www.spigotmc.org/resources/items-mmoitem-example-integration.88351/" %}

## Known limitations

{% embed url="https://github.com/PluginBugs/Issues-ItemsAdder/issues/2008" %}

## Connect an MMOItem to an ItemsAdder item

### Use the command /mmoitems browse

![](<../../../.gitbook/assets/immagine (28).png>)

### Create a new MMOItem

![](<../../../.gitbook/assets/immagine (92).png>)

![](<../../../.gitbook/assets/immagine (11).png>)

### Add all the attributes you want, for example magic damage etc

![](<../../../.gitbook/assets/immagine (70).png>)

### MMOItem preview inside /mmoitems browse

![](<../../../.gitbook/assets/immagine (74).png>)

### Create your .yml file as usual and add all the properties for the ItemsAdder item

`ItemsAdder/contents/mmoitems_example/configs/example.yml`

{% hint style="success" %}
As you can see I set a new attribute called **`mmoitem`** and also **`type`** and **`id`**.\
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

### Create your .png texture as usual

`ItemsAdder/contents/mmoitems_example/resourcepack/mmoitems_example/textures/item/test.png`

### Get the item

Use the command `/iaget mmoitems_example:test` to get your finished item

![](<../../../.gitbook/assets/immagine (97).png>)

![](<../../../.gitbook/assets/immagine (25).png>)
