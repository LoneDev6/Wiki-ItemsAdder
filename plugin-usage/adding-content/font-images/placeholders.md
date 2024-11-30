---
icon: hashtag
---

# 占位符

你可以在**聊天**、**标志**、**书籍**和**GUI**名称中使用这些特殊占位符。

### 字体图像

要显示你的字体图像，只需写下其名称并用 `:` 字符包围即可

```
:my_gui:
:blank_menu:
:my_emoji:
```

### Offset

This is a special placeholder that allows you to move a font image back and forward specifying pixels number.

```
:offset_-1:
:offset_-2:
:offset_-30:
:offset_25:
```

如你所见，你必须写 `:offset_`**`数量`**`:`（没有空格）。\
如果你想改变图像的高度，你需要改变它的 'y' 值。\
这在图像的配置中设置。

例如：

* 你可以通过写 `:offset_-16::smile:` 将字体图像向后移动 16 像素
* 你可以通过写 `:offset_-16:hello` 将文本向后移动 16 像素
* 你可以通过写 `:offset_16::smile:` 将字体图像向前移动 16 像素
* 你可以通过写 `:offset_16:hello` 将文本向前移动 16 像素

## PlaceholderAPI

### 字体图像

代码是：`%img_NAME%`，将 `NAME` 替换为字体图像名称。\
例如：`%img_smile%`

### 偏移量

你可以前后移动文本或字体图像。\
例如：

* 你可以通过写 `%img_offset_-16%` 将其向后移动 16 像素
* 你可以通过写 `%img_offset_16%` 将其向前移动 16 像素

### ItemsAdder 玩家统计（HUD 值）

这些是 ItemsAdder 使用的统计数据，它们不是原版统计数据。

代码是：`%iaplayerstat_NAME%`，将 `NAME` 替换为玩家统计名称。\
例如：`%iaplayerstat_mana%` 或 `%iaplayerstat_thirst%`

你可以使用此命令进行测试：\
`/papi parse me %iaplayerstat_thirst%`\
`/papi parse me %iaplayerstat_mana%`
