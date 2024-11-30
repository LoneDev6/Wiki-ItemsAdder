# 将旧文件转换为v2

{% hint style="danger" %}
**建议开始一个全新的世界，不要使用旧的世界，因为转换器虽然有效但仍处于实验阶段。**
{% endhint %}

{% hint style="warning" %}
## 如果你没有创建任何自定义物品，并且只使用我的自定义物品，请跳过本教程，你不需要转换文件。但请务必按照教程“游戏内转换旧物品”进行操作。

你只需将ItemsAdder文件夹重命名为ItemsAdder_backup，删除旧插件并安装2.0版本。
{% endhint %}

### 有什么变化？

ItemsAdder v2是对之前ItemsAdder版本的完全重写。它改变了每一个配置和每一个资源包文件的路径/属性/格式。\
它就像一个全新的插件，具有更多功能，更优化且更易于维护。

### 如何将旧的配置文件和资源包转换为新格式？

你需要按照本教程进行操作 :D

{% hint style="warning" %}
**请务必仔细按照教程操作**，不要着急，否则可能会出错并导致转换时间更长。
{% endhint %}

{% hint style="danger" %}
仅在你的PC上的本地测试服务器上进行此操作，以免出错并有丢失数据的风险。
{% endhint %}

## 第一步

* 从你的测试服务器中禁用旧的ItemsAdder插件（删除ItemsAdder.jar并停止服务器）
* 下载[ItemsAdder Converter](https://www.spigotmc.org/resources/itemsadder-converter.75952/)并将其放入你的测试服务器插件文件夹中。

## 第二步 - 复制物品配置

* 打开服务器**插件**文件夹并创建一个**新**文件夹，命名为**ItemsAdder_old**
* 打开你的**旧**ItemsAdder文件夹并从物品文件夹中复制文件**（见截图）**

![](<../.gitbook/assets/image (6).png>)

* 将**物品**文件夹粘贴到**ItemsAdder_old**中

![](<../.gitbook/assets/image (5).png>)

## 第三步 - 复制资源包

* 在**ItemsAdder_old**中创建一个**新**文件夹，命名为**pack**
* 将旧资源包**.zip**文件的确切**内容**提取到新文件夹**pack**中

![](../.gitbook/assets/image.png)

## 第四步 - 准备新的ItemsAdder 2.0

{% hint style="info" %}
**如果你不在乎并且不想获取我的自定义物品，只想创建自己的物品：**

打开**ItemsAdder**文件夹中的`config.yml`（由**ItemsAdder 2.0**版本生成）并将这些属性设置为false。
```
extract-default-items: false
extract-default-resources: false
```

然后删除`ItemsAdder\data\items_packs\...`中的所有文件夹，**但保留**`minecraft`文件夹。\
并删除`ItemsAdder\data\resource_pack\assets\...`中的所有文件夹，**但保留**`minecraft`文件夹。

你还需要从`ia_gui.yml`中删除我的类别。
{% endhint %}

## 第五步 - 准备转换器

{% hint style="success" %}
ItemsAdder转换器会自动跳过我的自定义物品，因此它将创建一个仅包含你自己创建的物品的包。
{% endhint %}

#### 在开始转换之前进行配置

* 打开文件`plugins/ItemsAdderConverter/config.yml`
* 将`namespace`编辑为一个自定义名称。你可以选择你的服务器名称或任何你想要的名称。例如，我的一些物品有**命名空间**"`itemsadder`"，因此你可以使用类似`/iaget itemsadder:ruby`的命令（但正如你所注意到的，我在新插件中创建了更多命名空间，以便分离功能）

## 第六步 - 转换

要开始转换：

* 启动服务器
* 等待其完成加载所有内容
* 使用命令`/itemsadderconverter:iaconvert`
* **等待**其**完成**
* 检查是否抛出任何错误
* **仅在**其**完成转换**时**停止**服务器。

## 安装ItemsAdder v2

{% hint style="danger" %}
* **停止**服务器
* 请确保你**删除了旧的ItemsAdder.jar**
* 如果你在插件中有旧的ItemsAdder文件夹，请**将其重命名为**`ItemsAdder_backup`或**删除**它，如果你已经有备份。
* **下载**ItemsAdder 2.0并将其放入你的插件文件夹中
* **启动**服务器
* 等待ItemsAdder 2.0完成创建其文件
* 如果你遇到任何错误，请阅读并检查你是否做错了什么（缺少依赖项，错误的Spigot版本....）并重试此步骤。
* （如果你收到有关资源包URL的错误，请忽略，这是正常的，因为你稍后会配置它）
* 打开刚刚创建的**ItemsAdder_converted**文件夹
* 将两个文件夹`items_packs`和`resource_pack`复制到新的`ItemsAdder`文件夹中（如果有提示，请替换任何文件）
* **重启**服务器
{% endhint %}

## 最后任务

* 删除`ItemsAdderConverter`，`ItemsAdder_converted`，`ItemsAdder_old`文件夹。
* 删除`ItemsAdderConverter.jar`

## 资源包配置

请按照这个快速教程激活资源包：

{% content-ref url="../plugin-usage/resourcepack-hosting/resourcepack-self-hosting.md" %}
[resourcepack-self-hosting.md](../plugin-usage/resourcepack-hosting/resourcepack-self-hosting.md)
{% endcontent-ref %}
