# 自行托管

## 视频教程

{% embed url="https://www.youtube.com/watch?v=XoTwF4_HztU" %}

## 关于自行托管的信息

使用 ItemsAdder，您可以直接在服务器上托管资源包！\
无需支付网站托管费用，也无需每次更改时上传资源包！

{% hint style="warning" %}
**您的托管服务必须允许您为服务器获取额外的端口。**\
如果您的托管服务不提供额外端口，您必须使用[替代托管方法](./)
{% endhint %}

### 自行托管与其他方法有什么区别？

区别在于，自行托管可以直接从服务器下载资源包，而无需每次进行小改动时都上传到网站。

{% hint style="info" %}
`self-host` 在您在 PC 上的测试服务器上配置资源包时非常有用。因为您只需使用命令 `/iazip`，就能几乎立即在游戏中看到更改。
{% endhint %}

{% content-ref url="../fast-resourcepack-tips.md" %}
[快捷资源包提示](../fast-resourcepack-tips.md)
{% endcontent-ref %}

## 如何配置自行托管？

* 在您的**托管服务面板**中检查是否可以获取额外的端口，如果不能，请联系托管服务支持以获取一个。

例如在 **Pterodactyl** 上：

![](../../.gitbook/assets/image_\(104\).png)

![](../../.gitbook/assets/image_\(101\).png)

* 获得**新端口**后，您可以打开 `config.yml` 并进行如下设置：

```yaml
  self-host:
    enabled: true
    server-ip: '127.0.0.1'
    pack-port: 8163
```

* 您需要将 `127.0.0.1` 替换为**您的服务器 IP**
* 并将 `8163` 替换为您获得的新端口。

例如，如果我的 IP 是 `123.456.789.0`，而我的额外端口是 `8163`，我会将其设置如下：

```yaml
  self-host:
    enabled: true
    server-ip: '123.456.789.0'
    pack-port: 8163
```

{% hint style="warning" %}
**pack-port** 与您的服务器端口（用户用来连接的端口）不同。
{% endhint %}

{% hint style="info" %}
`127.0.0.1` 意味着“**这台电脑**”。\
**所以如果您在 PC 上测试插件**，可以**保留默认配置**，这样插件会直接在您的 PC 上查找资源包 zip。
{% endhint %}

{% hint style="danger" %}
每次编辑**纹理**、3D **模型**、**声音**时，请不要忘记使用 `/iazip`，否则您将看不到任何更改。
{% endhint %}

### 最后一步

配置 `config.yml` 文件后，您只需运行 `/iazip` 命令以刷新 zip 文件并开始托管。

### 如果需要，继续安装

{% content-ref url="../../first-install.md" %}
[首次安装](../../first-install.md)
{% endcontent-ref %}

## Cloudflare 配置（可选，非强制）

{% hint style="info" %}
本指南不会保护您的服务器 IP，因为您已经通过 SRV 规则公开了它，并且 Cloudflare 免费版不允许保护非标准端口的流量。
{% endhint %}

{% hint style="info" %}
由于 Cloudflare 会自动缓存请求，本指南可能会减少您的流量，因此应用此方法后，资源包请求可能会变得不那么繁重。
{% endhint %}

### 创建一个新的 `DNS 记录`

<figure><img src="../../.gitbook/assets/image (2) (1).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (8).png" alt=""><figcaption></figcaption></figure>

* 类型：`A`
* 名称：`pack`（例如）
* IPv4 地址：您的服务器 IP，资源包托管的地方（ItemsAdder 正在运行）
* 代理状态：`Proxied`
* 点击 **保存**

<figure><img src="../../.gitbook/assets/image (4).png" alt=""><figcaption></figcaption></figure>

### 创建一个新的 `Origin 规则`

<figure><img src="../../.gitbook/assets/image (9).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (1) (1) (1).png" alt=""><figcaption></figcaption></figure>

选择“更改端口”和“创建规则”。

<figure><img src="../../.gitbook/assets/image (5).png" alt=""><figcaption></figcaption></figure>

选择“自定义过滤表达式”，并根据您的设置完成截图中的内容。

<figure><img src="../../.gitbook/assets/image (10).png" alt=""><figcaption></figcaption></figure>

### 配置 ItemsAdder

* 将 `server-ip` 设置为您的新包地址
* 将 `pack-port` 设置为您的资源包端口
* 将 `append-port` 设置为 false
* 尝试访问

{% code title="config.yml" %}
```yml
self-host:
  enabled: true
  server-ip: 'https://pack.devs.beer'
  pack-port: 25650
  append-port: false
```
{% endcode %}
