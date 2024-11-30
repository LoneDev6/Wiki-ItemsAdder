---
icon: gear
description: 如何安装插件
---

# 首次安装

{% hint style="danger" %}
**确保**所有插件和服务器软件都是最新的！\
**始终检查**你下载的ItemsAdder版本！

* <mark style="color:red;">**v3仅适用于1.20.4及以下版本**</mark>
* <mark style="color:red;">**v4仅适用于1.20.6及以上版本**</mark>
{% endhint %}

## 安装引导

{% @guideflow/guideflow-embed requestedUrl="https://app.guideflow.com/player/qkqgg70u1p" fullWidth="true" %}

***

## 步骤1 - 安装插件和库

* 关闭服务器
* 将[**ProtocolLib**](https://ci.dmulloy2.net/job/ProtocolLib/lastSuccessfulBuild/) JAR文件放入`plugins`文件夹
* 将[**LoneLibs**](https://www.spigotmc.org/resources/lonelibs.75974/) JAR文件放入`plugins`文件夹
* 将**ItemsAdder** JAR文件放入`plugins`文件夹
* 启动服务器
* 让ItemsAdder完成加载**所有内容**

## 步骤2 - 首次安装资源包

{% hint style="warning" %}
这一步很重要，如果不完成这一步，插件<mark style="color:red;">**将无法工作**</mark>！
{% endhint %}

在使用插件之前，你需要决定资源包的托管方式。\
点击这里选择资源包的托管方式（最佳方式：`自托管`）。

{% content-ref url="plugin-usage/resourcepack-hosting/" %}
[资源包托管](plugin-usage/resourcepack-hosting/)
{% endcontent-ref %}

***

## 步骤3 - （可选）添加官方ItemsAdder自定义内容

![](.gitbook/assets/items\_showcase\_gif.apng)

**ItemsAdder**自带大量已创建的自定义内容。\
这些内容不会自动包含在下载的插件中，因为有些人可能不希望每个物品/功能自动添加到他们的服务器中。

### 在[这里下载“默认包”](https://github.com/ItemsAdder/DefaultPack/releases/latest)（可选）

<div align="left">

<img src=".gitbook/assets/image (47).png" alt="">

</div>

* 将内容解压到`ItemAdder`文件夹中，如果提示覆盖文件，请选择覆盖
* 运行`/iazip`命令
* 如果你没有使用**自托管**，请按照你的[托管方式](plugin-usage/resourcepack-hosting/)进行操作

***

## 步骤4 - （可选）添加其他ItemsAdder自定义内容

### 在[这里下载“其他包”](https://github.com/ItemsAdder/OtherPacks/releases/latest)（可选）

<div align="left">

<img src=".gitbook/assets/image (50).png" alt="">

</div>

* 将内容解压到`ItemAdder`文件夹中，如果提示覆盖文件，请选择覆盖
* 运行`/iazip`命令
* 如果你没有使用**自托管**，请按照你的[托管方式](plugin-usage/resourcepack-hosting/)进行操作

## 步骤5 - （可选）移除默认物品

{% content-ref url="faq/removing-default-stuff/latest-itemsadder.md" %}
[latest-itemsadder.md](faq/removing-default-stuff/latest-itemsadder.md)
{% endcontent-ref %}
