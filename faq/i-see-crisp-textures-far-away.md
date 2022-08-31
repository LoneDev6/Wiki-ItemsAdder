# 无法看清远处材质（模糊、锯齿）

{% hint style="warning" %}
如果你看远处时出现点状且不平滑的材质，问题出在资源包制作上
当材质尺寸大小不为2的倍数，Minecraft 将会自动关闭 mipmap
{% endhint %}

![左：没有 mipmap 右：使用 mipmap](<../.gitbook/assets/image (19).png>)

## **如何修复?**

根据下列步骤进行操作:

* 打开Minecraft 客户端的日志（logs）文件  **不是服务器的日志文件！** 
* ctrl+f 查找 `limits mip level`
* 检查有问题的材质，例如：`Texture mcicons:item/icon_toggle_off with size 30x30 limits mip level from 3 to 1` 中的 `mcicons:item/icon_toggle_off`
* 修复材质，将材质尺寸调整为以下大小：16x16、32x32、64x64、128x128、256x256 ...

完成!
