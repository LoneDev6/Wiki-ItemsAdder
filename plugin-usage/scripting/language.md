---
icon: scroll
---

# Language

{% hint style="warning" %}
## Warning

This scripting feature is a work-in-progress (WIP) and subject to change in future updates. Always check the latest documentation for updates and compatibility.
{% endhint %}

## `.java`

These are pure Java code classes.

Advantages:

* Pure Java, nothing new to learn for developers.
* Compatible with VSCode debugger. You can attach the debugger easily.
* Autocomplete of libraries methods, fields etc.
* Easy to identify and fix bugs in your code.

Disadvantages:

* Requires Java knowledge.
* Requires writing package, imports, and logic methods manually.

### Item Scripts

This script is called by item events.\
To create an item script you have to extend the ItemScript class that offers the `handleEvent` method.

```java
package iascript;

import org.bukkit.event.Event;
import org.bukkit.plugin.Plugin;
import org.bukkit.entity.Player;
import org.bukkit.inventory.ItemStack;
import dev.lone.itemsadder.api.*;
import dev.lone.itemsadder.api.scriptinginternal.*;

public class example extends ItemScript {
  public void handleEvent(Plugin plugin, Event event, Player player, CustomStack $customStack, ItemStack $itemStack) {
    // Your code...    
  }
}
```

### Entity Scripts

This script is called by entity events.\
To create an entity script you have to extend the ItemScript class that offers the `handleEvent` method.

```java
package iascript;

import org.bukkit.event.Event;
import org.bukkit.plugin.Plugin;
import org.bukkit.entity.Player;
import dev.lone.itemsadder.api.*;
import dev.lone.itemsadder.api.scriptinginternal.*;

public class example extends EntityScript {
  public void handleEvent(Plugin plugin, Event event, Player player, CustomEntity customEntity) {
    // Your code...    
  }
}
```

## `.jspp`

{% hint style="info" %}
Remember to update the [vscode extension](https://marketplace.visualstudio.com/items?itemName=LoneDev.ia-vscode) to get autocompletion and common errors checking of the new preview `.jspp` format.
{% endhint %}

This scripting mode uses Java under the hood but allows some JavaScript-inspired syntax for convenience.

Advantages:

* Requires less code: common imports are automatically resolved.
* Faster to write.

Disadvantages:

* No debugger.
* Autocomplete is not precise and mostly missing.
* The intellisense is not always reliable on errors.
* Hard to identify and fix bugs in your code.

### ✅ Syntax Basics

* **Semicolons (`;`) are mandatory** at the end of each statement, like in Java.
* You can use `const`, `let`, or `var` to declare variables.
* Supports **lambda expressions** and **Java class imports**.

### 🌟 Script Variables

Scripts inherit several predefined variables from the event that triggered the script. These variables are automatically available in your script and are prefixed with a `$` to avoid name conflicts:

* `$plugin`: The plugin instance.
* `$event`: The event that triggered the script.
* `$player`: The player involved in the event (if applicable).
* `$customStack`: The custom item stack involved (if applicable).
* `$itemStack`: The standard item stack involved (if applicable).
* `$customEntity`: The standard custom entity involved (if applicable).

The generated Java class for the script includes a `main` function with the following signature:

```java
public static void main(Plugin $plugin, Event $event, Player $player, CustomStack $customStack, ItemStack $itemStack)
```

Or the following signature if a custom entity script:

```java
public static void main(Plugin $plugin, Event $event, Player $player, CustomEntity $customEntity)
```

> 📝 **Note**: This structure is currently fixed and cannot be modified. Ensure your scripts are designed to work within this framework.

### ⏳ Delays

Use the `delay(ticks, () -> { ... })` function to delay execution.

* **1 second = 20 ticks**

```js
delay(40, () => {
  msg($player, "This message appears after a 2 seconds delay.");
});
```

***

### 📦 Importing Java Classes

You can import external classes using the `import` keyword with quotes:

```java
import "org.bukkit.Bukkit";
import "org.bukkit.entity.LivingEntity";
import "net.kyori.adventure.text.Component";
import "com.comphenix.protocol.ProtocolLibrary";
```

***

### ❌ Cancelling The Event

You can cancel the current event using:

```java
cancelEvent();
```

***

### 🔧 Utility Functions

#### 🧱 ItemStack Utilities

```java
isCustom(ItemStack itemStack);
newCustomStack(String namespacedId);
newCustomStack(String namespacedId, int amount);
newStack(Material material);
```

#### 🧍 Player Held Item

```java
isHeld(Player player, String namespacedId);
isHeld(Player player, CustomStack customStack);
isHeld(Player player, Material material);
setHeld(Player player, String namespacedId);
```

#### 🧱 Block Utilities

```java
isCustom(Block block);
customBlock(Block block);
customBlock(Location location);

block(String worldName, int x, int y, int z);
block(World world, int x, int y, int z);
block(Location location);

location(String worldName, int x, int y, int z);

removeBlock(Block block);
placeBlock(Block block, Material material);
placeBlock(Block block, CustomBlock customBlock);
placeBlock(Block block, String identifier);
```

#### 💬 Messaging and Logging

```java
msg(Player player, String message);
msg(Player player, String message, boolean minimessage);
msg(Player player, Component message);
log(String message);
```

### ↺ Casting

Exactly how it works in Java.

```java
Type1 item = (Type2) item2;
```

***

### 📌 Best Practices

* Use `delay()` for animations or delayed feedback.
* Always check `isCustom()` before modifying custom items or blocks.
* Log actions with `log()` during debugging.
* Use `cancelEvent()` to prevent default behavior when handling interactions.
