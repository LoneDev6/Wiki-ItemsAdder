---
icon: terminal
---

# 家具执行动作

## 交互时执行命令

```yaml
items:
  lamp:
    display_name: "Lamp"
    permission: myitems.decorative.lamp
    lore:
    - lore-decorative-item
    resource:
      material: PAPER
      generate: false
      model_path: lamp
    behaviours:
      furniture:
        light_level: 13
        solid: true
    events:
      placed_armorstand:
        interact:
          execute_commands:
            the_first_command:
              command: help
              as_console: false
```

在这个例子中，你可以看到一个家具，当玩家与其交互时会执行命令 `/help`。

当然，你也可以在[placed\_armorstand](../item-properties/events/)中添加更多的[动作](../item-properties/events/actions.md)，不仅是 `execute_commands`。

## 交互时打开交易菜单

```yaml
  energy_extractor:
    display_name: display-name-energy_extractor
    permission: energy_extractor
    resource:
      material: PAPER
      generate: false
      model_path: item/energy_extractor
    behaviours:
      furniture:
        solid: true
      furniture_trade_machine:
        title: Energy Extractor
        trades_list:
          cobblestone:
            ingredients:
              slot1:
                item: COBBLESTONE
                amount: 64
            result:
              item: energy_orb
              amount: 6
          cobblestone_slab:
            ingredients:
              slot1:
                item: COBBLESTONE_SLAB
                amount: 64
            result:
              item: energy_orb
              amount: 3
```

在这个例子中，你可以看到如何将交易 GUI 附加到你的家具上。这对于创建自定义机器非常有用。 
