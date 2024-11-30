# Mohist 问题

{% hint style="warning" %}
注意：Mohist 是一个非官方的模组，可能会破坏插件。\
我没有为插件编写官方的 Mohist 兼容性代码，因为这并不是一件简单的事情。
{% endhint %}

```
Caused by: java.lang.ClassNotFoundException: net.minecraft.network.play.server.SChangeGameStatePacket$a
at java.lang.ClassLoader.findClass(Unknown Source) ~[?:1.8.0_311]
at java.lang.ClassLoader.loadClass(Unknown Source) ~[?:1.8.0_311]
at cpw.mods.modlauncher.TransformingClassLoader.loadClass(TransformingClassLoader.java:106) ~[modlauncher-8.0.9.jar:?]
at java.lang.ClassLoader.loadClass(Unknown Source) ~[?:1.8.0_311]
at org.bukkit.plugin.java.PluginClassLoader.findClass(PluginClassLoader.java:170) ~[forge:?]
at org.bukkit.plugin.java.PluginClassLoader.findClass(PluginClassLoader.java:121) ~[forge:?]
at java.lang.ClassLoader.loadClass(Unknown Source) ~[?:1.8.0_311]
at java.lang.ClassLoader.loadClass(Unknown Source) ~[?:1.8.0_311]
at dev.lone.itemsadder.NMS.GameModeChange.impl.v1_16_R3.b(SourceFile:20) ~[?:?]
at dev.lone.itemsadder.NMS.GameModeChange.GameModeChange.J(SourceFile:39) ~[?:?]
at dev.lone.itemsadder.main.gv.U(SourceFile:138) ~[?:?]
at dev.lone.itemsadder.main.gv.f(SourceFile:184) ~[?:?]
at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method) ~[?:1.8.0_311]
at sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source) ~[?:1.8.0_311]
at sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source) ~[?:1.8.0_311]
at java.lang.reflect.Method.invoke(Unknown Source) ~[?:1.8.0_311]
at org.bukkit.plugin.java.JavaPluginLoader$1.execute(JavaPluginLoader.java:315) ~[forge:?]
... 14 more
```

## 如何解决这个问题

打开 **ProtocolLib** 的 `config.yml` 文件，并将此选项设置为 false。

{% code title="config.yml" %}
```yaml
background compiler: false
```
{% endcode %}
