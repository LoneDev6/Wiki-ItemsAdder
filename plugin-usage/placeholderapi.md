---
描述: PlaceholderAPI 变量
---

# PAPI 变量

## 字符图像(FontImage) (表情符号 图像 etc..)

字符图像的显示格式为: `%img_NAME% `
栗子: `%img_smile%`

## Offsets 偏移量

你可以前后移动 本文/字符图像.\
栗子&#x20;

* 你可以通过使用 `%img_offset_-16% ` 来使其向后移动16个像素.
* 你可以通过使用 `%img_offset_16% ` 来向前移动16个像素.

## ItemsAdder 的自定义玩家数据（PlayerStats） (HUDs 数值)

该自定义数据来源于 Itemsadder，不是原版的自定义数据

其代码格式为: `%iaplayerstat_NAME%` 
栗子: `%iaplayerstat_mana%` 或 `%iaplayerstat_thirst%`

你可以使用以下命令来进行测试:\
`/papi parse me %iaplayerstat_thirst%`\
`/papi parse me %iaplayerstat_mana%`

{% hint style="info" %}
#### 阅读更多有关 playerstats 信息
{% endhint %}

