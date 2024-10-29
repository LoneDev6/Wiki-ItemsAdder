---
icon: gas-pump
---

# Fuel

## Creating the item

{% hint style="warning" %}
You must use a material which can already be smelted in vanilla Minecraft or it won't work.\
For example: `STICK`, `COAL`, `CHARCOAL` etc.
{% endhint %}

For example this configuration will make this item usable in **BLAST\_FURNACE** and will burn in **20 ticks** (**1 second**).&#x20;

```yaml
  magic_fuel:
    display_name: "%#FE5A00%magic_fuel"
    permission: fuel.magic_fuel
    resource:
      material: COAL
      generate: false
      model_path: item/diamond
    behaviours:
      fuel: 
        burn_ticks: 20
        machines:
          - BLAST_FURNACE
```
