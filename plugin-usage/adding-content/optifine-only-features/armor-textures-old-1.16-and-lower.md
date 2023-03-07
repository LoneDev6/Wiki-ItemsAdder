---
description: Manually creating Optifine custom armors textures
---

# Armor textures (old 1.16 and lower)

{% hint style="danger" %}
**Optifine** is **not officially supported** by **ItemsAdder**, but if you want to get more customization you can read these tutorials.

#### Please don't ask support about Optifine features. Thanks!
{% endhint %}

## Custom textured armors on 1.16 and lower

If you want to add a custom texture and not just a custom color to armors you can use **Optifine**.

{% hint style="info" %}
This is an old method for clients with version 1.16 and lower.\
The [new method for 1.17+](../armors/custom-textured-armor.md) don't need **Optifine** for this.
{% endhint %}

## Custom textured armor

### Download the [example addon here](https://www.spigotmc.org/resources/optifine-example-custom-textured-armor-itemsadder-addon.87846/)

![](<../../../.gitbook/assets/image (22).png>)

![](<../../../.gitbook/assets/image (23).png>)

### Step 1

Create your **custom namespace** (if you didn't already), follow[ this tutorial](broken-reference/).\
In this tutorial **my namespace** is named `mystuff`

### Step 2

Create **custom textures** for the **inventory items**. I put them in the folder: **** `contents/mystuff/resourcepack/mystuff/textures/item/example_1`

<figure><img src="../../../.gitbook/assets/old_optifine_armor_preview_1.png" alt=""><figcaption></figcaption></figure>

### Step 3

Create **custom textures** for **on-body armor**. You can get an example here:

{% file src="../../../.gitbook/assets/layers_example.zip" %}

**Edit** the **textures** as you wish (use Paint.NET, Photoshop, GIMP or similar programs) and **save** them as `layer_1.png` and `layer_2.png`

### Step 4

Create the `optifine` folder, this is where we want to put out **custom textures** for the **worn armor**: `contents/mystuff/resourcepack/minecraft/optifine/`

{% hint style="warning" %}
You **must create** it under the folder `minecraft`, sadly you **cannot** create the `optifine` folder inside your **namespace** folder (in this case `mystuff`).\
It's an **Optifine limitation**.
{% endhint %}

### Step 5

Now save the **previously created on-body** textures (`layer_1.png` and `layer_2.png` ) inside this folder: `contents/mystuff/resourcepack/minecraft/optifine/cit/mystuff/armors/example_1/entity/`

So you have this:

<figure><img src="../../../.gitbook/assets/old_optifine_armor_path_1.png" alt=""><figcaption></figcaption></figure>

### Step 6

**Create** these files: `boots.properties`, `chestplate.properties`, `helmet.properties`, `leggings.properties` inside `contents/mystuff/resourcepack/minecraft/optifine/cit/mystuff/armors/example_1/entity/`

Each of the files must contain this:

```elixir
nbt.itemsadder.namespace=mystuff
nbt.itemsadder.id=example_chestplate_1

type=armor
items=diamond_chestplate
texture.diamond_layer_1=layer_1
texture.diamond_layer_2=layer_2
```

For each of the `.properties` files you have to **change** the **1th** line setting **your namespace** instead of "mystuff", the **2nd line** to your **item id** and the **5th line** to the **item type** (`diamond_leggings` , `diamond_boots` ....)

Now you should have this:

<figure><img src="../../../.gitbook/assets/old_optifine_armor_path_2.png" alt=""><figcaption></figcaption></figure>

### Step 7

**Create** a **file** to contain this custom armor, to better organize it. Name it **example\_1.yml** and **place it** inside your namespace, in this example: `contents/mystuff/configs/example_1.yml`

### Step 8

**Add content** to the `.yml` **** file. As you can see I decided to base my items on the Minecraft DIAMOND armor and I didn't specify any color because I don't need to color it, Optifine will apply a texture to it.

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

## Done!

## Notes:

{% hint style="warning" %}
If you will **create another namespace** which contains **other armors** it's **highly advised** to **maintain** the **same structure** as I did in the tutorial to **avoid mistakes**.

\
For example if you create a new namespace named `space_armors` you will have this **Optifine** folder: `contents/mystuff/resourcepack/minecraft/optifine/cit/space_armors/armors`
{% endhint %}
