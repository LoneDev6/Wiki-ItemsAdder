---
icon: grill-hot
---

# 烹饪

ItemsAdder 允许为你的物品添加自定义熔炉配方，将它们变成其他东西。

## 示例

在添加烹饪配方时，你需要在 `recipes` 下添加 `cooking` 部分。名称不应该太重要，但建议使用结果的名称。

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

在这个示例中，我创建了一个名为 `cooked_sausage` 的 `cooking` 配方。

* `item` 是应该被烹饪的物品。可以通过各自的命名空间使用原版 Minecraft 和自定义物品。
* `machines` 是一个允许熔炼/烹饪该物品的熔炉类型列表。支持的类型有 `FURNACE`、`BLAST_FURNACE` 和 `SMOKER`。
* `exp` 定义了玩家取出物品时获得的经验量。
* `cook_time` 是物品处理所需的时间。时间以刻为单位，这意味着 20 = 1 秒。
* `result` 包含 `item` 和 `amount` 选项，定义了返回的物品和数量。可以通过各自的命名空间使用原版 Minecraft 和自定义物品。
