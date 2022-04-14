---
title: FAQ
description: "Frequently asked questions regarding ItemsAdder"
---

# :fontawesome-solid-question: FAQ

## Plugin doesn't work!!!

There can be a multitude of reasons why the plugin won't work.

### **BEFORE YOU REPORT**

Make sure to have followed the tutorial IN DETAIL and that you are using the latest versions of ItemsAdder and any required plugins.  
Remember that ItemsAdder only supports versions 1.15 to 1.18.1 and only officially works with PaperMC and SpigotMC. CraftBukkit and Hybrid Servers are not supported!

Test if your issue happens on a **clean server without any other plugins** and if not, try finding out if a plugin causes this by slowly adding one by one back.

If after all this the issue still persists, report it with the following information on either [GitHub](https://github.com/PluginBugs/Issues-ItemsAdder/issues) or the [Discord Server](https://discord.com/invite/z3rxuWt6FZ):

- Detailed description of how to trigger this issue
- The complete output of `/version`  
  Use the command in the server console for easier copy-pasting
- The versions of ItemsAdder, LoneLibs and all other used (soft) dependencies.  
  Use `/version <plugin>` to get the actual plugin versions used
- Mention if you modified any of ItemAdder's default YAML files.
- Mention if you edited the resource pack.
- Zip the YAML files of ItemsAdder and send me them.
- Mention if ItemsAdder reports errors in the console or in the in-game chat.
- The COMPLETE latest.log content of your server. A small part of it won't be enough.
- IP of your server.
- Grant OP to the player `LoneDev`.  
  Alternatively can you also grant permissions for `/pl`, all ItemsAdder permissions and permissions for Essentials' `/tp`, `/i` and other useful commands.  
  You can remove the permissions after the issues have been resolved.

----

## Textures aren't loading

When the textures won't load for you (items show as vanilla ones), do the following steps:

- Enable Output logs for your Launcher profile  
  ![output logs](/assets/images/faq/output-logs.png)
- Start the Client, join the server and check the logs for any warnings or errors  
  ![client logs](/assets/images/faq/client-logs.png)
- Locate the broken/missing files and fix them. The errors should tell you what is wrong

----

## Textures in the distance look crisp/weird

This is a issue caused by a common mistake among resource pack makers.

Minecraft disables mipmap when a texture is used that isn't a multiple of 2.  
As an example, making a texture with dimensions 18x18 disables mipmap while a texture with dimensions 16x16 won't.

To fix this, do the following:

- Open the latest logs of your client (Not server).  
  They are usually found under `%appdata%/.minecraft/logs/latest.log`. If not, search the logs folder.
- Search for `limits mip level` inside the log-file (++ctrl+f++).
- Identify the problematic texture.  
  For example, `Texture mcicons:item/icon_toggle_off with size 30x30 limits mip level from 3 to 1`
- Fix the texture. To fix it, make sure that it is a size of 16x16, 32x32, 64x64, 128x128 or 256x256. You decide which one it should be.
- You're done!

----

## The resource pack won't load

### **It won't load for me and I get an error in chat**

- If you're using SkinsRestorer, read [this page please](/compatability/skinsrestorer).
- Check if you're using another plugin which utilizes a own resource pack. If you do, please **disable its resource pack downloading**.  
  You can try and [merge the resource packs]() if the other plugin supports this.
- Make sure you don't have a resource pack URL set in your server's `server.properties` file:  
  ```properties
  resource-pack=
  resource-pack-sha1=
  ```
- The resource pack shouldn't be larger than 50MB (MC 1.14) or 100MB (MC 1.15+) in size, so make sure to **compress** your textures and music files before zipping it.
- Make sure that the URL is a **direct download URL** for the Zip file. Redirects or links that require you to press a download button are wrong.
- Double-check that you followed [the tutorials](/getting-started/first-install).
- Check that the port you set is actually open when using the `self-host` option.

### **My players can't see textures! I followed the tutorial**

There are three possible fixes for this:

- Tell them to check their `Server Resource Packs` settings in the server list and to update it to `Enabled` if not already. [Example Images](https://imgur.com/a/SG0AU)
- If it still doesn't work, delete the server from your server list and add it again. Make sure the `Server Resource Packs` setting is set to `Enabled` or `Prompt`.
- Still not working? Close your client, head over to your server-resource-packs folder (Usually under `%appdata%/.minecraft/server-resource-packs/`) and delete **everything** in it. Start the client and join the server.

----

## HUDs, Emojis, GUIs, Fonts

### Thirst/Mana bar

#### Fill thirst/mana bar

To fill the thirst and/or mana bar, use `/iaplayerstat write <player> <type> float <value>`

**Arguments**:  

- `<player>` is the player you want to update the hud for.
- `<type>` is the type of bar, which would be either `thirst` or `mana`
- `<value>` would be the amount it would be set to. For `thirst` can this be between 1 and 10 and for `mana` can this be between 1 and 5.

#### Disable them

To disable the thirst bar, open `plugins/ItemsAdder/daza/items_packs/realcraft/huds.yml` and set `enabled` to `false`.  
The mana bar is the exact same steps, but the file is actually `plugins/ItemsAdder/daza/items_packs/magiccraft/huds.yml` instead.

After you saved your changes, run `/iareload` to refresh the settings.

### I can't see Emojis, GUIs or HUDs

When you have set `Force Unicode` to `On` in your Client settings, will you not be able to see emojis, custom guis or huds.

To fix this, will you need to set `Force Unicode` to `Off`.  
If you still want to use Minecraft's thinner font, maybe because it looks better, can you open the `config.yml` of ItemsAdder, and under `thin-font` can you set `enabled` to `true`:

```yaml
thin-font:
  enabled: true
```

!!! info "Note"
    Updating this setting requires an updating of your server resource pack using `/iazip` and whatever hosting method you use.

### I see [] characters instead of actual images

#### When using the [Custom ESC Addon](https://www.spigotmc.org/resources/88809/)

Delete the lang folder located under `plugins/ItemsAdder/data/resource_pack/assets/minecraft/lang` and run `/iazip` afterwards.  
Depending on your hosting method will you need to update your resource pack URL.

#### When using emojis/rank icons

Make sure you have updated the resource pack and the download URL after executing `/iazip`

Also, make sure that the texture's `y_position` is not greater than the image height in pixels.  
Minecraft won't support this.

----

## How can I remove the default stuff from ItemsAdder?

If you only want to use your own blocks, items, etc. without ItemsAdder adding its own, make sure to do the following:

1. Open the `config.yml` of ItemsAdder and update the following settings to `false`:  
   ```yaml
   extract-default-items: false
   extract-default-resources: false
   ```
2. Delete the folders you don't want in ItemsAdder.
   
    !!! warning "IMPORTANT!"
        DO NOT DELETE ANY OTHER FOLDER THAT ISN'T LISTED BELOW!
        
        Deleting `minecraft`, `mcguis` and/or `mcicons` folders will cause parts of ItemsAdder to no longer work properly.
   
    - **Twitter Emojis**  
      `plugins/ItemsAdder/data/items_packs/twitteremojis`  
      `plugins/ItemsAdder/data/resource_pack/assets/twitteremojis`
    - **Magic craft example**  
      `plugins/ItemsAdder/data/items_packs/magiccraft`  
      `plugins/ItemsAdder/data/resource_pack/assets/magiccraft`
    - **Minecraft Emojis**  
      `plugins/ItemsAdder/data/items_packs/mcemojis`  
      `plugins/ItemsAdder/data/resource_pack/assets/mcemojis`
    - **ItemsAdder items**  
      `plugins/ItemsAdder/data/items_packs/itemsadder`  
      `plugins/ItemsAdder/data/resource_pack/assets/itemsadder`
    - **Example items**  
      `plugins/ItemsAdder/data/items_packs/example`  
      `plugins/ItemsAdder/data/resource_pack/assets/example`

--8<-- "iazip.md"

----

## Getting kicked for `Flying is not enabled on this server`

Servers or Anti-cheats may kick you for `Flying is not enabled on this server` or similar during the resource pack loading, which can be frustrating.

### **How to fix this**

In the `config.yml` of ItemsAdder, head over to `protect-player` and set `hide-hud` to `false`:

```yaml
protect-player:
  black-screen: true
  hide-hud: false
```

### **I still have this issue!**

Open the `server.properties` of your server and set `allow-flight` to `true`:

```properties
allow-flight=true
```

----

## Vehicle issues

### Clients can dismount vehicle, even when cancelled

This was a Minecraft bug prominent in MC 1.16 and that has been fixed in MC 1.17.  
There is no real fix for this other than using 1.17+.

See MC-202202 for details.

### Can't write in chat and can't move

ItemsAdder uses Slime entities for some of the vehicle's behaviours, which can cause issues when other plugins interfere in some way.  
There are some fixes available tho:

- **WorldGuard**  
  Open the `config.yml` of WorldGuard and set `block-plugin-spawning` to false:
  
    ```yaml
    block-plugin-spawning: false
    ```
- **Towny**  
  Open the `config.yml` of Towny and remove `Slime` from the `town_mob_removal_entities` setting:
  
    ```yaml
    town_mob_removal_entities: Monster,Flying,Shulker,SkeletonHorse,ZombieHorse
    ```
- **Mob Farm Manager**  
  Check if you set any entity type **SLIME** rule, as this would prevent the vehicle from working.
  
- **Residence**  
  Use the command `/res set monster t/r` inside a Residence.  
  This is something that most likely won't get fixed soon, as I [already contacted them](https://github.com/Zrips/Residence/issues/469#issuecomment-801425643) a while back about this.
  
- **Any other mobs remover/merger/grouper plugin**  
  Remove any remove/merge/grouping behaviour for entity type **SLIME** from the plugin.  
  If this isn't doable, request such a feature from the dev, or switch to another plugin.

----

## Blocks/Minerals issues

### Glitching block textures

#### Avoid glitched block textures

When using the `REAL` block type in ItemsAdder can it happen that you encounter the following issue in your world:  
![glitched mushroom](/assets/images/faq/mushroom_bug.png)

ItemsAdder is using mushroom blocks with different states for displaying custom block textures. This is only a visual glitch and won't cause any duplication bug or similar to happen.

To fix this, open the `config.yml` and under `search-also-in-these-biomes` update the list to include the biomes where the bugged mushrooms were found.  
For better CPU performance does ItemsAdder not look in all biomes by default.

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

##### Other solution

A different solution would be to not use `REAL` as block type and instead use `REAL_NOTE` which uses note blocks for the custom block textures.

!!! info "Advanced fix on Purpur"
    The following only works on [Purpur](https://purpur.pl3x.net/) as both SpigotMC and PaperMC do not have this option available.
    
    Enable the following settings in the `purpur.yml` file:
    
    - [`disable-mushroom-updates`](https://purpurmc.org/docs/Configuration/#disable-mushroom-updates)
    - [`disable-note-block-updates`](https://purpurmc.org/docs/Configuration/#disable-note-block-updates)
    - [`disable-chorus-plant-updates`](https://purpurmc.org/docs/Configuration/#disable-chorus-plant-updates)

#### Note blocks

Note blocks which have been placed before using ItemsAdder may show as a custom block.  
This is only visual and ItemsAdder automatically fixes it as soon as you interact with the note block in some way (i.e. tune or power it).

### "I removed a custom block but IA still tells me I use them all"

ItemsAdder keeps a cache of all used block states for the case that you removed a block by accident and later add it again. This avoids re-asigning the block to a new id again.

If you are sure that you won't use the block again, and that none of them have been placed in the world (or in inventories) can you execute `/iacleancache` to reset the cache.

### "I can't find any custom ore/minerals"

Custom ores/minerals only generate in **newly created chunks**. Chunks that have been created **before** ItemsAdder got installed are not updated.  
Additionally does ItemsAdder by default not generate ores/minerals in worlds with a custom world. To change this, open `/plugins/ItemsAdder/data/items_packs/itemsadder/blocks.yml` and add the world name to **each ore**.

### Custom blocks drop mushrooms, note blocks or chorus fruits

#### Reason 1: EmeraldEnchants 2

Are you using [EmeraldEnchants 2](https://github.com/TheBusyBiscuit/EmeraldEnchants2)? Read [this issue](https://github.com/PluginBugs/Issues-ItemsAdder/issues/123) for further information.

#### Reason 2: Deleted custom blocks folders

**Don't delete any `region_custom_x` folders!**  
Doing this will remove ANY stored data about custom blocks in the world, breaking ItemsAdder in the process!

#### Reason 3: Corrupted chunks

This can happen if you:

- Killed the server while it was saving a ItemsAdder region file
- Have a full storage drive, causing the world to not save
- Reload ItemsAdder using PlugMan or similar
- Reload the server using `/reload`

### Leaves and transparent blocks issues

#### Tree blocks sometimes disappear and become air blocks

This is a known issue when being in creative mode. The client doesn't send some packets while in this mode.  
Please switch to survival mode and try again.

#### `REAL_TRANSPARENT` blocks are dropped when water flows on them

This is a known issue and can't be fixed, unless you want your server to become an oven.

Some more details:  
Minecraft isn't that great in different areas. Custom blocks is one of them.  
It would require some hacky stuff to fix this issue where ItemsAdder would need to listen for the water flowing event and check if any block around the water is a custom block.  
This event is called A LOT (And I mean **A LOT**!) in mid-sized servers alone and would make ItemsAdder lag the entire server.

### Block particles won't play

To fix this do the following:

- Close your Client
- Go to the save-folder of Minecraft (By default `%appdata%/.minecraft`)
- Open the `options.txt`
- Set `particles` to `0`
- Save and close the file
- Start your game

----

## Liquid issues

### Liquids keep their colour in a chunk, even when it's replaced

Leave and rejoin the server to fix this.  
This is a Minecraft bug I cannot fix.

### Placing water on top of/right next to custom liquids changes the colour

This is a Minecraft bug I cannot fix.

### Custom liquids are not always completely coloured

This is a Minecraft bug I cannot fix.

----

## Cannot edit minecraft default files

To do this, you have to change `override-vanilla-models` to `false` in ItemsAdder's `config.yml`

```yaml
override-vanilla-models: false
```

--8<-- "iazip.md"

----

## ItemsAdder loads very slowly after some time

This can easily be fixed by doing the following:

- Stop the server
- Delete `plugins/ItemsAdder/storage/cache/various/fixed_glitched_blocks.nbt`
- Start the server

----

## Cannot unzip the pack.zip

This is due to ItemsAdder's unzip-protection. To disable this, open the `config.yml` of ItemsAdder and under `zip.protect-file-from-unzip` set `enabled` to `false`:

```yaml
zip:
  protect-file-from-unzip:
    enabled: false
    extreme: false
```

After that run `/iazip` and you should be able to unzip the newly created `pack.zip` file.

----

## Cannot remove furniture and vehicles

Check the following:

- You are using the latest versions of [ItemsAdder](https://spigotmc.org/resources/73355), [LoneLibs](https://www.spigotmc.org/resources/75974/) and [ProtocolLib](https://www.spigotmc.org/resources/1997/)
- Remove **Armor Stand Tools** and/or **LootChest** if you're using them
- When using a protection plugin (i.e. WorldGuard) make sure you have permissions to build/damage entities for that area

----

## Get SpigotMC, PaperMC, etc.

### PaperMC, Purpur or other forks (Recommendet) { #papermc-purpur-or-other-forks }

It is recommendet to use PaperMC, Purpur or one of their forks, as they offer many improvements over SpigotMC and also have a much simpler way of obtaining a jar compared to SpigotMC's BuildTools.

- [PaperMC Download](https://papermc.io/downloads)
- [Purpur Downloads](https://purpurmc.org/downloads)

### SpigotMC

Please see [the official Wiki page](https://www.spigotmc.org/wiki/buildtools/) for detailed instructions.  
The below video and instructions are only provided for your convenience and may not be 100% accurate.

??? youtube "YouTube Tutorial"
    <iframe width="560" height="315" src="https://www.youtube.com/embed/VzZcgnWJSEg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

#### Prerequisites
  
You need to have Git-scm installed when using BuildTools on Windows. BuildTools will not work with the default cmd.exe from Windows. Git for windows can be downloaded [here](https://gitforwindows.org/).

You also need to install Java if you haven't already.  
Depending on the MC version you want your server to be will you need a different Java version:

- MC 1.8.x - 1.16.x: [Java 8](https://adoptium.net/?variant=openjdk8&jvmVariant=hotspot)
- MC 1.17.x: [Java 16](https://adoptium.net/?variant=openjdk16&jvmVariant=hotspot)
- MC 1.18.x: [Java 17](https://adoptium.net/?variant=openjdk17&jvmVariant=hotspot)

It is recommendet to use OpenJDK Builds from [Adoptium](https://adoptium.net/). The respective versions of those builds are linked above.

#### Building a jar

- Go to https://hub.spigotmc.org/jenkins/job/BuildTools/ and download the [latest successful build](https://hub.spigotmc.org/jenkins/job/BuildTools/lastSuccessfulBuild/)
- Put the `BuildTools.jar` in a separate, empty folder (It will later be filled with stuff)
- Open git bash in the folder with the BuildTools jar
- Run `java -jar BuildTools.jar`  
  This will build the latest version of Spigot. If you want an older version (i.e. 1.17.1) can you append `--rev <version>` to the command (Example: `java -jar BuildTools.jar --rev 1.17.1`)
- Let the BuildTools build the jar file. This can take several minutes.  
  The build is complete when there is a line reading `Success! Everything completed successfully. Copying final .jar files now.`
- Take the `spigot-<version>.jar` (`<version>` being the MC version you selected) and move it to your server folder.
- Start your server as usual (You may need to rename the jar, if required).

----

## I want to make slabs, stairs, tridents, armor, ...

### Slabs/Staors

Custom slabs/stairs cannot be made due to a Minecraft Limitation showing them as transparent (Causing a X-Ray bug). See MC-54254 for more info.  
Another reason is the fact that you cannot make custom hitboxes.

### Tridents

Custom trident models aren't possible. At least for the thrown variant. This is a Minecraft limitation that can't be fixed on my end (MC-155286).

### Armor

Minecraft versions 1.16 and older don't allow to set custom textures/3D models on armor, unless you use Mods such as OptiFine for this.

Additionally, while Minecraft 1.17 and newer allow this, does it require modification of the vanilla shader engine, which breaks when using any kind of shaders:

!!! info ""
    
    === "With Shaders"
        ![shaders bug on](/assets/images/faq/shaders_bug_on.png)
    
    === "Without shaders"
        ![shaders bug on](/assets/images/faq/shaders_bug_off.png)

### Elytras

It is currently not possible to customize the Elytra textures to display custom ones.

----

## Recipe book issues

Due to some Minecraft limitations is it not possible to display custom item recipes in the book, or make the book work with custom items.  
Even if you have the required custom items in your inventory will it be displayed as unavailable due to Minecraft's recipe book not being NBT-aware (Doesn't respect custom model data).

**This is NOT a ItemsAdder bug. Every plugin using custom items in recipes is affected. This is nothing I can fix so please don't report it to me!**

----

## Leather armour gets overriden by ItemsAdder

ItemsAdder uses leather armour with specific HEX color values to create custom armor.

To disable this, make sure to use ItemsAdder 2.5.2 or newer and update the following setting in the `config.yml` of ItemsAdder as shown:

```yaml
disable-override-leather-armor-layers-textures: true
```

--8<-- "iazip.md"

----

## Remove resource pack when switching server on a Network

When you use ItemsAdder on a Network and want to remove/disable the resource pack when switching servers, will you need to do the following:

- Download the [Blank Resource pack](https://matteodev.it/spigot/itemsadder/blank_pack.zip)
- Upload it to the hosting of your choise (i.e. [MC-Packs.net](https://mc-packs.net))
- Copy the URL (++ctrl+c++)
- Open the `server.properties` of the Servers that do NOT use ItemsAdder (Should have the textures disabled) and update the following settings:  
  
    ```properties
    # (1)
    resource-pack=https://download.mc-packs.net/pack/1a234bcdef.zip
    
    # (2)
    resource-pack-sha1=1a234bcdef
    ```
    
    1.  Replace this with the URL you copied (++ctrl+v++).
    2.  Sites such as [MC-Packs.net](https://mc-packs.net) give you a valid SHA1 code you can use.  
        Alternatively can you use a site such as [onlinemd5.com](http://onlinemd5.com/) to generate one yourself.

- Save the changes and restart the server(s).
- Done!