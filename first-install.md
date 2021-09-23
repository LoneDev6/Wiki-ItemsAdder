# ⚙️ 首次安装

## 视频教程

{% embed url="https://youtu.be/GKGnlF4zZVg" caption="" %}

## 步骤 1 —— 安装插件和API

为了防止服务器会出一些奇奇怪怪的BUG.推荐建立一个测试的服务端来进行测试,确保没有错误之后再把插件放到服务器去食用

{% hint style="info" %}
**You should do** this first configuration **on** your **test server** on your PC to **avoid mistakes** and too many restarts.. players don't like when server is down ;\)  
You can upload files to your real server after you finished here.
{% endhint %}

{% hint style="danger" %}
You **should** complete ALL installation steps. Not only first.
{% endhint %}

## Step 1 - installing the plugin and APIs

* 下载并安装 [**ProtocolLib**](https://www.spigotmc.org/resources/protocollib.1997/)
* 下载并安装 [**IALib**](https://www.spigotmc.org/resources/ialib.75974/)
* 下载并安装 [**LightAPI**](https://www.spigotmc.org/resources/lightapi-fork.48247/) **\(**⚠️**do not install it if you're on 1.17.1 Paper/Tuinity/Purpur**⚠️ [It doesn't work for now](https://www.spigotmc.org/threads/lightapi-fork.278321/page-10#post-4237787).**\)**
* \(optional\) install [**Lib's Disguises**](https://www.spigotmc.org/resources/libs-disguises-free.81/) if you plan to create custom mobs in the future.
* 把**ItemsAdder.jar**放到服务端的插件目录
* 打开你的服务器
* 让ItemsAdder完成**初始化**.中国的腐竹需要用科学上网来下载材质包\[当然得在放服务端机子里用科学上网,不是玩家用科学上网哦\]

First step is done. Now you must complete step 2 to configure the resourcepack \(don't worry it's not very hard\).

## Step 2 - resourcepack first installation

#### Decide the resourcepack hosting method: 

{% page-ref page="plugin-usage/resourcepack-hosting/" %}

## Optional steps

### 移除预置物品

{% hint style="info" %}
如果你想开始制作一些自定义物品,你可以先查看下面按钮的内容.

{% page-ref page="faq/removing-default-stuff.md" %}
{% endhint %}

### 避免方块错误 \(使用 Purpur 核心 的腐竹需要阅读\)

{% page-ref page="faq/blocks-minerals-issues/custom-blocks-glitch-texture/avoid-glitched-blocks.md" %}

