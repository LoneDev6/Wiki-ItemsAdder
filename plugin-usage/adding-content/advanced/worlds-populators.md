# 方块生成机制

## 比如:2 populators

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
    chance: 70.0
    max_height: 45
    min_height: 25
    amount: 6
    iterations: 1
  custom_block_2:
    block: myitems:custom_block_2
    worlds:
    - world
    replaceable_blocks:
    - DIRT
    chance: 100.0
    max_height: 64
    min_height: 40
    amount: 3
    iterations: 1
```

这段配置允许ItemsAdder在"world"的世界中生成方块"myitems:custom/block",并且只能替换STONE,DIRT,ANDESITE,GRANITE,COBBLESTONE,GRAVEL的方块,并且只能在群落PLAINS生成.

## 数量\[amount\],重复\[iterations\],机率\[chance\]

{% hint style="warning" %}
我建议各位用户从我的itemsadder配置文件中的blocks.yml文件复制我建议的数值.  
最好不要设置太高的数值,否则服务器会卡顿/奔溃. 最好以我的数值为栗子

你能瞎设置的是**概率\[chance\]**
{% endhint %}

**iterations**: 生成矿脉的数量  
**amount**: 每个矿脉中的矿物数量 \(或**矿脉的大小**\)  
**chance**: 你可以把它设置为普通矿石的概率比如:100%,而对于稀有矿物你可以选择降低它.

## Biomes

你可以选择删除这个选项,该插件将在每个群落中产生矿物.

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
    chance: 70.0
    max_height: 45
    min_height: 25
    amount: 6
    iterations: 1
```

## 可替换的方块

你可以不用理会这个选项,插件将产生矿石替换每个方块,而不是检查它是否可以被替换来进行替换.

```yaml
  custom_block:
    block: myitems:custom_block
    worlds:
    - world
    chance: 70.0
    max_height: 45
    min_height: 25
    amount: 6
    iterations: 1
```

