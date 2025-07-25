---
icon: circle-info
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

### Data Utility

Utility methods to save persistent data and read it later.

These methods support `ItemStack`, `CustomItem`, `Entity` and `Block`.

```java
hasData(var param, String namespace, String key)
removeData(var param, String namespace, String key)
getDataByte(var param, String namespace, String key, byte def)
setDataByte(var param, String namespace, String key, byte value)
getDataShort(var param, String namespace, String key, short def)
setDataShort(var param, String namespace, String key, short value)
getDataInt(var param, String namespace, String key, int def)
setDataInt(var param, String namespace, String key, int value)
getDataLong(var param, String namespace, String key, long def)
setDataLong(var param, String namespace, String key, long value)
getDataFloat(var param, String namespace, String key, float def)
setDataFloat(var param, String namespace, String key, float value)
getDataDouble(var param, String namespace, String key, double def)
setDataDouble(var param, String namespace, String key, double value)
getDataBool(var param, String namespace, String key, boolean def)
setDataBool(var param, String namespace, String key, boolean value)
getDataString(var param, String namespace, String key, String def)
setDataString(var param, String namespace, String key, String value)
```

#### Examples

<details>

<summary>Example: Teleporter Script</summary>

```javascript
// Test: Save or use player coordinates and orientation in held item, with usage count
let item = $itemStack;
let ns = "myplugin";
let keyX = "coord_x";
let keyY = "coord_y";
let keyZ = "coord_z";
let keyYaw = "coord_yaw";
let keyPitch = "coord_pitch";
let keyUses = "coord_uses";
let maxUses = 3; // Set how many times the item can be used

// Try to read already saved coordinates and orientation
let hasCoords = hasData(item, ns, keyX) && hasData(item, ns, keyY) && hasData(item, ns, keyZ) && hasData(item, ns, keyYaw) && hasData(item, ns, keyPitch);

if (!hasCoords) {
  // Save current coordinates and orientation in the item
  let loc = $player.getLocation();
  setDataDouble(item, ns, keyX, loc.getX());
  setDataDouble(item, ns, keyY, loc.getY());
  setDataDouble(item, ns, keyZ, loc.getZ());
  setDataFloat(item, ns, keyYaw, loc.getYaw());
  setDataFloat(item, ns, keyPitch, loc.getPitch());
  setDataInt(item, ns, keyUses, maxUses);

  // Verify writing
  let savedX = getDataDouble(item, ns, keyX, 0);
  let savedY = getDataDouble(item, ns, keyY, 0);
  let savedZ = getDataDouble(item, ns, keyZ, 0);
  let savedYaw = getDataFloat(item, ns, keyYaw, 0);
  let savedPitch = getDataFloat(item, ns, keyPitch, 0);
  let savedUses = getDataInt(item, ns, keyUses, 0);

  msg($player, "Saved coordinates: " + savedX + ", " + savedY + ", " + savedZ + " (Yaw: " + savedYaw + ", Pitch: " + savedPitch + ")");
  msg($player, "Usages left: " + savedUses);

  if (savedX != loc.getX() || savedY != loc.getY() || savedZ != loc.getZ() || savedYaw != loc.getYaw() || savedPitch != loc.getPitch()) {
    msg($player, "Test FAILED: saving coords/orientation");
  } else {
    msg($player, "Coordinates and orientation saved in the item.");
  }
} else {
  // Read and use the saved coordinates and orientation
  let x = getDataDouble(item, ns, keyX, 0);
  let y = getDataDouble(item, ns, keyY, 0);
  let z = getDataDouble(item, ns, keyZ, 0);
  let yaw = getDataFloat(item, ns, keyYaw, 0);
  let pitch = getDataFloat(item, ns, keyPitch, 0);
  let uses = getDataInt(item, ns, keyUses, 1);

  $player.teleport(new Location($player.getWorld(), x, y, z, yaw, pitch));
  msg($player, "Teleported to saved coordinates: " + x + ", " + y + ", " + z + " (Yaw: " + yaw + ", Pitch: " + pitch + ")");

  // Decrement usage count
  uses -= 1;
  if (uses > 0) {
    setDataInt(item, ns, keyUses, uses);
    msg($player, "Usages left: " + uses);
  } else {
    // Remove data and decrease item amount
    removeData(item, ns, keyX);
    removeData(item, ns, keyY);
    removeData(item, ns, keyZ);
    removeData(item, ns, keyYaw);
    removeData(item, ns, keyPitch);
    removeData(item, ns, keyUses);
    if (hasData(item, ns, keyX) || hasData(item, ns, keyY) || hasData(item, ns, keyZ) || hasData(item, ns, keyYaw) || hasData(item, ns, keyPitch) || hasData(item, ns, keyUses)) {
      msg($player, "Test FAILED: removeData");
    }
    // Decrease item amount
    item.setAmount(item.getAmount() - 1);
    msg($player, "No usages left, item amount decreased.");
  }
}
```

</details>

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

## Example: Replace near custom blocks

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
