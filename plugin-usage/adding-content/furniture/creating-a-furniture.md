---
description: Tutorial on how to create your first furniture
---

# Creating a furniture

## What is a furniture?

A furniture is a decorative object which can be solid, emit light, used as chair and can have other features.

## Creating a simple furniture

### Creating the configuration file

The first step is to create a configuration file in your [namespace](../basic-concepts/namespace.md) folder. In this example I called it `furniture_example.yml`.

{% code title="furniture_example.yml" %}
```yaml
info:
  namespace: myitems
items:
  lamp:
    display_name: "Lamp"
    permission: myitems.decorative.lamp
    lore:
    - lore-decorative-item
    resource:
      material: PAPER
      generate: false
      model_path: lamp
    behaviours:
      furniture:
        small: true
        light_level: 13
```
{% endcode %}

As you can see I created the item with some special properties.

`behaviours` attribute has a special sub-attribute called `furniture`, this attribute tells ItemsAdder that this item is a placeable furniture model.

Let's add some more settings to it:

{% code title="furniture_example.yml" %}
```yaml
  lamp:
    display_name: "Lamp"
    permission: myitems.decorative.lamp
    lore:
    - lore-decorative-item
    resource:
      material: PAPER
      generate: false
      model_path: lamp
    behaviours:
      furniture:
        light_level: 13
        solid: true
        small: true
        placeable_on:
          floor: true
          ceiling: false
          walls: false
        hitbox:
          height: 1
        sound:
          place:
            name: block.metal.fall
          break:
            name: block.metal.break
```
{% endcode %}

I added some properties, in this case I specified where the furniture can be placed (only on the `floor`), the [`hitbox`](furniture-collisions.md) size and `place`/`break` sounds.

{% hint style="info" %}
By default the hitbox is 1x1x1, so it's not really needed to specify these options.

Specify them only if the model is bigger than 1x1x1.

For example if you have a furniture which is 1x2x1 you can set it like that:

```yaml
    hitbox:
      height: 2
      length: 1
      width: 1
```
{% endhint %}

Final result:

{% code title="furniture_example.yml" %}
```yaml
info:
  namespace: myitems
items:
  lamp:
    display_name: "Lamp"
    permission: myitems.decorative.lamp
    lore:
    - lore-decorative-item
    resource:
      material: PAPER
      generate: false
      model_path: lamp
    behaviours:
      furniture:
        light_level: 13
        solid: true
        small: true
        placeable_on:
          floor: true
          ceiling: false
          walls: false
        hitbox:
          height: 1
        sound:
          place:
            name: block.metal.fall
          break:
            name: block.metal.break
```
{% endcode %}

### Creating the model file

Now open [BlockBench](../item-properties/resource/creating-3d-models.md) and create a _"Java Block/Item"_.

![](<../../../.gitbook/assets/image (49) (1) (1) (1).png>)

Now create you model, in this example I'm modelling an ugly minimal modern lamp.

![](<../../../.gitbook/assets/image (47) (1) (1) (1).png>)

{% hint style="warning" %}
Important: make sure the north is opposite of where you want the model to face.

Or add the property to the YML configuration `opposite_direction: true`
{% endhint %}

Edit how the model is shown on player hand:

![](<../../../.gitbook/assets/image (46) (1) (1).png>)

![](<../../../.gitbook/assets/image (48) (1) (1) (1).png>)

### Configure how the model is shown ingame

#### Using Armor Stand

You have to select the **head icon** and then **small armorstand:**

![](<../../../.gitbook/assets/image (41) (1) (1) (1).png>)

Then you have to shift your model down until it matches the armorstand base:

![](<../../../.gitbook/assets/image (42) (1).png>)

#### Using Item Frames

You have to select the **Image icon** and then set the Z-offset to `-16`.\
This will display the model slighly of the block the Item Frame is attached to, but will be seamless when an invisible Item Frame is used. This is because of how items in invisible Item Frames are slightly lower than usual.

### Export the model

Now let's save the model file into the correct folder, in this case I set this property in the yml configuration file: `model_path: lamp`, so you have to save the .json file inside this path: `contents\myitems\models\lamp.json`.

To achieve this, click on "File" followed by "Export Model" and finally "Export Block/Item Model". In the new window, head over to the path you want to save your model under, give it the right name and confirm the changes.

### Saving changes

Now run `/iazip` (and follow the [hosting tutorial](../../resourcepack-hosting/) if needed).

To obtain the item use this command: `/iaget myitems:lamp`.

![](<../../../.gitbook/assets/image (50) (1) (1) (1) (1) (1).png>)

![](<../../../.gitbook/assets/image (44) (1) (1).png>)
