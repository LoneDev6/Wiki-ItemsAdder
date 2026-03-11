---
icon: block-quote
---

# Variants

Special property which allows to specify custom variants for that block.\
Accepts the same properties shown in the Minecraft wiki [models page](https://minecraft.fandom.com/wiki/Tutorials/Models).

This will make the game randomly decide a model variation for a particular block. This is useful to create dynamicity.

A vanilla example are flowers and **Lily Pad** that have different rotations but are the same block.

<figure><img src="../../../.gitbook/assets/image (271).png" alt=""><figcaption></figcaption></figure>

Example:

```yaml
specific_properties:
  block:
    custom_variants:
      variant1:
        model: "minecraft:block/end_stone_bricks"
        y: 90
      variant2:
        model: "minecraft:block/end_stone_bricks"
        y: 180
        x: 90
      variant3:
        model: "minecraft:block/diamond_block"
        uvlock: true
        weight: 1
      variant4:
        model: "minecraft:block/cobblestone"
```

## Properties

#### `weight`

Sets the probability of the model for being used in the game, defaults to 1 (=100%). If more than one model is used for the same variant, the probability is calculated by dividing the individual model's weight by the sum of the weights of all models. (For example, if three models are used with weights 1, 1, and 2, then their combined weight would be 4 (1+1+2). The probability of each model being used would then be determined by dividing each weight by 4: 1/4, 1/4 and 2/4, or 25%, 25% and 50%, respectively.)

#### `x`

Rotation of the model on the x-axis in increments of 90 degrees.

#### `y`

Rotation of the model on the y-axis in increments of 90 degrees.

#### `uvlock`

Can be `true` or `false` (default). Locks the rotation of the texture of a block, if set to `true`. This way the texture does not rotate with the block when using the x and y-tags above.
