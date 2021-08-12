# Resourcepack on DropBox

{% hint style="danger" %}
**请不要使用**文件名为**pack\_21521367.zip**或者**precompressed\_example\_pack.zip**作为Base!!!!  
你需要使用**/iazip**指令生成的**pack.zip**文件.
你可以在这个文件夹里找到它: `plugins/ItemsAdder/data/resource_pack/pack.zip`
{% endhint %}

## 视频教程

{% embed url="https://www.youtube.com/embed/GKGnlF4zZVg?start=78&end=189&rel=0&autoplay=0&showinfo=0" %}

{% hint style="info" %}
国外最著名的文件托管网站之一**DropBox**.它可以免费分享你的文件,而且很容易又快速.[比某度云快多了]  
你不能使用GoogleDrive和其他文件托管网站,因为它们都不提供**直接下载**的链接.但是!DropBox 可以.
{% endhint %}

## 文本教程

* 打开 [DropBox](https://dropbox.com/), 注册/登录
* 使用指令`/iazip` \(**非常重要!**因为使用`/iazip`指令会重新加载配置并会更新**pack.zip**材质文件\)
* 打开文件夹: `plugins/ItemsAdder/data/resource_pack/`
* **拖****pack.zip****放**在**DropBox**
* 点击**Share**

![](../../.gitbook/assets/immagine%20%2825%29.png)

* 点击**Create**

![](../../.gitbook/assets/immagine%20%2824%29.png)

* 点击**Copy link**
* 你获得的链接会是 [https://www.dropbox.com/blablabla?dl=0](https://www.dropbox.com/blablabla?dl=0) 
* 打开**ItemsAdder**的 `config.yml` 
* 像这样设置 \(**我使用了例子中的URL,请使用你自己的链接**\)

```yaml
resource-pack:
  apply-on-join: true
  kick-player-on-decline: false
  delay-ticks: 1
  self-host:
    enabled: false
    server-ip: '127.0.0.1'
    pack-port: 8163
  external-host:
    enabled: true
    url: 'https://www.dropbox.com/blablabla?raw=1'
```

* **这一点非常重要**:你修改了 `config.yml` 后,**一定**要使用`/iareload`指令**重新加载**插件\(在这种情况下,请重新加载材质包的下载链接\)
* 你可以**使用指令** `/iatexture` 在游戏里刷新当前的材质包,或者使用 `/iatexture all` 指令,为每个玩家刷新它的材质包

{% hint style="danger" %}
**每次**编辑**材质**,3D**模型**,**音效**... 时.请使用`/iazip`指令**重新生成**材质包.然后重新更换材质包在**Dropbox**之后使用**/iareload**指令重载插件.不重载的话,你将不会看到有任何变化.
{% endhint %}

{% hint style="warning" %}
请在你每次**上传**新版本的材质包时**改变配置文件里的下载链接**.这样玩家就能下载并使用新版本的材质包.
如果你**上传相同的材质包**,并不修改**原来的链接**.就不会更新给每个玩家  
{% endhint %}



## 但是这样做太慢了!我不得不在DropBox重新上传材质包!

对的,这就是为什么你要使用自搭材质托管而不是DropBox. 但是有些\(便宜的服务商\)并不会提供端口,所以你只有使用DropBox来托管材质包.

{% page-ref page="resourcepack-self-hosting.md" %}

{% hint style="info" %}
如果你需要一个便宜的主机,有良好的配置,并端口开放.你可以看看这个:

[http://bit.ly/humble-dropbox](http://bit.ly/humble-dropbox)

 [![\[&#x200B;IMG\]](https://proxy.spigotmc.org/79afd6d87a5bfbed0addd07d59139b29552f0627?url=https%3A%2F%2Fi.imgur.com%2FMMICa0s.jpg)](https://bit.ly/2MOtOR5)  


* **顶尖的配置 @ 预算成本**
* **24/7 客服在线**
* **立即部署**
* **自定义控制面板\(翼龙面板\)**
* **sFTP 和 MySQL 访问**
* **SSD 和 NVME 存储**
{% endhint %}

