# 🍄 Surface populators

## Generate decorations on the world surface

With ItemsAdder you can generate decorations around the world to make your server more professional and original.

For example you can make new mushrooms, new little plants, rocks and decorations

![](../../.gitbook/assets/leaves.png)

![](../../.gitbook/assets/desert\_rose.png)

## Creating a Surface Populator

### Creating the configuration

For example let's create a rose which will spawn around the world.

```yaml
info:
  namespace: myitems
surface_decorators:
  rose:
    block: rose
    bottom_blocks:
    - DIRT
    - GRASS_BLOCK
    biomes:
    - PLAINS
    - SUNFLOWER_PLAINS
    - RIVER
    - MOUNTAINS
    - MOUNTAIN_EDGE
    - BIRCH_FOREST
    - BIRCH_FOREST_HILLS
    - TALL_BIRCH_FOREST
    - TALL_BIRCH_HILLS
    worlds:
      - world
    chance: 10
    max_height: 255 
    min_height: 0
    amount: 1
```

As you can see I set some properties:

`block` is the ItemsAdder block to spawn as decoration.

`bottom_blocks` property is used to decide the block types on which the decoration can spawn.

`biomes` property is used to decide the valid biomes in which the decoration can spawn.

`worlds` property decides the worlds in which the decoration can spawn.

`chance` is the change of a decoration to spawn in each chunk of the world.

`max_height` is the max world height where the decoration can spawn.

`min_height` is the min world height where the decoration can spawn.

`amount` is the amount of blocks to spawn in the decorations group, for example you can set 5 to make a group of 5 decorations spawn one attached to the other.

## Creating the block

Now you just have to create the block following the tutorial. You can use `REAL_NOTE`, `REAL_WIRE` `REAL_TRANSPARENT` and `REAL` blocks, depends on your needs.

{% content-ref url="creating-a-custom-item/blocks/block.md" %}
[block.md](creating-a-custom-item/blocks/block.md)
{% endcontent-ref %}

## Example

You can download the fully working addon here:

{% embed url="https://www.spigotmc.org/resources/deco-worlddeco-add-autogenerating-decorations-on-your-world-surface.95207" %}

![](../../.gitbook/assets/worlddeco\_ia.png)
