# Events

### ItemsAdderLoadDataEvent

```java
package dev.lone.itemsadder.api.Events;
public class ItemsAdderLoadDataEvent extends Event
```

This event is called when ItemsAdder has loaded all its stuff correctly (also on `/iareload`)\
Listen to this in order to wait all items, images etc. are available for your plugin.

### ResourcePackSendEvent - [docs](https://github.com/LoneDev6/API-ItemsAdder/blob/master/src/main/java/dev/lone/itemsadder/api/Events/ResourcePackSendEvent.java)

Event triggered when the server sends a resourcepack to the client. \
This event includes **URL**, **hash** and also contains info if **it's** an **ItemsAdder resourcepack** or **another plugin** resourcepack.

## Other events

{% embed url="https://github.com/LoneDev6/API-ItemsAdder/tree/master/src/main/java/dev/lone/itemsadder/api/Events" %}
