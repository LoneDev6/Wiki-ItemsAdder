# Examples

## Custom items

### Getting a custom item of any type \(block, item, hat, food..\) by id or namespace:id

[CustomStack ](https://github.com/LoneDev6/API-ItemsAdder/blob/master/src/main/java/dev/lone/itemsadder/api/CustomStack.java)class docs

```java
CustomItem customItem = CustomStack.getInstance("your_item")
if(customItem != null)
{
    ItemStack itemStack = customItem.getItemStack();
}
else
{
    //no custom item found with that id
}
```

### Checking if a custom item exists

[CustomStack ](https://github.com/LoneDev6/API-ItemsAdder/blob/master/src/main/java/dev/lone/itemsadder/api/CustomStack.java)class docs

```java
boolean exists = CustomStack.getInstance("your_item") != null;
```

or you can also use the old method

```java
ItemsAdder.isCustomItem("your_item");
```

### Getting the custom item data from an ingame ItemStack

```java
CustomItems customItems = CustomStack.byItemStack("your_item");
if(customItem != null)
{
    customItem.setUsages(5)//for example set usages
}
else
{
    //not a custom item
}
```

## Custom mobs

### Spawn a custom mob by id or namespace:id

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

### Get custom mob by mob already spawned in the world

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

