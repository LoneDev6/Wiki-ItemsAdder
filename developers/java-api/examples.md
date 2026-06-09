---
icon: code
---

# Usage

## CustomStack - Custom Items

{% embed url="https://lonedev6.github.io/API-ItemsAdder/dev/lone/itemsadder/api/CustomStack.html" %}

### Get an item from the registry

```java
CustomStack stack = CustomStack.getInstance("namespace:item_id");
if (stack != null) {
    ItemStack itemStack = stack.getItemStack();
    // Give it to a player, drop it in the world, etc.
} else {
    // Item not found in registry
}
```

### Check if an item is registered

```java
boolean exists = CustomStack.isInRegistry("namespace:item_id");
```

### Get all registered item IDs

```java
Set<String> ids = CustomStack.getNamespacedIdsInRegistry();
```

### Wrap a Bukkit ItemStack

```java
CustomStack stack = CustomStack.byItemStack(playerItem);
if (stack != null) {
    // It's a custom item
    String id = stack.getNamespacedID();
    stack.setUsages(5);
} else {
    // Not a custom item
}
```

### Durability and usages

```java
CustomStack stack = CustomStack.byItemStack(item);
if (stack != null) {
    if (stack.hasCustomDurability()) {
        int current = stack.getDurability();
        int max     = stack.getMaxDurability();
        stack.setDurability(current - 1);
    }
    if (stack.hasUsagesAttribute()) {
        stack.reduceUsages(1);
    }
}
```

### Check item cooldown

```java
if (!CustomStack.hasCooldown(player, item)) {
    // Player can use the item
}
long remainingMs = CustomStack.getCooldownMs(player, item);
```

---

## CustomBlock - Custom Blocks

{% embed url="https://lonedev6.github.io/API-ItemsAdder/dev/lone/itemsadder/api/CustomBlock.html" %}

### Check if a block ID is registered

```java
boolean exists = CustomBlock.isInRegistry("namespace:block_id");
```

### Place a custom block

```java
CustomBlock placed = CustomBlock.place("namespace:block_id", location);
if (placed != null) {
    // Block was placed successfully
}
```

### Get a wrapper for an already placed block

```java
CustomBlock customBlock = CustomBlock.byAlreadyPlaced(block);
if (customBlock != null) {
    // It's a custom block
    String id = customBlock.getNamespacedID();
}
```

### Remove a custom block

```java
CustomBlock customBlock = CustomBlock.byAlreadyPlaced(block);
if (customBlock != null) {
    customBlock.remove();
}
```

### Get loot from a custom block

```java
CustomBlock customBlock = CustomBlock.byAlreadyPlaced(block);
if (customBlock != null) {
    List<ItemStack> loot = customBlock.getLoot(tool, true);
    for (ItemStack drop : loot) {
        block.getWorld().dropItemNaturally(block.getLocation(), drop);
    }
}
```

### Play block sounds and effects

```java
CustomBlock customBlock = CustomBlock.byAlreadyPlaced(block);
if (customBlock != null) {
    customBlock.playBreakEffect();  // particles + sound
    customBlock.playPlaceSound();
}
```

---

## CustomEntity - Custom Entities

{% embed url="https://lonedev6.github.io/API-ItemsAdder/dev/lone/itemsadder/api/CustomEntity.html" %}

### Spawn a custom entity

```java
CustomEntity entity = CustomEntity.spawn("namespace:entity_id", location);
if (entity != null) {
    System.out.println("Spawned: " + entity.getNamespacedID());
}
```

### Get a wrapper for an already spawned entity

```java
CustomEntity customEntity = CustomEntity.byAlreadySpawned(entity);
if (customEntity != null) {
    // It's a custom entity
}
```

### Play an animation

```java
CustomEntity customEntity = CustomEntity.byAlreadySpawned(entity);
if (customEntity != null) {
    customEntity.playAnimation("walk", () -> {
        // Called when the animation finishes
    });
}
```

### Mount passengers

```java
CustomEntity customEntity = CustomEntity.byAlreadySpawned(entity);
if (customEntity != null && customEntity.hasMountBones()) {
    customEntity.addPassenger(playerEntity);
}
```

### Convert an existing entity

```java
CustomEntity converted = CustomEntity.convert("namespace:entity_id", livingEntity);
```

### Get loot

```java
CustomEntity customEntity = CustomEntity.byAlreadySpawned(entity);
if (customEntity != null) {
    List<ItemStack> loot = customEntity.getLoot(tool);
}
```

---

## CustomFurniture - Furniture

{% embed url="https://lonedev6.github.io/API-ItemsAdder/dev/lone/itemsadder/api/CustomFurniture.html" %}

### Spawn furniture

```java
CustomFurniture furniture = CustomFurniture.spawn("namespace:furniture_id", targetBlock);
if (furniture != null) {
    // Furniture placed
}
```

### Get furniture at a location

```java
CustomFurniture furniture = CustomFurniture.byAlreadySpawned(entity);
// or by block:
CustomFurniture furniture = CustomFurniture.byAlreadySpawned(block);
```

### Remove furniture

```java
CustomFurniture furniture = CustomFurniture.byAlreadySpawned(entity);
if (furniture != null) {
    furniture.remove(true); // true = drop the item
}
```

### Replace furniture

```java
furniture.replaceFurniture("namespace:new_furniture_id");
```

### Adjust light level

```java
furniture.setCurrentLightLevel(10);
```

---

## CustomCrop - Custom Crops

{% embed url="https://lonedev6.github.io/API-ItemsAdder/dev/lone/itemsadder/api/CustomCrop.html" %}

### Place a custom crop

```java
CustomCrop crop = CustomCrop.place("namespace:seed_id", location);
```

### Get a wrapper for an already placed crop

```java
CustomCrop crop = CustomCrop.byAlreadyPlaced(block);
if (crop != null) {
    if (crop.isFullyGrown()) {
        List<ItemStack> loot = crop.getLoot();
    }
    crop.setAge(crop.getMaxAge()); // Force fully grown
}
```

### Check if an item is a seed

```java
boolean isSeed = CustomCrop.isSeed(itemStack);
```

---

## CustomPlayer - Custom Player Entities & Emotes

{% embed url="https://lonedev6.github.io/API-ItemsAdder/dev/lone/itemsadder/api/CustomPlayer.html" %}

### Play an emote on a real player

```java
CustomPlayer.playEmote(player, "namespace:emote_id");
```

### Stop an emote on a real player

```java
CustomPlayer.stopEmote(player);
```

### Spawn a fake player entity (NPC-like)

```java
CustomPlayer customPlayer = CustomPlayer.spawn("SomePlayerName", location);
customPlayer.playAnimation("wave");
```

---

## Liquids API

```java
// Place a custom liquid
ItemsAdder.setLiquid("ialiquids:red_water", location);

// Get the liquid name at a location (null if none)
String liquidName = ItemsAdder.getLiquidName(location);
```

---

## ItemsAdder - General Utilities

{% embed url="https://lonedev6.github.io/API-ItemsAdder/dev/lone/itemsadder/api/ItemsAdder.html" %}

```java
// Get all registered custom items
List<CustomStack> all = ItemsAdder.getAllItems();

// Get all items in a namespace
List<CustomStack> myItems = ItemsAdder.getAllItems("my_namespace");

// Check if an ItemStack is a custom item
boolean custom = ItemsAdder.isCustomItem(itemStack);

// Get the namespaced ID from an ItemStack
String id = ItemsAdder.getCustomItemName(itemStack);

// Send resourcepack to a player
ItemsAdder.applyResourcepack(player);

// Play totem animation with a custom item
ItemsAdder.playTotemAnimation(player, "namespace:totem_item");

// Check if an item has keep-on-death behavior
boolean keeps = ItemsAdder.hasKeepOnDeath(itemStack);
```

### Advanced API

```java
// Get Bukkit BlockData from an ItemsAdder internal block id
BlockData data = ItemsAdder.Advanced.getBlockDataByInternalId(internalId);

// Get the item_model resource location for a custom item
String resourceLocation = ItemsAdder.Advanced.getItemModelResourceLocation("namespace:item_id");

// Inject a modifier that runs on every use of a specific item
ItemsAdder.Advanced.injectItemModifier(plugin, "namespace:item_id", (player, itemStack) -> {
    // Modify itemStack here
    return itemStack;
});
```
