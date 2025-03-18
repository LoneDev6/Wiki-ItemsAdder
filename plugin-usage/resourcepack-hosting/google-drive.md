# Google Drive

{% hint style="warning" %}
由于 Minecraft 的一个 bug，在 1.17 之前的版本中，这种方法在某些 PC 上存在一些问题，详情请阅读：[MC-143768](https://bugs.mojang.com/browse/MC-143768)

这种方法在 Minecraft 1.17.1 及更高版本中 100% 有效。
{% endhint %}

### 第一步

右键点击你的资源包 zip 文件，然后点击“获取链接”

![](<../../.gitbook/assets/image_(153) (1).png>)

### 第二步

重要：将权限设置为“拥有链接的任何人”

![](../../.gitbook/assets/image_\(145\).png)

点击“复制链接”

![](../../.gitbook/assets/image_\(149\).png)

### 第三步

访问这个网站：[http://a.devs.beer/gdrive-direct](http://a.devs.beer/gdrive-direct)

粘贴链接并点击“获取直接链接”

<img src="../../.gitbook/assets/image_(144).png" alt="" data-size="original">

### 第四步

网站会自动将生成的链接添加到你的剪贴板中。

![](../../.gitbook/assets/image_\(147\).png)

你现在可以将链接粘贴到 **ItemsAdder** 配置文件 `config.yml` 中，然后使用 `/iareload` 命令。

{% code title="config.yml" %}
```yaml
external-host:
  enabled: true
  url: 'http://drive.google.com/uc?export=view&id=10g3whim95Hab40KZNjUkwY9FUuqKMGh5'
```
{% endcode %}

### 完成！

你现在可以看到资源包已被游戏正确加载。

## 常见问题

### 长时间停留在“正在请求... 100%”

### ![](../../.gitbook/assets/image_\(141\).png)

这是正常现象。因为 Google Drive 在授权下载资源包之前会进行一些操作。

这种情况只会在玩家第一次下载资源包时发生，通常需要 5 到 10 秒。

### 资源包完全无法加载

由于 Minecraft 的一个 bug，在 1.17 之前的版本中，这种方法在某些 PC 上存在一些问题，详情请阅读：[MC-143768](https://bugs.mojang.com/browse/MC-143768)

这种方法在 Minecraft 1.17.1 及更高版本中 100% 有效。

## 如果需要，请继续安装

{% content-ref url="../../first-install.md" %}
[首次安装](../../first-install.md)
{% endcontent-ref %}
