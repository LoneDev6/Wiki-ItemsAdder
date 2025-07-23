---
icon: wand-magic-sparkles
---

# Furniture - Complex

{% hint style="warning" %}
### Requires **ItemsAdder 4.0.9** or greater.
{% endhint %}

To create advanced furniture you have to use the custom entities feature of ItemsAdder.\
Please read the tutorial on how to create custom entities before continuing.

{% content-ref url="mobs/" %}
[mobs](mobs/)
{% endcontent-ref %}

{% hint style="danger" %}
Custom entities were developed with performance in mind, but they might cause high CPU usage if abused.\
It's advised to limit the amount of complex furnitures using the `max_per_chunk` property and the `config.yml` option `max_per_chunk`.
{% endhint %}

## Furniture item settings

In this example I will create a simple Ceiling Fan furniture.\
This will be used to spawn the furniture on interaction.

```yaml
  ceiling_fan:
    name: Ceiling Fan
    resource:
      material: PAPER
      generate: true
      texture: item/ceiling_fan
    behaviours:
      complex_furniture:
        entity: ceiling_fan
        light_level: 10 # Emits light
        solid: true # Hitbox made of BARRIER blocks
        drop_when_mined: true # Will be dropped when attacked by player
        max_per_chunk: 2 # Max amount of furnitures in chunk
        placement_offset: # Used to adjust the spawn location
          ceiling: -0.5
          wall: 0
          floor: 0
```

Create a file `my_furniture/textures/item/ceiling_fan.png`.

## Furniture custom entity settings

```yaml
entities:
  ceiling_fan:
    model_folder: entity/ceiling_fan
    type: ARMOR_STAND
    gravity: false
```

## Furniture model

Create a new `ItemsAdder Entity Model`.

<figure><img src="../../.gitbook/assets/image (10).png" alt=""><figcaption></figcaption></figure>

In this example I called it `ceiling_fan`.

<figure><img src="../../.gitbook/assets/image (11).png" alt=""><figcaption></figcaption></figure>

Create your model.

<figure><img src="../../.gitbook/assets/image (23).png" alt=""><figcaption></figcaption></figure>



Switch to the animation panel.&#x20;

<figure><img src="../../.gitbook/assets/image (24).png" alt=""><figcaption></figcaption></figure>

Create a new `idle` animation.

<figure><img src="../../.gitbook/assets/image (25).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (15).png" alt=""><figcaption></figcaption></figure>

Animate the entity as you wish.

<figure><img src="../../.gitbook/assets/image (26).png" alt=""><figcaption></figcaption></figure>

Open the entity settings and set the correct namespace. In my example I use `my_furniture`.

<figure><img src="../../.gitbook/assets/image (17).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (22).png" alt=""><figcaption></figcaption></figure>

Save the project as `ceiling_fan.iaentity`  (for example) inside your namespace folder root.\
You will be able to edit it anytime you want in the future.



<figure><img src="../../.gitbook/assets/image (19).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (20).png" alt=""><figcaption></figcaption></figure>

Export the model. This is the model file that will be loaded by ItemsAdder.

<figure><img src="../../.gitbook/assets/image (21).png" alt=""><figcaption></figcaption></figure>

Get the item ingame using `/iaget my_furniture:ceiling_fan`.

<figure><img src="../../.gitbook/assets/ezgif-4f55fae1f8968a (1).gif" alt=""><figcaption></figcaption></figure>

