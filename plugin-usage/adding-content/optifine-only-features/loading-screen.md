# Optifine 加载页面

{% hint style="danger" %}
**Optifine** 并未被 **ItemsAdder** 官方支持，但如果你想要更多的自定义选项，可以阅读这些教程。

#### 请不要就 Optifine 功能寻求支持。谢谢！

如果你愿意，可以使用[替代方法](https://itemsadder.devs.beer/plugin-usage/loading-screen)，该方法不需要 **Optifine**。
{% endhint %}

## 原版加载屏幕

![](../../../.gitbook/assets/image\_\(44\).png)

## 自定义加载屏幕

![](../../../.gitbook/assets/image\_\(51\).png)

## 如何实现？

### Minecraft 1.15 及以下版本

![](../../../.gitbook/assets/image\_\(49\).png)

你可以在[这里](https://github.com/LoneDev6/SpigotUtilities/blob/master/ItemsAdder/various\_files/mojang\_template.xcf)获取一个 [GIMP](https://www.gimp.org/downloads/) 模板。

* 编辑我的文件：`contents/loading_screen/resourcepack/minecraft/textures/gui/title/mojang.png`
* 将文件保存在相同位置

### Minecraft 1.16 及以上版本

![](../../../.gitbook/assets/image\_\(48\).png)

{% hint style="danger" %}
**警告**：已知问题是当你使用 `/iazip` 或 `/iatexture` 在游戏中应用纹理时，徽标会出现问题。\
徽标只会在服务器加入时正常显示，可能是 Optifine 的一个 bug。
{% endhint %}

有点困难：\
基本上你需要将图像分成两半，所以你需要知道如何使用图像编辑程序（Photoshop、GIMP 或 Paint.net）。\
你可以在[这里](https://github.com/LoneDev6/SpigotUtilities/blob/master/ItemsAdder/various\_files/mojangstudios\_template.xcf)获取一个 [GIMP](https://www.gimp.org/downloads/) 模板。

* 编辑我的文件：`contents\loading_screen\resourcepack\minecraft\textures\gui\title\mojangstudios.png`
* 将文件保存在相同位置

{% hint style="danger" %}
**重要**\
各部分的位置需要精确。\
纹理的左侧需要接触画布的右上角，而右侧需要接触画布的左中部。

无论实际纹理的大小如何，这**始终**是正确的！
{% endhint %}

### 如何更改背景颜色（仅限 1.16+）

创建一个新文件（或编辑已提供的文件）：`contents/loading_screen/resourcepack/minecraft/optifine/color.properties`

放入以下内容：

```yaml
###############################################################################
# Resource loading screen
###############################################################################
# Background color
screen.loading=14181c
# Loading bar background color
screen.loading.bar=14181c
# Loading bar outline
screen.loading.outline=303336
# Loading bar foreground color
screen.loading.progress=1f17ce
# Logo blend mode
# Where src, dst, srcA and dstA are one of: 
#   ZERO, ONE, SRC_COLOR, ONE_MINUS_SRC_COLOR, DST_COLOR, ONE_MINUS_DST_COLOR, 
#   SRC_ALPHA, ONE_MINUS_SRC_ALPHA, DST_ALPHA, ONE_MINUS_DST_ALPHA, SRC_ALPHA_SATURATE
screen.loading.blend=DST_COLOR
```

你可以使用 [HEX 颜色选择器](https://www.w3schools.com/colors/colors\_picker.asp)编辑颜色。

{% hint style="danger" %}
不要在颜色代码的开头包含 `#`！
{% endhint %}
