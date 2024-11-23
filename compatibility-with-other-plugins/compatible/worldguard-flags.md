---
description: Worldguard 标记列表
---

# WorldGuard

## 标记列表

### ia-furniture-sit

这个标记决定是否允许你的玩家坐在家具上(带有 `furniture_sit` 的家具[行为](../../plugin-usage/adding-content/item-properties/behaviours.md))

### ia-campfire-item-add

允许玩家将物品移至营火

### ia-campfire-item-remove

允许玩家将物品从营火移除

### ia-vehicle-place

允许玩家在该区域放置车辆

### ia-vehicle-remove

允许玩家在该区域移除车辆

### ia-vehicle-personal-remove

允许玩家在该区域移除自己的车辆

### ia-vehicle-sit

允许玩家在该区域坐进车辆

### ia-vehicle-personal-sit

允许玩家在该区域坐进自己的车辆

### ia-trade-machine-use

允许玩家使用交易机器

### ia-placed-block-interact

允许玩家触发 placed\_block.interact 事件

### ia-placed-armorstand-interact

允许玩家触发 placed\_armorstand.interact 事件

{% hint style="info" %}
设置 **ia-vehicle-sit** 为拒绝，**ia-vehicle-personal-sit** 为允许以让玩家可以坐进自己的车辆。
{% endhint %}

## Common issues

{% hint style="warning" %}
如果你设置了正确的标记，玩家仍 **无法坐到家具上**：

* 检查你是否正在使用 `__global__ region` 作为主区域（你设置了家具标记的区域）。如果是，请创建一个新区域。全体区域部分插件的标记会产生问题。
* 检查你是否设置了 `build` 或 `passthrough` 标记。\
  这些标记不能进行改动，你需要保持为默认值（未选择状态，灰色文本）
{% endhint %}
