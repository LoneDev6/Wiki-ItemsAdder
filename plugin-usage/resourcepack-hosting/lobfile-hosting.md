# LobFile 托管

{% hint style="warning" %}
此功能需要 **ItemsAdder 3.6.3** 或更高版本。
{% endhint %}

## 什么是 LobFile？

**ItemsAdder** 允许您自动将资源包上传到一个**免费的在线服务**，该服务在全球各地都有服务器。

非常感谢 **LobFile**[ ](https://ploudos.com/it/) 提供他们的平台来免费托管文件！

{% embed url="https://lobfile.com/" %}

{% hint style="warning" %}
### 警告

此托管方法的文件大小限制为 100MB。
{% endhint %}

## 有什么优势？

* 下载速度
* 可用性
* 安全性：您的服务器 IP 地址不会暴露
* 无高带宽使用

## 我已经使用 `self-host`，这个更好吗？

视情况而定。

如果您正在开发资源包并且需要不断运行 `/iazip`，最好使用 [self-host](resourcepack-self-hosting.md)，以避免浪费时间（阅读更多 [这里](../fast-resourcepack-tips.md)）。

当您完成资源包的开发后，可以安全地开始使用这个托管功能而不是 `self-host`，在这种情况下使用 **LobFile**。\
这将降低您的服务器流量，因为资源包不再托管在您的服务器上。\
如果您的玩家群体都来自同一个国家，您可以继续使用 `self-host`。

## 设置

#### 第一步

在 [LobFile 这里](https://lobfile.com/create-account) 创建一个账户。

#### 第二步

打开您的 [账户设置](https://lobfile.com/my-account) 并勾选 _**"Continuous uploading"**_

<figure><img src="../../.gitbook/assets/image (32).png" alt=""><figcaption></figcaption></figure>

#### 第三步

悬停在 `API Key` 文本上并复制您的密钥。

<figure><img src="../../.gitbook/assets/image (35).png" alt=""><figcaption></figcaption></figure>

#### 第四步

在 `config.yml` 中启用 `lobfile` 并禁用所有其他托管方法。

{% code title="ItemsAdder/config.yml" %}
```yaml
lobfile:
  enabled: true
```
{% endcode %}

打开 `secret.yml` 并粘贴您的 `API Key`。

{% code title="ItemsAdder/secret.yml" %}
```yaml
lobfile:
  api_key: xxxxxxxxxx
```
{% endcode %}

#### 第五步

运行 `/iazip.`

等待隐私政策消息出现。\
运行 `/acceptprivacy` 以接受政策（仅第一次会被询问）。

### 完成

**插件**将**自动上传**资源包。\
无需其他操作，享受您的**免费自动化资源包托管**。

## 我的资源包会在线提供给随机人吗？

2023-12-21:\
您的资源包不会被 Google 索引，也不会发布在资源包列表中。\
只有知道链接的人才能下载该包。

