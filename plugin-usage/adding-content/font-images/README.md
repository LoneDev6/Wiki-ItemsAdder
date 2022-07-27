---
描述: >-
  允许你创建自定义图像并使用在文本中，也称作 字符图像
---

# 🖼 Font Images

### 什么是 Font images?

This feature allows you to create images that can be used to make:  **GUIs**, **HUDs**, **Emojis**, custom characters,[ **custom player prefixes**](../ranks-textures-tags.md) and anything else you imagine! (you can put these images inside any text).

{% hint style="warning" %}
When you create a **font\_image** make sure the **background** is **not** fully **transparent**.\
You have to set **ALPHA** to **7** instead of 0.

Minecraft removes all (alpha 0) transparent pixels on the edges of the image.
{% endhint %}

## 教程

{% content-ref url="../ranks-textures-tags.md" %}
[ranks-textures-tags.md](../ranks-textures-tags.md)
{% endcontent-ref %}

{% content-ref url="emojis.md" %}
[emojis.md](emojis.md)
{% endcontent-ref %}

## 使用特定的字符

ItemsAdder will decide the custom character for you if you don't include the `symbol` property at all.\
You don't have to worry about it for each `emoji`/`font_image`, but if you really need to specify a custom character to be used for the custom `font_image` you can use the special property `symbol`.\
For example:

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
