# דוגמאות

## פריטים מותאמים אישית

### קבלת פריט מותאם אישית מכל סוג (בלוק, פריט, כובע, אוכל..) לפי id או namespace:id

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

### בודק אם קיים פריט מותאם אישית

[CustomStack ](https://github.com/LoneDev6/API-ItemsAdder/blob/master/src/main/java/dev/lone/itemsadder/api/CustomStack.java)class docs

```java
boolean exists = CustomStack.getInstance("your_item") != null;
```

או שאתם יכולים גם להשתמש בשיטה הישנה שאינה מקצה דבר.

```java
ItemsAdder.isCustomItem("your_item");
```

### קבלת נתוני הפריטים המותאמים אישית מ-ItemStack בתוך המשחק

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

## בלוקים מותאמים אישית

#### בדוק אם בלוק עולם הוא בלוקים מותאמים אישית

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

#### הצב בלוק מותאם אישית

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

## אספסוף מותאמים אישית

### הוליד אספסוף מותאם אישית לפי id או namespace:id

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

### קבל אספסוף מותאם אישית אחר אספסוף שכבר נוצר בעולם

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

## API של נוזלים

Please also install [IALiquids ](https://www.spigotmc.org/resources/84386)addon to have some test liquids

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
