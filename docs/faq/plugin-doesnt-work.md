---
title: "The plugin doesn't work!"
description: What to do when ItemsAdder refuses to work.
---

# THE PLUGIN DOESN'T WORK!

## Before reporting!

Make sure you followed the tutorial **IN DETAIL** and that you are using the latest versions of ItemsAdder and any required plugins.  
Remember that ItemsAdder only supports versions 1.15.x to 1.18.2 and only officially works with [PaperMC][paper] and [SpigotMC][spigot]. CraftBukkit, any forks of either Spigot or PaperMC and any kind of Hybrid-Servers are not supported!

Also make sure to test your issue on a **clean server without any pother plugins** and if the issue doesn't appear, make sure to find it by re-adding your plugins one at a time.  
Finally, do not use Plugin reloaders such as PlugMan. More often than not will they cause issues when other plugins do not support being reloaded while the server is still running.

If after all this, the issue still persists, report it with the following information on either [GitHub][issues-repo] or the [Discord Server][discord]:

- Detailed description on how to reproduce this issue reliably.
- The **complete output** of `/version`  
  Use the command in the server console for easier copying.
- The versions of ItemsAdder, LoneLibs and all other used plugins that ItemsAdder (soft) depends on.  
  Use `/version <plugin>` in the console to the the version.
- Mention if you modified any of the default Items of ItemsAdder, be it YAML files, JSON files, images, etc.
- Mention if you modified the final Resource pack Zip.
- Zip all the YAML files of ItemsAdder and provide them to us.
- Mention any errors that ItemsAdder reports either in the console or in-game.
- The **complete** latest.log file of your server since the last restart.
- IP/Domain of your server.
- Temporarely give the player `LoneDev` OP-Status on the server.  
  Alternatively can you grant permissions for `/pl`, all ItemsAdder permissions, permissions for Essentials' `/tp` and `/i` command and any other permission that may be handy.  
  After the issue has been resolved can you revoke the OP-Status or remove the granted permissions from LoneDev.

[paper]: https://papermc.io
[spigot]: https://spigotmc.org

[issues-repo]: https://github.com/PluginBugs/Issues-ItemsAdder/issues
[discord]: https://discord.com/invite/z3rxuWt6FZ