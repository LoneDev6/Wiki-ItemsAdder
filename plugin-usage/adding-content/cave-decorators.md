---
icon: mountains
---

# 洞穴装饰器

## 在洞穴中生成装饰

{% hint style="warning" %}
此功能需要 **ItemsAdder** 3.1.6+
{% endhint %}

使用 ItemsAdder，您可以在世界的洞穴中生成装饰，使您的服务器更加专业和独特。

例如，您可以制作新的蘑菇、新的小植物、岩石和装饰品。

![](<../../.gitbook/assets/image (81).png>)

## 创建洞穴生成器

### 创建配置

例如，让我们创建一组小岩石，它们将在世界各地生成。

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

如您所见，我设置了一些属性：

`block` 是要生成为装饰的 ItemsAdder 方块。

`bottom_blocks` 属性用于决定装饰可以生成的方块类型。

`biomes` 属性用于决定装饰可以生成的有效生物群系。

`worlds` 属性决定装饰可以生成的世界。

`chance` 是每个世界区块中生成装饰的几率。

`max_height` 是装饰可以生成的最大世界高度。

`min_height` 是装饰可以生成的最小世界高度。

`amount` 是装饰组中生成的方块数量，例如，您可以设置为 5 以使 5 个装饰生成在一起。

`position` 是一个属性，用于指定方块必须在洞穴的 `SURFACE`（表面）还是 `CEILING`（天花板）。

## 创建方块

现在，您只需按照教程创建方块。您可以根据需要使用 `REAL_NOTE`, `REAL_WIRE` `REAL_TRANSPARENT` 与 `REAL` 方块。

{% content-ref url="block.md" %}
[方块](block.md)
{% endcontent-ref %}
