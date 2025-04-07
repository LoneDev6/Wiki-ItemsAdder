---
icon: cubes-stacked
---

# Worlds populators (ores)

Worlds populators allow you to spawn custom blocks under the surface of the world. They are mostly used for ores and decoration blocks.

### Example: two populators

This code allows you to tell ItemsAdder to generate the block `myitems:custom_block` in the world named `world` and replace only block of types `STONE`, `DIRT`, `ANDESITE`, `GRANITE`, `COBBLESTONE`, `GRAVEL` and only in biome `PLAINS`.

It will spawn 1 vein made of 3 blocks in each chunk.

```yaml
info:
  namespace: my_world_populator
worlds_populators:
  custom_block:
    block: myitems:custom_block
    worlds:
    - world
    replaceable_blocks:
    - STONE
    - DIRT
    - ANDESITE
    - GRANITE
    - COBBLESTONE
    - GRAVEL
    biomes:
    - PLAINS
    chunk_chance: 70.0
    max_height: 45
    min_height: 25
    vein_blocks: 6
    chunk_veins: 1
  custom_block_2:
    block: myitems:custom_block_2
    worlds:
    - world
    replaceable_blocks:
    - DIRT
    chunk_chance: 100.0
    max_height: 64
    min_height: 40
    vein_blocks: 3
    chunk_veins: 1
```

### `vein_blocks`, `chunk_veins`, `chunk_chance`

{% hint style="warning" %}
I suggest you to read values from the `blocks.yml` file I created in the **ItemsAdder** folder.\
Don't put too high values or the server could lag.\
Take my values as example.
{% endhint %}

**`chunk_veins`**: number of veins to be spawned in the chunk.\
&#xNAN;**`vein_blocks`**: number of blocks in each ore vein (or the **vein size**).\
&#xNAN;**`chunk_chance`**: chance of that generation to happen in the chunk. You should set it to 100 to normal ores and lower it down for more rare ores.

### Biomes

You can remove this option and the plugin will spawn ores in every biome.

```yaml
  custom_block:
    block: myitems:custom_block
    worlds:
    - world
    replaceable_blocks:
    - STONE
    - DIRT
    - ANDESITE
    - GRANITE
    - COBBLESTONE
    - GRAVEL
    chunk_chance: 70.0
    max_height: 45
    min_height: 25
    vein_blocks: 6
    chunk_veins: 1
```

### Replaceable blocks

You can remove this option and the plugin will spawn ores replacing every block instead of checking if it can be replaced.

```yaml
  custom_block:
    block: myitems:custom_block
    worlds:
    - world
    chunk_chance: 70.0
    max_height: 45
    min_height: 25
    vein_blocks: 6
    chunk_veins: 1
```
