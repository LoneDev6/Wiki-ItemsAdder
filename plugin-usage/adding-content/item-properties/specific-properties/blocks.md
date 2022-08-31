# 方块

```yaml
specific_properties:
  block:
    placed_model:
      type: REAL_NOTE
      break_particles: BLOCK
      rotx: 0
      roty: 0
    cancel_drop: true #默认为false. 该属性为true时会取消方块掉落
                      #player mines it
    light_level: 12 #使方块发光
    #破坏该方块的工具黑名单(原版物品以及自定义物品都可以)
    break_tools_blacklist:
    - WOODEN_PICKAXE
    - STONE_PICKAXE
    - IRON_PICKAXE
    #破坏该方块的工具白名单(原版物品以及自定义物品都可以)
    break_tools_whitelist:
    - DIAMOND_PICKAXE
    - PICKAXE
    - pickaxe
    hardness: 2 #方块的硬度
    blast_resistance: 1 #防爆等级(默认为硬度*3)
    no_explosion: false #无视爆炸影响, 忽略 "blast_resistance" 的值
    sound: #为方块使用自定义音效
      break:
        name: BLOCK_WOOD_BREAK
        volume: 1
        pitch: 0.9
      place:
        name: BLOCK_WOOD_PLACE
        volume: 1
        pitch: 0.9
```

## placed\_model&#x20;

### 自定义方块类型（type）

该属性能够使用以下值：

* `REAL_NOTE`
  * 使用真实的方块 (音符盒), 无滞后, 无实体, 100%为真实方块.
  * 缺点:&#x20;
    * 不支持具有透明度的贴图.&#x20;
    * 最大可创建的数量为 **750 个方块**
* `REAL`
  * 使用真实的方块 (蘑菇块), 无滞后, 无实体, 100%为真实方块. (建议使用更加稳定的 `REAL_NOTE` 类型).
  * 缺点:&#x20;
    * 最大可创建的数量为 **191 个方块**
* `REAL_TRANSPARENT`
  * 使用真实的方块 (紫颂植株), 无滞后, 无实体, 100%为真实方块, 支持具有透明度贴图
  * 缺点:&#x20;
    * 最大可创建的数量为 **63 个方块** 
* `REAL_WIRE`
  * 使用真实的方块 (线), 无滞后, 无实体, 100%为真实方块.
  * 缺点:&#x20;
    * 最大可创建的数量为 **127 个方块**
* `TILE`
  * 使用 **tile** 类型创建自定义方块 (通过更换 **刷怪笼** 的贴图来实现).没有创建数量的限制，你可以使用该类型创建无限个自定义方块
  * 缺点:
    * 并不是真实方块, 只是对刷怪笼的贴图进行更改
    * 自定义的贴图/模型将会在远距离的情况下失效，会显示成原本的材质（刷怪笼）
    * 当该类型的自定义方块大量出现在玩家视野中将会造成客户端延迟
* `FIRE`
  * 该特殊类型用于自定义火焰的创建.
  * 缺点:&#x20;
    * 最大可创建 **14种** 自定义火焰

{% hint style="warning" %}
矿物以及装饰性方块最好使用 **REAL** 或者 **REAL_NOTE** .\
**TILE** 用于创建其他稀有的方块以及机器为宜.\
不要使用 **TILE** 来新增自定义矿物，因为在新的区块中生成时会有延迟
{% endhint %}

### rotx 与 roty

该属性能够让你使特殊的模型进行指定角度旋转.(该属性适用于进阶用户).\
指定角度旋转是静态的,该属性仅在你使用子级物品的时才有用.\


### placeable\_on\_water

允许方块放置在 **水** 上

### **placeable\_on\_lava**

允许方块放置在 **岩浆** 上

### shift\_up

允许玩家能够使用shift在基础方块上再次放置（例如：使用 `REAL_WIRE` 创建的方块制作路两格高的巨大植物）

## cancel\_drop

取消挖掘方块后掉落战利品.\

{% hint style="info" %}
如果你使用具有 **精准采集** 附魔效果的工具来破坏方块，你仍然可以获得方块，但无法获得其掉落的战利品&#x20;
{% endhint %}

## 工具的白名单与黑名单

你可以在名单中设置 "\_PICKAXE" 这样子每个镐子都将会匹配至名单中，也可以设置 "\_AXE" 因为插件会检查物品的材质是否属于你设置的规则中.\
该规则同样也适用于自定义物品id，例如你设置了 "ruby\_" 则带有 "ruby\_" 词条的工具都可以使用（uby\_pickaxe, ruby\_axe...）

### break\_tools\_blacklist

破坏该方块的工具黑名单

### break\_tools\_whitelist

破坏该方块的工具白名单

### events\_tools\_blacklist

无法在该方块上运行该事件[ (`placed_block.interact`)](../events/#list-of-events) 的黑名单

### events\_tools\_whitelist

无法在该方块上运行该事件[ (`placed_block.interact`)](../events/#list-of-events) 的白名单

## 其他选项

### hardness

方块的硬度,挖掘该方块需要花费的时间 \
你可以查看预置物品中的一些示例 (位于**itemsadder**命名空间下的 **blocks.yml** 文件).

### blast\_resistance

防爆指数（默认为 `hardness*3`）

### no\_explosion

无视爆炸影响，忽略 `blast_resistance` 属性

### sounds

你可以更改方块被破坏/放置时的音效，你可以使用 [自定义音效](../../sounds/) 名称来代替原版音效
当然你同时也可以使用 [Spigot sounds](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Sound.html)以及 [原版音效](https://www.digminecraft.com/lists/sound\_list\_pc.php) 名称.

{% hint style="info" %}
如果未设置 **break** 播放的音效，默认使用 [`BLOCK_STONE_BREAK`](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Sound.html#BLOCK\_STONE\_BREAK)  ``  (`block.stone.break`)
如果未设置 **place** 播放的音效，将会播放在该方块 [resource ](../resource/) 属性中设置的原版音效
{% endhint %}
