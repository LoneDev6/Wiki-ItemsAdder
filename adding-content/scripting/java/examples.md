---
icon: circle-info
---

# Examples

{% hint style="warning" %}
This requires ItemsAdder 4.0.13 or greater.

This is only compatible with `.java` scripting type.
{% endhint %}

This example script:

* prints in console the current custom item used id
* sends an hello message to the player
* gives a diamond to the player and sends a message about it
* gives a ruby (from the `iasurvival` pack) to the player and sends a message about it, if available

```java
package iascript;

import org.bukkit.event.Event;
import org.bukkit.plugin.Plugin;
import org.bukkit.Material;
import org.bukkit.entity.Player;
import org.bukkit.inventory.ItemStack;
import dev.lone.itemsadder.api.*;
import dev.lone.itemsadder.api.scriptinginternal.*;
import static dev.lone.itemsadder.api.scriptinginternal.ScriptingUtils.*;

public class example extends ItemScript {
  public void handleEvent(Plugin plugin, Event event, Player player, CustomStack $customStack, ItemStack $itemStack) {
    log("Player " + player.getName() + " interacted with item: " + $customStack.getNamespacedID());
    
    player.sendMessage("Hello from example script!");

    player.getInventory().addItem(new ItemStack(Material.DIAMOND, 1));
    player.sendMessage("You have been given a diamond!");

    var customStack = CustomStack.getInstance("iasurvival:ruby");
    if(customStack != null) {
      log("Custom stack found: " + customStack.getNamespacedID());
      player.getInventory().addItem(customStack.getItemStack());
      player.sendMessage("You have been given a ruby!");
    } else {
      log("Custom stack not installed on the server: iasurvival:ruby");
      player.sendMessage("Ruby item not found.");
    }
    
  }
}
```
