---
icon: mug-hot
---

# Java

{% hint style="warning" %}
## Warning

This scripting feature is a work-in-progress (WIP) and subject to change in future updates. Always check the latest documentation for updates and compatibility.
{% endhint %}

## `.java`

These are pure Java code classes.

Advantages:

* Pure Java, nothing new to learn for developers.
* No need to create a plugin or setup a complex IDE to code in Java.
* Compatible with VSCode debugger. You can attach the debugger easily.
* Autocomplete of libraries methods, fields etc.
* Easy to identify and fix bugs in your code.

Disadvantages:

* Requires Java knowledge.
* Requires writing package, imports, and logic methods manually (otherwise the intellisense and debugger won't work).

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
