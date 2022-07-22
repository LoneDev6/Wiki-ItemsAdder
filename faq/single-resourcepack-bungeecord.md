---
描述: >-
  使用 Network-wide 资源包 来避免玩家每次进服/传送至子服时 都需要重新下载资源包
---

# Bungeecord 设置全局资源包

## Network-wide 资源包

该教程可以使玩家每次传送至子服时，避免重复加载资源包

## 如何设置

假如你有三个子服: `lobby`, `survival`, `creative`.\


### 步骤 1

分别安装 Itemsadder 至三个子服中

{% hint style="warning" %}
### <mark style="color:red;">注意！</mark>

每次修改，请确保子服 `plugins/ItemsAdder/` 中 **配置文件** 的同步
只有 `config.yml` 中的 hosting 部分允许修改.

！这是非常关键的一个细节，否则会导致失效
{% endhint %}

### 步骤 2

选择你用来使玩家应用资源包的服务器（一般选择为登录服）, 例如： `lobby` 子服.\
在 `lobby` 子服中打开 ItemsAdder 的 `config.yml` 并设置 `Hosting(托管)`。

{% content-ref url="../plugin-usage/resourcepack-hosting/" %}
[resourcepack-hosting](../plugin-usage/resourcepack-hosting/)
{% endcontent-ref %}

{% hint style="info" %}
建议使用 `self-host` 当然使用其他托管方式也是可行的，操作同理
{% endhint %}

在你完成hosting（托管）的配置之后，你只需要使用 `/iainfo` 命令来获取资源包的url，接着复制该url-> 接着步骤 3 的操作

如图:

![](<../.gitbook/assets/image (60) (1).png>)

{% hint style="warning" %}

我们只需要复制 **#** 之前的部分，请勿连同 **#** 后的字符一同复制

{% endhint %}

#### 例如使用 `self-host` 来进行配置:

<details>

<summary>Self-host 配置如下</summary>

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

使用 `/iazip` 生成资源包

</details>

### 步骤 3

打开其他子服的（survival, creative）ItemsAdder `config.yml` 并编辑Hosting托管.\
将 `YOUR_PACK_COMPLETE_URL` 替换为使用 `/iainfo` 命令获取的 **URL**

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
      # 在此填写使用 /iainfo 获得的url
      url: 'YOUR_PACK_COMPLETE_URL'
```
{% endcode %}

### 步骤 4 (仅适用于bc端)

安装 Bungeecord 插件使加载速度更快

{% embed url="https://www.spigotmc.org/resources/96794" %}

{% hint style="danger" %}
### <mark style="color:red;">请勿将</mark> <mark style="color:red;"></mark><mark style="color:red;">**BungeePackFix**</mark> <mark style="color:red;"></mark><mark style="color:red;">安装至</mark> <mark style="color:red;"></mark><mark style="color:red;">子服中!</mark>

该插件为 **Bungeecord** 插件！ 请将其安装至 **Bungeecord** 的 plugins 文件夹中
{% endhint %}
