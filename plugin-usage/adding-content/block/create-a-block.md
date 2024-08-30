---
description: Creating your first custom block
---

# ➕ Create a block

{% hint style="danger" %}
**Resourcepack hosting**

Remember to **decide** a [**resourcepack hosting**](../../resourcepack-hosting/) method **before** you **start**.\
I **advise** you to use **self-host** which is **easier** and **faster**, but you can also use **Dropbox** and similar
{% endhint %}

## Create a simple custom block

### Creating the blocks file

{% hint style="warning" %}
This is an example block (remember to change `myitems` [namespace ](broken-reference)to the one you want).
{% endhint %}

For example I created a **file** which will contain all my **custom blocks.**\
I created it in the folder: `plugins/ItemsAdder/contents/myitems/configs/`

In this file (`blocks.yml`) I start creating a simple block called `red_block`.

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
It's very important to use a **non placeable** vanilla **material**. For example **`PAPER`**.\
If you use a block (like `STONE` or `DIRT`) it will result a bit glitchy when placed.
{% endhint %}

### Creating the textures files

Now the fun part, let's set the textures!\
To do that you have to put the `.png` textures file inside the correct folder.

In this case your **namespace** is `myitems` so you have to put them in this folder:\
`plugins/ItemsAdder/contents/myitems/textures/block/`

<details>

<summary>Alternative textures location</summary>

Alternatively you can put them in this folder too:\
`plugins/ItemsAdder/contents/myitems/resourcepack/assets/myitems/textures/block/`

Read more here: [folders structure](../configs-and-resourcepack.md#why-different-folder-structures-choices)

</details>

<figure><img src="../../../.gitbook/assets/red_block_textures_preview.png" alt=""><figcaption></figcaption></figure>

### Applying the textures files to your item

Now open `blocks.yml` file again and add the `resource` part as I did.\
As you can see I set `generate: true` and I set the textures for the item.\
This tells the plugin to generate the 3D model automatically using your texture.

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

### Using different texture for each face

{% hint style="warning" %}
**Important**: keep the correct cardinal directions order as shown in the example.
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

### Using the same texture for each face

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

## Final complete configuration

### Adding the block placing functionality

You have to add the `specific_properties` attribute.

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
Click on the bottom link if you want to specify **tools** which can break the block, add **hardness** and **other attributes**.
{% endhint %}

### Final part

Now you just need to tell the plugin to load your just added block.\
Make sure to read the hosting tutorial or you won't see the block correctly.

{% content-ref url="../../resourcepack-hosting/" %}
[resourcepack-hosting](../../resourcepack-hosting/)
{% endcontent-ref %}

## Getting the block ingame

Run `/iaget red_block` to get the item.

![](../../../.gitbook/assets/image\_\(92\).png)

![](../../../.gitbook/assets/image\_\(91\).png)

![](../../../.gitbook/assets/image\_\(93\).png)

## Download the complete example

{% embed url="https://addon.devs.beer/toolbox/assets-repository/red_block" %}

## Block properties

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
  * uses a real block (chorus), no lag, no entities, 100% real blocks, also with transparency support!
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
* **`REAL`** and **`REAL_NOTE`** are meant to be used for decorative blocks and ores.
* **`TILE`** blocks for trade machines and machinery/rare decorative blocks.\
  You should not use **`TILE`** blocks for ores because _**it may**_ cause a bit of lag on chunk generation. They are not adviced to be used for [populators](../trees-populators/populator.md) or [decorators](../cave-decorators.md).
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

Blacklist of tools that cannot run events on this block[ (`placed_block.interact`)](../item-properties/events/#list-of-events)

### `events_tools_whitelist`

Whitelist of tools that cannot run events on this block [(`placed_block.interact`)](../item-properties/events/#list-of-events)

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

You can specify [custom sound](../sounds/adding-sounds.md) names instead of vanilla sound.\
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
To add custom sounds to  your resourcepack you have to [read the sounds tutorial](../sounds/adding-sounds.md).
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

{% content-ref url="../../files-editor.md" %}
[files-editor.md](../../files-editor.md)
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
