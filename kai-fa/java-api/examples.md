# 栗子

## 自定义物品

### 通过 id 或 namespace:id 获取任何类型的自定义物品 (block, item, hat, food..)

[CustomStack ](https://github.com/LoneDev6/API-ItemsAdder/blob/master/src/main/java/dev/lone/itemsadder/api/CustomStack.java)class docs

```java
CustomStack stack = CustomStack.getInstance("your_item")
if(stack != null)
{
    ItemStack itemStack = stack.getItemStack();
}
else
{
    //未找到具有该 ID 的自定义物品
}
```

### 检查自定义物品是否存在

[CustomStack ](https://github.com/LoneDev6/API-ItemsAdder/blob/master/src/main/java/dev/lone/itemsadder/api/CustomStack.java)class docs

```java
boolean exists = CustomStack.getInstance("your_item") != null;
```

或者你也可以使用旧方法 如下：

```java
ItemsAdder.isCustomItem("your_item");
```

### 从游戏中的 ItemStack 获取自定义物品数据

```java
CustomStack stack = CustomStack.byItemStack(myItemStack);
if(stack != null)
{
    stack.setUsages(5)//比如设置 剩余使用次数
}
else
{
    //不为自定义物品
}
```

## 自定义方块

#### 判断是否为自定义方块

```java
CustomBlock customBlock = CustomBlock.byAlreadyPlaced(block);
if(customBlock != null)
{
    //自定义方块
}
else
{
    //不为自定义方块
}
```

#### 放置自定义方块

```java
CustomBlock customBlock = CustomBlock.getInstance("ruby_ore");
if(customBlock != null) //not needed if you're sure the blocks exists.
{
    //自定义方块
    customBlock.place(location);
}
else
{
    //不为自定义方块
}
```

## 自定义生物

### 通过 id 或 namespace:id 生成自定义生物

[CustomMob ](https://github.com/LoneDev6/API-ItemsAdder/blob/master/src/main/java/dev/lone/itemsadder/api/CustomMob.java)class docs

```java
CustomMob customMob = CustomMob.spawn("your_item", location)
if(customMob != null)
{
    //生成自定义生物
    
    //例如，在控制台显示实体名字
    System.out.println(customMob.getName());
}
else
{
    //未找到具有该 ID 的自定义生物
}
```

### 在世界里已生成的怪物中获取自定义怪物

[CustomMob ](https://github.com/LoneDev6/API-ItemsAdder/blob/master/src/main/java/dev/lone/itemsadder/api/CustomMob.java)class docs

```java
CustomMob customMob = CustomMob.byAlreadySpawned(entity)
if(customMob != null)
{
    //这是一个自定义怪物
    
    //例如，在控制台显示实体名字
    System.out.println(customMob.getName());
}
else
{
    //不为自定义生物
}
```

## Liquids API

安装 [IALiquids ](https://www.spigotmc.org/resources/84386)附属，获取一些测试水流

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
## 使用 API 更改 HUD 数值

### 在 Frames Hud 设置 float 数值
```java
PlayerHudsHolderWrapper playerHudsHolderWrapper = new PlayerHudsHolderWrapper(playerObject);
PlayerQuantityHudWrapper hud = new PlayerQuantityHudWrapper(playerHudsHolderWrapper, "namespace_name:hud_name");
hud.setFloatValue(1f);
```

### 使HUD可见
```java
PlayerHudsHolderWrapper playerHudsHolderWrapper = new PlayerHudsHolderWrapper(playerObject);
PlayerQuantityHudWrapper hud = new PlayerQuantityHudWrapper(playerHudsHolderWrapper, "namespace_name:hud_name");
hud.setVisible(true);
```
