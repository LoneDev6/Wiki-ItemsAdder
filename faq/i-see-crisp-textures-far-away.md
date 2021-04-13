# I see crisp textures far away!

{% hint style="warning" %}
如果你在远处看到点状而不是平滑的材质,这个是资源包制作的常见问题.  
Minecraft有一个特性,如果你设置的材质的大小不是2的倍数的话,就会关闭Mipmap功能
{% endhint %}

![&#x5DE6;&#x8FB9;:&#x65E0;mipmap &#x53F3;&#x8FB9;:&#x6709;mipmap](../.gitbook/assets/image%20%2819%29.png)

## **如何去修复?**

有手就行!来按下面设置:

* 打开你的Minecraft客户端日志页面, **不是服务器** 日志 \(通常它在 `%appdata%\.minecraft\logs\latest.log` 如果没有,请在文件内搜索 `%appdata%\.minecraft\logs\`\)
* 搜索此行 `limits mip level`
* 识别问题材质,例如 `Texture mcicons:item/icon_toggle_off with size 30x30 limits mip level from 3 to 1`
* 修复材质.想要修复它,你要把它的大小调整为:16x16, 32x32, 64x64, 128x128, 256x256, 当然你要选择其中之一

