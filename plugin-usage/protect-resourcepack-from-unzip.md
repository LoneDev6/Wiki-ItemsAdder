---
icon: lock-keyhole
description: 如何保护你的资源包不被盗取
---

# 保护资源包不被解压

{% hint style="warning" %}
## 免责声明

没有100%有效的方法来保护资源包，因为游戏必须能够正确解压它以显示纹理。

此功能是为了避免小孩和恶意用户盗取你的纹理。
一些有经验的用户可能会找到绕过这些保护的方法。

ItemsAdder 尽最大努力防止这种情况发生，但请记住这种可能性。

每个插件都有相同的限制。这不是 ItemsAdder 的限制。
{% endhint %}

{% hint style="info" %}
使用ItemsAdder，你可以保护你的资源包不被解压和盗取。
你只需在config.yml中设置此选项并再次使用/iazip。
如果你使用Dropbox，不要忘记重新上传资源包并更新config.yml。

{% code title="config.yml" %}
```yaml
  zip:
    protect-file-from-unzip:
      protection_1: true
      protection_2: true
```
{% endcode %}
{% endhint %}

## protection\_1

使用基础方法保护资源包。

## protection\_2

另一层保护，以阻止部分其他解压资源包的方法。

## 展示

当用户试图盗取你的资源包时，他们看到的其实是损坏的文件与文件夹。

{% embed url="https://youtu.be/MhtEhoOuWV8" %}
