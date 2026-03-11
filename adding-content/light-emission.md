---
icon: brightness
---

# Light Emission

{% hint style="warning" %}
This feature requires Minecraft client 1.21.2 or greater.
{% endhint %}

## Items

{% hint style="warning" %}
This won't really emit light, it's only a glowing effect. This is a limitation of the game.

In the future I might find a clean way to implement smooth light that moves with the player, but for now there is not feasible solution.
{% endhint %}

{% stepper %}
{% step %}
Create your texture.

<figure><img src="../../.gitbook/assets/image (284).png" alt=""><figcaption></figcaption></figure>
{% endstep %}

{% step %}
Create a new `Java Block/Item` model in **Blockbench**.

Note: In this case I set `Parent Model` to `item/paper` to inherit the `display` properties (how it's shown in hand, on ground etc.).

<figure><img src="../../.gitbook/assets/image (288).png" alt=""><figcaption></figcaption></figure>
{% endstep %}

{% step %}
Create your model. For example you can extrude the texture like I did.

<figure><img src="../../.gitbook/assets/image (287).png" alt=""><figcaption></figcaption></figure>
{% endstep %}

{% step %}
Adjust the model in the center.

<figure><img src="../../.gitbook/assets/image (289).png" alt=""><figcaption></figcaption></figure>


{% endstep %}

{% step %}
Select all the cubes (press `CTRL+A`), right click and set the desired light level.

<figure><img src="../../.gitbook/assets/image (290).png" alt=""><figcaption></figcaption></figure>
{% endstep %}

{% step %}
Save the file: `contents/test/models/block/test_light_emission_item.json`
{% endstep %}

{% step %}
Create the configuration.

### Old method

```yaml
info:
  namespace: test
items:
  test_light_emission_item:
    name: test_light_emission_item
    resource:
      material: PAPER
      generate: false
      model_path: item/test_light_emission_item
```

### New modern method (1.21.4+)

```yaml
info:
  namespace: test
items:
  test_light_emission_item:
    name: test_light_emission_item
    graphics:
      model: item/test_light_emission_item
```
{% endstep %}
{% endstepper %}

<figure><img src="../../.gitbook/assets/image (291).png" alt=""><figcaption></figcaption></figure>

## Blocks

{% hint style="warning" %}
You must use `REAL_TRANSPARENT` block type if you want to make only a part of the block glowing and not all the block.

This happens because the game doesn't support transparency in `REAL` blocks.
{% endhint %}

{% hint style="info" %}
If you do not want to use `REAL_TRANSPARENT` you can create a block with a single layer which will all be glowing.
{% endhint %}



{% stepper %}
{% step %}
Create your texture.

<figure><img src="../../.gitbook/assets/image (5).png" alt=""><figcaption></figcaption></figure>
{% endstep %}

{% step %}
Separate the glowing layer from the base layer into two images.

`contents/test/textures/block/test_light_emission.png`

<figure><img src="../../.gitbook/assets/image (3) (1) (1) (1).png" alt=""><figcaption></figcaption></figure>

`contents/test/textures/block/test_light_emission2.png`

<figure><img src="../../.gitbook/assets/image (280).png" alt=""><figcaption></figcaption></figure>
{% endstep %}

{% step %}
Create a new `Java Block/Item` model in **Blockbench**.

<figure><img src="../../.gitbook/assets/image (285).png" alt=""><figcaption></figcaption></figure>
{% endstep %}

{% step %}
Create two cubes, one for the base and one for the glowing layer.
{% endstep %}

{% step %}
Assign the two textures to the two different layers by drag and drop into the cubes.
{% endstep %}

{% step %}
Right click the glowing layer and set the desired light level.

<figure><img src="../../.gitbook/assets/image (282).png" alt=""><figcaption></figcaption></figure>
{% endstep %}

{% step %}
Save the file: `contents/test/models/block/test_light_emission.json`
{% endstep %}

{% step %}
Create the configuration.

### Old method

```yaml
info:
  namespace: test
items:
  test_light_emission:
    name: test_light_emission
    resource:
      material: PAPER
      generate: false
      model_path: block/test_light_emission
    specific_properties:
      block:
        placed_model:
          type: REAL_NOTE
          hardness: 1

```

### New modern method (1.21.4+)

```yaml
info:
  namespace: test
items:
  test_light_emission:
    name: test_light_emission
    graphics:
      model: block/test_light_emission
    specific_properties:
      block:
        placed_model:
          type: REAL_TRANSPARENT
          hardness: 1

```
{% endstep %}
{% endstepper %}

<figure><img src="../../.gitbook/assets/image (283).png" alt=""><figcaption></figcaption></figure>
