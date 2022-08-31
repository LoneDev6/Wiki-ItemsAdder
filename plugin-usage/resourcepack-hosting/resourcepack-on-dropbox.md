---
cover: >-
  ../../.gitbook/assets/Dropbox_(service)-Blue&White-Dark-Background-Logo.wine.svg
coverY: 0
---

# 📦 DropBox

## 视频教程

{% embed url="https://www.youtube.com/embed/GKGnlF4zZVg?start=78&end=189&rel=0&autoplay=0&showinfo=0" %}

## 文字教程

* 打开 [DropBox](https://dropbox.com/), 进行注册/登录
* 使用指令 `/iazip` 生成新的资源包
* 打开文件夹: `plugins/ItemsAdder/data/resource_pack/`
* 将 **pack.zip** 拖入 **DropBox** 
* 点击 **Share**

![](<../../.gitbook/assets/immagine (20).png>)

* 点击 **Create**

![](<../../.gitbook/assets/immagine (21).png>)

* 点击 **Copy link**
* 例如，资源包链接为 [https://www.dropbox.com/blablabla?dl=0](https://www.dropbox.com/blablabla?dl=0)&#x20;
* 接着打开 **ItemsAdder** 的 `config.yml`
* 并进行如下设置 (**url为示例，请填写从Dropbox复制的链接**)

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
    url: 'https://www.dropbox.com/blablabla?dl=0'
```

* 当你更改了 `config.yml` 中资源包的下载链接后，你需要使用 `/iareload` 来重载配置文件
* 并使用指令 `/iatexture` 来应用最新的资源包，或使用指令 `/iatexture all` 将最新的资源包应用至每个玩家.

{% hint style="danger" %}
当你编辑了任何 **材质**，**模型**，**音效**... 别忘记使用 `/iazip` 来生成最新的资源包， 并将其 **重新上传** 至 **Dropbox** 之后使用 **/iareload** 进行重载配置.
{% endhint %}

{% hint style="warning" %}

在 **每次** 上传 **新的资源包**时,请更改资源包的文件名.使服务器能够强制玩家下载最新版本的资源包
<br>如果你上传的新资源包名字与之前相同，也未在配置中更改新的资源包链接，玩家将无法更新至最新的资源包.
{% endhint %}

## 这太繁琐了，每次更新我都需要重新上传资源包至 Dropbox 

使用该托管方法正是如此，所以才建议服主们使用 主机自托管 .
<br>有些 VPS 并不额外提供端口以至于只能使用第三方平台来进行托管.
<br>(国内租用的vps基本上都有一定数量的端口提供，所以建议使用主机自托管！！)

{% content-ref url="resourcepack-self-hosting.md" %}
[resourcepack-self-hosting.md](resourcepack-self-hosting.md)
{% endcontent-ref %}
