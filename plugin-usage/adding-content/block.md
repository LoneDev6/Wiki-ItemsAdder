---
icon: cube
---

# Block

## Block properties

```yaml
specific_properties:
  block:
    placed_model:
      type: REAL_NOTE
      break_particles: BLOCK
      rotx: 0
      roty: 0
    drop_when_mined: true
    light_level: 12 # make block emit light
    # tools you can't use to break block (accepts partial name of material/customitem)
    break_tools_blacklist:
    - WOODEN_PICKAXE
    - STONE_PICKAXE
    - IRON_PICKAXE
    # tools you can use to break block (accepts partial name of material/customitem)
    break_tools_whitelist:
    - DIAMOND_PICKAXE
    - PICKAXE
    - pickaxe
    hardness: 2
    blast_resistance: 1 # explosion resistance (by default is hardness * 3)
    no_explosion: false # totally immune from explosions, ignoring blast_resistance
    sound: # customizable sounds of the block
      break:
        name: BLOCK_WOOD_BREAK
        volume: 1
        pitch: 0.9
      place:
        name: BLOCK_WOOD_PLACE
        volume: 1
        pitch: 0.9
```

## `placed_model`

### `type`

This property can have these value:

* `REAL_NOTE`
  * Uses a real block (note\_block), no lag, no entities, 100% real blocks.
  * Downsides:
    * **no** support for **transparency**.
    * **Max** of **750 blocks** in total.
* `REAL`
  * Uses a real block (mushroom), no lag, no entities, 100% real blocks. (although it's advised to use `REAL_NOTE` which is more stable).
  * Downsides:
    * **Max** of **191 blocks** in total
* `REAL_TRANSPARENT`
  * Uses a real block (chorus), no lag, no entities, 100% real blocks, also with transparency support!
  * Downsides:
    * **Max** of **63 blocks** in total.
* `REAL_WIRE`
  * Uses a real block (tripwire), no lag, no entities, 100% real blocks.
  * Downsides:
    * **Max** of **127 blocks** in total.
* `TILE`
  * Uses **tile** blocks (modified **spawner** with custom skin). It's **not an entity** but it have some downsides. Good thing is that you can create **infinite blocks**, there is no amount limit like **REAL** blocks.
  * Downsides:
    * Not a 100% real block, it's a retextured spawner.
    * Texture/model vanishes on high distance, so it will reveal the spawner vanilla texture.
    * It could cause clientside lag if A LOT of blocks are in the player field of view, but only on lowend PCs.
* `FIRE`
  * This is a **special** type of **block**, it's the **fire** block.
  * Downsides:
    * Only a **max** of **14** custom **fires** are possible, so be sure to create only the ones you need.

{% hint style="warning" %}
- **`REAL`** and **`REAL_NOTE`** are meant to be used for decorative blocks and ores.
- **`TILE`** blocks for trade machines and machinery/rare decorative blocks.\
  You should not use **`TILE`** blocks for ores because _**it may**_ cause a bit of lag on chunk generation. They are not adviced to be used for [populators](trees-and-trees-populators.md) or [decorators](cave-decorators.md).
{% endhint %}

### `rotx` and `roty`

This allows you to specify a rotation for a particular model. This is an option for expert users.\
The specified rotation is STATIC, it's not dynamic. This is useful only if you want to create multiple variants of the same block without having to create a separate model manually.

### `placeable_on_water`

This allows to make some blocks placeable directly on **water** surface.

### **`placeable_on_lava`**

This allows to make some blocks placeable directly on **lava** surface.

### `placeable_on_other_real_wire`

Set if the `REAL_WIRE` block can be placed on other `REAL_WIRE` blocks or not.

### `shift_up`

This allows to make some blocks placed 1 block up. This is useful for `REAL_WIRE` blocks to create tall plants.

### `custom_variants`

{% content-ref url="advanced-block-properties/variants.md" %}
[variants.md](advanced-block-properties/variants.md)
{% endcontent-ref %}

### `drop_when_mined`

{% hint style="warning" %}
Available since ItemsAdder 4.0.9.

Older versions use `cancel_drop` with inverted `true/false`.
{% endhint %}

Controls if the block is dropped when mined. Useful if you have any mineral that will drop out of the block (loots), to avoid exploits.

### `drop_on_shears`

{% hint style="warning" %}
Available since ItemsAdder 4.0.9.
{% endhint %}

Controls if the block is dropped when using shears.

### `drop_on_silk_touch`

{% hint style="warning" %}
Available since ItemsAdder 4.0.9.
{% endhint %}

Controls if the block is dropped when using silk touch enchanted tools.

{% hint style="info" %}
If you use silk touch enchanted tool to break the block you will still get the block but it won't drop any item from its loot
{% endhint %}

## Tools blacklist and whitelist

You can set "\_PICKAXE" so every pickaxe will match the list rule, also "\_AXE" as the plugin checks if the material name contains the word you set in the rule.\
It also works for custom items ids, so for example if you set "ruby\_" every ruby tool will work (ruby\_pickaxe, ruby\_axe...)

### `break_tools_blacklist`

Blacklist of tools that cannot break this block.

### `break_tools_whitelist`

Whitelist of tools that can break this block.

### `events_tools_blacklist`

Blacklist of tools that cannot run events on this block[ (`placed_block.interact`)](item-properties/events/#list-of-events)

### `events_tools_whitelist`

Whitelist of tools that can run events on this block [(`placed_block.interact`)](item-properties/events/#list-of-events)

## Other options

### `hardness`

Hardness of the block, it makes it more difficult to be mined.\
Refer to my blocks to get some **examples** (check **blocks.yml** file inside **itemsadder namespace**).

You can set `hardness` to `-1` to make the block break instantly.

### `blast_resistance`

Explosion resistance (by default is `hardness * 3`).

### `no_explosion`

Totally immune from explosions, ignoring `blast_resistance`.

### `sounds`

{% hint style="warning" %}
`hit`, `step` and `fall` sounds require **ItemsAdder 3.6.3b** or **greater**.
{% endhint %}

You can specify [custom sound](adding-sounds.md) names instead of vanilla sound.\
You can specify both [Spigot sounds](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Sound.html) or vanilla [Minecraft sounds](https://www.digminecraft.com/lists/sound_list_pc.php) names.

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
To add custom sounds to your resourcepack you have to [read the sounds tutorial](adding-sounds.md).
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

{% content-ref url="../beginners/files-editor.md" %}
[files-editor.md](../beginners/files-editor.md)
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
