# 🏁 快速上手

## 本地编辑资源包再将其上传至云端将会消耗大量时间 使得工作效率变慢

如果你和上述的操作流程相同 那么我将会教你正确方法 ;) 请仔细阅读此篇目:

{% hint style="info" %}
首先我们应该 在本地架设 **测试服务器** :

* [ItemsAdder](https://www.spigotmc.org/resources/%E2%9C%85must-have%E2%9C%85-itemsadder%E2%9C%A8textures-3d-models-emojis-ores-blocks-wings-tails-hats-more.73355/)
* [LoneLib](https://www.spigotmc.org/resources/lonelibs.75974/)
* [ProtocolLib](https://www.spigotmc.org/resources/protocollib.1997/)
* [LightAPI Fork](https://www.spigotmc.org/resources/lightapi-fork.48247/)

并且在 ItemsAdder 中 设置资源包部分的配置

```yaml
resource-pack:
  hosting:
    no-host:
      enabled: false
    auto-external-host:
      enabled: false
    self-host:
      enabled: true # <----- 该处设置为 true
      server-ip: '127.0.0.1'
      pack-port: 8163
    external-host:
      enabled: false
      url: ''
```

这样子的目的是使你能够拥有一个快速的，实时的配置环境，你能够实时的添加和编辑新增的自定义物品
当你编辑完成 材质/模型 并且配置完成后，你可以使用命令 `/iazip` （本地游戏中将会自动重载生成的资源包）来更新资源包实时查看编辑的最新效果

当此次更新在本地编辑完成并且 `/iazip` 之后，便可以将其上传至云端 完成一次 小规模的更新

{% endhint %}

{% content-ref url="resourcepack-hosting/resourcepack-on-dropbox.md" %}
[resourcepack-on-dropbox.md](resourcepack-hosting/resourcepack-on-dropbox.md)
{% endcontent-ref %}

{% hint style="warning" %}
建议不要在您的正式服务器上 编辑 Itemsadder 的材质/模型.\
当插件重载时会产生延迟，服务器重启，资源包的二次下载，会使得玩家产生厌烦。.\
可以在本地的测试服务器中制作完毕再上传至云端 进行一次完整的更新。
{% endhint %}

{% hint style="danger" %}
默认预置生成的项目，建议拿来对其配置的学习以及参照，不建议直接在其基础上进行编辑。.\
否则当作者更新预置项目时，其配置都会被重新生成。
建议自行新建命名空间，来添加和编辑新的自定义物品
{% endhint %}
