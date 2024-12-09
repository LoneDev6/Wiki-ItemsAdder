# 事件

### ItemsAdderLoadDataEvent

```java
package dev.lone.itemsadder.api.Events;
public class ItemsAdderLoadDataEvent extends Event
```

当 ItemsAdder 已正确加载其所有内容时（包括 `/iareload` 时）会调用此事件。\
监听此事件以确保所有物品、图像等都可供您的插件使用。

### ResourcePackSendEvent - [文档](https://github.com/LoneDev6/API-ItemsAdder/blob/master/src/main/java/dev/lone/itemsadder/api/Events/ResourcePackSendEvent.java)

服务器向客户端发送资源包时触发的事件。\
此事件包括 **URL**、**哈希值**，并且还包含是否为 **ItemsAdder 资源包**或**其他插件**资源包的信息。

## 其他事件

{% embed url="https://github.com/LoneDev6/API-ItemsAdder/tree/master/src/main/java/dev/lone/itemsadder/api/Events" %}
