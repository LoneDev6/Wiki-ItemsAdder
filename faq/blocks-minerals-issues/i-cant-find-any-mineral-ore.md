# 找不到任何矿物/矿石

## 可能造成该问题的原因：

* 你可能在 **预生成** 的世界中寻找矿物. \
  因为Minecraft的生成原理，不会在旧区块中生成新的矿物
  新增的矿物将会在新生成的区块上生成
* 你在矿物的 **spawn location（生成点）** 周围.\
  请尝试 **传送至远离** **生成点** 的地方搜寻
* 你搜寻矿物的世界不在该自定义矿物的生成世界中.\
  你必须在矿物的 `.yml` 文件中为每个矿物添加生成的世界
{% code title="ore.yml" %}
```yaml
  example_ore:
    block: itemsadder:example_ore
    # ↓ 在此处添加生成的世界
    worlds:
    - world
    replaceable_blocks:
    - STONE
    - DIRT
    - ANDESITE
    - GRANITE
    - COBBLESTONE
    - GRAVEL
    chance: 50.0
    max_height: 25
    min_height: 15
    amount: 6
    iterations: 1
```
{% endcode %}
