# 将旧数据转换为v2版本

{% hint style="danger" %}
**建议重新创建一个世界，并且不要使用旧的世界来进行转换.转换器仍是测试阶段**
{% endhint %}

{% hint style="warning" %}
## 如果你并没有添加自定义物品，而是使用插件预置的物品。则跳过本篇教程，你不需要转换物品。

您只需将 ItemsAdder 文件夹重命名为 ItemsAdder\_backup，删除旧版本插件并安装 2.0 版本
{% endhint %}

### 有什么改变?

ItemsAdder v2 是对 ItemsAdder 旧版本的全新编译 优化了配置以及资源包文件的路径/属性/格式 它就像一个全新的插件，功能更多，更加优化，更易于维护

### 如何将旧的配置文件和资源包转换为新格式？

您必须遵循本教程步骤(｀・ω・´)

{% hint style="warning" %}
**请务必仔细按照教程进行操作**, 不要着急(〃´-ω･) ，否则您可能会犯错误并使用更长的时间来进行转换.
{% endhint %}

{% hint style="danger" %}
在的本地测试服务器上执行此操作，可避免错误和丢失数据的风险
{% endhint %}

## 步骤 1

* 从服务器中禁用旧的 ItemsAdder 插件(关闭服务器并删除 ItemsAdder.jar)
* 下载 [ItemsAdder Converter ](https://www.spigotmc.org/resources/itemsadder-converter.75952/)并放入插件目录

## 步骤 2 - 复制物品配置

* 打开服务器 **plugins** 文件夹并创建一个名为 **ItemsAdder\_old** 的 **新** 文件夹
* 打开 **旧的** ItemsAdder 文件夹并从items文件夹复制文件 **(看截图)**

![](<../.gitbook/assets/image (1).png>)

* 将 **items** 文件夹粘贴到 **ItemsAdder\_old**

![](<../.gitbook/assets/image (4).png>)

## 步骤 3 - 复制资源包

* 创建一个 **新的** 文件夹 在 **ItemsAdder\_old** 文件夹内命名为 **pack**
* Extract the exact **CONTENT** of your old resourcepack **.zip** file inside the new folder **pack**

![](<../.gitbook/assets/image (2).png>)

## 步骤 4 - 准备 ItemsAdder 2.0

{% hint style="info" %}
**如果你不想使用插件预置的自定义项目，想从零开始，可进行以下操作**

打开 **ItemsAdder** 文件夹中的 `config.yml` \（由 **ItemsAdder 2.0** 生成的) 并将这些属性设置为 false

```
extract-default-items: false
extract-default-resources: false
```

然后删除 `ItemsAdder\data\items_packs\...` 里面的所有文件夹 **保留** `minecraft` 文件夹.\
并删除 `ItemsAdder\data\resource_pack\assets\...` 里面的所有文件夹 **保留** `minecraft` 文件夹.

你还需要从 `ia_gui.yml` 删除预置内容的分类
{% endhint %}

## 步骤 5 - 准备转换

{% hint style="success" %}
ItemsAdder 转换时将自动跳过预置的自定义项目，因此它会创建只有自己新增项目的资源包
{% endhint %}

#### 在开始转换之前配置它

* 打开配置文件 **位于** `plugins/ItemsAdderConverter/config.yml`
* 编辑 `namespace（分组）` 自定义分组名称. 您可以填写成服务器名称或任何您想要的名称。 例如:插件预置项目的 **namespace（分组）** 为 "`itemsadder`" 这样你就可以使用 `/iaget itemsadder:ruby` 这样的命令来获得该物品 (在新版本预置的新物品中你可以发现作者创建了许多的分组，如mcicons/mcemoji等等，这算是一个分组来区别他们的功能(｡･ω･｡)单纯就是方便)

## 步骤 6 - 转换

开始转换:

* 开启服务器
* 等待完成所有加载项
* 使用命令 `/itemsadderconverter:iaconvert`
* **等待完成**
* 检查是否有报错
* **关闭** 服务器在**完成转换后**。

## 安装 ItemsAdder v2

{% hint style="danger" %}
* **关闭** 服务器
* 确保已经 **删除旧的 ItemsAdder.jar**
* 如果已存在旧版itemadder文件夹 请将其 **重命名** 并放入 **ItemsAdder\_backup** 文件夹 或者 **删除** 已存在的备份
* **下载** ItemsAdder 2.0 并放入插件目录
* **开启** 服务器
* 等待 ItemsAdder 2.0 完成其文件的创建
* 如果出现任何错误，请阅读本篇文章并检查是否有步骤出错 (例如:缺少前置，错误的版本....) 并且重复正确的步骤.
* (忽略关于资源包 URL 的错误，过后咱们会配置它( • ̀ω•́ )✧)
* 打开刚刚生成的 **ItemsAdder\_converted** 文件夹
* 将文件夹 `items_packs` 和 `resource_pack` 复制到新的 `ItemsAdder` 文件夹中 (提示文件已存在的话覆盖即可)
* **重启** 服务器
{% endhint %}

## 最后一步

* 删除 `ItemsAdderConverter`, `ItemsAdder_converted`, `ItemsAdder_old` 文件夹.
* 删除 `ItemsAdderConverter.jar`

## 资源包配置

请参阅此教程快速配置资源包:

{% content-ref url="../plugin-usage/resourcepack-hosting/resourcepack-self-hosting.md" %}
[resourcepack-self-hosting.md](../plugin-usage/resourcepack-hosting/resourcepack-self-hosting.md)
{% endcontent-ref %}

\*\*\*\*
