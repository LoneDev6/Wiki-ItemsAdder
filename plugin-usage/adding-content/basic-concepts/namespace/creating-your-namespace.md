# 创建你的 namespace（命名空间）

{% hint style="warning" %}
如果你不了解命名空间的概念 [阅读该页面](./)
{% endhint %}

## 在 items\_packs 文件夹中创建子文件夹

为了方便管理自定义内容，你必须创建命名空间.\
首先在 `plugins\ItemsAdder\data\items_packs` 中创建一个新的文件夹

在此示例中，**命名空间** 为 `myitems`


![](<../../../../.gitbook/assets/image (8).png>)

打开 `myitems` 文件夹并创建一个新文件并设置文件名称，该文件名称自定即可，在这里我将其命名为 `myswords.yml`

![](<../../../../.gitbook/assets/image (9).png>)

打开新的 **.yml** 文件并粘贴：

```yaml
info:
  namespace: myitems
```

从上方配置中，可以发现我将 **namespace** 属性设置为 `myitems`，命名空间与刚才新建的文件夹名称相同（通常文件夹的名称就是命名空间的名称）.\
当然在你配置时，需要根据你的命名空间名称来更改该属性中的内容.

{% hint style="info" %}
你可以在同一个命名空间中创建 **不限数量 ** 的 .yml 文件.\
这可以使你更加方便的管理不同类型的物品或其他自定义内容.\
例如：给 剑 、 方块 、 食物 、 家具，在同一命名空间内创建不同的 .yml 来进行配置管理
{% endhint %}

{% hint style="warning" %}
使用 **命名空间** 来管理自定义内容尽管操作很繁琐，但是当自定义内容出现问题 或者 当你需要找到某个自定义物品的配置时会很方便.
{% endhint %}
