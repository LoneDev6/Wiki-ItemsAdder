---
icon: brightness
---

# Turn Block ON-OFF

You can turn on and off blocks on interact.

<details>

<summary>Old tutorial</summary>

```yaml
info:
  namespace: test
items:
  test_change_state_block_interact:
    name: Test Change State Block Interact
    resource:
      generate: false
      model_path: minecraft:block/diamond_block
      material: PAPER
    specific_properties:
      block:
        placed_model:
          type: REAL_NOTE
        cancel_drop: false
    events:
      placed_block:
        interact:
          replace_block:
            from: test_change_state_block_interact
            to: test_change_state_block_interact_on
            decrement_durability: 0
  test_change_state_block_interact_on:
    name: Test Change State Block Interact ON
    resource:
      generate: false
      model_path: minecraft:block/emerald_block
      material: PAPER
    specific_properties:
      block:
        placed_model:
          type: REAL_NOTE
        cancel_drop: false
        light_level: 15
    events:
      placed_block:
        interact:
          replace_block:
            from: test_change_state_block_interact_on
            to: test_change_state_block_interact
            decrement_durability: 0
```

</details>

{% hint style="info" %}
This requires ItemsAdder 4.0.13 or greater.
{% endhint %}

First create your block template. This is the base block that will be used to create the on and off blocks.

In this example I use built-in Minecraft models to avoid creating new models just for this example.&#x20;

```yaml
info:
  namespace: test
items:
  test_change_state_block_interact_template:
    name: Test Change State Block Interact
    template: true
    resource:
      generate: false
      model_path: minecraft:block/diamond_block
      material: PAPER
    specific_properties:
      block:
        placed_model:
          type: REAL_NOTE
        cancel_drop: false
```

Now create the off block. This block has an event listener on interaction that replaces itself with the on block (that will be created next).

```yaml
  test_change_state_block_interact:
    variant_of: test_change_state_block_interact_template
    events:
      placed_block:
        interact:
          replace_block:
            from: test_change_state_block_interact
            to: test_change_state_block_interact_on
            decrement_durability: 0
```

<figure><img src="../../../.gitbook/assets/image (278).png" alt=""><figcaption></figcaption></figure>

Now create the on block. This block has an event listener on interaction that replaces itself with the off block (that we created before).

As you can see I specified the `light_level: 15` property, to turn the light on.

```yaml
  test_change_state_block_interact_on:
    variant_of: test_change_state_block_interact_template
    specific_properties:
      block:
        placed_model:
          type: REAL_NOTE
        cancel_drop: false
        light_level: 15
    events:
      placed_block:
        interact:
          replace_block:
            from: test_change_state_block_interact_on
            to: test_change_state_block_interact
            decrement_durability: 0
```

<figure><img src="../../../.gitbook/assets/image (279).png" alt=""><figcaption></figcaption></figure>
