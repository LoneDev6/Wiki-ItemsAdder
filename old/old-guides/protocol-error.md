# Protocol error

### NoClassDefFoundError

If you get an error about Protocol please install [latest ProtocolLib](../../plugin-usage/first-install.md).

```
Error occurred while enabling ItemsAdder v1.1.16 (Is it up to date?)
java.lang.NoClassDefFoundError: com/comphenix/protocol/events/PacketListener
```

### Cannot retrieve entity from ID

To fix this please install [latest ProtocolLib](../../plugin-usage/first-install.md).​

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
