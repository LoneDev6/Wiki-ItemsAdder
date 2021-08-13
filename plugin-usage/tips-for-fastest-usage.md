# 🏁 最快的使用方法

## 修改材质包并将其上传到托管上需要花费太多的时间!

当然,如果你用错误的方式去操作 ;\) 阅读此文:

{% hint style="info" %}
在自家电脑上创建一个**测试服务器**是一个非常好的办法:

* [ItemsAdder](https://www.spigotmc.org/resources/%E2%9C%85must-have%E2%9C%85-itemsadder%E2%9C%A8textures-3d-models-emojis-ores-blocks-wings-tails-hats-more.73355/)
* [IALib](https://www.spigotmc.org/resources/ialib.75974/)
* [ProtocolLib](https://www.spigotmc.org/resources/protocollib.1997/)
* [LightAPI Fork](https://www.spigotmc.org/resources/lightapi-fork.48247/)

使用该材质包配置的ItemsAdder:

```yaml
resource-pack:
  apply-on-join: true
  kick-player-on-decline: false
  delay-ticks: 1
  self-host:
    enabled: true
    server-ip: '127.0.0.1'
    pack-port: 8163
  external-host:
    enabled: false
    url: 'http://example.dropbox.com'
```

如果这样弄的话,你将拥有一个快速和简单使用的配置环境.你可以添加项目,并在其中修改材质包.

当你修改一个物品材质/模型并编修改其配置时,你将使用指令 `/iareload` , `/iazip` 然后在你的客户端使用`/iatexture`,这样弄的话你将会看到任何变化.

所以,在你完成了添加物品和配置后,你就可以把材质包上传到你的托管服务器上,按照下面的教程上传你的 `pack.zip`
{% endhint %}

{% page-ref page="resourcepack-hosting/resourcepack-on-dropbox.md" %}

{% hint style="warning" %}
最好不要直接在您的托管服务器上修改物品或修改材质/模型.玩家会讨厌插件重新加载时的带来的卡顿,而且可能会导致服务器重新启动,然后玩家还得重新下载材质包......请记住这一点.
{% endhint %}

{% hint style="danger" %}
不修改我的自定义物品是非常好的选择,因为你将来肯定会被修改到,你只需要维护你的扩展和我的插件更新.  
所以,如果你想修改物品,最好只修改你自己的物品
{% endhint %}

