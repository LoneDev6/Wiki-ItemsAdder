# Usage

## Getting the API

{% embed url="https://github.com/LoneDev6/API-ItemsAdder" %}

{% hint style="warning" %}
## Important

Listen to the `ItemsAdderLoadDataEvent` event in order to wait the plugin to load and detect `/iareload` or `/iazip` which can cause items and content to be changed (removed/added).
{% endhint %}

## Custom items - [docs](https://github.com/LoneDev6/API-ItemsAdder/blob/master/src/main/java/dev/lone/itemsadder/api/CustomStack.java)

#### Getting a custom item of any type (block, item, hat, food etc.) by id or namespace:id

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

#### Checking if a custom item exists

```java
CustomStack.isInRegistry("your_item")
```

#### Obtaining the CustomStack from a Bukkit ItemStack

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

## Custom Blocks - [docs](https://github.com/LoneDev6/API-ItemsAdder/blob/master/src/main/java/dev/lone/itemsadder/api/CustomBlock.java)

#### Check if a custom block exists

```java
CustomBlock.isInRegistry("your_item")
```

#### Check if world block is a custom blocks

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

#### Place custom block

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

## Custom entity - [docs](https://github.com/LoneDev6/API-ItemsAdder/blob/master/src/main/java/dev/lone/itemsadder/api/CustomEntity.java)

#### Spawn a custom mob by id or namespace:id

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

### Get custom entity by an already spawned Bukkit entity

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

## Liquids API

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

## Changing HUD values with API

### Setting a float value in a Frames Hud

```java
PlayerHudsHolderWrapper playerHudsHolderWrapper = new PlayerHudsHolderWrapper(playerObject);
PlayerQuantityHudWrapper hud = new PlayerQuantityHudWrapper(playerHudsHolderWrapper, "namespace_name:hud_name");
hud.setFloatValue(1f);
```

### Making a HUD visible.

```java
PlayerHudsHolderWrapper playerHudsHolderWrapper = new PlayerHudsHolderWrapper(playerObject);
PlayerQuantityHudWrapper hud = new PlayerQuantityHudWrapper(playerHudsHolderWrapper, "namespace_name:hud_name");
hud.setVisible(true);
```

## Old stuff:

### Custom mobs <mark style="color:orange;">(old)</mark> - [docs](https://github.com/LoneDev6/API-ItemsAdder/blob/master/src/main/java/dev/lone/itemsadder/api/CustomMob.java)

#### Spawn a custom mob by id or namespace:id

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

#### Get custom mob by mob already spawned in the world

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
