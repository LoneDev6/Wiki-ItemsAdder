# Use Vanilla Selectors In Commands

{% hint style="info" %}
To be honest I doubt any other plugin has this feature implemented. It means that I would have to recognize, somehow, that you're using this particular Minecraft vanilla command `execute as` and replace the placeholders correctly.
{% endhint %}

To get vanilla selectors working in ItemsAdder commands you have to install [PsudoCommands](https://www.spigotmc.org/resources/psudocommands-perform-plugin-commands-after-execute-and-use-selectors-fork.83535/).

Example:

`/execute at (player) run psudo iaentity summon (entity) ~ ~ ~ world`
