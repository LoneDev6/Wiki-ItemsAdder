---
title: Commands
description: All commands available in ItemsAdder
---

# Commands

!!! info "Format"
    
    - `()` indicates a **group**. All arguments in it are part of it (i.e. `/iaentity (anim play|pause <animation>)` means that `play|pause` and `<animation>` are part of `anim`)
    - `<>` indicate **required** values
        - Any text without those brackets is literal (Needs to be typed as shown).
    - `[]` indicate **optional** values
    - `|` are separators

## User Commands

All those commands are accessible with the `ia.user.*` permission.

### /ia

> **Usage:** `/ia`  
> **Permission:** `ia.user.ia`

Opens the ItemsAdder GUI.

### /iaimage

> **Usage:** `/iaimage [text]`  
> **Permission:** `ia.user.image.gui`

Shows used font images (Emojis, HUDs, ...).  
Can also be used to send messages with Emojis and Text effects from ItemsAdder.

### /iarecipe

> **Usage:** `/iarecipe [item]`  
> **Permission:** `ia.user.iarecipe`

Shows the recipe of the custom Item you're holding or the specified one.

**Arguments:**

- `[item]` Optional namespaced ID of the custom item.

### /iasha1

> **Usage:** `/iasha1 local|online`  
> **Permission:** `ia.user.iasha1`

Gets the current SHA1 code for the resource pack.

**Arguments:**

- `local|online` Generates the SHA1 code either from the local file, or the online one.

### /iaemote

> **Usage:** `/iaemote <name> [player]`  
> **Permission:** `ia.user.iaemote`

Play a Emote (Custom player animation).

**Arguments:**

- `<name>` Name of the emote.
- `[player]` Optional player that should play the emote. Requires the permission `ia.user.iaemote.others`

### /iatexture

> **Usage:** `/iatexture [all|<player>]`  
> **Permission:** `ia.user.iatexture`

Forces the client to redownload the resource pack.

**Arguments:**

- `[all|<player>]` Optional target (Defaults to yourself). When `all` is provided will all players on the server refresh their resource pack.

----

## Admin Commands

All those commands are accessible with the `ia.admin.*` permission.

### /iaget

> **Usage:** `/iaget <item> [amount]`  
> **Permission:** `ia.admin.iaget`

Gives yourself a custom item.

**Arguments:**

- `<item>` Namespaced ID of the custom item.
- `[amount]` Optional Amount. Defaults to 1.

### /iagive

> **Usage:** `/iagive <player> <item> [amount] [silent]`  
> **Permission:** `ia.admin.iagive`

Gives the provided player the custom item.

**Arguments:**

- `<player>` The player to give the item to.
- `<item>` Namespaced ID of the custom item.
- `[amount]` Optional Amount. Defaults to 1.
- `[silent]` Optional String. Providing `silent` will not send a message.

### /iadrop

> **Usage:** `/iadrop <x y z world|player> <item> [amount]`  
> **Permission:** `ia.admin.iadrop`

Drops a custom item at either a specific location or at a player's location.

**Arguments:**

- `<x y z world|player>` The location or player to drop the item at.
- `<item>` Namespaced ID of the custom item.
- `[amount]` Optional Amount. Defaults to 1.

### /iaremove

> **Usage:** `/iaremove <item> [amount] [silent]`  
> **Permission:** `ia.admin.iaremove`

Removes a custom item from your inventory.

**Arguments:**

- `<item>` Namespaced ID of the custom item.
- `[amount]` Optional Amount. Defaults to 1.
- `[silent]` Optional String. Providing `silent` will not send a message.

### /iatag

> **Usage:** `/iatag`  
> **Permission:** `ia.admin.iatag`

Shows custom Item Debug info.

### /iacustommodeldata

> **Usage:** `/iacustommodeldata <item>`  
> **Permission:** `ia.admin.custommodeldata`

Shows you the Vanilla Item and custom model data used for a particular custom item.

**Arguments:**

- `<item>` Namespaced ID of the custom item.

### /iaplayerstat

> **Usage:** `/iaplayerstat read|write|increment|decrement <player> <attribute> int|float|string [value]`  
> **Permission:** `ia.admin.iaplayerstat`

Reads, sets and updates custom player statistic values (Also updates any HUD items using it).

**Arguments:**

- `read|write|increment|decrement` Action to perform. Either read the value, write one, increase it or decrease it.
- `<player>` The target player to change the stats for.
- `<attribute>` The custom stat to use.
- `int|float|string` The type of value. `int` for Integer (Whole numbers), `float` for numbers with decimals, `string` for Strings.
- `[amount]` Optional Amount to either set, add or remove.

### /iarepair

> **Usage:** `/iarepair`  
> **Permission:** `ia.admin.iarepair`

Repairs the item you're currently holding (Both custom AND vanilla items).

### /iarename

> **Usage:** `/iarename <name>`  
> **Permission:** `ia.admin.iarename`

Renames the item you're currently holding (Both custom AND vanilla items).  
Supports Emojis and Text effects from ItemsAdder.

**Arguments:**

- `<name>` The new name to give the item.

### /iadurability

> **Usage:** `/iadurability`  
> **Permission:** `ia.admin.iadurability`

Modify the durability of the item you're holding (Both custom AND vanilla items).

### /iareload

> **Usage:** `/iareload`  
> **Permission:** `ia.admin.iareload`

Reloads the config.yml of ItemsAdder and all `items_packs` configurations.

### /iazip

> **Usage:** `/iazip`  
> **Permission:** `ia.admin.iazip`

[Performs a reload](#iareload) and Re-generates the `pack.zip` file.

### /iablock

> **Usage:** `/iablock`  
> **Permission:** `ia.admin.block`

Provides information about the block you're looking at.

### /ialiquid

> **Usage:** `/ialiquid [x y z]`  
> **Permission:** `ia.admin.ialiquid`

Provides information about the liquid you're looking at.

**Arguments:**

- `[x y z]` Optional location to check.

### /iahud

> **Usage:** `/iahud [name]`  
> **Permission:** `ia.admin.iahud`

Show/Hide a HUD manually.

**Arguments:**

- `[name]` Optional Namespaced ID of the HUD.

### /iaconvert

> **Usage:** `/iaconvert [world] [deleteOres]`  
> **Permission:** `ia.admin.iaconvert`

Converts old 1.0 blocks to the new 2.0 version.

**Arguments:**

- `[world]` Optional world to convert blocks in.
- `[deleteOres]` Optional String. When `deleteOres` is provided will custom ores be replaced with Stone.

### /iainfo

> **Usage:** `/iainfo`  
> **Permission:** `ia.admin.iainfo`

Provides some information about the plugin.

### /iakill

> **Usage:** `/iakill`  
> **Permission:** `ia.admin.iakill`

Kills custom entities.

### /iasummon

> **Usage:** `/iasummon [amount]`  
> **Permission:** `ia.admin.iasummon`

Summons custom entities

**Arguments:**

- `[amount]` Optional amount of entities to summon.

### /iaexport

> **Usage:** `/iaexport <namespace>`  
> **Permission:** `ia.admin.iaexport`

Exports all files of a namespace into a ZIP-file.

**Arguments:**

- `<namespace>` The namespace to export files from.

### /iaspawntree

> **Usage:** `/iaspawntree <name>`  
> **Permission:** `ia.admin.iaspawntree`

Spawns a custom tree.

**Arguments:**

- `<name>` Namespaced ID of the tree.

### /iaplaytotemanimation

> **Usage:** `/iaplaytotemanimation <name>`  
> **Permission:** `ia.admin.iaplaytotemanimation`

Plays a custom totem animation (Totem animation with a custom item and sound).

**Arguments:**

- `<name>` Namespaced ID of the animation.

### /iaplaysound

> **Usage:** `/iaplaysound <player> <name>`  
> **Permission:** `ia.admin.iaplaysound`

Plays a custom sound to the provided player.

**Arguments:**

- `<player>` The player to play the sound towards.
- `<name>` Namespaced ID of the custom sound.

### /iacleancache

> **Usage:** `/iacleancache blocks|items`  
> **Permission:** `ia.admin.iacleancache`

Clears the cache of either custom blocks or items.

**Arguments:**

- `blocks|items` Whether to either clear the custom blocks or custom items cache.

### /iahitbox

> **Usage:** `/iahitbox`  
> **Permission:** `ia.admin.iahitbox`

Displays the hitboxes of placed furnitures using particles.

### /iaconfig

> **Usage:** `/iaconfig (item delete|disable <item>)|(recipes deleteofitem|disableofitem <item>)|(namespace delete|disable <namespace>)`  
> **Permission:** `ia.admin.iaconfig`

Main command to execute specific actions on the plugin configuration.

**Arguments:**

- `item` Perform actions on a specific item.
    - `delete|disable` Deletes or disable the specified item.
    - `<item>` The item to delete/disable.
- `recipes` Perform actions on a specific recipe.
    - `deleteofitem|disableofitem` Delete or Disable all recipes using or creating the specified item.
    - `<item>` The item to delete/disable in recipes.
- `namespace` Perform actions on a specific namespace.
    - `delete|disable` Delete or disable the specified namespace.
    - `<namespace>` The namespace to delete/disable.

### /iaentity

> **Usage:** `/iaentity (anim play|pause <animation>)|(citizens selected|<id> (anim play|pause <animation>)|clean|model <name>|playerskin <name|url|KEEP_CURRENT_SKIN>)|count|inspect|kill|playerskin <name|url>|summon <name>|summonplayer <name|url>`  
> **Permission:** `ia.admin.`



**Arguments:**

- `anim` Play or pause an animation for a custom entity
    - `play|pause` Plays or pauses the specified animation for the entity.
    - `<animation>` The animation to start or pause.
- `citizens` Actions based on a Citizens NPC.
    - `selected|<id>` The NPC to use. Use `selected` for the one you last selected with `/npc select`
    - `anim` Play or pause an animation for a Citizens NPC.
        - `play|pause` Plays or pauses the specified animation for the entity.
        - `<animation>` The animation to start or pause.
    - `clean` Removes a custom entity from the NPC.
    - `model` Sets the provided model as the custom entity.
        - `<name>` Namespaced ID of the model.
    - `playerskin` Applies a player skin to the NPC. Needs to be a player NPC!
        - `<name|url|KEEP_CURRENT_SKIN>` Player name, URL or `KEEP_CURRENT_SKIN` for the NPCs current skin. Supports direct minesk.in URLs.
- `count` Counts the current amount of custom Entities
- `inspect` Returns a list of all current custom Entities with hover text showing info and that allows you to teleport to them.
- `kill` Removes the custom Entity.
- `playerskin` Changes the custom Entity to a Player skin Entity.
    - `<name|url>` Player name or URL to a skin file. Supports direct minesk.in URLs.
- `summon` Summons a custom Entity at your location.
    - `<name>` Namespaced ID of the entity..
- `summonplayer` Summons a custom player entity.
    - `<name|url>` Player name or URL to a skin file. Supports direct minesk.in URLs.


*[Namespaced ID]: Combination of a namespace and a item/block/entity/... id in the format 'namespace:id'.
*[namespaced ID]: Combination of a namespace and a item/block/entity/... id in the format 'namespace:id'.