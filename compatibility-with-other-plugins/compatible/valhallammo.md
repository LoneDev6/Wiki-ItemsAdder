# ValhallaMMO

### [Download here](https://www.spigotmc.org/resources/valhallammo.99843/)

ValhallaMMO compatibility is available through [ItemsAdderAdditions](https://itemsadderadditions.com/en/docs/compatibility/valhalla).

ItemsAdderAdditions can write ValhallaMMO persistent data to ItemsAdder item stacks when they are created. Configure it under a `valhalla` section on your ItemsAdder item: stats, equipment class, item flags, and permanent effects.

```yaml
items:
  ruby_sword:
    display_name: "<red>Ruby Sword"
    valhalla:
      equipment_class: SWORD
      item_flags:
        - DISPLAY_ATTRIBUTES
      stats:
        - stat: DAMAGE_BASE
          amount: 4.0
          operation: ADD_NUMBER
```

The metadata is written directly to the item stack. Gameplay effects require ValhallaMMO installed on the server.

Check the full documentation [here](https://itemsadderadditions.com/en/docs/compatibility/valhalla).
