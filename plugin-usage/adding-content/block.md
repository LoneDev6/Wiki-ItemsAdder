---
icon: cube
description: 创建你的第一个自定义方块
---

# 方块

### 创建方块文件

{% hint style="warning" %}
这是一个示例方块（记得将 `myitems` 更改为你想要的命名空间）。
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

## 在游戏内获得该方块

运行 `/iaget red_block` 获得物品。

![](../../.gitbook/assets/image_\(92\).png)

![](../../.gitbook/assets/image_\(91\).png)

![](../../.gitbook/assets/image_\(93\).png)

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
    * 不完全真实，是重新绘制的刷怪笼
    * 纹理/模型在高处隐形，因此会显现出原版刷怪笼纹理
    * 如果玩家视野里有大量方块，可能会引起客户端处的延迟，但仅限于较差的电脑。
* `FIRE`
  * 这是一个**特殊的方块**，是**火焰方块**。
  * 缺点
    * 仅支持**最多 14 个方块**，确保只创建你需要的。

{% hint style="warning" %}
- **`REAL`** 与 **`REAL_NOTE`** 用于装饰性方块与矿物。
- **`TILE`** 用于交易机器与机械/珍稀装饰性方块。\
  你应该避免使用 **`TILE`** 作为矿物，因为这 _**可能**_ 会在生成区块时导致一定延迟。也不建议用于[树木](trees-and-trees-populators.md)或[洞穴装饰](cave-decorators.md)。
{% endhint %}

### `rotx` and `roty`

这允许你指定特定模型进行旋转。这是为专业用户提供的。\
指定的旋转是**静态的**，不是动态的。只有当您想创建同一块的多个变体而不必手动创建单独的模型时，这才有用。

### `placeable_on_water`

这允许方块被直接放于**水**面。

### **`placeable_on_lava`**

这允许方块直接放于**熔岩**表面。

### `shift_up`

这允许方块放于上方一格的未知。对于创建大型植物的 `REAL_WIRE` 方块来讲很有用。

### `custom_variants`

{% hint style="warning" %}
Available on ItemsAdder 3.2.5+
{% endhint %}

允许指定方块变种的特殊属性。\
接受在 Minecraft wiki [模型页面](https://minecraft.fandom.com/wiki/Tutorials/Models).展示的相同属性。

示例:

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

### `drop_when_mined`

{% hint style="warning" %}
ItemsAdder 4.0.9 及以上可用

旧版本使用 `cancel_drop`，且 `true/false` 设置应当反转。
{% endhint %}

控制是否在被挖掘后掉落。当有其他方法来获取对应的矿物（如战利品）时，用来控制产量很有用。

### `drop_on_shears`

{% hint style="warning" %}
ItemsAdder 4.0.9 及以上可用
{% endhint %}

控制使用剪刀时方块是否掉落。

### `drop_on_silk_touch`

{% hint style="warning" %}
ItemsAdder 4.0.9 及以上可用
{% endhint %}

控制使用精准采集附魔工具时，方块是否掉落。

{% hint style="info" %}
如果你使用精准采集附魔的工具来破坏方块，方块本身仍会掉落，但不会掉落任何其他战利品。
{% endhint %}

## 工具黑白名单

你可以设置为 "\_PICKAXE" 使所有镐子都匹配规则，同时你也可以设置 "\_AXE"，因为插件会检查材料名称是否包含在你设置的单词里。\
这也适用于自定义物品的 ID，因此如果你设置"ruby\_"，每个红宝石工具都会生效（ruby\_pickaxe，ruby\_axe...）

### `break_tools_blacklist`

黑名单内的工具无法破坏该方块

### `break_tools_whitelist`

白名单内的工具可以破坏该方块

### `events_tools_blacklist`

黑名单内的工具无法触发该方块的事件[ (`placed_block.interact`)](item-properties/events/#list-of-events)

### `events_tools_whitelist`

白名单内的工具无法触发该方块的事件 [(`placed_block.interact`)](item-properties/events/#list-of-events)

## 其他选项

### `hardness`

方块的硬度，使其更难挖掘\
参考我的方块来获得一些**示例**（检查 **itemsadder namespace** 内的 **blocks.yml** 文件）。

### `blast_resistance`

爆炸抗性 (默认为 `hardness` 的 3 倍)

### `no_explosion`

完全免疫爆炸，忽视 `blast_resistance`

### `sounds`

{% hint style="warning" %}
`hit`, `step` 与 `fall` 声音需要 **ItemsAdder 3.6.3b** 或 **更高**。
{% endhint %}

你可以指定[自定义声音](adding-sounds.md)的名字，而非原版声音。\
你也可以指定 [Spigot 声音](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Sound.html) 或原版 [Minecraft 声音](https://www.digminecraft.com/lists/sound_list_pc.php)的名字。

{% hint style="info" %}
如果未指定声音，会使用**石头**的声音。
{% endhint %}

#### 使用原版声音的示例

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

#### 使用自定义声音的示例

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
要向资源包添加自定义声音，请[阅读声音教程](adding-sounds.md).
{% endhint %}

### `permission_suffix`

该属性允许你为方块放置/破坏事件启用权限。\
该设置默认并未启用，因为我们想让玩家自由地破坏/放置方块。\
如果你设定了对应属性，玩家将需要权限进行相关行为：

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

### 使用官方文件编辑器来读取所有属性

{% content-ref url="../files-editor.md" %}
[文件编辑](../files-editor.md)
{% endcontent-ref %}

## Drop experience from block

{% hint style="info" %}
有**两种**方法让你的自定义方块掉落经验。
{% endhint %}

### 1. 在创建自定义方块时直接添加经验掉落

这有一个缺点，你只能向自定义方块添加经验掉落，原版方块不行。

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

### 2. 向战利品添加经验

这是最好的方法，因为您也可以将其应用于原版方块类型，并且可以添加任意数量的经验设置。这允许您为您的掉落物添加更多的随机性和动态性。

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
