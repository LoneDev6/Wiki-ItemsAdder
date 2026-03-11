---
icon: terminal
---

# Execute actions

## Execute commands on interact

You can do it by using the `placed_furniture` -> `interact` event.

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
      placed_furniture:
        interact:
          execute_commands:
            the_first_command:
              command: help
              as_console: false
```

In this example you can see a furniture which will make the player execute the command `/help` when they interact with the furniture.

You can add more [actions](../item-properties/actions/actions.md) to the [placed\_furniture](../item-properties/events/) interaction event, not only `execute_commands`.

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

## Make furniture consumable

{% hint style="warning" %}
Requires ItemsAdder 4.0.16+
{% endhint %}

```yaml
items:
  strawberry_pie:
    name: Strawberry Pie
    graphics:
      texture: block/strawberry_pie
    events:
      interact:
        right:
          place_furniture:
            furniture: strawberry_pie_full
            decrement_amount: true
  strawberry_pie_template:
    template: true
    name: Strawberry Pie
    show_in_ia_gui: false
    graphics:
      model: block/strawberry_pie
      icon: item/strawberry_pie
    behaviours:
      furniture:
        enabled: true
        entity: item_display
        fixed_rotation: true
        drop_when_mined: false
        sound:
          break:
            name: block.wool.break
            pitch: 0.8
            volume: 0.6
          place:
            name: block.wool.place
            pitch: 0.8
            volume: 0.6
        display_transformation:
          transform: HEAD
          translation:
            y: 0.5
  strawberry_pie_full:
    variant_of: strawberry_pie_template
    behaviours:
      furniture_consumable:
        hunger: 3
        saturation: 0.6
        furniture_list:
        - strawberry_pie_slice1
        - strawberry_pie_slice2
        - strawberry_pie_slice3
        - strawberry_pie_slice4
        - strawberry_pie_slice5
        - strawberry_pie_slice6
  strawberry_pie_slice1:
    variant_of: strawberry_pie_template
    graphics:
      model: block/strawberry_pie_slice1
  strawberry_pie_slice2:
    variant_of: strawberry_pie_template
    graphics:
      model: block/strawberry_pie_slice2
  strawberry_pie_slice3:
    variant_of: strawberry_pie_template
    graphics:
      model: block/strawberry_pie_slice3
  strawberry_pie_slice4:
    variant_of: strawberry_pie_template
    graphics:
      model: block/strawberry_pie_slice4
  strawberry_pie_slice5:
    variant_of: strawberry_pie_template
    graphics:
      model: block/strawberry_pie_slice5
  strawberry_pie_slice6:
    variant_of: strawberry_pie_template
    graphics:
      model: block/strawberry_pie_slice6
```

In this example you can see how to make furniture go through a list of models, and fill the players hunger bar.

With this behaviour you can immitate things such as the vanilla cake.

When it has gone through the whole list, the furniture will disappear, so it's fully consumed.

`strawberry_pie` is used to show the 2D icon both in hand and in the inventory.

If you want to show the 3D model in hand and the 2D icon in the inventory, you can just use `strawberry_pie_full` to place your furniture.
