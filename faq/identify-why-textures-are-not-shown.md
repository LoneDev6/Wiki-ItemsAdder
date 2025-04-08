---
icon: spinner-scale
---

# 资源包未正确加载

{% hint style="danger" %}
**在寻求支持之前，请仔细阅读此页面。**

大多数情况下，通过阅读此页面可以轻松解决问题。
{% endhint %}

## 何时阅读此页面

* 资源包根本没有加载
* 玩家加入时全屏显示错误
* 显示黑色和紫色纹理
* 您的模型未正确加载
* 资源包包加载失败
* 自定义声音不播放
* 无限资源包加载故障

{% hint style="warning" %}
**自动外部托管**

自v3.6.0起，自动外部托管不再可用。\
您需要更改托管方法，[更多信息请点击这里](broken-reference)。
{% endhint %}

## 如何读取服务器日志

* 运行命令 `/iazip`
* 等待完成
* 阅读您的服务器控制台或使用任何文本编辑器（例如 [VSCode](https://code.visualstudio.com/)）打开文件 `logs/latest.log`
* 检查是否抛出任何错误或警告，并仔细阅读它们，它们通常包含有用的信息

## 如何读取客户端日志（不是服务器）

{% hint style="warning" %}
当出现问题时，请始终使用原版客户端。\
游戏提供的日志在必要时通常会被支持人员要求提供。\
非膨胀日志更有利于支持您，并轻松找到解决方案。\\
{% endhint %}

### 任何启动器

加入服务器并让包加载。\
打开您的Minecraft游戏日志文件，**不是服务器**日志。\
它通常位于这里：`%appdata%\.minecraft\logs\latest.log`\
您可以清楚地看到哪些文件加载失败以及原因，大多数情况下错误是清晰的。

### 原版启动器

#### 启用输出日志

![](../.gitbook/assets/image_\(135\).png)

#### 加入服务器并阅读日志

![](<../.gitbook/assets/json_errors (1) (1) (1) (1) (4).png>)

#### 找出哪个文件损坏

您可以清楚地看到哪些文件加载失败以及原因，大多数情况下错误是清晰的。\
在这个例子中，我有两个损坏的文件 `gem_vending_machine` 和 `whitebathroom_sink`。\
错误告诉我 JSON 文件损坏了，它们可能包含错误字符或已损坏。

## "_资源包未加载，我收到错误_" <a href="#resourcepack-not-loading-i-get-an-error-in-chat" id="resourcepack-not-loading-i-get-an-error-in-chat"></a>

* 如果您有 **SkinsRestorer**，请[阅读这里](../compatibility-with-other-plugins/compatible/skinsrestorer.md)。
* 检查是否有其他插件使用**自定义资源包**。\
  **如果**您有类似的插件，请**禁用**其**资源包**功能，否则 **ItemsAdder** 将无法正确应用包。如果您想应用两个包，请[阅读这里](../plugin-usage/merge-resourcepacks.md)。
* 确保在 `server.properties` 文件中没有设置任何资源包。
* **Minecraft** 限制服务器资源包**大小**为 **1.14** 版本 **50MB**，**1.15+** 版本 **100MB** 和 **1.18+** 版本 **250MB**。\
  在创建zip文件之前，请确保**压缩**您的**纹理**和**音乐**文件。
* 确保您的 `url` 是一个**直接**下载 zip 文件的链接。\
  如果您在浏览器（Firefox/Chrome）中粘贴链接，必须立即看到下载开始。\
  如果您看到带有按钮的下载页面，则是错误的URL。\
  阅读资源包[托管教程](../plugin-usage/resourcepack-hosting/)。
* 确保遵循所有资源包托管[教程](../plugin-usage/resourcepack-hosting/)步骤。
* 如果您使用 [`self-host`](../plugin-usage/resourcepack-hosting/resourcepack-self-hosting.md)，请确保端口已打开。
* 运行 `/iainfo` 命令，并确保资源包 **URL** 可以从浏览器访问，并直接下载资源包 `.zip` 文件。
* 确保不要在物品**名称**、**命名空间**、**纹理**文件（png）和**模型**文件（json）中使用**大写字母**、**空格**或**特殊字符**。\
  例如，自定义物品的ID：`CustomSword` 是错误的，请使用 `custom_sword`。

### "_我的玩家无法加载资源包！我已经按照整个教程操作了_" <a href="#my-players-cant-see-textures-but-ive-followed-the-whole-tutorial" id="my-players-cant-see-textures-but-ive-followed-the-whole-tutorial"></a>

* 在服务器列表设置中启用资源包：[http://imgur.com/a/SG0AU](http://imgur.com/a/SG0AU)
* 确保在加入时没有打开任何背包（GUI）或书籍。\
  这可能会导致资源包提示消失，玩家将无法点击它。\
  为了解决这个问题，您可以使用免费插件 [ResourcePackBroadcast](https://www.spigotmc.org/resources/resourcepackbroadcast.88318/)。\
  这允许您在资源包被接受时立即运行命令（以及其他各种功能）。
* 将 **ItemsAdder** 的 `config.yml` 中的 `delay-ticks` 增加到 `10` 或更大。
* 离开服务器，转到 `%appdata%/.minecraft/server-resource-packs` 并删除所有内容。然后重新加入服务器。
