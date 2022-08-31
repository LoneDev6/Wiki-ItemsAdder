# 在游戏中转换旧物品/方块

{% hint style="danger" %}
**建议重新创建一个世界，并且不要使用旧的世界来进行转换.转换器仍处于测试阶段.**
{% endhint %}

{% hint style="danger" %}
该功能会产生较大延迟，只需要启用一段时间即可关闭该功能，避免造成无意义的性能损耗
{% endhint %}

## 如何自动转换您世界中的旧物品

当你将 ItemsAdder 从 1.0 升级至 2.0 你会发现所有的物品都发生了改变，因此这些物品与1.0不同.\
于是自动转换功能诞生了，每当玩家在世界中打开物品栏（包括箱子，漏斗，等等容器时..）都会自动转换旧版本物品

为了启用该功能，您必须在 **ItemsAdder 2.0** 的 `converter.yml ` 文件中将属性设置为 true

#### 确保已设置 inventory-open: true

```
items-auto-update:
  debug: false
  inventory-open: true
```

## 如何自动转换在世界中放置的旧方块

你需要打开 `converter.yml ` 并且将旧的 **model_id** 映射至 新的 **命名空间:物品名称**

具体格式为： `"id": "命名空间:物品名称"`

栗子如下：
#### 确保已设置 enabled: true

```
blocks:
  enabled: true
  debug: false
  conversion-map:
    "1": "itemsadder:ruby_block"
    "2": "itemsadder:crystal_block"
    "3": "itemsadder:spinel_block"
    "4": "itemsadder:turquoise_block"
    "5": "itemsadder:aqua_aura_block"
    "6": "itemsadder:amethyst_block"
    "7": "itemsadder:amethyst_prism_block"
    "8": "itemsadder:crying_obsidian"
    "9": "itemsadder:nice_stone"
    "10": "itemsadder:nice_wood"
    "11": "itemsadder:modern_stone"
    "12": "itemsadder:modern_sandstone"
    "13": "itemsadder:modern_quartz"
    "14": "itemsadder:ruby_ore"
    "15": "itemsadder:spinel_ore"
    "16": "itemsadder:turquoise_ore"
    "17": "itemsadder:aqua_aura_ore"
    "18": "itemsadder:amethyst_ore"
    "19": "itemsadder:bronze_ore"
    "20": "itemsadder:mysterious_ore"
    "21": "itemsadder:end_ore"
    "22": "itemsadder:restoration_table"
    "23": "itemsadder:customization_table"
    "24": "itemsadder:iron_dirt_ore"
    "25": "itemsadder:gold_dirt_ore"
    "26": "itemsadder:coal_dirt_ore"
    "27": "itemsadder:blaze_powder_ore"
    "28": "itemsadder:nether_alchemy_ore"
    "id": "命名空间:物品名称"
```
