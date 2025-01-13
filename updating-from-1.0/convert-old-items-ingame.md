# 游戏内转换旧版物品/方块

{% hint style="danger" %}
**建议使用全新世界，因为转换器仍为实验性。**
{% endhint %}

{% hint style="danger" %}
这些功能可能导致延迟，请在开启的几天后关闭以避免无用延迟。
{% endhint %}

## How to auto convert old items in your worlds

当您从ItemsAdder 1.0更新到2.0时，大多数物品都已更改，因此它们与更新前的旧物品不同。\
这就是为什么我必须编写一个功能，自动用新物品替换旧物品。每当玩家打开世界上的存储（箱子、容器……但不是他们自己的存储）时，都会运行此过程。

为了启用此功能，您必须在 **ItemsAdder 2.0** 的`converter.yml`中将此属性设置为true

#### 确保设置 inventory-open: true

```
items-auto-update:
  debug: false
  inventory-open: true
```

## 如何自动转换已放置方块

您必须打开`converter.yml`，并将旧方块的**model_id**映射到IA 2.0的新**命名空间**块。例如，我已经添加了旧的ItemsAdder 1.0方块块映射，将其转换为2.0命名空间方块。

#### 确保设置 enabled: true

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
```
