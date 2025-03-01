---
icon: bolt-lightning
---

# 资源包提示

## 工作流

在你的电脑上创建一个**测试服务器**并在那进行资源包的更改是一个好习惯。这允许你在不需要在每次添加内容并上传文件的情况下，测试资源包并查看其在游戏中的效果。

你可以通过安装 ItemsAdder 和依赖项（LoneLibs 和 ProtocolLib）在本地机器上设置一个测试服务器。请务必阅读[安装教程](../first-install.md)。

你可以将 IP 保持为 `127.0.0.1`，因为这是本地电脑的 IP，端口也无所谓，只要不被其他进程占用即可。

<pre class="language-yaml"><code class="lang-yaml"><strong>resource-pack:
</strong>  hosting:
    self-host:
      enabled: true
      server-ip: '127.0.0.1'
      pack-port: 8163
</code></pre>

这样做你将拥有一个快速且易于使用的配置环境。\
你可以随时添加物品并编辑资源包。

{% hint style="warning" %}
玩家讨厌插件重载时的卡顿、服务器重启、在游戏中重新下载资源包.\
最好在本地测试服务器上进行编辑和测试。

这是你服务器的最佳设置，因为它是最快的，并且在上传资源包时不需要任何手动操作。
{% endhint %}

## 维护自定义内容

{% hint style="danger" %}
你不应该编辑我的自定义示例物品，因为将来我可能会更新它们，而你会因为同时维护你的自定义物品和我更新的物品而发疯。

建议创建你自己的物品。
{% endhint %}

## 资源风格

不要忘记这是一个像素游戏，而不是超高清 AAA 游戏。\
你不需要高清纹理或非常详细的充满立方体的 3D 模型。

{% embed url="https://www.blockbench.net/wiki/guides/minecraft-style-guide/" %}

## 声音大小

不要忘记压缩你的声音文件。不要在你的资源包中放置大的音乐和音效文件。这会使资源包下载变慢。考虑使用一些工具压缩你的资源包。

{% embed url="https://www.google.com/search?q=ogg+compress+online" %}
