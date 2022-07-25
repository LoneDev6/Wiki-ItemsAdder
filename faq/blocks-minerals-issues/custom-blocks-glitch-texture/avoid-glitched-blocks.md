---
描述: 在某些区域/自定义世界中方块材质显示错误
---

# 防止方块材质错误

## 错误方块

{% hint style="info" %}
此问题为显示错误，不会导致出现重复或类似的错误
{% endhint %}

![](<../../../.gitbook/assets/image (50) (1) (1) (1).png>)

## Spigot/Paper 的修复方法

{% hint style="info" %}
当你使用 REAL 类型来创建自定义方块出现该错误是很正常的.\
ItemsAdder 使用蘑菇块来实现新增的自定义方块.\
ItemsAdder 为了保证插件不导致服务器滞后产生延迟，只检查一些生物群系来判断是否需要修复错误的方块.
{% endhint %}

This fix works only for REAL blocks (mushrooms).\
该修复方法仅适用于 REAL 类型（蘑菇块）.\
如果你想使所有生物群系都修复错误方块，需要在 `config.yml` 进行如下设置：

<details>

<summary>点击展开</summary>

该配置将会使每个群系对错误方块的修复,可以删除你认为不会生成蘑菇块的生物群系，来避免过多的占用服务器资源

{% code title="config.yml" %}
```yaml
  fix-glitched-blocks:
    enabled: true
    only-new-chunks: false
    search-also-in-these-biomes:
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
{% endcode %}

</details>

### 其他解决办法

避免使用 `REAL` 自定义方块类型（蘑菇块）更换为 `REAL_NOTE` 自定义方块类型.\
因为 `REAL_NOTE` 使用 **音符盒** 来创建自定义方块，所以避免了该问题的出现

## Purpur 的高级修复

{% hint style="warning" %}
#### 该解决方式只适用于 [Purpur](https://purpur.pl3x.net).

#### Spigot 与 Paper 不具有该功能
{% endhint %}

在 **purpur.yml** 配置中启用下列选项：

* [https://purpur.pl3x.net/docs/Configuration/#disable-mushroom-updates](https://purpur.pl3x.net/docs/Configuration/#disable-mushroom-updates)
* [https://purpur.pl3x.net/docs/Configuration/#disable-note-block-updates](https://purpur.pl3x.net/docs/Configuration/#disable-note-block-updates)
* [https://purpur.pl3x.net/docs/Configuration/#disable-chorus-plant-updates](https://purpur.pl3x.net/docs/Configuration/#disable-chorus-plant-updates)

**栗子:**

```yaml
  blocks:
    disable-mushroom-updates: true
    disable-note-block-updates: true
    disable-chorus-plant-updates: true
```
