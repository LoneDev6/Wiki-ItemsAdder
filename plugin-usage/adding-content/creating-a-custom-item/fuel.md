# Fuel

## How to make an item usable as fuel?

It's very easy!\
You just have to use the fuel [behaviour](../item-properties/behaviours.md).

## Example

```yaml
      fuel: 
        burn_ticks: 20
        machines:
          - BLAST_FURNACE
```

For example this configuration will make this item usable in **BLAST\_FURNACE** and will burn in **20 ticks** (**1 second**).&#x20;

### Complete example item

```yaml
  magic_fuel:
    display_name: "%#FE5A00%magic_fuel"
    permission: fuel.magic_fuel
    resource:
      material: COAL
      generate: true
      textures:
      - "minecraft:item/diamond.png"
    behaviours:
      fuel: 
        burn_ticks: 20
        machines:
          - BLAST_FURNACE
```
