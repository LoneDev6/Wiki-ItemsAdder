# 表情

## 简介

举个栗子,我想创建一个名为"myemojis"的表情包,所以我的[分组](../beginners/basic-concepts/namespace.md)将会是`myemojis`

## 创建材质文件

1. 打开文件 **plugins\ItemsAdder\data\resource\_pack\assets\**
2. 创建一个名为`myemojis`的文件
3. 创建一个名为`textures`的文件,然后在里面创建一个名为`font`的文件夹,然后再创建一个名为`emoji`的文件
4. 现在你的文件路径应该是这样的: **plugins\ItemsAdder\data\resource\_pack\assets\myemojis\textures\font\emoji**
5. 在这个文件里,你得放上你的表情图像,图像的像素最好是:72x72,以确保表情不会太大.你可以决定你想要的表情大小\(重要:高度和宽度都不能超过256像素.
6. 在这个栗子里,我放了一张名为**smile.png**的图像

## 为你的表情创建ItemsAdder配置

1. 现在你必须为你的表情配置创建文件.在这个栗子里,你必须在`plugins\ItemsAdder\data\items_packs\`创建一个名为`myemojis`的文件.
2. 在`plugins\ItemsAdder\data\items\_packs\myemojis`内创建一个名为**emoji\_images.yml**的文件\(你可以叫它任何你想叫的名字\)
3. 现在你得打开.yml文件并按照下面进行设置

```yaml
info:
  namespace: "myemojis"
```

接下来为你的表情\(在这个栗子里,我做了一个**smile**的表情\)添加到font/images的配置列表里,接下来你的配置看起来会是这个样子的:

```yaml
info:
  namespace: "myemojis"
font_images:
  smile:
    permission: 0
    show_in_gui: true
    path: "font/emoji/smile.png"
    scale_ratio: 9
    y_position: 8
```

**scale/\_ratio**是表情的最终高度\[像素\],因为72x72像素太大,所以你必须缩小它,但你可以设置9\[9的倍数\],这样的话Minecraft会自动的去处理它. **y\_position/**必须以像素作为单位的y位置,如果你保持表情72x72的scale/ratio为9,那么设置8应该是最好的.如果你有不同的大小,你将必须得根据你的亿点点测试来调整你的y\_position

{% hint style="danger" %}
`scale_ratio`必须大于`y_position`,否则Minecraft不会承认它.我不能修复这个特性,因为这是一个**Minecraft**的特性.
{% endhint %}

## In-game view

![](../../../.gitbook/assets/immagine%20%28116%29%20%283%29.png)

### Using the /e useful suggestions

![](../../../.gitbook/assets/immagine%20%28108%29.png)

![](../../../.gitbook/assets/immagine%20%28107%29.png)

![](../../../.gitbook/assets/immagine%20%28103%29.png)

