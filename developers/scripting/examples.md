---
icon: memo
---

# Examples

## Example configuration

```yml
info:
  namespace: test
items:
  script_executor:
    name: script_executor
    resource:
      material: PAPER
      generate: false
      model_path: minecraft:item/diamond
    events:
      interact:
        left:
          script:
            name: test:script_test
scripts:
  script_test:
    path: script_test.jspp

```

***

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

***

## Example code

Replace near custom blocks.

```js
cancelEvent(); // Cancel the event to prevent further processing

var location = $player.getLocation();
var count = 0;

// Iterate through all blocks in a 10x10x10 cube around the player and check isCustom(block) == true
for (var x = -5; x <= 5; x++) {
  for (var y = -5; y <= 5; y++) {
    for (var z = -5; z <= 5; z++) {
      var block = location.getWorld().getBlockAt(location.getBlockX() + x, location.getBlockY() + y, location.getBlockZ() + z);
      if (isCustom(block)) {
        msg($player, "Found a custom block at " + block.getLocation().toString());
        placeBlock(block, "minecraft:stone");
        count++;
      }
    }
  }
}

// Send a message to the player indicating that the script has finished running
msg($player, "Replaced " + count + " custom blocks with stone blocks.");
```
