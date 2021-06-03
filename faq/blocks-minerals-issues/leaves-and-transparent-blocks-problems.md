# 叶子和透明方块的问题

{% hint style="danger" %}
## 树叶有时会消失.

这是在创造模式下的一个已知特性,因为客户端没有向服务器发送数据包. 所以请在生存模式下尝试.
{% endhint %}

{% hint style="danger" %}
## REAL\_TRANSPARENT blocks are dropped when water flows on them

我已经料到有这个特性,当然如果你的服务器配置不够好的话,还是别理它了吧

详细内容:  
其实MineCraft并没有那么现象的那么厉害,大多数很牛逼的功能需要大量技术来实现. 比如自定义方块这个功能.为了解决这个自定义水的问题,我必须听从水的流动事件开始出发,并检查水周围的每个方块是不是用Itemsadder制作的自定义方块.这个事件会一直进行循环.当然我无法让滞后变的更少.
{% endhint %}

