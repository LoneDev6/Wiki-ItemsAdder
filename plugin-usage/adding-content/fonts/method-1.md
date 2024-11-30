# TTF 字体

该方法允许你添加 .ttf 字体文件来自定义字体

## 示例自定义字体

![](<../../../.gitbook/assets/image_(1).png>)

To this you have to:

* [此处](http://matteodev.it/spigot/itemsadder/res/v2/font.zip)下载日文字体
* 将内容放至 `plugins\ItemsAdder\contents\japanese_font\resourcepack\assets\minecraft\font`
* 打开 config.yml 并设置 `custom-font enabled: true`
* 当然如果你正在使用[ dropbox 托管](../../resourcepack-hosting/resourcepack-on-dropbox.md)你需要在服务器重启后重新上传 `generated.zip`

{% hint style="warning" %}
使用自定义 TTF 字体可能会引发 Minecraft 的 bug，从而导致游戏崩溃。

这只会在因特尔集显与一些旧版本游戏中发生，我无法修复这个 bug。[阅读更多](https://bugs.mojang.com/browse/MC-180529?jql=text%20\~%20%22ttf%20crash%22).
{% endhint %}
