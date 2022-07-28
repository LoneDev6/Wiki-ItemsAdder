---
描述: This recipes allows your users to cook/smelt materials [此页面可教会你如何使用Ia的熔炉配方功能]
---

# Cooking

ItemsAdder allows to add custom furnace recipes for your items, to turn them into something else.
ItemsAdder支持把一个物品放进熔炉然后变成别的物品.


## Example 栗子

When adding a cooking recipe, will you need to add the `cooking` section under `recipes`. The name shouldn't matter that much, but it is recommended to use the one of the result.

你需要在`recipes`属性下创建名为`cooking`的熔炉配方.

```yaml
recipes
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

在示例中，我在 `cooking` 属性下创建了名为 `cooked_sausage` 的熔炉配方

- `item` is the item that should be cooked. Both Vanilla Minecraft and custom items can be used through their respective namespaces. (被熔炉烧的物品.支持原版物品/Ia物品,Ia物品需加namespace[命名空间])
- `machines` is a list of allowed furnace types that can smelt/cook the item. Supported are `FURNACE`, `BLAST_FURNACE` and `SMOKER` (支持配方的熔炉.支持`FURNACE[熔炉]`,`BLAST_FURNACE[高炉]`,`SMOKER[烟熏炉]`)
- `exp` defines the amount of experience the player gets when taking out the item. (烧完1个物品可以掉落多少经验)
- `cook_time` is the time it should take for the item to be processed. The time is in ticks, which means that 20 = 1 second. (烧的过程所需时间,单位为ticks,小知识:20 tick = 1 s)
- `result` contains the `item` and `amount` option, which define what item and how much of it should be returned. Both Vanilla Minecraft and custom items can be used through their respective namespaces.(包含了烧完后的`item[物品]`/`amount[数量]`)
