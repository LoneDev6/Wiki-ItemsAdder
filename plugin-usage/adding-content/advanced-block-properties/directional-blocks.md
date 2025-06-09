---
icon: arrow-rotate-left
---

# Directional Blocks

{% hint style="info" %}
## Requires ItemsAdder 4.0.10 or greater
{% endhint %}

{% hint style="warning" %}
## Warning

Creating directional blocks will occupy 4 or 6 slots per block.\
This happens because each direction is a different block.

There is no way to bypass that. It's a limitation of the game and any other content creation plugin would have this limitation.\
You should not abuse directional blocks because they quickly will saturate your custom blocks usages.
{% endhint %}

{% hint style="info" %}
`FURNACE` and `DROPPER` won't act like the vanilla machinery. They are just names to easily understand the type of block rotation.
{% endhint %}

### Directional mode

### Mode `ALL`

Act like a vanilla log and a dropper at the same time.

![](https://github.com/user-attachments/assets/db9c84da-c30c-40c4-a53d-7850ebd3ad8b)

```yml
  directional_block_all:
    name: directional_block_all
    resource:
      material: PAPER
      generate: true
      textures:
      - block/furnace/directional_block_test_down.png
      - block/furnace/directional_block_test_east.png
      - block/furnace/directional_block_test_north.png
      - block/furnace/directional_block_test_south.png
      - block/furnace/directional_block_test_up.png
      - block/furnace/directional_block_test_west.png
    specific_properties:
      block:
        placed_model:
          type: REAL_NOTE
          directional_mode: ALL
```

### Mode `FURNACE`

Act like vanilla furnace.

![](https://github.com/user-attachments/assets/c4c6c501-a1fa-4cd1-a2de-67c3ad5d626a)

```yml
  directional_block_furnace:
    name: directional_block_furnace
    resource:
      material: PAPER
      generate: true
      textures:
      - block/furnace/directional_block_test_down.png
      - block/furnace/directional_block_test_east.png
      - block/furnace/directional_block_test_north.png
      - block/furnace/directional_block_test_south.png
      - block/furnace/directional_block_test_up.png
      - block/furnace/directional_block_test_west.png
    specific_properties:
      block:
        placed_model:
          type: REAL_NOTE
          directional_mode: FURNACE
```

### Mode `LOG`

Act like vanilla logs.

![](https://github.com/user-attachments/assets/db9c84da-c30c-40c4-a53d-7850ebd3ad8b)

```yml
  directional_block_log:
    name: directional_block_log
    resource:
      material: PAPER
      generate: true
      textures:
      - block/log/directional_block_test_down.png
      - block/log/directional_block_test_east.png
      - block/log/directional_block_test_north.png
      - block/log/directional_block_test_south.png
      - block/log/directional_block_test_up.png
      - block/log/directional_block_test_west.png
    specific_properties:
      block:
        placed_model:
          type: REAL_NOTE
          directional_mode: LOG
```

### Mode `DROPPER`

Acts like the vanilla dropper.

![](https://github.com/user-attachments/assets/c097ac52-80ba-4daf-865b-7726ad3e8b87)

In this particular case I decided to overwrite the automatically generated directional blocks `up` and `down` to customize the appearance of the block in this particular case, setting a different texture for the `north` face (front).\
In the screenshot you can see the face texture is different.

```yml
  directional_block_dropper:
    name: directional_block_dropper
    resource:
      material: PAPER
      generate: true
      textures:
      - block/dropper/directional_block_test_down.png
      - block/dropper/directional_block_test_east.png
      - block/dropper/directional_block_test_north.png
      - block/dropper/directional_block_test_south.png
      - block/dropper/directional_block_test_up.png
      - block/dropper/directional_block_test_west.png
    specific_properties:
      block:
        placed_model:
          type: REAL_NOTE
          directional_mode: DROPPER
  directional_block_dropper_up:
    name: directional_block_dropper_up
    resource:
      material: PAPER
      generate: true
      textures:
      - block/dropper/directional_block_test_down.png
      - block/dropper/directional_block_test_east.png
      - block/dropper/directional_block_test_north_variant.png
      - block/dropper/directional_block_test_south.png
      - block/dropper/directional_block_test_up.png
      - block/dropper/directional_block_test_west.png
    specific_properties:
      block:
        placed_model:
          type: REAL_NOTE
  directional_block_dropper_down:
    name: directional_block_dropper_down
    resource:
      material: PAPER
      generate: true
      textures:
      - block/dropper/directional_block_test_down.png
      - block/dropper/directional_block_test_east.png
      - block/dropper/directional_block_test_north_variant.png
      - block/dropper/directional_block_test_south.png
      - block/dropper/directional_block_test_up.png
      - block/dropper/directional_block_test_west.png
    specific_properties:
      block:
        placed_model:
          type: REAL_NOTE
```

## Manually create models

ItemsAdder automatically rotates your base block model, but you can provide your custom variants of the models for each rotation, to enhance the customization.

In my example I did that to customize the model of the `DROPPER` example when placed `down` or `up`.

To do that you have to append the `_<face>` text after the id of your custom block.

Accepted faces are:

* `north`
* `east`
* `south`
* `west`
* `up`
* `down`

In my example I used `directional_block_dropper_up` (`_up`) and `directional_block_dropper_down` (`_down`)  for the block `directional_block_dropper`.

