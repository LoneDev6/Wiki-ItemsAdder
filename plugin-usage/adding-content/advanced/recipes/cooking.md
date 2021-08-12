---
description: 这个烹饪配方允许你的玩家烹饪/治炼矿物
---

# 烹饪配方

## Example

```yaml
  cooking:
    cooked_sausage:
      permission: itemsadder.cooked_sausage
      ingredient:
        item: itemsadder:sausage
      machines:
      - FURNACE
      - BLAST_FURNACE
      exp: 1
      cook_time: 200
      result:
        item: itemsadder:cooked_sausage
        amount: 1
```

在这个栗子里,我写了个`cooking[烹饪配方]`的烹饪配方,叫做`cooked_sausage`

`machines` 是可以冶炼/烹饪该物品的原版机器的列表 
`exp` 是玩家在烹饪/治炼完成后获得的经验 
`cook_time` 是完成烹饪的过程所需的时间 \(**以ticks[1秒=20Tick]为单位**\)

