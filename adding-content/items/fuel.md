---
icon: gas-pump
---

# Fuel

## Creating the item

{% hint style="warning" %}
You must use a material which can already be smelted in vanilla Minecraft or it won't work.\
For example: `STICK`, `COAL`, `CHARCOAL` etc.
{% endhint %}

For example this configuration will make this item usable in **BLAST\_FURNACE** and will burn in **20 ticks** (**1 second**).

{% tabs %}
{% tab title="Modern (Recommended)" %}
```yaml
  magic_fuel:
    display_name: Fuel
    material: COAL
    graphics:
      texture: item/diamond
    behaviours:
      fuel: 
        burn_ticks: 20
        machines:
          - BLAST_FURNACE
```
{% endtab %}

{% tab title="Old (1.21.3 and lower)" %}
```yaml
  magic_fuel:
    display_name: Fuel
    resource:
      material: COAL
      generate: true
      textures:
      - item/diamond
    behaviours:
      fuel: 
        burn_ticks: 20
        machines:
          - BLAST_FURNACE
```
{% endtab %}
{% endtabs %}
