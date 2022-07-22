# 树叶与透明方块

{% hint style="danger" %}
### Tree blocks sometimes disappear and become air blocks

This is a know issue in CREATIVE mode as the client doesn't send some packets to the server.\
这是创造模式下的一个已知问题，因为客户端不会向服务器发送某些数据包，请尝试在生存模式下进行操作
{% endhint %}

{% hint style="danger" %}
### REAL_TRANSPARENT 方块在水流过时会掉落

该bug是已知的，但修复该bug会占用大量服务器资源，造成严重的延迟以及性能滞后.\
\
Details:\
As you already know Minecraft is not that great and most of the cool features require a lot of hacks to be implemented.\
One of these are custom blocks. To fix this water bug I'd have to listen to the water flowing event and check if every block around the water is a custom block. This event is called a looooooot of times in midsized server and I can't make the plugin lag everything.
{% endhint %}
