---
icon: bug
---

# Debug

{% hint style="warning" %}
This requires ItemsAdder 4.0.13 or greater.

This is only compatible with `.java` scripting type.
{% endhint %}

{% stepper %}
{% step %}
### Step 1

{% hint style="warning" %}
Follow the [autocompletion setup tutorial](autocompletion.md) before continuing!
{% endhint %}
{% endstep %}

{% step %}
### Step 2

Install the VSCode extension [Debugger for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-debug).
{% endstep %}

{% step %}
### Step 3

Create your script file into a folder `iascript`.\
For example `ItemsAdder/contents/test/iascript/example.java`.

{% hint style="warning" %}
The folder must match the package, otherwise the debugger won't work!
{% endhint %}

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

Create a `.yml` file that holds the configurations.

Specify the script under the `scripts` category.\
In this example I specified the `example` script, which was created in  `contents/test/iascript/example.java`.

```yaml
info:
  namespace: test
scripts:
  example:
    enabled: true
    path: iascript/example
```

Create a simple item to trigger the example script.

```yaml
items:
  example_execute_script:
    name: Example Execute Script
    resource:
      material: DIAMOND
      generate: false
      model_path: minecraft:item/diamond.png
    events:
      interact:
        right:
          script:
            name: example
```
{% endstep %}

{% step %}
### Step 4

Change your server launch arguments and add `-Xdebug -Xnoagent -Djava.compiler=NONE -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=55213`.

Change the port `55213` to a new unused port debug port, which is different from the server port.

Example: `java -Xdebug -Xnoagent -Djava.compiler=NONE -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=55213 -jar server.jar nogui`.
{% endstep %}

{% step %}
### Step 5

Create a new file `.vscode\launch.json` (do not forget the dot at the very start!).\
Change the port `55213` to your own debug port, which is different from the server port.

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "java",
      "name": "Attach to Minecraft Server",
      "request": "attach",
      "hostName": "localhost",
      "port": 55213
    }
  ]
}
```
{% endstep %}

{% step %}
### Step 6 - Done!

Press F5 while editing a file and then place your breakpoints, use the debug console etc.

<figure><img src="../../../.gitbook/assets/image (2) (1) (1) (1) (1).png" alt=""><figcaption></figcaption></figure>


{% endstep %}
{% endstepper %}
