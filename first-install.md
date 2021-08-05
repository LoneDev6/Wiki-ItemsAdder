# ⚙️首次安装

## 视频教程

{% embed url="https://youtu.be/GKGnlF4zZVg" caption="" %}

## 步骤 1 —— 安装插件和API

为了防止服务器会出一些奇奇怪怪的BUG.推荐建立一个测试的服务端来进行测试,确保没有错误之后再把插件放到服务器去食用

{% hint style="danger" %}
如果你使用的是旧版本的ItemsAdder\[v1.0\]那么请先将目录**plugins/ItemsAdder**移动到**ItemsAdder\_backup**
{% endhint %}

* 下载并安装 [**ProtocolLib**](https://www.spigotmc.org/resources/protocollib.1997/)
* 下载并安装 [**IALib**](https://www.spigotmc.org/resources/ialib.75974/)
* 下载并安装 [**LightAPI**](https://www.spigotmc.org/resources/lightapi-fork.48247/)
* 把**ItemsAdder.jar**放到服务端的插件目录
* 打开你的服务器
* 让ItemsAdder完成**初始化**.中国的腐竹需要用科学上网来下载材质包\[当然得在放服务端机子里用科学上网,不是玩家用科学上网哦\]
* 关闭服务器

* 插件加载完成后进入服务器然后输入命令 `/iazip`
* 打开Itemadder的配置文件 **\[plugins\ItemsAdder\config.yml\]**
* 按照下面的按钮来进行下一步的配置

{% page-ref page="plugin-usage/resourcepack-hosting/resourcepack-self-hosting.md" %}

* 如果您想在DropBox托管资源包,那么可以按照这里的教程进行操作

{% page-ref page="plugin-usage/resourcepack-hosting/resourcepack-on-dropbox.md" %}

{% hint style="warning" %}
如果你想更新`pack.zip`的材质,那么请输入指令 `/iazip`
{% endhint %}

### 可选步骤

### 移除预置物品

{% hint style="info" %}
如果你想开始制作一些自定义物品,你可以先查看下面按钮的内容.

{% page-ref page="faq/removing-default-stuff.md" %}
{% endhint %}

### 避免方块错误 \(使用 Purpur 核心 的腐竹需要阅读\)

{% page-ref page="faq/blocks-minerals-issues/custom-blocks-glitch-texture/avoid-glitched-blocks.md" %}



