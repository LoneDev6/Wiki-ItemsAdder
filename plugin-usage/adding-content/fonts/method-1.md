# TTF 字体

该方法使你可以使用 .TTF 字体

## 自定义字体的栗子

![](<../../../.gitbook/assets/immagine (1).png>)

根据如下步骤进行自定义字体的设置：

* 下载你想要应用的字体 [示例为日语字体](http://matteodev.it/spigot/itemsadder/res/v2/font.zip)
* 将内容复制到 `plugins\ItemsAdder\data\resource_pack\assets\minecraft\font`
* 打开 config.yml 并设置 `custom-font enabled: true`,并将 `font` 设置为字体的文件名
* 使用 `/iazip` 生成资源包，并将其上传至云端托管.


{% hint style="warning" %}
Minecraft 有一个漏洞，会在使用自定义 TTF 字体时导致游戏崩溃
该问题只会发生在某些使用集显的电脑上以及旧版本客户端中.无法修复 [详情阅读](https://bugs.mojang.com/browse/MC-180529?jql=text%20\~%20%22ttf%20crash%22).
{% endhint %}
