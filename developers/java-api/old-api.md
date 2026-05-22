---
icon: clock-rotate-left
---

# Legacy API (pre-4.0.x)

{% hint style="warning" %}
These are the legacy static methods from the `ItemsAdder` class.\
They are still functional but the modern wrapper classes (`CustomStack`, `CustomBlock`, `CustomEntity`, `CustomFurniture`, `CustomCrop`) are preferred for new code.\
See the [Usage](examples.md) page for the modern API.
{% endhint %}

```java
// Check if ItemsAdder has finished loading its items
// Prefer listening to ItemsAdderLoadDataEvent instead
public static boolean areItemsLoaded()

// Check if an ItemStack is a custom item
public static boolean isCustomItem(ItemStack itemStack)
public static boolean isCustomItem(String customItemName)

// Get a custom item's ItemStack by namespaced ID
public static ItemStack getCustomItem(String namespacedId)

// Get the namespaced ID from an ItemStack
public static String getCustomItemName(ItemStack itemStack)

// Check if a specific ItemStack matches a custom item ID
public static boolean matchCustomItemName(ItemStack itemStack, String customItemName)

// Custom durability
public static int  getCustomItemDurability(ItemStack itemStack)
public static int  getCustomItemMaxDurability(ItemStack itemStack)
public static ItemStack setCustomItemDurability(ItemStack item, int durability)
public static ItemStack setCustomItemMaxDurability(ItemStack item, int maxDurability)

// Usages
public static int getCustomItemUsages(ItemStack itemStack)

// Place a custom block using its ItemStack (obtained from getCustomItem)
public static void placeCustomBlock(Location location, ItemStack customBlock)
public static void placeCustomBlock(Location location, ItemStack customBlock, boolean lightweight)

// Remove a custom block
public static void removeCustomBlock(Location location)

// Get the ItemStack for a custom block in the world
public static ItemStack getCustomBlock(Block block)

// Check if a block is a custom block
public static boolean isCustomBlock(Block block)

// Get loot from a custom block
public static List<ItemStack> getCustomBlockLoot(Block block, ItemStack tool, boolean includeSelfBlock)

// Custom crops
public static void    placeCustomCrop(Location location, ItemStack seed)
public static boolean isCustomCrop(Block block)
public static String  getCustomSeedNameFromCrop(Block block)

// Furniture
public static boolean isFurniture(Entity entity)
```

## CustomMob (removed in 4.0.10)

{% hint style="danger" %}
`CustomMob` was removed in ItemsAdder 4.0.10. Use `CustomEntity` instead.
{% endhint %}

```java
// Old way — DO NOT USE
CustomMob mob = CustomMob.spawn("namespace:mob_id", location);

// New way
CustomEntity entity = CustomEntity.spawn("namespace:entity_id", location);
```
