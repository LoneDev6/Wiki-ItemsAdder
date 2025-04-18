---
icon: text-size
---

# Constructs

## ✅ Syntax Basics

* **Semicolons (`;`) are mandatory** at the end of each statement, like in Java.
* You can use `const`, `let`, or `var` to declare variables.
* Supports **lambda expressions** and **Java class imports**.

> ⚠️ **Warning**: This scripting feature is a work-in-progress (WIP) and subject to change in future updates. Always check the latest documentation for updates and compatibility.

## 🌟 Script Variables

Scripts inherit several predefined variables from the event that triggered the script. These variables are automatically available in your script and are prefixed with a `$` to avoid name conflicts:

* `$plugin`: The plugin instance.
* `$event`: The event that triggered the script.
* `$player`: The player involved in the event (if applicable).
* `$customStack`: The custom item stack involved (if applicable).
* `$itemStack`: The standard item stack involved (if applicable).

The generated Java class for the script includes a `main` function with the following signature:

```java
public static void main(Plugin $plugin, Event $event, Player $player, CustomStack $customStack, ItemStack $itemStack)
```

> 📝 **Note**: This structure is currently fixed and cannot be modified. Ensure your scripts are designed to work within this framework.

## ⏳ Delays

Use the `delay(ticks, () -> { ... })` function to delay execution.

* **1 second = 20 ticks**

```js
delay(40, () => {
  msg($player, "This message appears after a 2 seconds delay.");
});
```

***

## 📦 Importing Java Classes

You can import external classes using the `import` keyword with quotes:

```java
import "org.bukkit.Bukkit";
import "org.bukkit.entity.LivingEntity";
import "net.kyori.adventure.text.Component";
import "com.comphenix.protocol.ProtocolLibrary";
```

***

## ❌ Cancelling The Event

You can cancel the current event using:

```java
cancelEvent();
```

***

## 🔧 Utility Functions

### 🧱 ItemStack Utilities

```java
isCustom(ItemStack itemStack);
newCustomStack(String namespacedId);
newCustomStack(String namespacedId, int amount);
newStack(Material material);
```

### 🧍 Player Held Item

```java
isHeld(Player player, String namespacedId);
isHeld(Player player, CustomStack customStack);
isHeld(Player player, Material material);
setHeld(Player player, String namespacedId);
```

### 🧱 Block Utilities

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

### 💬 Messaging and Logging

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
