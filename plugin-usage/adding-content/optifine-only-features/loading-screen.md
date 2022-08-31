# 自定义资源包加载界面

## 原版加载页面

![](<../../../.gitbook/assets/immagine (44).png>)

## 自定义加载界面

![](<../../../.gitbook/assets/immagine (51).png>)

## 如何实现？

### Minecraft 1.16 之前的版本

![](<../../../.gitbook/assets/immagine (49).png>)

你可以在 [该页面](https://github.com/LoneDev6/SpigotUtilities/blob/master/ItemsAdder/various\_files/mojang\_template.xcf) 获取 [GIMP ](https://www.gimp.org/downloads/) [here](https://github.com/LoneDev6/SpigotUtilities/blob/master/ItemsAdder/various\_files/mojang\_template.xcf)模板.

* 编辑文件:`plugins\ItemsAdder\data\resource_pack\assets\minecraft\textures\gui\title\mojang.png`
* 保存文件在相同的位置

### Minecraft 1.16 之后的版本

![](<../../../.gitbook/assets/immagine (48).png>)

{% hint style="warning" %}
**提醒**: 该功能有一个已知的问题，在你使用指令 `/iazip` 或 `/iatexture` 进行重载资源包时，将不会显示LOGO.\
只有在从服务器列表进入服务器时才会正常显示LOGO.
{% endhint %}

你需要像示例图片中一样将图片分成两半，所以你需要能够熟练的使用图像编辑软件 (Photoshop, GIMP or Paint.net).\
你可以在 [该页面](https://github.com/LoneDev6/SpigotUtilities/blob/master/ItemsAdder/various\_files/mojangstudios\_template.xcf) 获取 [GIMP ](https://www.gimp.org/downloads/)template [here](https://github.com/LoneDev6/SpigotUtilities/blob/master/ItemsAdder/various\_files/mojangstudios\_template.xcf)模板.

* 编辑文件 `plugins\ItemsAdder\data\resource_pack\assets\minecraft\textures\gui\title\mojangstudios.png`
* 保存文件（不要改变文件的位置）

{% hint style="warning" %}
**重要**\
无论材质的大小为多少，你都要保证材质的左侧需要接触画布的右上角，材质的右侧需要接触画布中线的左侧（如图所示），两个部分的位置必须十分精确!

{% endhint %}

### 如何修改加载页面的背景颜色(仅适用于)

创建一个新文件(或修改已存在的文件):: `plugins\ItemsAdder\data\resource_pack\assets\minecraft\optifine\color.properties`

把该内容复制进去:

```yaml
###############################################################################
# 自定义资源包加载界面
###############################################################################
# 背景颜色 Background color
screen.loading=14181c
# 加载条背景 Loading bar background color
screen.loading.bar=14181c
# 加载条边框 Loading bar outline
screen.loading.outline=303336
# 加载条前景色 Loading bar foreground color
screen.loading.progress=1f17ce
# Logo 混合 模式
# Where src, dst, srcA and dstA are one of: 
#   ZERO, ONE, SRC_COLOR, ONE_MINUS_SRC_COLOR, DST_COLOR, ONE_MINUS_DST_COLOR, 
#   SRC_ALPHA, ONE_MINUS_SRC_ALPHA, DST_ALPHA, ONE_MINUS_DST_ALPHA, SRC_ALPHA_SATURATE
screen.loading.blend=DST_COLOR
```

你可以使用 [HEX color picker](https://www.w3schools.com/colors/colors\_picker.asp) 修改颜色

{% hint style="warning" %}
不要在颜色代码的前面加上 `#`!
{% endhint %}
