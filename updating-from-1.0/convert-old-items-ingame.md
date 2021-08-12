# 在游戏中转换旧物品/方块

{% hint style="danger" %}
**建议重新创建一个世界，并且不要使用旧的世界来进行转换.转换器仍是测试阶段**
{% endhint %}

{% hint style="danger" %}
这些功能吃服务器性能，启用几天然后再关闭它，避免占用服务器性能使服务器有延迟
{% endhint %}

## 如何自动转换您世界中的旧物品

从 ItemsAdder 1.0 更新到 2.0 时，项目都发生了改变，与旧版项目有一定的区别
（这就是作者编写自动转换的理由）当玩家在世界中打开容器时都会运行此过程 \(这里指的是箱子, 等储存界面.. 并不是玩家的背包\).

为了启用此功能，请将 **ItemsAdder 2.0** 中的 `converter.yml` 中属性设置为 true

#### 确保设置为 inventory-open: true

```text
items-auto-update:
  debug: false
  inventory-open: true
```

## 如何自动转换放置在世界中的旧方块

打开 `converter.yml` 文件 并且标注旧的 **model\_id** 以及在Itemadder2.0中新 **分组** 的方块. 具体看下方例子就明白啦！(=ﾟωﾟ)ﾉ

#### 确保设置为 enabled: true

```text
blocks:
  enabled: true
  debug: false
  conversion-map:
    "物品id" : "分组:新方块"
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

