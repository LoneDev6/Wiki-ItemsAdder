# ClueScrolls

### [Polymart 下载](https://polymart.org/resource/cluescrolls.906)
### [Spigot 下载](https://www.spigotmc.org/resources/30276/)

## 使用自定义物品

为使用自定义物品，使用 `/iacustommodeldata <item>` 来获得物品的自定义模型数据，结果应该为一串数字，如 `10012`。
  
在 cluescrolls 配置中，在 `material:` 下方增加 `customModelData: #####`。

配置示例：
```yaml
tiers:
  common:
    ...
    scroll:
      material: iron_ingot
      customModelData: 10012
    ...
```
自定义模型数据也可以在水晶、神秘卷轴与购买界面使用。

详情请见：https://wiki.electro2560.com/en/cluescrolls#itemsadder-configuration

## ItemsAdder 线索类型

ClueScrolls 为你的卷轴提供了自定义线索类型。

*  **itemsadder_blockbreak** (namespacedid, material, blockdata, blockx, blocky, blockz, world)
*  **itemsadder_blockplace** (namespacedid, material, blockdata, blockx, blocky, blockz, world)
*  **itemsadder_blockinteract** (namespacedid, action, equipmentslot, material, blockdata, blockx, blocky, blockz, world)
*  **itemsadder_customentitykill** (namespacedid, entitytype, entitycustomname, world)
*  **itemsadder_furniturebreak** (namespacedid, world)
*  **itemsadder_furnitureplace** (namespacedid, world)

示例：
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

详情请见：https://wiki.electro2560.com/en/cluescrolls/clue-creation#itemsadder