# 📷Resourcepack not loading

## 资源包无法加载,我还在聊天栏里发现了报错信息 <a id="resourcepack-not-loading-i-get-an-error-in-chat"></a>

* 请检查您是否有其他的插件加载自定义资源包,如果有请禁用资源包功能,否则ItemsAdder将无法正常应用资源包 \(如果你对如何合并资源包有了解,您可以让它们相互兼容,确保不要替换ItemsAdder文件就可以了.ItemsAdder的资源包文件夹是 `resouce_pack`\)
* 确保你没有在 `server.properties` 中设置任何资源包链接
* Minecraft 限制服务器资源包大小为**50MB**,请把材质包压缩在进行发送
* 请确保`你的材质包链接`是一个 **直接** 下载zip文件的链接. 在浏览器上粘贴你的材质包链接 \(Firefox/Chrome\) 然后一定会立即下载,如果你看到有下载按钮的下载页面,那就出现问题了.如果你上传到Dropbox,生成下载/分享链接,那么需要你将链接后面的 `dl=0` 换成 `raw=1` .
* 请务必按照所有[教程](../plugin-usage/resourcepack-hosting/)进行操作
* 如果使用self-host,那么请确保端口已经打开
* 确保你 **没有** 使用我的材质包 `pack_21521367.zip` 作为基础.  您 **必须** 使用新生成的 `pack.zip` 材质包文件. 具体请阅读这儿 [点我跳转](../plugin-usage/resourcepack-hosting/resourcepack-self-hosting.md)

## _我的玩家还是看不到材质! 但是我已经按照教程做了_ <a id="my-players-cant-see-textures-but-ive-followed-the-whole-tutorial"></a>

有三种方法可以解决这个问题:

* 给你的玩家查看这个链接,也许就解决了 [http://imgur.com/a/SG0AU](http://imgur.com/a/SG0AU)​
* 如果你还是有问题 从你的**服务器**中**删除**插件,再次添加,然后 **启用资源包**.
* 如果你还是没有解决的话离开服务器, 找到 **%appdata%/.minecraft/server-resource-packs** 并且 **删除里面任何东西**. 然后再加入服务器.

{% hint style="danger" %}
确保你没使用 **大写英文** 或者 **特殊字符** 在物品的 **物品名称**, **命名列表**, **材质** \(png\) 和 **模型** \(json\)
{% endhint %}

