# ClueScrolls

### [Polymart Download](https://polymart.org/resource/cluescrolls.906)
### [Spigot Download](https://www.spigotmc.org/resources/30276/)

## Using Custom Items

To use your custom items, obtain the custom model data of the item using `/iacustommodeldata <item>`. The resulting value will be a number, for example `10012`.
  
In your cluescrolls config, add `customModelData: #####` below the `material:`

Example of tier config:
```yaml
tiers:
  common:
    ...
    scroll:
      material: iron_ingot
      customModelData: 10012
    ...
```
Custom model data can also be used for crystals, mystery scrolls and the purchase inventory.

For more details see https://wiki.electro2560.com/en/cluescrolls#itemsadder-configuration

## Items Adder Clue Types

ClueScrolls provides custom clue types that can be used on your scrolls.

*  **itemsadder_blockbreak** (namespacedid, material, blockdata, blockx, blocky, blockz, world)
*  **itemsadder_blockplace** (namespacedid, material, blockdata, blockx, blocky, blockz, world)
*  **itemsadder_blockinteract** (namespacedid, action, equipmentslot, material, blockdata, blockx, blocky, blockz, world)
*  **itemsadder_customentitykill** (namespacedid, entitytype, entitycustomname, world)
*  **itemsadder_furniturebreak** (namespacedid, world)
*  **itemsadder_furnitureplace** (namespacedid, world)

Examples:
```yaml
examplebreakclue:
  lore: '&d★ &fBreak %amount% modern stone: %completed%'
  clueType: itemsadder_blockbreak
  amount: 12-16
  objective: Break %amount% modern stone
  clueName: Modern Stone Breaker
  data:
    namespacedid: 'iasurvival:modern_stone'
```
```yaml
examplefurnitureplaceclue:
  lore: '&d★ &fPlace an oak wood park bench'
  clueType: itemsadder_furnitureplace
  amount: 1
  objective: Place an oak wood park bench
  clueName: Furniture Placer
  data:
    namespacedid: 'itemsadder:oak_wood_park_bench'
```

For more examples see https://wiki.electro2560.com/en/cluescrolls/clue-creation#itemsadder
