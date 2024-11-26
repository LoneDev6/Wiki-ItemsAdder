# "Duplicate recipe ignored" 错误

如果你遇到类似这样的错误，请将你的 Paper 或 Spigot 更新到最新版本。如果是 1.14.4 版本并不意味着它是最新的，你必须下载最新版本。

```text
Server thread/ERROR Error occurred while enabling ItemsAdder v1.1.27 (Is it up to date?)
java.lang.IllegalStateException: Duplicate recipe ignored with ID itemsadder:philosopher_stone
at net.minecraft.server.v1_14_R1.CraftingManager.addRecipe(CraftingManager.java:72) ~[minecraft_server.jar:git-Spigot-9de398a-9c887d4]
at org.bukkit.craftbukkit.v1_14_R1.inventory.CraftShapedRecipe.addToCraftingManager(CraftShapedRecipe.java:59) ~[minecraft_server.jar:git-Spigot-9de398a-9c887d4]
at org.bukkit.craftbukkit.v1_14_R1.CraftServer.addRecipe(CraftServer.java:1102) ~[minecraft_server.jar:git-Spigot-9de398a-9c887d4]
at org.bukkit.Bukkit.addRecipe(Bukkit.java:639) ~[minecraft_server.jar:git-Spigot-9de398a-9c887d4]
at dev.lone.itemsadder.d.e.a.c.a(Unknown Source) ~[?:?]
at dev.lone.itemsadder.d.d.b.b(Unknown Source) ~[?:?]
at dev.lone.itemsadder.d.d.b.aY(Unknown Source) ~[?:?]
at dev.lone.itemsadder.d.d.b.c(Unknown Source) ~[?:?]
at dev.lone.itemsadder.d.a.reload(Unknown Source) ~[?:?]
at dev.lone.itemsadder.d.a.(Unknown Source) ~[?:?]
at dev.lone.itemsadder.Main.bh(Unknown Source) ~[?:?]
at dev.lone.itemsadder.Main.onEnable(Unknown Source) ~[?:?]
at org.bukkit.plugin.java.JavaPlugin.setEnabled(JavaPlugin.java:263) ~[minecraft_server.jar:git-Spigot-9de398a-9c887d4]
at org.bukkit.plugin.java.JavaPluginLoader.enablePlugin(JavaPluginLoader.java:352) [minecraft_server.jar:git-Spigot-9de398a-9c887d4]
at org.bukkit.plugin.SimplePluginManager.enablePlugin(SimplePluginManager.java:417) [minecraft_server.jar:git-Spigot-9de398a-9c887d4]
at org.bukkit.craftbukkit.v1_14_R1.CraftServer.enablePlugin(CraftServer.java:461) [minecraft_server.jar:git-Spigot-9de398a-9c887d4]
at org.bukkit.craftbukkit.v1_14_R1.CraftServer.enablePlugins(CraftServer.java:375) [minecraft_server.jar:git-Spigot-9de398a-9c887d4]
at net.minecraft.server.v1_14_R1.MinecraftServer.a(MinecraftServer.java:449) [minecraft_server.jar:git-Spigot-9de398a-9c887d4]
at net.minecraft.server.v1_14_R1.DedicatedServer.init(DedicatedServer.java:258) [minecraft_server.jar:git-Spigot-9de398a-9c887d4]
```

