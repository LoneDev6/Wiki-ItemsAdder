# 📥 Self hosting（主机自托管）

## 视频教程

{% embed url="https://www.youtube.com/watch?v=XoTwF4_HztU" %}

## 关于 主机自托管 的信息

使用 ItemsAdder，可以直接在服务器上托管资源包！.\
不需要在额外的购买主机来进行资源包托管,并且在每次更改资源包后不需要上传至云端.

{% hint style="warning" %}
**使用该托管方式需要 VPS 服务商有提供额外的端口给你！**\
如果无法获取额外的端口，你只能选择另外的托管方式
{% endhint %}

### 主机自托管与其他托管方式有何区别

区别在于，使用 主机自托管 你能够直接从服务器下载资源包.
<br>在一些有关于资源包的小改动，你不需要向其他托管方式一样需要频繁上传至云端并且更新配置.

{% hint style="info" %}

`self-host` 能够帮助你在编辑资源包时事半功倍，当编辑完想要查看效果时你只需要使用指令 `/iazip` 就能立即更新资源包并实时查看编辑的最新效果.
{% endhint %}

{% content-ref url="../tips-for-fastest-usage.md" %}
[tips-for-fastest-usage.md](../tips-for-fastest-usage.md)
{% endcontent-ref %}

## 如何配置主机自托管？

* 查看 **托管服务面板** 是否能够获得额外的端口. 如果不能获得额外的端口，请咨询托管服务支持以提供额外的端口.

例如:使用 **Pterodactyl** 进行操作：

![](<../../.gitbook/assets/immagine (104).png>)

![](<../../.gitbook/assets/immagine (101).png>)

* 获得 **新端口** 后，打开 `config.yml` 并进行如下设置：

```yaml
  self-host:
    enabled: true
    server-ip: '127.0.0.1'
    pack-port: 8163
```

* 将 `127.0.0.1` 替换为你的 **服务器IP**
* 将 `8163` 替换为新的端口

例如：我的 IP 为 `123.456.789.0` 开启的附加端口为 `8163`，我会进行如下设置：
```yaml
  self-host:
    enabled: true
    server-ip: '123.456.789.0'
    pack-port: 8163
```

{% hint style="warning" %}
**pack-port** 与服务器端口（连接服务器的端口）不为同一端口
{% endhint %}

{% hint style="info" %}
`127.0.0.1` 代表 "**本地主机**".\
**如果你正在本地服务器上测试插件** 可以保留 **默认配置** ，插件会自动应用本地中的资源包文件.
{% endhint %}

{% hint style="danger" %}
当你编辑了任何 **材质**，**模型**，**音效**... 别忘记使用 `/iazip` 来生成最新的资源包，否则将不会显示最新效果
{% endhint %}

### 最后一步

配置好 `config.yml` 文件后，使用指令 `/iazip` 来生成最新资源包 并开始托管.
