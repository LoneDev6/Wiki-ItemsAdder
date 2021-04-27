# I can't unzip the pack.zip file

{% hint style="warning" %}
如果你在远处看到点状而并非平滑的材质,这是资源包制作常见的问题.Minecraft有一个Bug,如果你设置的材质的大小不是2的倍数,就会关闭Mipmap功能
{% endhint %}

![&#x5DE6;&#x8FB9;:&#x65E0;mipmap &#x53F3;&#x8FB9;:&#x6709;mipmap](../.gitbook/assets/image%20%2819%29.png)

## **如何修复?**

有手就行!只需要这样设置:

* 打开你的Minecraft客户端日志文件, **不是服务端** 日志 \(通常它在 `%appdata%\.minecraft\logs\latest.log` 如果没有,请在文件夹内搜索 `%appdata%\.minecraft\logs\`\)
* 搜索此行 `limits mip level`
* 识别问题材质,例如 `Texture mcicons:item/icon_toggle_off with size 30x30 limits mip level from 3 to 1`
* 修复材质.想要修复它,你必须把它的大小调整为:16x16,32x32,64x64,128x128,256x256,当然你要选择其中之一

