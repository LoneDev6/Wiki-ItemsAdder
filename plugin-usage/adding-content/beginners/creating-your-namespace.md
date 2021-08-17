# 创造一个属于你的物品空间

{% hint style="warning" %}
如果你不知道我说的**namespace\[分组\]**是什么东西,请阅读[该介绍](basic-concepts/namespace.md)
{% endhint %}

## 在items\_packs创建一个子文件夹

为了使你的物品更容易寻找,我在这建议你创建**属于你自己的分组**. 第一步,打开你的:`plugins\ItemsAdder\data\items_packs`文件

在这个教程里**namespace\[分组\]**将会是`myitems`,所以我推荐你创建一个像分组一样的名称的文件.

![](../../../.gitbook/assets/image%20%289%29.png)

打开myitems文件,创建一个新的文件,你可以根据自己的需求来设置它,在这,我把它命名为`myswords.yml`

![](../../../.gitbook/assets/image%20%2811%29.png)

打开刚刚创建的**.yml**文件并把下面内容粘贴进去:

```yaml
info:
  namespace: myitems
```

正如你们所见,我将**namespace\[分组\]**设置为`myitems`,它与刚刚创建的文件名称相同.请记住一定要根据自己的**namespace\[分组\]**来进行更改.

{% hint style="info" %}
你可以创建你想要的**namespaces\[分组\]**!这可以使你更容易的组织你的物品起来.
{% endhint %}

{% hint style="info" %}
你可以在同一分组里创建很多的**.yml**文件!  
可使你更好的组织你的物品. 例如,你可以把你的物品分为剑,食物,方块.
{% endhint %}

{% hint style="warning" %}
**所有这些"分组"可能看起来很没用**.**但相信我**,它可以减少错误,让你更容易的找到你想要的东西.
{% endhint %}

