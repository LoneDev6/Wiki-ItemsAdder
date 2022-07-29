# 自定义树木生成器

## 让自定义树随机生成

为了让自定义树在世界中生成，你必须使用 `tree_populator` 属性.

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

该属性为 允许生成自定义树木的世界

### bottom\_block

该属性为 决定是否能生成自定义树木的方块类型（自定义树木将会在该属性设置的方块类型上生成）

### chance

该属性为 每个区块中生成的几率

### min\_height & max\_height

该属性为 允许生成自定义树木的 最大\最小 高度

### amount

该属性为 每组生成自定义树木的数量

### iterations

该属性为 当 **chance** 匹配时，在区块中要生成多少组自定义树木

### tree\_type

在 [该页面](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/TreeType.html) 能够找到完整的树木类型.\
该属性为可选项，如果没有设置该属性，该自定义树木会在每个生物群系上生成.

### leaves

该属性为 作为自定义树木中 **树叶** 的 **自定义方块**

### log

该属性为 作为自定义树木中 **原木** 的 **自定义方块**

### biomes

在 [该页面](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/block/Biome.html) 能够找到完整的生物群系列表.\
该属性为可选项，如果没有设置该属性，该自定义树木会在每个生物群系上生成.

## 示例

{% embed url="https://www.spigotmc.org/resources/trees-newtrees-itemsadder-addon.84604/" %}

![](<../../../.gitbook/assets/immagine (126).png>)
