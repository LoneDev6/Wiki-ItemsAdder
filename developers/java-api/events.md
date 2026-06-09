---
icon: bolt
---

# Events

{% embed url="https://lonedev6.github.io/API-ItemsAdder/dev/lone/itemsadder/api/Events/package-summary.html" %}

## Load Events

### ItemsAdderLoadDataEvent

```java
package dev.lone.itemsadder.api.Events;
public class ItemsAdderLoadDataEvent extends Event
```

Async event called when ItemsAdder has finished loading all its data (items, blocks, entities, etc.).\
This fires on startup **and** on every `/iareload` or `/iazip`.

**Always listen to this event** before accessing any ItemsAdder registry data.

```java
@EventHandler
public void onLoad(ItemsAdderLoadDataEvent event) {
    // Safe to use ItemsAdder API here
}
```

### ItemsAdderPackCompressedEvent

Called when ItemsAdder has finished compressing the resourcepack (after `/iazip`).

---

## Block Events

### CustomBlockPlaceEvent

Called when a player places an ItemsAdder custom block.

```java
@EventHandler
public void onBlockPlace(CustomBlockPlaceEvent event) {
    Player player = event.getPlayer();
    CustomBlock block = event.getCustomBlock();
    event.setCancelled(true); // Cancel placement
}
```

### CustomBlockBreakEvent

Called when a player breaks an ItemsAdder custom block.

```java
@EventHandler
public void onBlockBreak(CustomBlockBreakEvent event) {
    Player player = event.getPlayer();
    CustomBlock block = event.getCustomBlock();
}
```

### CustomBlockInteractEvent

Called when a player interacts with an ItemsAdder custom block.

---

## Furniture Events

### FurniturePrePlaceEvent

Called before a simple furniture is placed. Cancel to avoid unnecessary processing.

### FurniturePlacedEvent

Called after a simple furniture has been placed.

```java
@EventHandler
public void onFurniturePlaced(FurniturePlacedEvent event) {
    Player player = event.getPlayer();
    CustomFurniture furniture = event.getFurniture();
}
```

### FurnitureBreakEvent

Called when a player breaks simple furniture.

```java
@EventHandler
public void onFurnitureBreak(FurnitureBreakEvent event) {
    Player player = event.getPlayer();
    CustomFurniture furniture = event.getFurniture();
    event.setCancelled(true);
}
```

### FurnitureInteractEvent

Called when a player interacts with simple furniture.

### ComplexFurniturePrePlaceEvent

Called before complex furniture is placed.

### ComplexFurniturePlacedEvent

Called after complex furniture has been placed.

### ComplexFurnitureBreakEvent

Called when a player breaks complex furniture.

### ComplexFurnitureInteractEvent

Called when a player interacts with complex furniture.

---

## Entity Events

### CustomEntityDeathEvent

Called when an ItemsAdder custom entity dies.

```java
@EventHandler
public void onEntityDeath(CustomEntityDeathEvent event) {
    CustomEntity entity = event.getCustomEntity();
    LivingEntity killer = event.getEntity().getKiller();
}
```

---

## Player Emote Events

### PlayerEmotePlayEvent

Called before a player starts playing an emote. Can be cancelled.

```java
@EventHandler
public void onEmotePlay(PlayerEmotePlayEvent event) {
    Player player = event.getPlayer();
    String emoteName = event.getEmoteName();
    event.setCancelled(true);
}
```

### PlayerEmoteEndEvent

Called when a player emote stops or finishes.

---

## Resourcepack Events

### ResourcePackSendEvent

Triggered when the server sends a resourcepack to a client.\
Includes URL, hash, and whether it is an ItemsAdder resourcepack or another plugin's.

```java
@EventHandler
public void onPackSend(ResourcePackSendEvent event) {
    Player player = event.getPlayer();
    String url    = event.getUrl();
    boolean isIA  = event.isItemsAdderPack();
}
```

---

## Deprecated Events

| Deprecated event | Use instead |
|---|---|
| `ItemsAdderFirstLoadEvent` | `ItemsAdderLoadDataEvent` |
| `FurniturePlaceEvent` | `FurniturePrePlaceEvent` or `FurniturePlacedEvent` |
| `FurniturePlaceSuccessEvent` | `FurniturePlacedEvent` |
