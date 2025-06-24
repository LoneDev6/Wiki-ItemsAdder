---
description: Properties that allows customization of item graphics
icon: file-image
---

# Resource

{% hint style="danger" %}
Make sure you're not using UPPERCASE or special characters in items names, namespaces or texture files (`.png`) and model files (`.json`)
{% endhint %}

## Automatic generation

In order to tell ItemsAdder which texture/model use for an item you have to add the `resource` attribute.\
This is an example:

```yaml
  resource:
    material: DIAMOND_SWORD
    generate: true
    textures:
    - item/example_item.png
```

`material` is the vanilla material this item will use as base.

`generate` tells to IA if it needs to generate the item model automatically based on textures you listed.

`textures` is the list of textures IA will use to generate the model automatically.

### Where do I put textures?

Textures you listed in the `textures` attribute must be placed in the right folder.\
Therefore, if you set `textures` like in the example and your **namespace** is (for example) `my_items` you will have to put `example_item.png` file inside this folder: `contents/my_items/textures/item`

If the path doesn't exist create all the folders needed.

{% hint style="info" %}
You can avoid setting `.png` in the `textures` attribute, ItemsAdder will recognize the file automatically
{% endhint %}

## Use your own 3D custom model (`.json` file)

If you have a custom modelled sword or item you can tell IA not to generate the model automatically.\
This is an example:

```yaml
  resource:
    material: DIAMOND_SWORD
    generate: false
    model_path: item/floating_sword
```

### Where do I put my model?

Model you set in the `model_path` attribute must be placed in the right folder.\
Therefore, if you set `model_path` like in the example and your **namespace** is (for example) `my_items` you will have to put `floating_sword.json` file inside this folder: `contents/my_items/models/item`

If the path doesn't exists create all the folders needed.

### **My textures are not working!**

{% hint style="warning" %}
If your custom model textures are not showing you have to open your model file and fix the textures path.\
For example if you had this:

```yaml
  {
  "textures": {
    "4": "item/alchemy_candles/white_candle",
    "6": "item/alchemy_candles/candle_top",
    "7": "item/alchemy_candles/red_candle",
    "8": "item/alchemy_candles/fire"
  },
```

You have to change it to this (`your_namespace` is your [namespace ](broken-reference/)folder):

```yaml
{
  "textures": {
    "4": "your_namespace:item/alchemy_candles/white_candle",
    "6": "your_namespace:item/alchemy_candles/candle_top",
    "7": "your_namespace:item/alchemy_candles/red_candle",
    "8": "your_namespace:item/alchemy_candles/fire"
  },
```
{% endhint %}

## Transparent textures (glass and similar)

### Furniture

{% content-ref url="../furniture/transparent-furniture.md" %}
[transparent-furniture.md](../furniture/transparent-furniture.md)
{% endcontent-ref %}

### Blocks

{% content-ref url="../advanced-block-properties/transparent-block.md" %}
[transparent-block.md](../advanced-block-properties/transparent-block.md)
{% endcontent-ref %}

## Manually specify custom\_model\_data

If you want to force the usage of a defined `custom_model_data` (`CustomModelData`) you can:

```yaml
    resource:
      material: CLOCK
      model_id: 4000
      generate: false
      model_path: "item/my_custom_item_model"
```

You can also tell ItemsAdder to automatically generate the model based on the texture:

```yaml
info:
  namespace: my_items
items:
  my_item_4000_example:
    resource:
      material: DIAMOND
      generate: true
      model_id: 4000
      textures:
      - item/my_custom_texture.png
```

{% hint style="warning" %}
#### **IMPORTANT**

If you previously created this item and already used `/iazip` command and now you change the `model_id` you have to use this command.\
It's **very important** to run the command `/iacleancache items` to **remove unused IDs** and **update** the **changed ID**.
{% endhint %}

## Creating 3D models

To create custom models I use [BlockBench ](https://blockbench.net/)which is a free, easy to use and amazing tool to make Minecraft models.

{% embed url="https://www.youtube.com/watch?v=aaJ8XgMAOno" %}

### Creating 3D model from a texture

{% embed url="https://www.youtube.com/watch?v=CSWxrAqjrKA" %}

{% hint style="warning" %}
**Important**

If you're using a **non-vanilla** texture (your **.png** file) you have to open the **.json** file of your model and do a little editing.

If your model is using a custom texture you have to make sure to put your namespace in front of the texture name.\
For example if you have this 3D model and the texture has this path: `contents/my_items/textures/item/custom_item_1.png`

```javascript
 "textures":{
      "0":"item/custom_item_1"
   },
```

you have to add the **namespace** in front of it (`myitems` in my example, you have to use your namespace).

```javascript
 "textures":{
      "0":"myitems:item/custom_item_1"
   },
```
{% endhint %}
