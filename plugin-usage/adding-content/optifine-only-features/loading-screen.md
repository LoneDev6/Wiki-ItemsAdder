# 材质加载页面

## 原版加载页面

![](../../../.gitbook/assets/immagine%20%2851%29.png)

## 自定义的加载页面

![](../../../.gitbook/assets/immagine%20%2848%29.png)

## 我要怎么制作

### MineCraft 1.16版本前

![](../../../.gitbook/assets/immagine%20%2847%29.png)

你可以得到一个[GIMP](https://www.gimp.org/downloads/)模板[在这!](https://github.com/LoneDev6/SpigotUtilities/blob/master/ItemsAdder/various_files/mojang_template.xcf).

* 修改我的文件:`plugins\ItemsAdder\data\resource_pack\assets\minecraft\textures\gui\title\mojang.png`
* 将文件保存在同一位置.

### MineCraft 1.16版本后[包括1.16]

![](../../../.gitbook/assets/immagine%20%2813%29.png)

{% hint style="warning" %}
**警告**: 有一个已知特性,当你使用`/iazip`或`/iatexture`来重载游戏里的材质时.  
由于某种原因,只有在加入服务器时才会显示LOGO,这可能是Optifine的一个特性.
{% endhint %}

有亿点困难:  
基本上你必须像我一样把你的LOGO图像分成两半,所以你必须知道如何使用图像编辑软件\(Photoshop,GIMP或Paint.net\). 
你可以得到一个[GIMP](https://www.gimp.org/downloads/)模板[在这!](https://github.com/LoneDev6/SpigotUtilities/blob/master/ItemsAdder/various_files/mojangstudios_template.xcf).

* 修改我的文件:`plugins\ItemsAdder\data\resource_pack\assets\minecraft\textures\gui\title\mojangstudios.png`
* 将文件保存在同一位置.

### 如何修改加载页面的背景颜色\(只有1.16版本\)

创建一个新文件\(或修改已经提供的文件\):`plugins\ItemsAdder\data\resource_pack\assets\minecraft\optifine\color.properties`

把这个内容复制进去:

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

你可以使用[HEX color picker](https://www.w3schools.com/colors/colors_picker.asp)修改颜色

{% hint style="warning" %}
不要在颜色代码的前面加上 "#"!
{% endhint %}

