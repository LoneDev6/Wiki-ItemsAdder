# 🍄 地表生成器

## 在世界地标生成装饰物

使用 ItemsAdder 的 **地表生成器**，你可以在世界的地表上生成装饰物，使得服务器看起来更加专业，更有特色.\

例如：可以制作新的蘑菇、小植物、小石块和任何装饰

![](../../.gitbook/assets/leaves.png)

![](../../.gitbook/assets/desert\_rose.png)

## 创建一个地表生成器

### 创建配置文件

现在让我们来制作一朵将在世界各处生成的玫瑰

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

属性详情：

`block` 为 生成的自定义方块

`bottom_blocks` 为 决定是否能生成自定义方块的方块类型（自定义方块将会在该属性设置的方块类型上生成）

`biomes` 为 允许生成的生物群系

`worlds` 为 允许生成的世界

`chance` 为 每个区块中生成的几率

`max_height` 为 允许生成的最大高度

`min_height` 为 允许生成的最小高度

`amount` 为 从装饰组（surface_decorators）中生成的自定义方块数量,（例如：你将该属性设置为 5,在生成该自定义方块时会生成 5 个连在一起的自定义方块）

## 创建自定义方块

现在你只需要根据下列教程创建自定义方块.\
并决定使用下列某一个类型来创建自定义方块： 
<br>`REAL_NOTE`, `REAL_WIRE`， `REAL_TRANSPARENT` ，`REAL` （根据具体需求来选择类型）

{% content-ref url="creating-a-custom-item/blocks/block.md" %}
[block.md](creating-a-custom-item/blocks/block.md)
{% endcontent-ref %}

## 示例

你可以在该链接中下载到完整的附属:

{% embed url="https://www.spigotmc.org/resources/deco-worlddeco-add-autogenerating-decorations-on-your-world-surface.95207" %}

![](../../.gitbook/assets/worlddeco\_ia.png)
