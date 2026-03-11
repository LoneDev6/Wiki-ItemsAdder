---
icon: page
---

# Example

## Creating a simple furniture

### Configuration file

The first step is to create a configuration file in your **namespace** folder.\
In this example I called it `furniture_example.yml`.

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

I added some properties, in this case I specified where the furniture can be placed (only on the `floor`), the `hitbox` size and `place`/`break` sounds.

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

### Model file

Now open **BlockBench** and create a _"Java Block/Item"_.

![](<../../../.gitbook/assets/image (91).png>)

Now create your model, in this example I'm modelling an ugly minimal modern lamp.

![](<../../../.gitbook/assets/image (76).png>)

{% hint style="warning" %}
Important: make sure the north is opposite of where you want the model to face.

Or add the property to the YML configuration `opposite_direction: true`
{% endhint %}

Edit how the model is shown on player hand:

![](<../../../.gitbook/assets/image (221).png>)

![](<../../../.gitbook/assets/image (224).png>)

### Configure the in-game view

#### Using `armor_stand`

You have to select the **head icon** and then **small armorstand:**

![](<../../../.gitbook/assets/image (204).png>)

Then you have to shift your model down until it matches the armorstand base:

![](<../../../.gitbook/assets/image (126).png>)

#### Using `item_display`

Select _Frame_ and _Invisible Top_.\
Adjust the model Z _Translation_ (the blue arrow) until it matches the bottom of the white block perfectly.

<figure><img src="../../../.gitbook/assets/image (1) (1) (1) (1) (1) (1) (1) (1) (1).png" alt=""><figcaption></figcaption></figure>

#### Using `item_frame`

Same thing of `item_display`.

### Export the model

Now let's save the model file into the correct folder, in this case I set this property in the yml configuration file: `model_path: lamp`, so you have to save the .json file inside this path: `contents/myitems/models/lamp.json`.

To achieve this, click on "File" followed by "Export Model" and finally "Export Block/Item Model". In the new window, head over to the path you want to save your model under, give it the right name and confirm the changes.

### Saving changes

Now run `/iazip` (and follow the [hosting tutorial](../../resourcepack-hosting/) if needed).

To obtain the item use this command: `/iaget myitems:lamp`.

![](<../../../.gitbook/assets/image (177).png>)

![](<../../../.gitbook/assets/image (153).png>)
