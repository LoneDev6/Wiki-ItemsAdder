# 事件

### ItemsAdderLoadDataEvent

```java
package dev.lone.itemsadder.api.Events;
public class ItemsAdderLoadDataEvent extends Event
```

当 ItemsAdder 已完全加载其所有内容 \（包括插件重载 `/iareload` ）时调用此事件 监听该事件以等待所有物品/图像加载..

## CustomBlockInteractEvent

玩家与自定义方块交互时触发的事件

## CustomBlockBreakEvent

玩家打破自定义方块时触发的事件

## CustomEntityDeathEvent

自定义实体死亡时触发的事件

### ResourcePackSendEvent

服务器向客户端发送资源包时触发的事件。 此事件包括**url**、**hash**，以及 ****ItemsAdder 资源包 **或** 其他插件\*\* 的资源包信息

