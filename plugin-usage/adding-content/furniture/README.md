---
description: Tutorial on how to create your first furniture
icon: lamp-floor
---

# Furniture - Simple

A furniture is a decorative object which can be solid, emit light, used as chair and can have other features.

{% hint style="warning" %}
**Limitations of all furnitures**

* non solid furnitures can't receive interact events, they can only be removed using mouse left click but cannot be interacted with (only solid furnitures can get interact events).\
  This might not be true anymore on recent game versions.
* max size of the hitbox is 3x3x3 for performance reasons
{% endhint %}

## Furniture entity types

### `item_display`

This type of furniture entity is useful for any type of furniture you want to create.

```yaml
behaviours:
  furniture:
    entity: item_display # <---
    display_transformation:
      transform: HEAD
      right_rotation:
        axis_angle:
          angle: 180
          axis:
            x: 0
            y: 1
            z: 0
      translation:
        x: 0
        y: 0.92
        z: 0
      scale:
        x: 0.45
        y: 0.45
        z: 0.45
```

#### Special properties

`item_display` allows you to do some special adjustments to your furniture model using the `display_transformation` property.\
You can resize it, rotate it and move it freely.\
This feature uses the native `item_display` feature of **Minecraft**, you can [read more here](https://www.youtube.com/watch?v=bwPWfUbcZxE) and online.\
You can also use [this tool](https://misode.github.io/transformation/) to preview your changes.

<details>

<summary>Example</summary>

```yaml
  lava_lamp_new:
    enabled: true
    display_name: display-name-lava_lamp
    permission: iadeco.decorations.lava_lamp
    lore:
      - lore-decorative-item
    resource:
      material: PAPER
      generate: false
      model_path: lava_lamp
    behaviours:
      furniture:
        entity: item_display # <---
        light_level: 7
        display_transformation:
          transform: HEAD
          right_rotation:
            axis_angle:
              angle: 180
              axis:
                x: 0
                y: 1
                z: 0
          translation:
            x: 0
            y: 0.92
            z: 0
          scale:
            x: 0.45
            y: 0.45
            z: 0.45
```

</details>

### `armor_stand`

This type of furniture entity is useful when you want to create chairs, plants, columns, lamps and similar environment decorations which don't need to rotate based on the surface on which you place them.

```yaml
behaviours:
  furniture:
    entity: armor_stand # <--- (by default, not mandatory)
    small: true
    solid: true
```

`small` allows to set the armor stand small. It will have a smaller hitbox by default and the model will look smaller.&#x20;

### `item_frame`

This type of furniture entity is useful when you want to make the furniture rotate based on the surface on which you place it.

For example if you have a decorative lamp you can make it placeable on walls, ceiling and ground and and make it oriented automatically based on the surface inclination.

![](<../../../.gitbook/assets/image (121).png>)

```yaml
behaviours:
  furniture:
    entity: item_frame # <--- (by default, not mandatory)
    light_level: 15
    solid: false
```

## Chair

To create a chair you just have to follow the furniture creation tutorial and add a simple attribute to the furniture to make it "sittable".

Just add the `furniture_sit` behaviour and specify the `sit_height`.

```yaml
behaviours:
  furniture:
    # .....
  furniture_sit:
    sit_height: 0.5
```

### `sit_height`

Height of the sit position

### `opposite_direction`

Default: true. Enable if you want the player rotate of 180 degrees when they sit on this furniture.

### `passenger_front_view_on_sit`

Default: true. Rotate the player to face the front of the furniture when they sit on it.

### `passenger_rotate_body`

Default: false. Rotate the player body while sitting on the furniture.

## Limit placement location

You can limit the placement of the furniture using the `placeable_on` property.

```yaml
    placeable_on:
      walls: true
      ceiling: true
      floor: true
```

## Hitbox

You can make a furniture solid adding the "solid" attribute and specifying a hitbox (if you want > 1x1x1)

```yaml
  table:
    display_name: display-name-table
    permission: table
    lore:
      - 'lore-decorative-item'
    resource:
      material: OAK_WOOD
      generate: false
      model_path: item/table
    behaviours:
      furniture:
        small: true
        solid: true
        entity: armor_stand
        hitbox:
          length: 1
          width: 1
          height: 1
          length_offset: 0
          width_offset: 0
          height_offset: 0
```

![](<../../../.gitbook/assets/image (169).png>)

### Hitbox has wrong location <a href="#show-the-hitbox" id="show-the-hitbox"></a>

{% hint style="warning" %}
Sometimes you need to also specify an "offset" to fix the hitbox location.\
This can happen if your furniture is 2x1x1 for example.
{% endhint %}

{% tabs %}
{% tab title="Wrong" %}
![](../../../.gitbook/assets/143050888-2efd90f5-a462-459b-b71b-0e63beaa7620.png)
{% endtab %}

{% tab title="Correct" %}
![](<../../../.gitbook/assets/hitbox2 (1).png>)
{% endtab %}
{% endtabs %}

### Correct location <a href="#show-the-hitbox" id="show-the-hitbox"></a>

I had to set a width `offset` of `0.5`.\
You can also use negative values if needed.

```yaml
        hitbox:
          length: 1
          width: 2
          height: 1
          width_offset: 0.5
```

## Preview the hitbox <a href="#show-the-hitbox" id="show-the-hitbox"></a>

{% hint style="info" %}
You can use the command `/iahitbox` to see the hitbox when you place a furniture, it's very useful to detect mistakes in the hitbox configuration
{% endhint %}

![](<../../../.gitbook/assets/immagine (63) (2) (3) (2) (1) (8).png>)

![](<../../../.gitbook/assets/immagine (17).png>)

{% hint style="warning" %}
## **Hitboxes limitations**

**`item_frame` limitations (doesn't affect `armor_stand`)**

**Furnitures** that use `entity` `item_frame` **only support hitboxes** with `width` and `length` of the **same value**.\
Example: `width: 2`, `length: 2`, `height: 1`.

If you want to have different `width` and `length` use `entity` `item_display` or `armor_stand`.
{% endhint %}

## Optimization of `item_display` furniture

{% hint style="warning" %}
This requires ItemsAdder 4.0.12 or greater.
{% endhint %}

By default the plugin uses `width` and `height` of the `hitbox` to tell the game the size of the furniture render area. This is used to allow the game to hide the entity when the player is not directly looking at it and avoid overhead.

If you want you can customize this value separately using the `render_size` property.

```yaml
display_transformation:
   render_size:
      width: 3
      height: 3
```

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

<figure><img src="../../../.gitbook/assets/image.png" alt=""><figcaption></figcaption></figure>

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
