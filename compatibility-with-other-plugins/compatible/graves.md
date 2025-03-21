# Graves

## [Graves Legacy Download here](https://www.spigotmc.org/resources/graves.74208/)

## [GravesX Download here](https://www.spigotmc.org/resources/gravesx.118271/)

## How to add compatibility?

> \[!NOTE] Graves configuration is located in `/plugins/Graves` while GravesX configuration is located in `/plugins/GravesX` while both plugins retain the same file structure besides plugin name differences.

Enable the compatibility in config/config.yml

```yaml
itemsadder: # https://www.spigotmc.org/resources/itemsadder.73355/
  enabled: true # Should ItemsAdder integration be enabled.
```

Edit the default option in config/grave.yml. You can also customize the items if needed (make sure they are of the correct type, use furniture in furniture and use block in the block property).

```yaml
  ##############
  # ItemsAdder #
  ##############
  # The option requires ItemsAdder, you must have this installed to use models.
  itemsadder:
    furniture:
      enabled: true # Should we use ItemsAdder Furniture?
      name: "itemsadder:mysterious_stone" # Furniture name.
    block:
      enabled: true # Should we use ItemsAdder Blocks?
      name: "itemsadder:nice_stone" # Block name
```
