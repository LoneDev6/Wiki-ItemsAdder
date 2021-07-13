# Примеры

## Предметы ItemsAdder

### Получение предмета любого типа \(блок, предмет, шляпы, еда..\) при помощи ID или папки с ID \(namespace:id\)

[CustomStack ](https://github.com/LoneDev6/API-ItemsAdder/blob/master/src/main/java/dev/lone/itemsadder/api/CustomStack.java)class docs

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

### Проверка существования предмета

[CustomStack ](https://github.com/LoneDev6/API-ItemsAdder/blob/master/src/main/java/dev/lone/itemsadder/api/CustomStack.java)class docs

```java
boolean exists = CustomStack.getInstance("your_item") != null;
```

можно использовать этот метод

```java
ItemsAdder.isCustomItem("your_item");
```

### Получение информации предмета из игры ItemStack

```java
CustomStack stack = CustomStack.byItemStack(myItemStack);
if(stack != null)
{
    stack.setUsages(5)//for example set usages
}
else
{
    //not a custom item
}
```

## Custom Blocks

#### Check if world block is a custom blocks

```java
CustomBlock customBlock = CustomBlock.byAlreadyPlaced(block);
if(customBlock != null)
{
    //custom block

}
else
{
    //not a custom block
}
```

#### Place custom block

```java
CustomBlock customBlock = CustomBlock.getInstance("ruby_ore");
if(customBlock != null) //not needed if you're sure the blocks exists.
{
    //custom block
    customBlock.place(location);
}
else
{
    //not a custom block
}
```

## Custom mobs

### Призыв сущности при помощи ID или названия папки и ID \(namespace:id\)

[CustomMob ](https://github.com/LoneDev6/API-ItemsAdder/blob/master/src/main/java/dev/lone/itemsadder/api/CustomMob.java)class docs

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

### Получение информации о сущности от уже призванной сущности в мире

[CustomMob ](https://github.com/LoneDev6/API-ItemsAdder/blob/master/src/main/java/dev/lone/itemsadder/api/CustomMob.java)class docs

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

## API жидкостей

Установите, пожалуйста, [IALiquids ](https://www.spigotmc.org/resources/84386)аддон для тестирования жидкостей

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

