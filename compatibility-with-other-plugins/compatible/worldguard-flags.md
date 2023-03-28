---
description: Worldguard flags list
---

# WorldGuard

## Flags list

### ia-furniture-sit

This flags allows your players to sit on furnitures or not (furnitures with `furniture_sit` [behaviour](../../plugin-usage/adding-content/item-properties/behaviours.md))

### ia-campfire-item-add

Allow user to move item to campfire

### ia-campfire-item-remove

Allow user to remove item from campfire

### ia-vehicle-place

Allow user to place vehicles in the region

### ia-vehicle-remove

Allow user to remove ANY vehicle in the region

### ia-vehicle-personal-remove

allow user to remove only their own vehicles in the region

### ia-vehicle-sit

Allow user to sit on any vehicle in the region

### ia-vehicle-personal-sit

allow user to sit only on their own vehicles in the region

### ia-trade-machine-use

allow user to use trade machines

### ia-placed-block-interact

allow user to trigger placed\_block.interact events

### ia-placed-armorstand-interact

allow user to trigger placed\_armorstand.interact events

{% hint style="info" %}
Set **ia-vehicle-sit** to Deny and **ia-vehicle-personal-sit** to Allow to let your players only sit on personal vehicles
{% endhint %}

## Common issues

{% hint style="warning" %}
If your users **cannot sit** on **furnitures** even if you set the correct flag:

* check if you are using the `__global__ region` as your main region (the one on which you applied the furniture flag). If yes, please create a new region. global region is known to give some issues with some plugins flags.
* check if you set the `build` or `passthrough` flag. \
  Remember that these flags must not be changed, you should keep the default value (unselected, gray text)
{% endhint %}
