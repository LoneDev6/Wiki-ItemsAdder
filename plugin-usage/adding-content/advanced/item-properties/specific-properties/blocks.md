# Blocks

```yaml
specific_properties:
  block:
    placed_model:
      type: REAL_NOTE
      break_particles: BLOCK
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

## placed_model 

### type

this property can have these value:

* `REAL_NOTE`
  * uses a real block (note_block), no lag, no entities, 100% real blocks.
  * downsides: 
    * **no **support for **transparency**. 
    * **max **of **750 blocks **in total.
* `REAL`
  * uses a real block (mushroom), no lag, no entities, 100% real blocks. (although it's advised to use `REAL_NOTE` which is more stable).
  * downsides: 
    * **max **of **191 blocks **in total
* `REAL_TRANSPARENT`
  * uses a real block (chorus), no lag, no entities, 100% real blocks, also with transparency support!
  * downsides: 
    * **max **of **63 blocks **in total
* `REAL_WIRE`
  * uses a real block (tripwire), no lag, no entities, 100% real blocks.
  * downsides: 
    * **max **of **127 blocks **in total.
* `TILE`
  * uses **tile **blocks (modified **spawner **with custom skin). It's **not an entity **but it have some downsides. Good thing is that you can create **infinite blocks**, there is no amount limit like **REAL **blocks.
  * downsides:
    * not a 100% real block, it's a retextured spawner
    * texture/model vanishes on high distance, so it will reveal the spawner vanilla texture
    * it could cause clientside lag if A LOT of blocks are in the player field of view, but only on lowend PCs.
* `FIRE`
  * this is a **special **type of **block**, it's the **fire **block.
  * downsides: 
    * only a **max **of **14 **custom **fires **is possible, so be sure to create only the ones you need.

{% hint style="warning" %}
It's better to use **REAL **and **REAL_NOTE **blocks for decorative blocks/ores and use **TILE **blocks for trade machines and machinery/rare decorative blocks.\
You should not use **TILE **blocks for ores because it COULD cause a bit of lag on chunk generation.
{% endhint %}

### placeable_on_water

This allows to make some blocks placeable directly on **water **surface.

### **placeable_on_lava**

This allows to make some blocks placeable directly on **lava **surface.

### shift_up

This allows to make some blocks placed 1 block up. This is useful for `REAL_WIRE` blocks to create tall plants.

## cancel_drop

Cancel drop when block is broken.\
Useful if you have any mineral that will drop out of the block (loots), to avoid exploits.

{% hint style="info" %}
If you use silk touch enchanted tool to break the block you will still get the block but it won't drop any item from its loot 
{% endhint %}

## Tools blacklist and whitelist

You can set "\_PICKAXE" so every pickaxe will match the list rule, also "\_AXE" as the plugin checks if the material name contains the word you set in the rule.\
It also works for custom items ids, so for example if you set "ruby\_" every ruby tool will work (ruby_pickaxe, ruby_axe...)

### break_tools_blacklist

Blacklist of tools that cannot break this block

### break_tools_whitelist

Whitelist of tools that can break this block

### events_tools_blacklist

Blacklist of tools that cannot run events on this block[ (`placed_block.interact`)](../events/#list-of-events)

### events_tools_whitelist

Whitelist of tools that cannot run events on this block [(`placed_block.interact`)](../events/#list-of-events)

## Other options

### hardness

Hardness of the block, it makes it more difficult to be mined. \
Refer to my blocks to get some **examples **(check **blocks.yml** file inside **itemsadder namespace**).

### blast_resistance

Explosion resistance (by default is `hardness * 3`)

### no_explosion

Totally immune from explosions, ignoring `blast_resistance`

### sounds

You can change block break and place sounds. You can specify a [custom sound](../../sounds/) name instead of a Minecraft sound.\
You can specify both [Spigot sounds](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Sound.html) or vanilla [Minecraft sounds](https://www.digminecraft.com/lists/sound_list_pc.php) names.

{% hint style="info" %}
If no **break **sound is specified it will play  [`BLOCK_STONE_BREAK`](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Sound.html#BLOCK_STONE_BREAK)`  `(`block.stone.break`)

If no **place **sound is specified it will play the default sound of the vanilla material you set in the [resource ](../resource/)attribute of this block.
{% endhint %}
