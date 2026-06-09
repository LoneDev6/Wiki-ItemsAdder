# ValhallaTrinkets

### [Download here](https://www.spigotmc.org/resources/valhallatrinkets.115790/)

ValhallaTrinkets compatibility is available through [ItemsAdderAdditions](https://itemsadderadditions.com/en/docs/compatibility/valhalla).

ItemsAdderAdditions can write ValhallaTrinkets metadata to ItemsAdder item stacks when they are created. Configure it under the `trinkets` key of your ItemsAdder item's `valhalla` section.

```yaml
items:
  amulet:
    display_name: "<gold>Amulet"
    valhalla:
      trinkets:
        trinket_id: 1001
        trinket_unique_id: 1001
        unique: true
        unstackable: true
```

The metadata is written directly to the item stack. Gameplay effects require ValhallaTrinkets installed on the server.

Check the full documentation [here](https://itemsadderadditions.com/en/docs/compatibility/valhalla).
