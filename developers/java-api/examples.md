# Examples

## Getting a custom item of any type

[CustomStack ](https://github.com/LoneDev6/API-ItemsAdder/blob/master/src/main/java/dev/lone/itemsadder/api/CustomStack.java)class docs

```java
CustomItem customItem = CustomStack.getInstance("your_item")
if(customItem != null)
{
    ItemStack itemStack = customItem.getItemStack();
}
else
{
    //not a custom item
}
```

## Checking if a custom item exists

[CustomStack ](https://github.com/LoneDev6/API-ItemsAdder/blob/master/src/main/java/dev/lone/itemsadder/api/CustomStack.java)class docs

```java
boolean exists = CustomStack.getInstance("your_item") != null;
```

or you can also use the old method

```java
ItemsAdder.isCustomItem("your_item");
```

## Getting the custom item data from an ingame ItemStack

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

