# Events

### ItemsAdderLoadDataEvent

```java
package dev.lone.itemsadder.api.Events;
public class ItemsAdderLoadDataEvent extends Event
```

This event is called when ItemsAdder has loaded all its stuff correctly (also on `/iareload`)\
Listen to this in order to wait all items/images.. are available for your addon/plugin.

### CustomBlockInteractEvent

Event triggered when a player interacts with a custom block

### CustomBlockBreakEvent

Event triggered when a player breaks a custom block

### CustomEntityDeathEvent

Event triggered when a custom entity dies.

### ResourcePackSendEvent

Event triggered when the server sends a resourcepack to the client. \
This event includes **url**, **hash** and also contains info if **it's** an **ItemsAdder resourcepack** or **another plugin** resourcepack.

