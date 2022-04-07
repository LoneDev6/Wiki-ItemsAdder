# Furniture execute actions

## Execute commands on interact

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

In this case you can see a furniture which will make the player execute the command `/help` when they interact the furniture.&#x20;

You can obviously also add more [actions](../item-properties/events/actions.md) to the [placed\_armorstand](../item-properties/events/).interaction event, not only `execute_commands`.

## Open a trading menu on interact

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

In this example you can see how to attach a trading GUI to your furniture. This is useful to create custom machinery.
