---
描述: 该合成配方能够使玩家用熔炉来进行 烹饪/冶炼 材料
---

# 烹饪

ItemsAdder 能够为自定义物品添加自定义的熔炉合成配方，通过使用熔炉等机器来获得其他物品.

## 栗子

When adding a cooking recipe, will you need to add the `cooking` section under `recipes`. The name shouldn't matter that much, but it is recommended to use the one of the result.
当你要添加一个 烹饪/冶炼 的合成配方时，你需要在 `recipes` 属性部分下 添加 `cooking`属性.\
合成配方的名称建议使用，**该配方获得的物品** 作为配方名称.

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

在该示例中，我创建了一个名为 `cooked_sausage` 的烹饪 合成配方

- `item` 为被 烹饪/冶炼 的物品. （原版物品与自定义物品都可以通过各自的命名空间来使用，命名空间：物品id）
- `machines` 为能够进行 烹饪/冶炼 的机器，支持的类型有： 熔炉 (`FURNACE`), 高炉 (`BLAST_FURNACE`) 以及 烟熏炉 (`SMOKER`)
- `exp` 定义玩家在取出物品时获取的经验
- `cook_time` 为处理该物品所需的时间（单位为ticks 20ticks = 1秒）
- `result` 下包含 `item` 以及 `amount` 选项, `item` 定义了在通过 烹饪/冶炼 后获得的物品 `amount` 为获得的数量.（原版物品与自定义物品都可以通过各自的命名空间来使用，命名空间：物品id）
