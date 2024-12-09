---
description: >-
  使用网络范围资源包，避免玩家每次加入时重新下载不同的资源包
---

# Bungeecord 单一资源包

{% hint style="danger" %}
## 本教程已过时，需要重写。
{% endhint %}

## 网络范围资源包

你想在你的网络中的多个 Spigot 服务器上安装 ItemsAdder 吗？\
你想避免玩家每次更换服务器时都下载资源包吗？\
请按照这个简单的教程操作。

## 如何设置

例如，你可以有 3 个服务器：`lobby`、`survival`、`creative`。\\

### 第一步

在这 3 个服务器上安装 ItemsAdder。

{% hint style="warning" %}
<mark style="color:red;">**这非常重要**</mark>

确保每次进行修改时**同步所有** 3 个服务器的 `plugins/ItemsAdder/` **配置文件夹**，它们必须相同，只有 `config.yml` 的托管部分可以更改。

这是此任务的关键，否则一切都将无法正常工作。
{% endhint %}

### 第二步

选择一个主服务器，例如 `lobby`。\
打开 `lobby` 服务器中 ItemsAdder 的 `config.yml` 并设置托管。

{% content-ref url="../../plugin-usage/resourcepack-hosting/" %}
[资源包托管](../../plugin-usage/resourcepack-hosting/)
{% endcontent-ref %}

{% hint style="info" %}
建议使用 `self-host`，这是最好的方法。
{% endhint %}

在你完成托管配置后（仔细按照链接的教程操作），你需要使用 `/iainfo` 命令并在控制台中获取 URL，复制它。

例如：

![](<../../.gitbook/assets/image (60) (1).png>)

{% hint style="warning" %}
你必须删除 `#` 后面的 URL 部分，不需要它。\
复制时不要包含 `#` 后面的部分。
{% endhint %}

#### 例如使用 `self-host`：

<details>

<summary>自行托管示例</summary>

{% code title="config.yml" %}
```yaml
resource-pack:
  hosting:
    no-host:
      enabled: false
    auto-external-host:
      enabled: false
    self-host:
      enabled: true
      server-ip: YOUR_SERVER_IP_HERE
      pack-port: 8163
    external-host:
      enabled: false
      url: ''
```
{% endcode %}

运行 `/iazip` 生成资源包。

</details>

### 第三步

打开其他服务器（survival、creative）的 ItemsAdder `config.yml` 文件并编辑托管部分。\
在 `YOUR_PACK_COMPLETE_URL` 处填写你从 `/iainfo` 命令中获得的 **URL**。

{% code title="config.yml" %}
```yaml
resource-pack:
  hosting:
    no-host:
      enabled: false
    auto-external-host:
      enabled: false
    self-host:
      enabled: false
      server-ip: 127.0.0.1
      pack-port: 8163
    external-host:
      enabled: true
      url: 'YOUR_PACK_COMPLETE_URL'
```
{% endcode %}

### 第四步（仅限 Bungeecord）

安装 Bungeecord 插件以加快加载速度！

{% embed url="https://www.spigotmc.org/resources/96794" %}

{% hint style="danger" %}
<mark style="color:red;">**不要在 Spigot 服务器上安装 BungeePackFix！**</mark>

这是一个 **Bungeecord** 插件！请安装在 **Bungeecord** 上！
{% endhint %}
