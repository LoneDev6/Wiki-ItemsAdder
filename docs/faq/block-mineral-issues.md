---
title: Block and Minerals issues
descriptions: "Solutions to most known issues about Blocks and Minerals"
---

# Block and Minerals issues

## Glitching Block textures

ItemsAdder uses either Note block states (`REAL_NOTE`) or Mushroom block states (`REAL`), depending on what the respective block configuration is set to.  
While note blocks are fairly stable, are mushroom blocks known to often break in one way or another.

### How to prevent glitched textures

When using the `REAL` block type will ItemsAdder use mushroom block states (as mentioned before) and it can happen that you encounter an issue like this:  
![glitched mushroom](/assets/images/faq/mushroom_bug.png){ loading=lazy }

Note that this glitch is only **visual** and won't cause any kind of duplication bug or similar.

To fix this issue, open the `config.yml` of ItemsAdder and under `search-also-in-these-biomes`, update the list to include the biomes where you encountered those bugged mushrooms.  
The reason why ItemsAdder doesn't look in all biomes by default is better CPU performance.

??? ":octicons-file-code-24: Config.yml"
    ```yaml
    search-also-in-these-biomes:
      enabled: true
      biomes:
      - OCEAN
      - PLAINS
      - DESERT
      - MOUNTAINS
      - FOREST
      - TAIGA
      - SWAMP
      - RIVER
      - FROZEN_OCEAN
      - FROZEN_RIVER
      - SNOWY_TUNDRA
      - SNOWY_MOUNTAINS
      - MUSHROOM_FIELDS
      - MUSHROOM_FIELD_SHORE
      - BEACH
      - DESERT_HILLS
      - WOODED_HILLS
      - TAIGA_HILLS
      - MOUNTAIN_EDGE
      - JUNGLE
      - JUNGLE_HILLS
      - JUNGLE_EDGE
      - DEEP_OCEAN
      - STONE_SHORE
      - SNOWY_BEACH
      - BIRCH_FOREST
      - BIRCH_FOREST_HILLS
      - DARK_FOREST
      - SNOWY_TAIGA
      - SNOWY_TAIGA_HILLS
      - GIANT_TREE_TAIGA
      - GIANT_TREE_TAIGA_HILLS
      - WOODED_MOUNTAINS
      - SAVANNA
      - SAVANNA_PLATEAU
      - BADLANDS
      - WOODED_BADLANDS_PLATEAU
      - BADLANDS_PLATEAU
      - SMALL_END_ISLANDS
      - END_MIDLANDS
      - END_HIGHLANDS
      - END_BARRENS
      - WARM_OCEAN
      - LUKEWARM_OCEAN
      - COLD_OCEAN
      - DEEP_WARM_OCEAN
      - DEEP_LUKEWARM_OCEAN
      - DEEP_COLD_OCEAN
      - DEEP_FROZEN_OCEAN
      - THE_VOID
      - SUNFLOWER_PLAINS
      - DESERT_LAKES
      - GRAVELLY_MOUNTAINS
      - FLOWER_FOREST
      - TAIGA_MOUNTAINS
      - SWAMP_HILLS
      - ICE_SPIKES
      - MODIFIED_JUNGLE
      - MODIFIED_JUNGLE_EDGE
      - TALL_BIRCH_FOREST
      - TALL_BIRCH_HILLS
      - DARK_FOREST_HILLS
      - SNOWY_TAIGA_MOUNTAINS
      - GIANT_SPRUCE_TAIGA
      - GIANT_SPRUCE_TAIGA_HILLS
      - MODIFIED_GRAVELLY_MOUNTAINS
      - SHATTERED_SAVANNA
      - SHATTERED_SAVANNA_PLATEAU
      - ERODED_BADLANDS
      - MODIFIED_WOODED_BADLANDS_PLATEAU
      - MODIFIED_BADLANDS_PLATEAU
      - BAMBOO_JUNGLE
      - BAMBOO_JUNGLE_HILLS
    ```

### Other Solution

Another solution would be to use `REAL_NOTE` instead of `REAL` as ItemsAdder would then use note block states which are more stable than mushroom block states.

!!! info "Available fix in Purpur"
    [Purpur][purpur] provides settings that can be used to also fix the above issue or at the very least help ItemsAdder in some way.
    
    To use it, enable the following settings in the `purpur.yml`:
    
    - [disable-mushroom-updates]
    - [disable-note-block-updates]
    - [disable-chorus-plant-updates]

### Note Blocks

Note blocks which have been placed before ItemsAdder has been installed may show as a custom block.  
This bug is only visual and ItemsAdder will automatically fix it the moment the note block gets updated (When tuning or powering it).

## I removed a block but IA still tells me I use all

For better performance and to also not override blocks you may have removed by accident is ItemsAdder keeping a cache of all used block states.  
If you're sure that you won't re-use the block again and that it doesn't exist anywhere in the worlds (or inventories) can you use `/iacleancache` to reset the cache.

## I can't find any of my custom ores/minerals in the world

Custom Ores and minerals only spawn in **newly generated** Chunks. Chunks that have been created before ItemsAdder was installed won't be updated.

In addition does ItemsAdder by default not spawn ores/minerals in worlds, that aren't the default one.  
To fix this, open `plugins/ItemsAdder/data/items_packs/itemsadder/blocks.yml` and add the world name to **each ore** that should spawn.

Example:  
```yaml
worlds_populators:
  ruby_ore:
    block: itemsadder:ruby_ore
    worlds:
    - world
    - my_world # <- Add your world here!
    replaceable_blocks:
    - STONE
    - DIRT
    - ANDESITE
    - GRANITE
    - COBBLESTONE
    - GRAVEL
    chance: 70.0
    max_height: 45
    min_height: 25
    amount: 6
    iterations: 1
```

## Custom blocks drop mushrooms, note blocks or chorus fruits

There could be different reasons why this happens.

### Reason 1; EmeraldEnchants 2

If you're using [EmeraldEnchants 2][emeraldenchants] should you read [this issue][emeraldenchants-issue] for further instructions.

### Reason 2: Deleted Custom Blocks folder

**Do NOT delete any `region_custom_x` folders!**  
Doing so will remove ANY stored information about custom blocks in the world, breaking ItemsAdder in the process.

### Reason 3: Corrupted chunks

Chunks can get corrupted if you...

- ...killed the server while it was saving a ItemsAdder region file.
- ...have a full Hard/storagedrive causing the world to not save.
- ...reloaded ItemsAdder using PlugMan or a similar plugin.
- ...reloaded the server using `/reload`

----

## Leaves and Transparent block issues

### Tree blocks sometimes disappear and become air blocks

This is a know issue when going into creative mode. The client doesn't send certain packets while in this mode.  
Please switch to survival mode and try again.

### `REAL_TRANSPARENT` blocks are dropped when water flows on them

Known issue that can be fixed.

!!! info "More (nerdy) details"
    Minecraft isn't that good in certain areas and custom blocks is one of them.  
    Fixing this would require some hacky stuff where ItemsAdder would need to listen for the Water flowing event and check if any block around the water is a custom block.  
    And to be clear: This even is called **A LOT** in mid-sized servers alone! This would make ItemsAdder lag the entire server.

### Block particles won't play

You can try the following to fix this:

- Close your client
- Open the save-folder of Minecraft (`%appdata%/.minecraft` by default on Windows)
- Open the `options.txt`
- Set `particles` to `0`
- Save and close the file
- Launch the client again.



[purpur]: https://purpur.pl3x.net/
[disable-mushroom-updates]: https://purpurmc.org/docs/Configuration/#disable-mushroom-updates
[disable-note-block-updates]: https://purpurmc.org/docs/Configuration/#disable-note-block-updates
[disable-chorus-plant-updates]: https://purpurmc.org/docs/Configuration/#disable-chorus-plant-updates

[emeraldenchants]: https://github.com/TheBusyBiscuit/EmeraldEnchants2
[emeraldenchants-issue]: https://github.com/PluginBugs/Issues-ItemsAdder/issues/123
