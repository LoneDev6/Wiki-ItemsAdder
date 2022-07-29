# 🪨 洞穴生成器

## 生成洞穴装饰物

{% hint style="warning" %}
版本需求： **ItemsAdder** 3.1.6+
{% endhint %}

With ItemsAdder you can generate decorations in the world caves to make your server more professional and original.

For example you can make new mushrooms, new little plants, rocks and decorations

![](<../../.gitbook/assets/image (81).png>)

## 创建一个洞穴生成器

### 创建配置文件

For example let's create a group of small rocks which will spawn around the world.

```yaml
info:
  namespace: myitems
cave_decorators:
  small_rocks:
    block: small_rocks
    bottom_blocks:
    - DIRT
    - GRASS_BLOCK
    - STONE
    - COBBLESTONE
    - MOSSY_COBBLESTONE
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
    chance: 100
    max_height: 255 
    min_height: 0
    amount: 4
    position: SURFACE
```

属性详情：

`block` 为 生成的自定义方块

`bottom_blocks` 为 决定是否能生成自定义方块的方块类型（自定义方块将会在该属性设置的方块类型上生成）

`biomes` 为 允许生成的生物群系

`worlds` 为 允许生成的世界

`chance` 为 每个区块中生成的几率

`max_height` 为 允许生成的最大高度

`min_height` 为 允许生成的最小高度

`amount` is the amount of blocks to spawn in the decorations group, for example you can set 5 to make a group of 5 decorations spawn one attached to the other.

`position` is a property used to specify if the block must be on the cave `SURFACE` or `CEILING`.

## 创建自定义方块

现在你只需要根据下列教程创建自定义方块.\
并决定使用下列某一个类型来创建自定义方块： 
<br>`REAL_NOTE`, `REAL_WIRE`， `REAL_TRANSPARENT` ，`REAL` （根据具体需求来选择类型）
{% content-ref url="creating-a-custom-item/blocks/block.md" %}
[block.md](creating-a-custom-item/blocks/block.md)
{% endcontent-ref %}
