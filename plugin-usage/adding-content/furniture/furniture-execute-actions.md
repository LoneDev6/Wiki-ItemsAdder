# 家具的执行动作

## 通过和家具互动来执行命令

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

在该示例中, 当玩家和家具进行交互时, 它会让玩家执行 `/help` 命令.&#x20;

显然, 除了 `执行命令`, 你也可以向 [placed\_armorstand](../item-properties/events/) 添加更多的 [动作](../item-properties/events/actions.md)和交互事件.

## 通过交互打开交易菜单

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

在该例子中, 您可以看到如何将 `交易菜单` 添加到家具中, 这对于创建自定义机器来说非常有用.
