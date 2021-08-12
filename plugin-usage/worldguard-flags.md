# WorldGuard flags

## 标志列表

### ia-furniture-sit

这个标志允许你的玩家坐在家具上或不坐在家具上 \(具有 `furniture_sit` [行为](adding-content/advanced/item-properties/behaviours.md)\)的家具

### ia-campfire-item-add

允许玩家将物品放在篝火上

### ia-campfire-item-remove

允许玩家从篝火上移除物品

### ia-vehicle-place

允许玩家在该区域内放置车辆

### ia-vehicle-remove

允许玩家移除区域内的任何车辆

### ia-vehicle-personal-remove

只允许玩家在区域内移除自己的车辆

### ia-vehicle-place

Allow user to place vehicles in the region

### ia-vehicle-remove

Allow user to remove ANY vehicle in the region

### ia-vehicle-personal-remove

allow user to remove only their own vehicles in the region

### ia-vehicle-sit

允许玩家坐在该区域的任何车辆上

### ia-vehicle-personal-sit

只允许玩家坐在区域内属于自己的车辆上

### ia-trade-machine-use

允许玩家使用交易机器

### ia-placed-block-interact

允许玩家触发placed\_block.interactive事件

### ia-placed-armorstand-interact

允许玩家触发placed\_armorstand.interactive事件

{% hint style="info" %}
将**ia-vehicle-sit**设置为拒绝,将**ia-vehicle-personal-sit**设置为允许,这样设置的话你的玩家只能坐在自己的车辆上.
{% endhint %}

## 常见的问题

{% hint style="warning" %}
如果你的用户**不能坐**在**家具**上,然后你设置了正确的标志.

* 检查你是否在使用 `__global__ region` 作为你的主区域\(在你使用家具标志的区域\).如果是的话,请您重新创建一个新的区域.据大家所知,全局区域会给一些插件的标志带来一些问题.
* 检查你是否设置了 `build` 或 `passthrough` 标志.请你记住,这些标志不能去瞎改,应该设置为默认值 \(未选择的,灰色的文本\)
{% endhint %}

