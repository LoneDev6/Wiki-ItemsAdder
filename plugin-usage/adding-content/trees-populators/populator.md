# Populator

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

### worlds

This property specifies the worlds where the tree can spawn.

### bottom\_block

This property specifies on which block the tree can spawn.

### chance

Chance of the tree to spawn in a chunk.

### min\_height and max\_height

Decide the interval of height where you want the tree to spawn.

### amount

How many trees to spawn per group.

### iterations

How many groups needs to be spawned in the current chunk if the **chance** is matched.

### tree\_type

The type of the tree to be spawned. A full list can be found [here](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/TreeType.html).\
This property is optional, this tree will spawn on every biome if you don't set it.

### leaves

The block to be used as leaves for this tree.

### log

The block to be used as log for this tree.

### biomes

The list of biomes where the tree can spawn. A full list can be found [here](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/block/Biome.html).\
This property is optional, this tree will spawn on every biome if you don't set it.

## Example

{% embed url="https://www.spigotmc.org/resources/trees-newtrees-itemsadder-addon.84604/" %}

![](<../../../.gitbook/assets/immagine (126).png>)
