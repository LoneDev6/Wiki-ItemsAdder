# 💎 世界生成器

### 两个生成器栗子

```yaml
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

该示例配置指定世界生成器，在 **world** 世界中生成自定义方块 **"myitems:custom\_block"** 并只在生物群系 `PLAINS（平原）` 中对类型为 STONE, DIRT, ANDESITE, GRANITE, COBBLESTONE, GRAVEL 的方块进行替换.
且将在每个区块中生成 1 个由 3 个自定义方块组成的矿脉.


### vein\_blocks, chunk\_veins, chunk\_chance

{% hint style="warning" %}
不要设置过高的数值，否则会导致服务器滞后产生大量延迟.\
你可以参考 Itemsadder 文件夹下 `blocks.yml` 文件内的数值.
{% endhint %}

**chunk\_veins**: 区块中生成的矿脉数量\
**vein\_blocks**: 每个矿脉中的自定义方块数量（或**矿脉大小**）\
**chunk\_chance**: 区块中生成自定义矿物的几率. （越稀有的矿石设置的数值越低）\

{% hint style="warning" %}
<mark style="color:red;">**旧版 ItemsAdder**</mark> **3.1.6** 之前的版本使用下列属性代替：\
`chunk_veins` -> `iterations`

`vein_blocks` -> `amount`

`chunk_chance` -> `chance`
{% endhint %}

### Biomes

你可以移除该选项，插件会在每个群系都生成自定义方块

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

### 可替换的方块（replaceable_blocks）

你可以移除该选项，插件会生成矿石来替换每个自定义方块，而不是检查是否可以替换

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

