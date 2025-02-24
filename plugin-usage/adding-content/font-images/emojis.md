---
icon: comment-smile
---

# 表情符号

### 介绍

例如，我想创建一个名为“myemojis”的表情符号包，所以我的命名空间将是 `myemojis`

### 示例配置

{% embed url="https://github.com/ItemsAdder/DefaultPack/tree/main/contents/twitteremojis" %}

### 创建纹理文件夹

1. 打开文件夹 plugins\ItemsAdder\contents\\
2. 创建一个名为 `myemojis` 的文件夹
3. 创建一个名为 `textures` 的文件夹，然后在里面创建一个名为 `font` 的文件夹，然后再创建一个名为 `emoji` 的文件夹
4. 现在你应该有这个路径：`ItemsAdder/contents/myemojis/textures/font/emoji/`
5. 将你的表情符号放在这个文件夹中，建议将它们设置为 72x72 以确保它们不会太大且不会像素化。但你可以决定你想要的大小（唯一重要的是高度和宽度不超过 256）。
6. 在这个例子中，我放了一张名为 **smile.png** 的图片

### 为你的表情符号创建 ItemsAdder 配置

1. 现在你需要为你的表情符号配置创建文件夹。在这个例子中，你需要在 `ItemsAdder/contents/myemojis/configs/` 中创建一个名为 **myemojis** 的文件夹
2. 在 `configs` 文件夹中创建一个名为 **emoji\_images.yml** 的文件（你可以随意命名）
3. 现在你需要打开这个 .yml 文件并添加以下内容

```yaml
info:
  namespace: "myemojis"
```

然后将你的表情符号（在这个例子中，我制作了一个 **smile** 表情符号）添加到 font\_images 列表中，所以你的文件看起来像这样：

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

**`scale_ratio`** 是表情符号的最终高度（以像素为单位），因为 72x72 像素太大了，你需要缩放它，但你可以设置为 9，这样 Minecraft 会自动处理它。\
**`y_position`** 是 y 位置（以像素为单位），如果你将表情符号保持为 72x72 并将 `scale_ratio` 设置为 9，那么 8 应该是合适的。如果你有不同的大小，你需要根据测试调整 y\_position。

{% hint style="danger" %}
`scale_ratio` 必须**始终**大于 `y_position`，否则 Minecraft 不会喜欢它。我无法解决这个问题，这是 **Minecraft** 的限制。
{% endhint %}

## 游戏内视图

![](<../../../.gitbook/assets/image_(116) (3) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1).png>)

### 使用 /e 有用的建议

在聊天中输入 `/e`，按 **空格** 并按 **TAB** 开始自动补全。

![](../../../.gitbook/assets/image_\(112\).png)

![](../../../.gitbook/assets/image_\(111\).png)

![](../../../.gitbook/assets/image_\(113\).png)

### 在聊天中使用 TAB 自动补全

在聊天中输入 `:` 并按 **TAB** 开始自动补全。

<figure><img src="../../../.gitbook/assets/emoji_autocomplete_chat.png" alt=""><figcaption></figcaption></figure>
