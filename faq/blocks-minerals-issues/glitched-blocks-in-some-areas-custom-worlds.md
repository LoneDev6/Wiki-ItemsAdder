# Ошибки блоков в ограниченных участках/своих мирах

![](../../.gitbook/assets/image%20%2833%29.png)

{% hint style="info" %}
Это нормально, так как ItemsAdder использует блоки грибов для создания своих блоков с текстурами.  
ItemsAdder может проверять только указанные биомы, чтобы исправлять поврежденные блоки и не потреблять много ресурсов процессора.

Если вы хотите исправлять это во всех биомах, установите в основном файле конфигурации плагина следующее:

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

Это включит проверку всех биомов игры на наличие глюкнутых блоков.  
Вы можете удалить некоторые биомы, если вы уверены, что в них не появяться блоки грибов, чтобы избежать лишних нагрузок на процессор.
{% endhint %}

