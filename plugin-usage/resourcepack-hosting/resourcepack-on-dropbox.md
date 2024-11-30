# DropBox

## 文字教程

* 打开 [DropBox](https://dropbox.com/)，注册/登录
* 使用命令 `/iazip`（**这很重要**，因为 `/iazip` 会重新加载配置并更新 **generated.zip** 文件）
* 打开文件夹：`plugins/ItemsAdder/output/`
* **拖放**文件 **generated.zip** 到 **DropBox**
* 点击 **Share**

![](../../.gitbook/assets/image\_\(20\).png)

* 点击 **Create**

![](../../.gitbook/assets/image\_\(21\).png)

* 点击 **Copy link**
* 例如，如果你的链接是 [https://www.dropbox.com/blablabla?dl=0](https://www.dropbox.com/blablabla?dl=0)
* 打开 **ItemsAdder** 的 `config.yml`
* 设置如下（**我使用了示例 URL，请使用你自己的**）

```yaml
resource-pack:
  apply-on-join: true
  kick-player-on-decline: false
  delay-ticks: 1
  self-host:
    enabled: false
  external-host:
    enabled: true
    url: 'https://www.dropbox.com/blablabla?dl=0'
```

* **这真的很重要**：**使用命令** `/iareload` **重新加载** **插件**，在你**更改** `config.yml` 中的内容后（在这种情况下重新加载资源包下载链接）
* **在游戏中使用命令** `/iatexture` **刷新当前游戏纹理**，或使用 `/iatexture all` **刷新所有玩家的纹理**

{% hint style="danger" %}
请在每次编辑**纹理**、3D **模型**、**声音**后使用 `/iazip`，然后重新上传资源包到 **Dropbox** 并使用 **/iareload**，否则你将看不到任何变化。
{% endhint %}

{% hint style="warning" %}
每次上传新版本的资源包时**更改文件名**以**强制游戏重新下载**新版本。\
如果你使用相同的 URL 重新上传相同的 zip 文件，它不会对每个玩家进行更新。
{% endhint %}

## 但是这太慢了！我必须多次重新上传到 DropBox！

是的，所以你应该使用自托管功能而不是 **DropBox**。但是一些托管（便宜的）不提供端口开放，所以你必须使用 **DropBox**。

{% content-ref url="resourcepack-self-hosting.md" %}
[执行托管资源包](resourcepack-self-hosting.md)
{% endcontent-ref %}

## 如果需要，请继续安装

{% content-ref url="../../first-install.md" %}
[首次安装](../../first-install.md)
{% endcontent-ref %}
