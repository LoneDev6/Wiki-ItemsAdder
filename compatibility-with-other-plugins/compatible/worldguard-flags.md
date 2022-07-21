---
描述： Worldguard flags 列表
---

# WorldGuard

## Flags 列表

### ia-furniture-sit

玩家是否能够使用家具（坐）(具有 `furniture_sit` 属性的家具 [behaviour](../../plugin-usage/adding-content/item-properties/behaviours.md))

### ia-campfire-item-add

玩家是否能将物品放置营火上

### ia-campfire-item-remove

玩家是否能从营火中取出物品

### ia-vehicle-place

玩家能够在该区域放置任何载具

### ia-vehicle-remove

玩家能够回收该区域所有载具

### ia-vehicle-personal-remove

玩家在该区域只能回收个人载具

### ia-vehicle-sit

玩家能够使用该区域所有载具

### ia-vehicle-personal-sit

玩家在该区域只能使用个人载具

### ia-trade-machine-use

玩家能否进行交易（村民，ia自定义的交易界面）

### ia-placed-block-interact

允许玩家触发放置\_block.interact 事件

### ia-placed-armorstand-interact

允许玩家触发放置\_armorstand.interact 事件

{% hint style="info" %}
**ia-vehicle-sit** 设置为 Deny 并且 **ia-vehicle-personal-sit** 设置为 Allow 
使玩家只能使用其个人载具
{% endhint %}

## 常见问题

{% hint style="warning" %}

如果已设置了正确的Flag，玩家仍 **无法坐在家具上**，请参阅以下几点：
* 检查是否将 `__global__ region` 作为主要区域（应用了家具flag的那个区域）。如果应用的区域为全局区域，请新建一个区域。全局区域会导致插件Flag出现一些不明所以的问题.
* 检查是否设置了 `build`  `passthrough` Flag. \
  请不要对这两个 flag 进行更改，应 **保持默认值**
{% endhint %}
