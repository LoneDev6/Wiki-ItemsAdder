---
cover: ../../.gitbook/assets/Google-Drive.jpg
coverY: 0
---

# 🗂 Google Drive (1.17.1+)

## 如何使用 Google Drive

{% hint style="warning" %}
该方法在 Minecraft 1.17+ 版本中完全适用.
<br>但由于 Minecraft 的bug，某些电脑使用 1.17 版本之前的客户端会出现一些问题[请在此处阅读更多信息](https://bugs.mojang.com/browse/MC-143768)
{% endhint %}

### 步骤 1

右键资源包文件，然后点击 "Get link"

![](<../../.gitbook/assets/immagine (153) (1).png>)

### 步骤 2

重要提示：将权限设置为 "Anyone with the link"

![](<../../.gitbook/assets/immagine (145).png>)

点击 "Copy link"

![](<../../.gitbook/assets/immagine (149).png>)

### 步骤 3

查看此页面: [http://a.devs.beer/gdrive-direct](http://a.devs.beer/gdrive-direct)

粘贴链接并点击 "Get direct link"

<img src="../../.gitbook/assets/immagine (144).png" alt="" data-size="original">

### 步骤 4

该网站会自动将生成的链接进行复制

![](<../../.gitbook/assets/immagine (147).png>)

现在将链接粘贴到 **ItemsAdder** 的 `config.yml` 中，并使用指令 `/iareload` 进行重载

{% code title="config.yml" %}
```yaml
external-host:
  enabled: true
  url: 'http://drive.google.com/uc?export=view&id=10g3whim95Hab40KZNjUkwY9FUuqKMGh5'
```
{% endcode %}

### 完成!

现在资源包能够在游戏中进行加载了.

## 常见问题

### 卡在 "Making Request... 100%"

### ![](<../../.gitbook/assets/immagine (146).png>)

该问题为正常状况，只在玩家第一次下载资源包时出现，通常会花费5-10秒钟的时间，这是因为在 Google Drive 在授权下载资源包之前会进行一些验证.

### 资源包无法加载

该方法在 Minecraft 1.17+ 版本中完全适用.
<br>但由于 Minecraft 的bug，某些电脑使用 1.17 版本之前的客户端会出现一些问题[请在此处阅读更多信息](https://bugs.mojang.com/browse/MC-143768)
