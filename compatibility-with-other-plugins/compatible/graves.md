# Graves

## [Download here](https://www.spigotmc.org/resources/graves.74208/)

## How to add compatibility?

Enable the compatibility

```yaml
itemsadder: # https://www.spigotmc.org/resources/itemsadder.73355/
  enabled: true # Should ItemsAdder integration be enabled.
```

Edit the default option. You can also customize the items if needed (make sure they are of the correct type, use furniture in furniture and use block in the block property).

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
