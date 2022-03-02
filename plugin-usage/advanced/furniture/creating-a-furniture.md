---
description: Tutorial on how to create your first furniture
---

# Creating a furniture

## What is a furniture?

A furniture is a decorative object which can be solid, emit light, used as chair and can have other features.&#x20;

## Creating a simple furniture

### Creating the configuration file

The first step is to create a configuration file in your [namespace](../basic-concepts/namespace/) folder. In this example I called it `furniture_example.yml`.

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

![](<../../../.gitbook/assets/image (142).png>)

Now create you model, in this example I'm modelling an ugly minimal modern lamp.

![](<../../../.gitbook/assets/image (97).png>)

{% hint style="warning" %}
Important: make sure the north is opposite of where you want the model to face.

Or add the property to the YML configuration `opposite_direction: true`
{% endhint %}

Edit how the model is shown on player hand:

![](<../../../.gitbook/assets/image (93).png>)

![](<../../../.gitbook/assets/image (100).png>)

### Configure how the model is shown ingame

You have to select the **head icon** and then **small armorstand:**

![](<../../../.gitbook/assets/image (53).png>)

Then you have to shift your model down until it matches the armorstand base:

![](<../../../.gitbook/assets/image (54).png>)

Now let's save the model file into the correct folder, in this case I set this property in the yml configuration file: `model_path: lamp`, so you have to save the .json file inside this path: `ItemsAdder\data\resource_pack\assets\myitems\models\lamp.json`.

### Saving changes

Now run `/iazip` (and follow the [hosting tutorial](../../resourcepack-hosting/) if needed), then obtain the item and place it: `/iaget myitems:lamp`.

![](<../../../.gitbook/assets/image (143).png>)

![](<../../../.gitbook/assets/image (81).png>)

