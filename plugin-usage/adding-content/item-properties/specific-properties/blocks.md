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

### type

this property can have these value:

* `REAL_NOTE`
  * uses a real block (note\_block), no lag, no entities, 100% real blocks.
  * downsides:&#x20;
    * **no** support for **transparency**.&#x20;
    * **max** of **750 blocks** in total.
* `REAL`
  * uses a real block (mushroom), no lag, no entities, 100% real blocks. (although it's advised to use `REAL_NOTE` which is more stable).
  * downsides:&#x20;
    * **max** of **191 blocks** in total
* `REAL_TRANSPARENT`
  * uses a real block (紫颂植株), no lag, no entities, 100% real blocks, also with transparency support!
  * downsides:&#x20;
    * **max** of **63 blocks** in total
* `REAL_WIRE`
  * uses a real block (tripwire), no lag, no entities, 100% real blocks.
  * downsides:&#x20;
    * **max** of **127 blocks** in total.
* `TILE`
  * uses **tile** blocks (modified **spawner** with custom skin). It's **not an entity** but it have some downsides. Good thing is that you can create **infinite blocks**, there is no amount limit like **REAL** blocks.
  * downsides:
    * not a 100% real block, it's a retextured spawner
    * texture/model vanishes on high distance, so it will reveal the spawner vanilla texture
    * it could cause clientside lag if A LOT of blocks are in the player field of view, but only on lowend PCs.
* `FIRE`
  * this is a **special** type of **block**, it's the **fire** block.
  * downsides:&#x20;
    * only a **max** of **14** custom **fires** is possible, so be sure to create only the ones you need.

{% hint style="warning" %}
It's better to use **REAL** and **REAL\_NOTE** blocks for decorative blocks/ores and use **TILE** blocks for trade machines and machinery/rare decorative blocks.\
You should not use **TILE** blocks for ores because it COULD cause a bit of lag on chunk generation.
{% endhint %}

### rotx and roty

This allows you to specify a rotation for a particular model. This is an option for expert users.\
The specified rotation is STATIC, it's not dynamic. This is useful only if you want to create multiple variants of the same block without having to create a separate model manually.

### placeable\_on\_water

This allows to make some blocks placeable directly on **water** surface.

### **placeable\_on\_lava**

This allows to make some blocks placeable directly on **lava** surface.

### shift\_up

This allows to make some blocks placed 1 block up. This is useful for `REAL_WIRE` blocks to create tall plants.

## cancel\_drop

Cancel drop when block is broken.\
Useful if you have any mineral that will drop out of the block (loots), to avoid exploits.

{% hint style="info" %}
If you use silk touch enchanted tool to break the block you will still get the block but it won't drop any item from its loot&#x20;
{% endhint %}

## Tools blacklist and whitelist

You can set "\_PICKAXE" so every pickaxe will match the list rule, also "\_AXE" as the plugin checks if the material name contains the word you set in the rule.\
It also works for custom items ids, so for example if you set "ruby\_" every ruby tool will work (ruby\_pickaxe, ruby\_axe...)

### break\_tools\_blacklist

Blacklist of tools that cannot break this block

### break\_tools\_whitelist

Whitelist of tools that can break this block

### events\_tools\_blacklist

Blacklist of tools that cannot run events on this block[ (`placed_block.interact`)](../events/#list-of-events)

### events\_tools\_whitelist

Whitelist of tools that cannot run events on this block [(`placed_block.interact`)](../events/#list-of-events)

## 其他选项

### hardness

Hardness of the block, it makes it more difficult to be mined. \
Refer to my blocks to get some **examples** (check **blocks.yml** file inside **itemsadder namespace**).

### blast\_resistance

Explosion resistance (by default is `hardness * 3`)

### no\_explosion

Totally immune from explosions, ignoring `blast_resistance`

### sounds

You can change block break and place sounds. You can specify a [custom sound](../../sounds/) name instead of a Minecraft sound.\
You can specify both [Spigot sounds](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Sound.html) or vanilla [Minecraft sounds](https://www.digminecraft.com/lists/sound\_list\_pc.php) names.

{% hint style="info" %}
如果未设置 **break** 播放的音效，默认使用 [`BLOCK_STONE_BREAK`](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Sound.html#BLOCK\_STONE\_BREAK)  ``  (`block.stone.break`)

If no **place** sound is specified it will play the default sound of the vanilla material you set in the [resource ](../resource/)attribute of this block.
{% endhint %}
