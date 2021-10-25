# Glitched blocks in some areas/custom worlds



![](<../../../.gitbook/assets/image (32).png>)

{% hint style="info" %}
This is normal as ItemsAdder uses mushroom blocks to create custom blocks.\
ItemsAdder just checks some biomes to fix the glitched blocks to avoid using too much CPU.\
\
If you want to apply the fix to any biome you have to set config.yml like that:

```yaml
seach-also-in-these-biomes:
  enabled: true
  biomes:
  - OCEAN
  - PLAINS
  - DESERT
  - MOUNTAINS
  - FOREST
  - TAIGA
  - SWAMP
  - RIVER
  - FROZEN_OCEAN
  - FROZEN_RIVER
  - SNOWY_TUNDRA
  - SNOWY_MOUNTAINS
  - MUSHROOM_FIELDS
  - MUSHROOM_FIELD_SHORE
  - BEACH
  - DESERT_HILLS
  - WOODED_HILLS
  - TAIGA_HILLS
  - MOUNTAIN_EDGE
  - JUNGLE
  - JUNGLE_HILLS
  - JUNGLE_EDGE
  - DEEP_OCEAN
  - STONE_SHORE
  - SNOWY_BEACH
  - BIRCH_FOREST
  - BIRCH_FOREST_HILLS
  - DARK_FOREST
  - SNOWY_TAIGA
  - SNOWY_TAIGA_HILLS
  - GIANT_TREE_TAIGA
  - GIANT_TREE_TAIGA_HILLS
  - WOODED_MOUNTAINS
  - SAVANNA
  - SAVANNA_PLATEAU
  - BADLANDS
  - WOODED_BADLANDS_PLATEAU
  - BADLANDS_PLATEAU
  - SMALL_END_ISLANDS
  - END_MIDLANDS
  - END_HIGHLANDS
  - END_BARRENS
  - WARM_OCEAN
  - LUKEWARM_OCEAN
  - COLD_OCEAN
  - DEEP_WARM_OCEAN
  - DEEP_LUKEWARM_OCEAN
  - DEEP_COLD_OCEAN
  - DEEP_FROZEN_OCEAN
  - THE_VOID
  - SUNFLOWER_PLAINS
  - DESERT_LAKES
  - GRAVELLY_MOUNTAINS
  - FLOWER_FOREST
  - TAIGA_MOUNTAINS
  - SWAMP_HILLS
  - ICE_SPIKES
  - MODIFIED_JUNGLE
  - MODIFIED_JUNGLE_EDGE
  - TALL_BIRCH_FOREST
  - TALL_BIRCH_HILLS
  - DARK_FOREST_HILLS
  - SNOWY_TAIGA_MOUNTAINS
  - GIANT_SPRUCE_TAIGA
  - GIANT_SPRUCE_TAIGA_HILLS
  - MODIFIED_GRAVELLY_MOUNTAINS
  - SHATTERED_SAVANNA
  - SHATTERED_SAVANNA_PLATEAU
  - ERODED_BADLANDS
  - MODIFIED_WOODED_BADLANDS_PLATEAU
  - MODIFIED_BADLANDS_PLATEAU
  - BAMBOO_JUNGLE
  - BAMBOO_JUNGLE_HILLS
```

This will basically enable the fix on each of the Minecraft overworld biomes.\
Feel free to remove the ones you think that won't have any mushroom spawned, to avoid high CPU usage.
{% endhint %}

