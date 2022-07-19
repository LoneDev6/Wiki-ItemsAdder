# API Utilities

## API Utilities

此API能够让开发者快速的获取一些信息

注意这些静态方法只是方便（偷懒）使用, 建议使用其他 api 类

```java

// 判断 itemsadder 是否完成加载 以及是否可用
// 请使用 ItemsAdderFirstLoadEvent 代替
// 具体检查仍需要在开服环境测试
public static boolean areItemsLoaded()

//判断是否为 Itemsadder 创建的自定义物品
public static boolean isCustomItem(ItemStack itemStack)
public static boolean isCustomItem(String customItemName)

//返回世界中自定义方块的itemstack
public static ItemStack getCustomBlock(Block block)

//判断实体是否为家具
public static boolean isFurniture(Entity entity)

//判断 ItemStack 是否为特定的自定义物品
//(栗子: 判断该镐子是否为 'amethyst_pickaxe')
public static boolean matchCustomItemName(ItemStack itemStack, String customItemName)
```

## 旧 API

这些旧的 API，仍然能够正常运行

```java
//在配置中按名称获取 ItemsAdder 自定义物品
public static ItemStack getCustomItem(String nameInConfig)

//生成一个用 ItemsAdder 指定的ItemStack方块
//（用getCustomItem获取）
public static void placeCustomBlock(Location location, ItemStack customBlock)
public static void placeCustomBlock(Location location, ItemStack customBlock, boolean lightweight)

//获得自定义方块掉落物
public static List<ItemStack> getCustomBlockLoot(Block block, ItemStack tool, boolean includeSelfBlock)

//判断世界中的方块是否为 ItemsAdder 生成的自定义方块
public static boolean isCustomBlock(Block block)

//像玩家一样种植自定义种子
public static void placeCustomCrop(Location location, ItemStack seed)

//判断方块是否有种植自定义农作物或种子
public static boolean isCustomCrop(Block block)

//获取自定义作物的种子
public static String getCustomSeedNameFromCrop(Block block)

//获取配置中物品的名称（例如：'ruby_pickaxe'）
public static String getCustomItemName(ItemStack itemStack)

//获取配置中物品的文件名称 (例如: 'items/swords')
public static String getCustomItemFileName(ItemStack itemStack)

//获取此物品的剩余使用次数（-999，如果没有指定使用次数=无限）
public static int getCustomItemUsages(ItemStack itemStack)

//设置自定义物品耐久（也适用于原版物品和具有默认原版耐久的自定义物品）
public static ItemStack setCustomItemDurability(ItemStack item, int durability)

//获得自定义耐久值
public static int getCustomItemDurability(ItemStack itemStack)

//获得最大自定义耐久值
public static int getCustomItemMaxDurability(ItemStack itemStack)
```
