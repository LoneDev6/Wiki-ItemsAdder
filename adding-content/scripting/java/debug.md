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
#### Step 1

Follow the [autocompletion setup tutorial](./autocompletion) before continuing.
{% endstep %}

{% step %}
#### Step 2

Install [Debugger for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-debug).

If you installed the [Extension Pack for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack), this extension is already included.
{% endstep %}

{% step %}
#### Step 3

Create your script file in a folder that matches its Java package.

For example, this file:

`ItemsAdder/contents/test/iascript/example.java`

must use:

```java
package iascript;
```

{% hint style="warning" %}
The folder must match the package, otherwise Java breakpoints might not work correctly.
{% endhint %}

```java
package iascript;

import org.bukkit.Material;
import org.bukkit.event.Event;
import org.bukkit.plugin.Plugin;
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
    }
}
```

Create a `.yml` file that references the script:

```yaml
info:
  namespace: test

items:
  example_execute_script:
    name: Example Execute Script
    resource:
      material: DIAMOND
      generate: false
      model_path: minecraft:item/diamond
    script:
      enabled: true
      path: iascript/example
```
{% endstep %}

{% step %}
#### Step 4

Change your server launch arguments and add JDWP debug options.

Use a free port that is different from the Minecraft server port.

```bash
java -agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:55213 -jar server.jar nogui
```

If you want the server to wait until the debugger is attached before starting, use `suspend=y`.
{% endstep %}

{% step %}
#### Step 5

Create a new file `.vscode/launch.json` (do not forget the dot at the very start!).

Change the port `55213` to your own debug port.

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
#### Step 6

Start the server, then start the `Attach to Minecraft Server` debug configuration from VSCode.

You can now place breakpoints in your Java script files.
{% endstep %}
{% endstepper %}
