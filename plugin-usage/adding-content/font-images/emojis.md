# 😁 表情

### 介绍

例如，我想创建一个名为 "myemojis" 的表情包，所以我将 [ 命名空间 ](../basic-concepts/namespace/) 设置为 `myemojis`

### 创建材质文件夹

1. 打开文件夹 `plugins\ItemsAdder\data\resource\_pack\assets\\`
2. 创建一个名为 `myemojis` 的文件夹
3. 创建一个名为 `textures` 的文件夹，然后在其中创建一个名为 `font` 的文件夹，接着在 `font` 文件夹中创建一个名为 `emoji` 的文件夹
4. 现在你得到了这么一条路径: **plugins\ItemsAdder\data\resource\_pack\assets\myemojis\textures\font\emoji**
5. 在该文件夹中放入你要添加的表情，推荐将表情的图像大小设置为 72x72 确保不会过大或像素化.当然你仍然可以自定义表情的大小，但是要注意不要超过 256x256
6. 在此示例中，我在文件夹中放入了一个名为 **smile.png** 的图像

### 创建 ItemsAdder 的表情符号配置

1. 现在你需要为你的表情配置创建文件夹.在该示例中，你需要在 **plugins\ItemsAdder\data\items\_packs\\** 中创建一个名为 **myemojis** 的文件夹
2. 在 **plugins\ItemsAdder\data\items\_packs\myemojis** 中创建一个名为 **emoji\_images.yml** 的文件（你能在任何地方对其调用）
3. 打开 .yml 文件并进行如下设置：&#x20;

```yaml
info:
  namespace: "myemojis"
```

然后将你的表情（在此示例中，我制作了一个 **smile** 表情）添加到 font\_images 列表中，现在你的配置应该为：

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

**scale\_ratio** 属性可以对图像进行缩放，也是表情符号的最终高度（以像素为单位）.\
因为 72x72 的像素太大，可以使用该属性进行缩放处理，将其数值设置为 9 Minecraft将会自动处理.\
**y\_position** 属性为图像的高度,是以像素为单位的 y 位置.\
当图像尺寸为 72x72 且 **scale\_ratio** 为 9 时，与其完美显示搭配的数值是 **y\_position** 8
{% hint style="danger" %}
`scale_ratio` 属性的数值 **必须** 始终 **大于**  `y_position` 否则将无法显示.\
无法修复该问题,该问题为 **Minecraft** 的限制.
{% endhint %}

## 游戏中效果

![](<../../../.gitbook/assets/immagine (116) (3) (1) (1) (1) (1) (1) (1) (1) (2).png>)

### 使用 /e 进行自动补全

![](<../../../.gitbook/assets/immagine (112).png>)

![](<../../../.gitbook/assets/immagine (111).png>)

![](<../../../.gitbook/assets/immagine (113).png>)
