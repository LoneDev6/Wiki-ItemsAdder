# ☕️ Java API

## 如何获取 API

你只需要使用 **maven** 或 **gradle**，你可以在这里获取 **API**

{% embed url="https://github.com/LoneDev6/ItemsAdder-API\#-packages" caption="" %}

## 描述

ItemsAdder 拥有一个易于使用的 API，供 Java 开发人员使用。 使用它时，在代码中包含 **dev.lone.itemsadder.api.ItemsAdder** 即可

## 旧 API:

```java
//检查 itemsadder 是否完成加载 以及是否可用
//请使用 ItemsAdderFirstLoadEvent 代替
public static boolean areItemsLoaded()

//检查是否为 ItemsAdder 制作的自定义物品
public static boolean isCustomItem(ItemStack itemStack)
public static boolean isCustomItem(String customItemName)

//在配置中按名称获取 ItemsAdder 自定义物品
public static ItemStack getCustomItem(String nameInConfig)

// 生成一个用 ItemsAdder 指定的ItemStack方块
//（用getCustomItem获取）
public static void placeCustomBlock(Location location, ItemStack customBlock)
public static void placeCustomBlock(Location location, ItemStack customBlock, boolean lightweight)

// 获得自定义方块掉落物
public static List<ItemStack> getCustomBlockLoot(Block block, ItemStack tool, boolean includeSelfBlock)

// 检查世界中的方块是否为 ItemsAdder 生成的自定义方块
public static boolean isCustomBlock(Block block)

// 种植自定义作物
public static void placeCustomCrop(Location location, ItemStack seed)

// 检查方块上是否为自定义种子的自定义农作物
public static boolean isCustomCrop(Block block)

// 获取自定义作物的自定义种子
public static String getCustomSeedNameFromCrop(Block block)

// 世界中自定义方块的 ItemStack
public static ItemStack getCustomBlock(Block block)

// 检查世界中的实体是否为家具
public static boolean isFurniture(Entity entity)

//检查 ItemStack 是否为特定的自定义物品
//（例如：检查 pickaxe 是否为 'amethyst_pickaxe'）
public static boolean matchCustomItemName(ItemStack itemStack, String customItemName)

// 获取配置中物品的名称（例如：'ruby_pickaxe'）
public static String getCustomItemName(ItemStack itemStack)

// 获取配置中物品的文件名称 (例如: 'items/swords')
public static String getCustomItemFileName(ItemStack itemStack)

// 获取此物品的剩余使用次数（-999，如果没有指定使用次数=无限）
public static int getCustomItemUsages(ItemStack itemStack)

// 设置自定义物品耐久（也适用于原版物品和具有默认原版耐久的自定义物品）
public static ItemStack setCustomItemDurability(ItemStack item, int durability)

// 获得自定义耐久值
public static int getCustomItemDurability(ItemStack itemStack)

// 获得最大自定义耐久值
public static int getCustomItemMaxDurability(ItemStack itemStack)
```

