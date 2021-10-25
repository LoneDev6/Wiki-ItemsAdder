# 方块

```yaml
specific_properties:
  block:
    placed_model:
      type: REAL_NOTE
      break_particles: BLOCK
    cancel_drop: true #默认为false.如果为true,则不会掉落物品
    light_level: 12 #使方块发出光来
    #不能使用该工具来破坏该方块(支持原版的物品和自定义物品)
    break_tools_blacklist:
    - WOODEN_PICKAXE
    - STONE_PICKAXE
    - IRON_PICKAXE
    #可以使用该工具来破坏该方块(支持原版的物品和自定义物品)
    break_tools_whitelist:
    - DIAMOND_PICKAXE
    - PICKAXE
    - pickaxe
    hardness: 2 #方块的坚硬程度
    blast_resistance: 1 #抗爆炸性(默认是hardness*3)
    no_explosion: false #完全不受爆炸影响
    sound: #可定制声音的方块
      break:
        name: BLOCK_WOOD_BREAK
        volume: 1
        pitch: 0.9
      place:
        name: BLOCK_WOOD_PLACE
        volume: 1
        pitch: 0.9
```

## placed\_model

这个属性有这些值:

* `REAL_NOTE`
  * 使用真正的方块(note\_block),没有卡顿,没有实体,100%的真实方块.
  * 缺点:&#x20;
    * **不**支持**透明**.&#x20;
    * **最多**只能制作**750个方块**
* `REAL`
  * 使用真正的方块(mushroom),没有卡顿,没有实体,100%的真实方块.
  * 缺点:&#x20;
    * **最多**只能制作**191个方块**
* `REAL_TRANSPARENT`
  * 使用真正的方块(chorus),没有卡顿,没有实体,100%的真实方块,也支持透明度！
  * 缺点:&#x20;
    * **最多**只能制作**63个方块**
* `TILE`
  * 使用**tile**方块(修改后的**刷怪笼**带有材质).它不是一个实体,但它有亿点缺点.好处是你可以创建**无限多**的方块,不像真实方块那样有**数量限制**.
  * 缺点:
    * 它不是100%的真实方块,它只是一个套上了材质的刷怪笼
    * 材质/模型在较远距离看的话会消失,所以它将会显示出刷怪笼的虚拟材质.
    * 如果大量的方块出现在玩家的视野里的话,可能会导致客户端出现延迟,低配电脑遭殃.
* `FIRE`
  * 这是一个**特殊方块**,它是**火**方块.
  * 缺点:&#x20;
    * 最多只能制作14种自定义火,所以要确保只创建你需要的火种.

{% hint style="warning" %}
最好使用**REAL**和**REAL\_NOTE**方块来制作装饰方块/矿石.使用**TILE**方块来制作贸易机器或机械/罕见的装饰方块.\
你最好不要拿**TILE**方块作为基础方块.因为它有可能导致大范围方块生成时有些卡顿.
{% endhint %}

## cancel\_drop

当方块被破坏时,取消掉落. 如果你不想让你的方块掉落(掉落物),你可以使用这个功能.

{% hint style="info" %}
如果你使用时运附魔工具来破坏木块,你仍然会得到木块,但掉落物里不会掉落其他物品.
{% endhint %}

## Tools blacklist and whitelist

你可以设置"\_PICKAXE",这样每个稿子都会受到挖掘限制,也可以设置"\_AXE".因为插件会检查物品是否包含在你有没有设置的列表里 它也适用于自定义物品的ID,假如,你设置了"ruby\_".那每一个ruby的工具都会列在列表(ruby\_pickaxe, ruby\_axe...)

### break\_tools\_blacklist

不能破坏该方块的工具黑名单

### break\_tools\_whitelist

能破坏该方块的工具白名单

### events\_tools\_blacklist

不能在此方块运行事件的工具黑名单[(`placed_block.interact`)](../events/#list-of-events)

### events\_tools\_whitelist

能在此方块运行事件的工具白名单[(`placed_block.interact`)](../events/#list-of-events)

## 其他

### hardness

方块的坚硬程度,使它更难被破坏.\
请参考我的方块配置来获得一些**栗子**(查看**itemsadder namespace\[itemsadder分组]**的**blocks.yml**文件).

### blast\_resistance

抗爆炸性 (默认是`hardness * 3`)

### no\_explosion

完全不受爆炸影响,无视`blast_resistance`

### sounds

你可以改变破坏方块和放置方块的音效.你可以指定一个[custom sound\[自定义声音\]](../../sounds/),而不是使用Minecraft的音效.\
你可以指定[Spigot sounds](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Sound.html)或原版[Minecraft sounds](https://www.digminecraft.com/lists/sound\_list\_pc.php)的名称.

{% hint style="info" %}
如果没有指定**破坏**的音效,它将播放[`BLOCK_STONE_BREAK`](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Sound.html#BLOCK\_STONE\_BREAK) `` `\( ``block.stone.break\`)

如果没有指定**放置**的音效,它将会播放你在材质包里设置的原版材质的[默认声音](../resource/)属性的方块.
{% endhint %}
