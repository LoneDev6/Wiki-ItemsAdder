# mc-packs.net托管材质包

{% hint style="danger" %}
**请不要使用**文件名为**pack\_21521367.zip**或者**precompressed\_example\_pack.zip**作为Base!!!!
你必须使用**/iazip**指令生成的**pack.zip**文件.
你可以在这个文件夹里找到它: `plugins/ItemsAdder/data/resource_pack/pack.zip`
{% endhint %}

{% hint style="danger" %}
## 有些用户说这个网站无法访问.最后还是建议使用[Dropbox](resourcepack-on-dropbox.md).
{% endhint %}

## 文本教程

* 访问 [mc-packs.net](https://mc-packs.net/)
* 使用指令`/iazip` \(**非常重要!**因为使用`/iazip`指令会重新加载配置并会更新**pack.zip**材质文件\)
* 打开文件夹: `plugins/ItemsAdder/data/resource_pack/`.
* **上传** `pack.zip` 文件.
* 复制 "Download URL".
* 打开**ItemsAdder插件**的`config.yml`.
* 像这样设置 \(**我使用了例子中的URL,在这请使用你自己的链接**\)

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
    url: 'https://download.mc-packs.net/pack/1efaewqerwerwerwer.zip'
```

* **这一点非常重要**:你修改了 `config.yml` 后,**一定**要使用`/iareload`指令**重新加载**插件\(在这种情况下,请重新加载材质包的下载链接\)
* 你可以**使用指令** `/iatexture` 在游戏里刷新当前的材质包,或者使用 `/iatexture all` 指令,为每个玩家刷新它的材质包

{% hint style="danger" %}
**每次**修改**材质**,3D**模型**,**音效**... 时.请使用`/iazip`指令**重新生成**材质包.然后重新更换材质包在**mc-packs**之后使用**/iareload**指令重载插件.不重载的话,你将不会看到有任何变化.
{% endhint %}

## 但是这样做太慢了!我不得不在mc-packs重新上传材质包!

对的,这就是为什么你要使用自搭材质托管而不是mc-packs.但是有些\(便宜的服务商\)并不会提供端口,所以你只能使用mc-packs来托管你的材质包.

{% page-ref page="resourcepack-self-hosting.md" %}

{% hint style="info" %}
如果你需要一个便宜的VPS主机,并且有良好的配置,有端口.你可以看看这个:

[http://bit.ly/humble-dropbox](http://bit.ly/humble-dropbox)

[![\[&#x200B;IMG\]](https://proxy.spigotmc.org/79afd6d87a5bfbed0addd07d59139b29552f0627?url=https%3A%2F%2Fi.imgur.com%2FMMICa0s.jpg)](https://bit.ly/2MOtOR5)

* **顶尖的配置 @ 预算成本**
* **24/7 客服在线**
* **立即部署**
* **自定义控制面板\(翼龙面板\)**
* **sFTP 和 MySQL 访问**
* **SSD 和 NVME 存储**
{% endhint %}

