---
icon: tree
---

# Trees and tree populators

## Creating the leaves and wood blocks

In order to create a custom tree you have to create two blocks for each tree: leaves and wood.

### Follow this tutorial to create blocks&#x20;

{% content-ref url="block.md" %}
[block.md](block.md)
{% endcontent-ref %}

For example I created 2 blocks by following the tutorial: `my_leaves`, `my_log`.

```yaml
info:
  namespace: myitems
items:
  my_leaves:
    display_name: "My Leaves"
    permission: myitems.my_leaves
    resource:
      material: PAPER
      generate: true
      textures:
      - block/my_leaves.png
    specific_properties:
      block:
        hardness: 0.2
        cancel_drop: true
        placed_model:
          type: REAL_TRANSPARENT
          break_particles: ITEM
  my_log:
    display_name: "My Log"
    permission: myitems.my_log
    resource:
      material: PAPER
      generate: true
      textures:
      - block/my_log/log_top.png
      - block/my_log/log.png
      - block/my_log/log.png
      - block/my_log/log.png
      - block/my_log/log_top.png
      - block/my_log/log.png
    specific_properties:
      block:
        hardness: 1.7
        placed_model:
          type: REAL
          break_particles: ITEM
        break_tools_whitelist:
        - _AXE
        - _axe
        - HAND
```

## Creating the sapling (optional)

### The sapling item

```yaml
items:
  orange_tree_sapling:
    display_name: Sapling
    permission: orange_tree_sapling
    resource:
      material: ORANGE_WOOL
      generate: true
      textures:
      - block/orange/sapling.png
    behaviours:
      sapling:
        tree_populator: orange_tree
```

### The custom tree populator

```yaml
trees_populators:
  orange_tree:
    worlds:
    - world
    chance: 5.0
    max_height: 100
    min_height: 50
    amount: 3
    iterations: 2
    log: newtrees:orange_tree_log
    leaves: newtrees:orange_tree_leaves
    tree_type: 
    biomes:
    - MOUNTAINS
```

## Generate trees in the world

First read this tutorial on creating the tree blocks (leaves and wood).

{% hint style="danger" %}
**End dimension**

It's advised **not** to **spawn** the trees in the **END** dimension because it has _some_ **problems**.

**Vanilla trees bug**

Sometimes trees will spawn with vanilla leaves, this is a known issue and I have no solution for this. Seems to be a Minecraft/Spigot bug, seems an event used by IA sometimes is not triggered.

**Big trees lag**

Big trees COULD cause some lag on generation, please use only small tree types.

**Other problems**
{% endhint %}

## Make the trees spawn randomly

In order to make trees spawn in the world you have to create a `tree_populator`.

```yaml
info:
  namespace: myitems
trees_populators:
  my_tree:
    worlds:
    - world
    bottom_blocks:
    - DIRT
    - GRASS_BLOCK
    - PODZOL
    chance: 40.0
    max_height: 100
    min_height: 50
    amount: 3
    iterations: 2
    tree_type: TREE
    leaves: myitems:my_leaves
    log: myitems:my_log
    biomes:
    - PLAINS
    - SUNFLOWER_PLAINS
    - MOUNTAINS
```

### `worlds`

This property specifies the worlds where the tree can spawn.

### `bottom_block`

This property specifies on which block the tree can spawn.

### `chance`

Chance of the tree to spawn in a chunk.

### `min_height` and `max_height`

Decide the interval of height where you want the tree to spawn.

### `amount`

How many trees to spawn per group.

### `iterations`

How many groups needs to be spawned in the current chunk if the **chance** is matched.

### `tree_type`

The type of the tree to be spawned. A full list can be found [here](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/TreeType.html).\
This property is optional, this tree will spawn on every biome if you don't set it.

### `leaves`

The block to be used as leaves for this tree.

### `log`

The block to be used as log for this tree.

### `biomes`

The list of biomes where the tree can spawn. A full list can be found [here](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/block/Biome.html).\
This property is optional, this tree will spawn on every biome if you don't set it.

## Example

{% embed url="https://www.spigotmc.org/resources/trees-newtrees-itemsadder-addon.84604/" %}

![](../../.gitbook/assets/image_\(125\).png)
