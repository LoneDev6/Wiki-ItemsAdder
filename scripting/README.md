---
icon: code
---

# Scripting

{% hint style="warning" %}
## Requires ItemsAdder 4.0.10 or greater

This feature is a work in progress and may change, potentially affecting existing configurations and scripts. While I will strive to maintain compatibility, some disruptions are inevitable.
{% endhint %}

ItemsAdder introduces a powerful scripting feature that lets you define advanced item behaviors beyond the built-in events and actions. With scripting, you can create dynamic and complex functionalities using a Java-like syntax.

Remember to update the [vscode extension](https://marketplace.visualstudio.com/items?itemName=LoneDev.ia-vscode) to get autocompletion and common errors checking of the new preview `.jspp` format.

***

### 🧫 Overview

The scripting engine uses Java under the hood but allows some JavaScript-inspired syntax for convenience.

> 📝 **Note**: Scripts written in ItemsAdder are compiled into Java code, ensuring performance equivalent to native server code. Unlike interpreted languages like Skript, there is no runtime interpretation overhead.

#### ↺ Supported Events

The following events are supported for scripting and are triggered by the `events` property in the item.

* `BlockBreakEvent`
* `CustomBlockBreakEventInternal`
* `PlayerInteractEvent`
* `EntityDamageByEntityEvent`
* `EntityDeathEvent`
* `PlayerInteractEntityEvent`
* `PlayerDropItemEvent`
* `PlayerDropHeldItemEvent`
* `EntityShootBowEvent`
* `EntityShootBowArrowEvent`
* `PlayerItemConsumeEvent`
* `FoodLevelChangeEvent`
* `PlayerEditBookEvent`
* `PlayerFishEvent`
* `InventoryClickEvent`
* `ProjectileLaunchEvent`
* `ProjectileHitEvent`
* `PlayerItemHeldEvent`
* `InventoryDragEvent`
* `PlayerPickupItemEvent`
* `PlayerBucketEmptyEvent`
* `PlayerBucketFillEvent`
* `ArmorEquipEvent`
* `PlayerItemBreakEvent`
* `PlayerSwapHandItemsEvent`
* `PlayerEvent`
