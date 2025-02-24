# 协议错误

### NoClassDefFoundError

如果您遇到关于协议的错误，请安装[最新的ProtocolLib](../../first-install.md).

```
Error occurred while enabling ItemsAdder v1.1.16 (Is it up to date?)
java.lang.NoClassDefFoundError: com/comphenix/protocol/events/PacketListener
```

### 无法从 ID 检索实体

请下载[最新版 ProtocolLib](../../first-install.md).​

```
[ItemsAdder] Unhandled exception occured in onPacketReceiving(PacketEvent) for ItemsAdder
java.lang.RuntimeException: Cannot retrieve entity from ID.
	at com.comphenix.protocol.wrappers.BukkitConverters$9.getSpecific(BukkitConverters.java:646) ~[?:?]
	at com.comphenix.protocol.wrappers.BukkitConverters$9.getSpecific(BukkitConverters.java:625) ~[?:?]
	at com.comphenix.protocol.reflect.StructureModifier.readInternal(StructureModifier.java:227) ~[?:?]
	at com.comphenix.protocol.reflect.StructureModifier.read(StructureModifier.java:195) ~[?:?]
	at dev.lone.itemsadder.Spigot.SpigotEntityFix$1.onPacketReceiving(Unknown Source) ~[?:?]
	at com.comphenix.protocol.injector.SortedPacketListenerList.invokeReceivingListener(SortedPacketListenerList.java:114) ~[?:?]
	at com.comphenix.protocol.injector.SortedPacketListenerList.invokePacketRecieving(SortedPacketListenerList.java:67) ~[?:?]
	at com.comphenix.protocol.injector.PacketFilterManager.handlePacket(PacketFilterManager.java:590) ~[?:?]
	at com.comphenix.protocol.injector.PacketFilterManager.invokePacketRecieving(PacketFilterManager.java:557) ~[?:?]
	at com.comphenix.protocol.injector.netty.ProtocolInjector.packetReceived(ProtocolInjector.java:352) ~[?:?]
	at com.comphenix.protocol.injector.netty.ProtocolInjector.onPacketReceiving(ProtocolInjector.java:317) ~[?:?]
​
```
