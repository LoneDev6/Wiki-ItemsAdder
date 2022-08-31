# ItemBridge

## [下载](https://www.spigotmc.org/resources/77080/)

{% hint style="warning" %}
版本需求：
**ItemsAdder** 3.1.0+  
**ItemBridge** 3.1+
{% endhint %}

## 如何使用 ItemBridge 获取 ItemsAdder 物品

使用 **Mimic** 获取自定义物品，需要使用以下命令

`/ib get`` `<mark style="color:blue;">`ia:<item namespaced id>`</mark>

`/ib give <player>`` `<mark style="color:blue;">`ia:<item namespaced id>`</mark>

`/ib drop <world> <x> <y> <z>`` `<mark style="color:blue;">`ia:<item namespaced id>`</mark>` ``[amount]`

### 栗子

`/ib give LoneDev ia:itemsadder:ruby_sword`

{% hint style="warning" %}
在 Itemsadder 自定义物品名称前添加 `ia:` 是不可缺的步骤，否则会使 **ItemBridge** 无法识别该物品

因此 `itemsadder:ruby_sword` 必须编写为 `ia:itemsadder:ruby_sword`.
{% endhint %}



