---
描述: 如何保护自己的资源包
---

# 🚨 防止资源包被暴力解压

{% hint style="info" %}
通过ItemsAdder的一系列措施.它可以保护你的资源包不被解压和盗取
你只需在config.yml中打开这个选项,并再次使用/iazip指令.
如果你使用的是Dropbox的话,别忘了重新上传材质包并更新config.yml的内容

设置如下:

{% code title="config.yml" %}
```yaml
  zip:
    protect-file-from-unzip:
      enabled: true
      extreme: true
```
{% endcode %}
{% endhint %}

### enabled

`enabled` 是否开启资源包保护

### extreme

`extreme` 为你的资源包添加额外的保护，来阻止一些解压资源包的方法

## 保护效果

开启了资源包保护，在其他人在窃取你的资源包时，解压会得到已损坏的文件夹以及数据文件

{% embed url="https://youtu.be/MhtEhoOuWV8" %}

{% hint style="warning" %}
因为游戏需要能够正确读取资源文件才能正确显示材质，所以该方案无法100%阻止盗窃

该功能只能防止一些愣头青盗取您的资源包 一些用户仍可以通过某些手段来获取你资源包的内容

ItemsAdder 已尽最大的可能保护您的资源包.
{% endhint %}

