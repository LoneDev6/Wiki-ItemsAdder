---
description: 创建你的第一个自定义方块
icon: cube
---

# 方块

## 创建一个简单的自定义方块

### 创建方块文件

{% hint style="warning" %}
这是一个示例方块（记得将 `myitems` [命名空间](broken-reference)更改为你想要的）。
{% endhint %}

例如，我创建了一个**文件**，其中包含我所有的**自定义方块**。\
我将其创建在文件夹：`plugins/ItemsAdder/contents/myitems/configs/`

在这个文件（`blocks.yml`）中，我开始创建一个名为 `red_block` 的简单方块。

```yaml
info:
  namespace: myitems
items:
  red_block:
    display_name: Red Block
    permission: red_block
    resource:
      material: PAPER
```

{% hint style="warning" %}
使用一个**不可放置**的**原版材料**非常重要。例如 **PAPER**。\
如果你使用一个方块（如 **STONE** 或 **DIRT**），放置时会有些卡顿。
{% endhint %}

### 创建纹理文件

现在是有趣的部分，让我们来设置纹理！\
你需要在正确的文件夹中存放 `.png` 纹理文件。

本例中**命名空间**是 `myitems`，因此你需要将纹理放入该文件夹：\
`plugins/ItemsAdder/contents/myitems/textures/block/`

<details>

<summary>替代路径</summary>

作为替代，你也可以将其放入如下文件夹：\
`plugins/ItemsAdder/contents/myitems/resourcepack/assets/myitems/textures/block/`

阅读更多：[文件夹结构](configs-and-resourcepack.md#why-different-folder-structures-choices)

</details>

<figure><img src="../../.gitbook/assets/red_block_textures_preview.png" alt=""><figcaption></figcaption></figure>

### 将纹理应用至物品

再次打开 `blocks.yml`，并像我一样添加 `resource` 部分。\
如你所见，我设置了 `generate: true`，同时也设置了纹理。\
这会告诉插件，使用纹理自动生成 3D 模型。

```yaml
info:
  namespace: myitems
items:
  red_block:
    display_name: Red Block
    permission: red_block
    resource:
      generate: true
      material: PAPER
```

### 在不同面使用不同纹理

{% hint style="warning" %}
**重要**：如例所示，必须保持正确的方向顺序
{% endhint %}

```yaml
info:
  namespace: myitems
items:
  red_block:
    display_name: Red Block
    permission: red_block
    resource:
      generate: true
      material: PAPER
      textures:
        - block/red_block_down.png
        - block/red_block_east.png
        - block/red_block_north.png
        - block/red_block_south.png
        - block/red_block_up.png
        - block/red_block_west.png
```

### 为每个面使用相同的纹理

```yaml
info:
  namespace: myitems
items:
  red_block:
    display_name: Red Block
    permission: red_block
    resource:
      generate: true
      material: PAPER
      textures:
        - block/red_block.png
```

## 完成最终配置

### 为方块添加放置功能

你需要添加 `specific_properties` 属性。

```yaml
info:
  namespace: myitems
items:
  red_block:
    display_name: Red Block
    permission: red_block
    resource:
      generate: true
      material: PAPER
      textures:
        - block/red_block.png
    specific_properties:
      block:
        placed_model:
          type: REAL_NOTE
          break_particles: ITEM
```

{% hint style="info" %}
如果你想指定可以破坏该方块的**工具**，添加**硬度**和**其他属性**，请单击底部链接。
{% endhint %}

### 最后

现在你只需要告诉插件加载你刚刚添加的方块。\
请务必阅读托管教程，否则您将无法正确看到该块。

{% content-ref url="../resourcepack-hosting/" %}
[资源包托管](../resourcepack-hosting/)
{% endcontent-ref %}

## 在游戏内获得该方块

运行 `/iaget red_block` 获得物品。

![](../../.gitbook/assets/image\_\(92\).png)

![](../../.gitbook/assets/image\_\(91\).png)

![](../../.gitbook/assets/image\_\(93\).png)

## 下载完整示例

{% embed url="https://addon.devs.beer/toolbox/assets-repository/red_block" %}

## 方块属性

```yaml
specific_properties:
  block:
    placed_model:
      type: REAL_NOTE
      break_particles: BLOCK
      rotx: 0
      roty: 0
    cancel_drop: true #default is false. if true the custom block won't be dropped when
                      #player mines it
    light_level: 12 #make block emit light
    #tools you can't use to break block(accepts partial name of material/customitem)
    break_tools_blacklist:
    - WOODEN_PICKAXE
    - STONE_PICKAXE
    - IRON_PICKAXE
    #tools you can use to break block(accepts partial name of material/customitem)
    break_tools_whitelist:
    - DIAMOND_PICKAXE
    - PICKAXE
    - pickaxe
    hardness: 2 #hardness of the block
    blast_resistance: 1 #explosion resistance (by default is hardness*3)
    no_explosion: false #totally immune from explosions, ignoring blast_resistance
    sound: #customizable sounds of the block
      break:
        name: BLOCK_WOOD_BREAK
        volume: 1
        pitch: 0.9
      place:
        name: BLOCK_WOOD_PLACE
        volume: 1
        pitch: 0.9
```

## `placed_model`&#x20;

### `type`

该属性含有以下内容：

* `REAL_NOTE`
  * 使用真实的方块（音符盒），无延迟，无实体，完全真实。
  * 缺点：
    * **不**支持**透明**.
    * **最多 750 个方块**。
* `REAL`
  * 使用真实的方块（蘑菇块），无延迟，无实体，完全真实。（尽管建议使用更稳定的 `REAL_NOTE`）
  * 缺点：
    * **最多 191 个方块**
* `REAL_TRANSPARENT`
  * 使用真实的方块（紫菘植株），无延迟，无实体，完全真实，也支持透明！
  * 缺点
    * **最多 63 个方块**
* `REAL_WIRE`
  * 使用真实的方块（拌线），无延迟，无实体，完全真实。
  * 缺点
    * **最多 127 个方块**
* `TILE`
  * 使用**空心**方块（具有自定义皮肤的**刷怪笼**）。这并非实体，但有一些缺点。好处是你可以创建**无限的方块**，不像**真实**方块一样有数量限制。
  * 缺点：
    * not a 100% real block, it's a retextured spawner
    * texture/model vanishes on high distance, so it will reveal the spawner vanilla texture
    * it could cause clientside lag if A LOT of blocks are in the player field of view, but only on lowend PCs.
* `FIRE`
  * this is a **special** type of **block**, it's the **fire** block.
  * downsides:&#x20;
    * only a **max** of **14** custom **fires** is possible, so be sure to create only the ones you need.

{% hint style="warning" %}
* **`REAL`** and **`REAL_NOTE`** are meant to be used for decorative blocks and ores.
* **`TILE`** blocks for trade machines and machinery/rare decorative blocks.\
  You should not use **`TILE`** blocks for ores because _**it may**_ cause a bit of lag on chunk generation. They are not adviced to be used for [populators](trees-and-trees-populators.md) or [decorators](cave-decorators.md).
{% endhint %}

### `rotx` and `roty`

This allows you to specify a rotation for a particular model. This is an option for expert users.\
The specified rotation is STATIC, it's not dynamic. This is useful only if you want to create multiple variants of the same block without having to create a separate model manually.

### `placeable_on_water`

This allows to make some blocks placeable directly on **water** surface.

### **`placeable_on_lava`**

This allows to make some blocks placeable directly on **lava** surface.

### `shift_up`

This allows to make some blocks placed 1 block up. This is useful for `REAL_WIRE` blocks to create tall plants.

### `custom_variants`

{% hint style="warning" %}
Available on ItemsAdder 3.2.5+
{% endhint %}

Special property which allows to specify custom variants for that block.\
Accepts the same properties shown in the Minecraft wiki [models page](https://minecraft.fandom.com/wiki/Tutorials/Models).

Example:

```yaml
          custom_variants:
            variant1:
              model: "minecraft:block/end_stone_bricks"
              y: 90
            variant2:
              model: "minecraft:block/end_stone_bricks"
              y: 180
              x: 90
            variant3:
              model: "minecraft:block/diamond_block"
              uvlock: true
            variant4:
              model: "minecraft:block/cobblestone"
```

## `cancel_drop`

Cancel drop when block is broken.\
Useful if you have any mineral that will drop out of the block (loots), to avoid exploits.

{% hint style="info" %}
If you use silk touch enchanted tool to break the block you will still get the block but it won't drop any item from its loot&#x20;
{% endhint %}

## Tools blacklist and whitelist

You can set "\_PICKAXE" so every pickaxe will match the list rule, also "\_AXE" as the plugin checks if the material name contains the word you set in the rule.\
It also works for custom items ids, so for example if you set "ruby\_" every ruby tool will work (ruby\_pickaxe, ruby\_axe...)

### `break_tools_blacklist`

Blacklist of tools that cannot break this block

### `break_tools_whitelist`

Whitelist of tools that can break this block

### `events_tools_blacklist`

Blacklist of tools that cannot run events on this block[ (`placed_block.interact`)](item-properties/events/#list-of-events)

### `events_tools_whitelist`

Whitelist of tools that cannot run events on this block [(`placed_block.interact`)](item-properties/events/#list-of-events)

## Other options

### `hardness`

Hardness of the block, it makes it more difficult to be mined. \
Refer to my blocks to get some **examples** (check **blocks.yml** file inside **itemsadder namespace**).

### `blast_resistance`

Explosion resistance (by default is `hardness * 3`)

### `no_explosion`

Totally immune from explosions, ignoring `blast_resistance`

### `sounds`

{% hint style="warning" %}
`hit`, `step` and `fall` sounds require **ItemsAdder 3.6.3b** or **greater**.
{% endhint %}

You can specify [custom sound](adding-sounds.md) names instead of vanilla sound.\
You can specify both [Spigot sounds](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Sound.html) or vanilla [Minecraft sounds](https://www.digminecraft.com/lists/sound\_list\_pc.php) names.

{% hint style="info" %}
**Stone** block sounds will be used if no sound is specified.
{% endhint %}

#### Example using vanilla sounds

```yaml
    specific_properties:
      block:
        placed_model:
          type: REAL_NOTE
          break_particles_material: PRISMARINE_BRICKS
        break_tools_whitelist:
          - PICKAXE
          - pickaxe
        sound:
          break:
            name: minecraft:block.amethyst_block.break
          place:
            name: minecraft:block.amethyst_block.place
          hit:
            name: minecraft:block.amethyst_block.hit
          step:
            name: minecraft:block.amethyst_block.step
          fall:
            name: minecraft:block.amethyst_block.fall

```

#### Example using custom sounds

```yaml
    sound:
      break:
        name: my_sounds:sound_1
      place:
        name: my_sounds:sound_2
      hit:
        name: my_sounds:sound_3
      step:
        name: my_sounds:sound_4
      fall:
        name: my_sounds:sound_5
```

{% hint style="info" %}
To add custom sounds to  your resourcepack you have to [read the sounds tutorial](adding-sounds.md).
{% endhint %}

### `permission_suffix`

This property allows you to enable permissions for the block place and block break events.\
This setting is not specified by default because we want players to be able to break and place blocks freely.\
Players would need explicit permissions if you specify these properties:

* `ia.user.block.break.iasurvival.ruby_ore`
* `ia.user.block.place.iasurvival.ruby_ore`

```yaml
info:
  namespace: iasurvival
items:
  ruby_ore:
    enabled: true
    display_name: display-name-ruby_ore
    permission: iasurvival.items.ruby_ore
    resource:
      material: PAPER
      generate: true
      textures:
        - block/ores/ruby_ore
    specific_properties:
      block:
        permission_suffix:
          break: iasurvival.ruby_ore
          place: iasurvival.ruby_ore
        hardness: 4
        placed_model:
          type: REAL_NOTE
          break_particles_material: REDSTONE_ORE
        cancel_drop: true
        break_tools_blacklist:
          - WOODEN_PICKAXE
          - STONE_PICKAXE
        break_tools_whitelist:
          - PICKAXE
          - pickaxe
          - _hammer
```

### Use the official files editor to read all the properties

{% content-ref url="../files-editor.md" %}
[files-editor.md](../files-editor.md)
{% endcontent-ref %}

## Drop experience from block

{% hint style="info" %}
**There are 2 ways to drop** experience **from your custom blocks.**
{% endhint %}

### 1. Add the experience drop directly in the custom block creation

This has a downside, you can only set the experience drop to custom blocks, not to vanilla blocks.

```yaml
  ruby_block:
    display_name: display-name-ruby_block
    permission: ruby_block
    resource:
      material: PAPER
      generate: true
      textures:
      - block/ruby_block.png
    specific_properties:
      block:
        placed_model:
          type: REAL_NOTE
          break_particles_material: REDSTONE_BLOCK
        break_tools_whitelist:
        - PICKAXE
        - pickaxe
    events:
      placed_block:
        break:
          drop_exp:
            chance: 100
            min_amount: 0
            max_amount: 3
```

### 2. Add the exp drop to loots

This is the best way because you can also apply this to vanilla blocks types and you can add as many as exp settings you want. This allows you to add more randomness and dynamicity to your drops.

```yaml
loots:
  blocks:
    ruby_ore:
      type: iasurvival:ruby_ore
      items:
        ruby:
          item: iasurvival:ruby
          min_amount: 1
          max_amount: 2
          chance: 100
      exp:
        exp_1:
          min_amount: 0
          max_amount: 3
          chance: 100
```
