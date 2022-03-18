# ExecutableItems

## [Download here](https://www.spigotmc.org/resources/custom-items-free-executable-items-1-12-1-17.77578/)

## How to connect an ExecutableItem to an ItemsAdder custom item

{% hint style="warning" %}
UPDATE **ITEMSADDER** TO **2.2.20+**
{% endhint %}

## Create the ItemsAdder item

### Create your .yml file as usual and add all the properties for the ItemsAdder item

In this example I will connect an **ItemsAdder** item called `executableitem_test` to the example `spit` item from ExecutableItem example files.

```yaml
info:
  namespace: example
items:
  executableitem_test:
    display_name: executableitem_test
    permission: executableitem_test
    executableitem:
      id: spit
    resource:
      material: IRON_INGOT
      generate: true
      textures:
      - item/executableitem_test.png
    durability:
      max_custom_durability: 1324
```

{% hint style="success" %}
As you can see I set a new attribute called **`executableitem`**and **`id`**.\
These are used to **connect** the **two items**.
{% endhint %}

### Get the item

Run `/iaget executableitem_test` and get the item!

![](<../../.gitbook/assets/immagine (153).png>)
