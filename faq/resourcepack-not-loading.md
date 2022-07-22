# 📷 资源包无法加载

### _资源包无法加载,控制台刷报错_ <a href="#resourcepack-not-loading-i-get-an-error-in-chat" id="resourcepack-not-loading-i-get-an-error-in-chat"></a>

* 如果你使用了 **SkinsRestorer** 插件 请阅读[该教程](../compatibility-with-other-plugins/compatible/skinsrestorer.md).
* 检查是否有其他的插件也使用了 **自定义资源包**，如有请关闭该插件的 **resourcepack**（指的是资源包的自动发送应用） 功能，并且如果你对资源包有一定的了解可以将两个插件的自定义资源进行合并（在不变动itemsadder文件的情况下）
* 确保没有在 `server.properties` 中设置任何资源包链接
* **Minecraft** 在 ***Minecraft 1.14**上将服务器资源包的 **大小** 限制至 **50MB**，***Minecraft 1.15+** 将服务器资源包的 **大小** 限制至 **100MB** 请注意资源包大小！
* **Minecraft** limits servers resourcepacks **size** to **50MB** on Minecraft **1.14** and **100MB** on **1.15+**, be sure to **compress** your **textures** and your **music** files before creating the zip file.
* 检查所有的 [托管](../plugin-usage/resourcepack-hosting/) 步骤
* 如果你使用的托管方式为 Self-host 请确保你设置的端口是开放的
* 使用 `/iainfo` 命令，来确保资源包的 **url** 能够正常下载资源包，将获得的 **url** 复制至浏览器中检查是否能够正常下载 `.zip`文件

### _我已经按照wiki完成了所有配置，但玩家仍看不见材质_ <a href="#my-players-cant-see-textures-but-ive-followed-the-whole-tutorial" id="my-players-cant-see-textures-but-ive-followed-the-whole-tutorial"></a>

请尝试以下几种修复方法：

* 尝试在服务器界面中重新添加服务器并 **编辑 -> 启用服务器资源包** 如图所示: http://imgur.com/a/SG0AU](http://imgur.com/a/SG0AU)​
* 找到你的客户端中的 **/.minecraft/server-resource-packs** 并将 **server-resource-packs** 中的所有文件删除. 接着重新进入服务器

{% hint style="danger" %}
请确保没有在物品的 **名称**, **命名空间**, **材质 (png)** 和 **模型 (json)** 中使用 **大写字母** 或 **特殊字符** 
{% endhint %}
