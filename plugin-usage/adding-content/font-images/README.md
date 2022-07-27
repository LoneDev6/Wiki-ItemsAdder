---
描述: >-
  允许你创建自定义图像并使用在文本中，也称作 字符图像
---

# 🖼 字符图像（Font images）

### 什么是 字符图像（Font images）?

该功能能够允许你创建自定义图像并且应用至 **GUIs**, **HUDs**, **表情**  自定义字符，以及你想得到的任何内容.
<br>你可以将其应用在任何地方 使用实例： [ **自定义玩家称号**](../ranks-textures-tags.md) 

{% hint style="warning" %}
创建 **font\_image** 时，请确保图片背景不是完全透明的.\
你需要将 **ALPHA** 设置为 **7** 而不能设置为 0.\

Minecraft 会移除图像边缘所有(alpha 为 0) 的透明像素.
{% endhint %}

## 教程

{% content-ref url="../ranks-textures-tags.md" %}
[ranks-textures-tags.md](../ranks-textures-tags.md)
{% endcontent-ref %}

{% content-ref url="emojis.md" %}
[emojis.md](emojis.md)
{% endcontent-ref %}

## 使用特定的字符

`symbol` 属性可以指定 font_image 对应的字符.\
当你不使用 `symbol` 来指定字符时，ItemsAdder 会自动分配字符进行应用.\

例如:

```yaml
smile:
  permission: smile
  show_in_gui: true
  path: "font/emoji/smile.png"
  symbol: "鄿"
  scale_ratio: 9
  y_position: 8
```

当在聊天中打出 "鄿" 时，游戏中都会显示微笑的表情

## 我不想使用 ItemsAdder 的 font\_image, 我想自己手动编写 default.json

你只需要直接编辑 default.json 即可

## 使用 font\_image 创建的效果示例

![](<../../../.gitbook/assets/immagine (106).png>)

![](<../../../.gitbook/assets/image (27) (1) (1) (1) (1) (1) (1) (1) (2).png>)

![](<../../../.gitbook/assets/immagine (107).png>)

![](<../../../.gitbook/assets/immagine (108).png>)

![](<../../../.gitbook/assets/immagine (109).png>)
