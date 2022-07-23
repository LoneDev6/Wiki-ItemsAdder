# 💎 Worlds populators

### Example: two populators

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

This code allows you to tell ItemsAdder to generate the block "myitems:custom\_block" in the world named "world" and replace only block of types STONE, DIRT, ANDESITE, GRANITE, COBBLESTONE, GRAVEL and only in biome PLAINS.\
It will spawn 1 vein made of 3 blocks in each chunk.

### vein\_blocks, chunk\_veins, chunk\_chance

{% hint style="warning" %}
I suggest you to read values from the `blocks.yml` file I created in the **ItemsAdder** folder.\
Don't put too high values or the server could lag.\
Take my values as example.
{% endhint %}

**chunk\_veins**: 区块中生成的矿脉数量\
**vein\_blocks**: 每个矿脉中的自定义方块数量（或**矿脉大小**）\
**chunk\_chance**: 区块中生成自定义矿物的几率. （越稀有的矿石设置的数值越低）\

{% hint style="warning" %}
<mark style="color:red;">**Old ItemsAdder**</mark> versions before **3.1.6** used these properties instead:\
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

