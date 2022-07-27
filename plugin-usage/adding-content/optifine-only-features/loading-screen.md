# 自定义资源包加载界面

## 原版加载页面

![](<../../../.gitbook/assets/immagine (44).png>)

## 自定义加载界面

![](<../../../.gitbook/assets/immagine (51).png>)

## 如何实现？

### Minecraft 1.16 之前的版本

![](<../../../.gitbook/assets/immagine (49).png>)

你可以从 [这里](https://github.com/LoneDev6/SpigotUtilities/blob/master/ItemsAdder/various\_files/mojang\_template.xcf) 获取一个 [GIMP ](https://www.gimp.org/downloads/) [here](https://github.com/LoneDev6/SpigotUtilities/blob/master/ItemsAdder/various\_files/mojang\_template.xcf)模板.

* 编辑文件:`plugins\ItemsAdder\data\resource_pack\assets\minecraft\textures\gui\title\mojang.png`
* 保存文件在相同的位置

### Minecraft 1.16 之后的版本

![](<../../../.gitbook/assets/immagine (48).png>)

{% hint style="warning" %}
**Warning**: a known issue is that the logo is bugged when you use `/iazip` or `/iatexture` to apply the texture ingame.\
The logo will be shown with no issue only on server join for some reason, probably an Optifine bug.
{% endhint %}

A little bit difficult:\
basically you have to split your image in half like I did, so you have to know how to use image editing programs (Photoshop, GIMP or Paint.net).\
You can get a [GIMP ](https://www.gimp.org/downloads/)template [here](https://github.com/LoneDev6/SpigotUtilities/blob/master/ItemsAdder/various\_files/mojangstudios\_template.xcf).

* Edit my file: `plugins\ItemsAdder\data\resource_pack\assets\minecraft\textures\gui\title\mojangstudios.png`
* Save the file in the same location

{% hint style="warning" %}
**IMPORTANT**\
The position of the parts needs to be precise.\
The left side of the texture needs to touch the top-right corner of the canvas while the right side needs to touch the center-left side of the canvas.

This is **always** the case, no matter the size of the actual texture!
{% endhint %}

### 如何修改加载页面的背景颜色(仅适用于)

创建一个新文件(或修改已存在的文件):: `plugins\ItemsAdder\data\resource_pack\assets\minecraft\optifine\color.properties`

把该内容复制进去:

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

你可以使用 [HEX color picker](https://www.w3schools.com/colors/colors\_picker.asp) 修改颜色

{% hint style="warning" %}
不要在颜色代码的前面加上 `#`!
{% endhint %}
