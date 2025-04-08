---
description: 允许你创建可以在文本中使用的图像，也称为字形和符号
icon: icons
---

# 字体图像

### 什么是字体图像？

此功能允许你创建可以用于制作：**GUI**、**HUD**、**表情符号**、自定义字符、[**自定义玩家前缀**](broken-reference)和你能想象到的任何其他内容的图像！（你可以将这些图像放在任何文本中）。

## 教程

{% content-ref url="broken-reference" %}
[Broken link](broken-reference)
{% endcontent-ref %}

{% content-ref url="emojis.md" %}
[emojis.md](emojis.md)
{% endcontent-ref %}

## 使用特定字符

如果你没有包含 `symbol` 属性，ItemsAdder 将为你决定自定义字符。\
你不必为每个 `emoji`/`font_image` 担心，但如果你确实需要指定用于自定义 `font_image` 的自定义字符，你可以使用特殊属性 `symbol`。

#### 例如：

```yaml
smile:
  permission: smile
  show_in_gui: true
  path: "font/emoji/smile.png"
  symbol: "鄿"
  scale_ratio: 9
  y_position: 8
```

Minecraft 将在你每次在聊天中输入 `鄿` 时显示笑脸表情符号。

## 我不关心 ItemsAdder font\_image，我想自己处理 `default.json`

你可以这样做，你只需要创建一个 `default.json` 文件并自行处理。

{% content-ref url="manually-creating-font-images.md" %}
[manually-creating-font-images.md](manually-creating-font-images.md)
{% endcontent-ref %}

## 使用字体图像功能创建的内容示例

![](../../../.gitbook/assets/image_\(106\).png)

![](<../../../.gitbook/assets/image (27) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (6).png>)

![](../../../.gitbook/assets/image_\(107\).png)

![](../../../.gitbook/assets/image_\(108\).png)

![](../../../.gitbook/assets/image_\(109\).png)
