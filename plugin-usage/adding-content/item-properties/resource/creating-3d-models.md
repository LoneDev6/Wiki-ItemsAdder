# 创建 3D 模型

要创建自定义模型, 推荐使用免费的 [BlockBench ](https://blockbench.net/), 一个制作 Minecraft 的简单易用模型工具.

{% embed url="https://www.youtube.com/watch?v=aaJ8XgMAOno" %}

## 从纹理材质创建 3D 模型

{% embed url="https://www.youtube.com/watch?v=CSWxrAqjrKA" %}

{% hint style="warning" %}
## 重要事项

如果您在使用 **非原版** 的材质 (你的 **.png** 格式文件), 您需要打开 **.json** 文件并做一些编辑.

如果您的模型使用的是自定义材质, 则必须确保 **命名空间** 放在材质名称之前.\
例如, 您有一个这样的 3D 模型, 且材质保存在此路径: `plugins\ItemsAdder\data\resource_pack\assets\my_items\textures\item\custom_item_1.png`

```javascript
 "textures":{
      "0":"item/custom_item_1"
   },
```

您必须添加 **命名空间** 在其前面 (`my_items` 为该例子的 **命名空间**, 请按照实际情况填写).

```javascript
 "textures":{
      "0":"my_items:item/custom_item_1"
   },
```
{% endhint %}
