---
icon: square-terminal
---

# Commands

This page lists all available ItemsAdder commands. Commands are organized by category to help you find what you need more easily. For each command, you'll find its permission node, usage syntax, and a description of what it does.

## Resource Pack Management

| Command | Permission | Usage | Description |
|---------|------------|-------|-------------|
| iatexture | `ia.user.iatexture` | `/iatexture` | Force your client to reload the resourcepack |
| iatexture | `ia.user.iatexture.all` | `/iatexture [all\|player]` | Force a player or all players to reload the resourcepack |
| iazip | `ia.admin.iazip` | `/iazip` | Reloads configuration files and generates a new resourcepack |
| iasha1 | `ia.user.iasha1` | `/iasha1` | Calculates SHA1 hash of the current resourcepack (useful for troubleshooting) |

## Item Management

| Command | Permission | Usage | Description |
|---------|------------|-------|-------------|
| iaget | `ia.admin.iaget` | `/iaget <item> [amount]` | Get a custom item by its namespaced ID or simple ID |
| iagive | `ia.admin.iagive` | `/iagive <item> [amount] [silent]` | Give a custom item to a player |
| iadrop | `ia.admin.iadrop` | `/iadrop <item> [amount]` | Drop a custom item at coordinates or at player location |
| iaremove | `ia.admin.iaremove` | `/iaremove <item> [amount] [silent]` | Remove a custom item from player inventory |
| iatag | `ia.admin.iatag` | `/iatag` | Shows debug information about the custom item you're holding |
| iacustommodeldata | `ia.admin.custommodeldata` | `/iacustommodeldata` | Shows the CustomModelData value of the item you're holding |
| iarepair | `ia.admin.iarepair` | `/iarepair` | Repairs the item you're currently holding (works with vanilla or custom items) |
| [iarename](iarename.md) | `ia.admin.iarename` | `/iarename <name>` | Rename the item you're holding (supports emojis and text effects) |
| iadurability | `ia.admin.iadurability` | `/iadurability` | Modify durability of the item you're holding |

## Block and World Management

| Command | Permission | Usage | Description |
|---------|------------|-------|-------------|
| iablock | `ia.admin.iablock` | `/iablock` | Show information about the block you're looking at |
| ialiquid | `ia.admin.ialiquid` | `/ialiquid [x] [y] [z]` | Show information about the liquid you're looking at or at coordinates |
| iaspawntree | `ia.admin.iaspawntree` | `/iaspawntree <tree>` | Spawn a custom tree at your location |
| iahitbox | `ia.admin.iahitbox` | `/iahitbox` | Shows the hitbox of placed furniture |
| iacleancache | `ia.admin.iacleancache` | `/iacleancache` | Cleans unused IDs from cache to free them up for future items/blocks |

## Entity Management

| Command | Permission | Usage | Description |
|---------|------------|-------|-------------|
| iakill | `ia.admin.iakill` | `/iakill` | Kills custom mobs in your vicinity |
| iasummon | `ia.admin.iasummon` | `/iasummon [amount]` | Summons custom mobs at your location |
| iaentity | `ia.admin.iaentity` | `/iaentity` | Main command to manage custom entities |

## UI and Visual Effects

| Command | Permission | Usage | Description |
|---------|------------|-------|-------------|
| ia | `ia.user.ia` | `/ia` | Opens the items list GUI |
| ia | `ia.user.ia.categories` | `/ia <category>` | Opens a specific items category GUI |
| ia | `ia.user.ia.categories.others` | `/ia <category> [player]` | Opens an items category GUI for another player |
| iarecipe | `ia.user.iarecipe` | `/iarecipe [item]` | Shows the recipe GUI for an item |
| iahud | `ia.admin.iahud` | `/iahud [name]` | Manually show/hide a specific HUD by namespaced ID |
| [iaimage](iaimage.md) | `ia.user.image.gui` | `/iaimage` | Shows list of font images (emojis, HUDs) with autocomplete for chat |
| iaplaytotemanimation | `ia.admin.iatotemanimation` | `/iaplaytotemanimation <totem> <player>` | Shows a custom Totem Of Undying animation |
| iaemote | `ia.user.iaemote` | `/iaemote <emote> [player]` | Play a custom player animation/emote |

## Player Stats and Audio

| Command | Permission | Usage | Description |
|---------|------------|-------|-------------|
| iaplayerstat | `ia.admin.iaplayerstat` | `/iaplayerstat <read\|write\|increment\|decrement> <player> <attribute> [value] [silent]` | Main command to manage custom player stats |
| iaplayerstat | `ia.admin.iaplayerstat.read` | `/iaplayerstat read <player> <attribute>` | Read a custom player stat value |
| iaplayerstat | `ia.admin.iaplayerstat.write` | `/iaplayerstat write <player> <attribute> <value> [silent]` | Set a custom player stat value (and update HUD) |
| iaplayerstat | `ia.admin.iaplayerstat.write` | `/iaplayerstat increment <player> <attribute> <amount> [silent]` | Increase a custom player stat by specified amount |
| iaplayerstat | `ia.admin.iaplayerstat.write` | `/iaplayerstat decrement <player> <attribute> <amount> [silent]` | Decrease a custom player stat by specified amount |
| iaplaysound | `ia.admin.iaplaysound` | `/iaplaysound <sound> <player>` | Play ItemsAdder custom sounds (useful in console) |

## Configuration and System

| Command | Permission | Usage | Description |
|---------|------------|-------|-------------|
| iareload | `ia.admin.iareload` | `/iareload` | Reload all configuration files without regenerating the resourcepack |
| iainfo | `ia.admin.iainfo` | `/iainfo` | Show information about the plugin, including version and resourcepack URL |
| [iaconfig](iaconfig.md) | `ia.admin.iaconfig` | `/iaconfig` | Configure various plugin settings (see [detailed documentation](iaconfig.md)) |

## Command Parameters Explained

- **`<required>`**: These parameters must be specified for the command to work
- **`[optional]`**: These parameters can be omitted and will use default values
- **`<player>`**: A player username or target selector (like @p, @a, etc.)
- **`[silent]`**: When included, prevents showing notification messages to players
- **`<item>`**: Can be either a namespaced ID (`namespace:item_id`) or just the item ID

## Examples

Here are some examples of common command usage:

```
# Get 5 ruby items from the default ItemsAdder pack
/iaget ia:ruby 5

# Give 1 amethyst sword to player Steve silently
/iagive steve my_items:amethyst_sword 1 true

# Show information about the plugin
/iainfo

# Update a player's custom thirst stat
/iaplayerstat write Steve thirst 80

# Create a new resourcepack after making configuration changes
/iazip

# Play a custom emote animation
/iaemote dance
```

For more detailed information about specific commands, click on the linked command names or check the relevant sections of this documentation.



