# 常见问题

## 我只看到一个白色方块

If you see a **white square** make sure the **height** of your image is not **greather** than the `y_position` value you set.
To **bypass** that create an **image** with **higher height**. Images must also not have **Uppercase** or **Bad Characters** (eg. - or _) in the filename.

{% hint style="warning" %}
注意：图像的 **最大尺寸** 为 **256x256**.\
此为 Minecraft 的限制.\
如果你需要导入一个超过 **256x256** 尺寸的图像作为 GUI 或 HUD，你可以将该图像进行分割，分割为256x256的块，在游戏中进行图像偏移来拼凑成一张完整的图片.
{% endhint %}

## 当我将其添加至 hud 时，出现一些像素偏移

确保每个图像大小设置为 2 的倍数.\
例如:\
\- 2x2\
\- 4x4\
\- 6x6\
\- 52x52\
\- ......\


如果仍然存在问题，请尝试将图像大小增加/减少 2 个像素，直到错误消失.\
这是无法解决的近似问题.
