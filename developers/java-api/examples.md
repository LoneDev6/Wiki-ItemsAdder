# 用法

## 获取 API

{% embed url="https://github.com/LoneDev6/API-ItemsAdder" %}

## 自定义物品 - [文档](https://github.com/LoneDev6/API-ItemsAdder/blob/master/src/main/java/dev/lone/itemsadder/api/CustomStack.java)

#### 通过 id 或 namespace:id 获取任何类型的自定义物品（方块、物品、帽子、食物等）

```java
CustomStack stack = CustomStack.getInstance("your_item")
if(stack != null)
{
    ItemStack itemStack = stack.getItemStack();
}
else
{
    //no custom item found with that id
}
```

#### 检查自定义物品是否存在

```java
CustomStack.isInRegistry("your_item")
```

#### 从 Bukkit ItemStack 获取 CustomStack

```java
CustomStack stack = CustomStack.byItemStack(myItemStack);

if(stack != null) // It's a custom item!
{
    stack.setUsages(5) // For example set usages
    // ...
}
else // It's not a custom item!
{
     // ...
}
```

## 自定义方块 - [文档](https://github.com/LoneDev6/API-ItemsAdder/blob/master/src/main/java/dev/lone/itemsadder/api/CustomBlock.java)

#### 检查自定义方块是否存在

```java
CustomBlock.isInRegistry("your_item")
```

#### 检查世界上的方块是否为自定义方块

```java
CustomBlock customBlock = CustomBlock.byAlreadyPlaced(block);
if(customBlock != null)
{
    // Custom block, do your own stuff here
}
else
{
    // Not a custom block
}
```

#### 放置自定义方块

```java
CustomBlock customBlock = CustomBlock.getInstance("ruby_ore");
if(customBlock != null) //not needed if you're sure the blocks exists.
{
    customBlock.place(location);
}
else
{
    // Custom block not found in ItemsAdder configurations!
}
```

## 自定义实体 - [文档](https://github.com/LoneDev6/API-ItemsAdder/blob/master/src/main/java/dev/lone/itemsadder/api/CustomEntity.java)

#### 通过 id 或 namespace:id 生成自定义生物

```java
CustomEntity customEntity = CustomEntity.spawn("your_item", location)
if(customEntity != null)
{
    // Custom entity spawned
    
    // Example: print the namespaced id in console
    System.out.println(customEntity.getNamespacedID());
}
else
{
    // Custom entity not found in ItemsAdder configurations!
}
```

### 通过已生成的 Bukkit 实体获取自定义实体

```java
CustomEntity customEntity = CustomEntity.byAlreadySpawned(entity)
if(customEntity != null)
{
    // It's a custom entity
    
    // Example: print the namespaced id in console
    System.out.println(customEntity.getNamespacedID());
}
else
{
    // This Bukkit entity is not a custom entity!
}
```

## 液体 API

请同时安装 [IALiquids ](https://www.spigotmc.org/resources/84386)插件以测试液体

```java
@EventHandler
void interact(PlayerInteractEvent e)
{
    if(e.getAction() == Action.LEFT_CLICK_BLOCK)
    {
        ItemsAdder.setLiquid("ialiquids:red_water", e.getClickedBlock().getLocation());
    }
    else if(e.getAction() == Action.RIGHT_CLICK_BLOCK)
    {
        System.out.println(ItemsAdder.getLiquidName(e.getClickedBlock().getRelative(e.getBlockFace()).getLocation()));
    }
}
```

## 使用 API 更改 HUD 值

### 在 Frames Hud 中设置浮点值

```java
PlayerHudsHolderWrapper playerHudsHolderWrapper = new PlayerHudsHolderWrapper(playerObject);
PlayerQuantityHudWrapper hud = new PlayerQuantityHudWrapper(playerHudsHolderWrapper, "namespace_name:hud_name");
hud.setFloatValue(1f);
```

### 使 HUD 可见

```java
PlayerHudsHolderWrapper playerHudsHolderWrapper = new PlayerHudsHolderWrapper(playerObject);
PlayerQuantityHudWrapper hud = new PlayerQuantityHudWrapper(playerHudsHolderWrapper, "namespace_name:hud_name");
hud.setVisible(true);
```

## 旧内容：

### 自定义生物 <mark style="color:orange;">(旧)</mark> - [文档](https://github.com/LoneDev6/API-ItemsAdder/blob/master/src/main/java/dev/lone/itemsadder/api/CustomMob.java)

#### 通过 id 或 namespace:id 生成自定义生物

```java
CustomMob customMob = CustomMob.spawn("your_item", location)
if(customMob != null)
{
    //spawned the custom mob
    
    //example, print the display name in console
    System.out.println(customMob.getName());
}
else
{
    //no custom mob found with that id
}
```

#### 通过已生成的生物获取自定义生物

```java
CustomMob customMob = CustomMob.byAlreadySpawned(entity)
if(customMob != null)
{
    //it's a custom mob
    
    //example, print the display name in console
    System.out.println(customMob.getName());
}
else
{
    //this mob is not a custom mob
}
```
