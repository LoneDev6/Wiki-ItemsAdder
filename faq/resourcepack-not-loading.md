# 📷 资源包无法加载

## 资源包无法加载,我还在聊天栏里发现了报错信息 <a id="resourcepack-not-loading-i-get-an-error-in-chat"></a>

* 如果您有 **SkinsRestorer** [请阅读此处](../compatibility-with-other-plugins/compatible/skinsrestorer.md).
* 请检查您是否有其他的插件加载自定义材质包,如果有请禁用材质包功能,否则ItemsAdder将无法正常应用资源包 \(如果你有了解如何合并材质包,您可以让它们相互兼容,确保不要替换ItemsAdder文件就可以了.ItemsAdder的材质包包文件夹是 `resouce_pack`\)
* 确保你没有在 `server.properties` 中设置任何资源包链接
* **MineCraft**限制了材质包的加载大小.在1.14版本的限制是**50MB**.在1.15+版本的限制则是**100MB**.请确保在自动生成材质包之前先解压一下你的音效和材质文件
* 请确保`你的材质包链接`是一个 **直接** 下载zip文件的链接. 在浏览器上粘贴你的材质包链接 \(Firefox/Chrome\) 然后一定会立即下载,如果你看到有下载按钮的下载页面,那就出现问题了. Resourcepack [托管教程](../plugin-usage/resourcepack-hosting/).
* 请务必按照所有[教程](../plugin-usage/resourcepack-hosting/)进行操作
* 如果使用self-host,那么请确保端口已经打开

## _我的玩家还是看不到材质! 但是我已经按照教程做了_ <a id="my-players-cant-see-textures-but-ive-followed-the-whole-tutorial"></a>

有三种方法可以解决这个问题:

* 给你的玩家查看这个链接,也许就解决了 [http://imgur.com/a/SG0AU](http://imgur.com/a/SG0AU)​
* 如果你还是有问题 从你的**服务器**中**删除**插件,再次添加,然后 **启用材质包**.
* 如果你还是没有解决的话离开服务器, 找到 **%appdata%/.minecraft/server-resource-packs** 并且 **删除里面任何东西**. 然后再加入服务器.

{% hint style="danger" %}
确保你没使用 **大写英文** 或者 **特殊字符** 在物品的 **物品名称**, **分组**, **材质** \(png\) 和 **模型** \(json\)
{% endhint %}

