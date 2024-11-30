# API 实用工具

## API 实用工具

这些是一些静态实用工具，用于快速获取一些信息。

{% hint style="warning" %}
请注意，这些静态实用方法是为了懒人使用，你应该使用其他 API 类。
{% endhint %}

```java
// Check if itemsadder finished loading its items and if they are available
// Normally you should use ItemsAdderFirstLoadEvent instead.
// but sometimes you might also need to check this programmatically.
public static boolean areItemsLoaded()

//Checks if an item is a custom item made with ItemsAdder
public static boolean isCustomItem(ItemStack itemStack)
public static boolean isCustomItem(String customItemName)

//returns the ItemStack of a custom block in world
public static ItemStack getCustomBlock(Block block)

//check if an entity in world is a furniture
public static boolean isFurniture(Entity entity)

//check if an ItemStack is a specific custom item 
//(example: check if a pickaxe is 'amethyst_pickaxe')
public static boolean matchCustomItemName(ItemStack itemStack, String customItemName)
```

## 旧 API

{% hint style="warning" %}
这是一些旧的 API，但仍能使用，且可以正常工作。
{% endhint %}

```java
//Get an ItemsAdder custom item by its name in config
public static ItemStack getCustomItem(String nameInConfig)

//Spawns a block made with ItemsAdder specifying the itemstack 
//(obtain it with getCustomItem)
public static void placeCustomBlock(Location location, ItemStack customBlock)
public static void placeCustomBlock(Location location, ItemStack customBlock, boolean lightweight)

//get custom block loots
public static List<ItemStack> getCustomBlockLoot(Block block, ItemStack tool, boolean includeSelfBlock)

//Check if a block in the world is a custom block made with ItemsAdder
public static boolean isCustomBlock(Block block)

//plants custom seed like a normal player would do
public static void placeCustomCrop(Location location, ItemStack seed)

//check if block is custom planted crop with custom seed
public static boolean isCustomCrop(Block block)

//get custom seed of custom crop
public static String getCustomSeedNameFromCrop(Block block)

//get name of the item in config (ex: 'ruby_pickaxe')
public static String getCustomItemName(ItemStack itemStack)

//get name of config where the item is declared (ex: 'items/swords')
public static String getCustomItemFileName(ItemStack itemStack)

//gets usages remaining of this item (-999 if it has no usages specified = infinite)
public static int getCustomItemUsages(ItemStack itemStack)

//set custom item durability (also works with vanilla items and with
//custom items with default vanilla durability)
public static ItemStack setCustomItemDurability(ItemStack item, int durability)

//get custom durability
public static int getCustomItemDurability(ItemStack itemStack)

//get max custom durability 
public static int getCustomItemMaxDurability(ItemStack itemStack)
```
