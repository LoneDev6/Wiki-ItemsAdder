---
描述: 手动编辑 Optifine 来创建自定义盔甲材质
---

# Armor textures (old method)

## Custom textured armors on 1.16 (and lower)

如果你想为盔甲添加自定义材质而不仅仅是自定义颜色,你可以配合 **Optifine** 来实现.

### Click here if you want the new automatic creation:

{% content-ref url="../armors/" %}
[armors](../armors/)
{% endcontent-ref %}

## Custom textured armor (manual way)

### Download the [example addon here](https://www.spigotmc.org/resources/optifine-example-custom-textured-armor-itemsadder-addon.87846/)

![](<../../../.gitbook/assets/image (22).png>)

![](<../../../.gitbook/assets/image (23).png>)

### 步骤 1

Create your **custom namespace** (if you didn't already), follow[ this tutorial](../basic-concepts/namespace/creating-your-namespace.md).\
In this tutorial **my namespace** is named `mystuff`

### 步骤 2

Create **custom textures** for the **inventory items**. I put them in **** the **folder** `plugins\ItemsAdder\data\resource_pack\assets\mystuff\textures\item\example_1`

![](<../../../.gitbook/assets/image (24).png>)

### 步骤 3

Create **custom textures** for **on-body armor**. You can get a **template** from here:\
`plugins\ItemsAdder\data\resource_pack\assets\minecraft\textures\models\armor\leather_layer_1.png`\
`plugins\ItemsAdder\data\resource_pack\assets\minecraft\textures\models\armor\leather_layer_2.png`

**Edit** the **textures** as you wish (use Paint.NET, Photoshop, GIMP or similar programs) and **save** them as `layer_1.png` and `layer_2.png`&#x20;

### 步骤 4

Create the `optifine` folder, this is where we want to put out **custom textures** for the **worn armor**: `plugins\ItemsAdder\data\resource_pack\assets\minecraft\optifine`

{% hint style="warning" %}
You **must create** it under the folder `minecraft`, sadly you **cannot** create the `optifine` folder inside your **namespace** folder (in this case `mystuff`), it's an **Optifine limitation**.
{% endhint %}

### 步骤 5

Now save the **previously created on-body** textures (`layer_1.png` and `layer_2.png` ) inside this folder: `plugins\ItemsAdder\data\resource_pack\assets\minecraft\optifine\cit\mystuff\armors\example_1\entity`

So you have this:

![](<../../../.gitbook/assets/image (25).png>)

### 步骤 6

**Create** these files: **boots.properties**, **chestplate.properties**, **helmet.properties**, **leggings.properties** inside `plugins\ItemsAdder\data\resource_pack\assets\minecraft\optifine\cit\mystuff\armors\example_1\entity`

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

Now you should have this view:

![](<../../../.gitbook/assets/image (26).png>)



### 步骤 7

**Create** a **file** to contain this custom armor, to better organize it. Name it **example\_1.yml** and **place it** inside your namespace, in this example: `plugins\ItemsAdder\data\items_packs\mystuff\example_1.yml`

### 步骤 8

**Add content** to the **yml file**. As you can see I decided to base my items on the Minecraft DIAMOND armor and I didn't specify any color because I don't need to color it, Optifine will apply a texture to it.

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

### 完成!

## 提醒:

{% hint style="warning" %}
如果你要创建另一个包含其他装备的命名空间.强烈推荐模仿栗子的结构尽量使其相同,以避免出现错误.
\
例如，你创建了一个名为 `space_armors` 的新命名空间，
在 **optifine** 中你会有  `plugins\ItemsAdder\data\resource_pack\assets\minecraft\optifine\cit\space_armors\armors` 这样的文件夹.
{% endhint %}
