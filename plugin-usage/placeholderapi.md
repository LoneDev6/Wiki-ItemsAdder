---
描述: PlaceholderAPI 变量
---

# PAPI 变量

## FontImage (表情符号 图像 etc..)

This is the code: `%img_NAME% `instead of NAME write the font\_image name.\
栗子: `%img_smile%`

## Offsets 偏移量

You can shift text/font\_images back and forward.\
栗子&#x20;

* you can shift it back of 16 pixels by writing `%img_offset_-16% `.
* you can shift it forward of 16 pixels by writing `%img_offset_16% `.

## ItemsAdder PlayerStats (HUDs values)

These are stats used by ItemsAdder, they're not vanilla stats.

This is the code: `%iaplayerstat_NAME%` instead of NAME write the playerstat name.\
栗子: `%iaplayerstat_mana%` 或 `%iaplayerstat_thirst%`

你可以使用以下命令来进行测试:\
`/papi parse me %iaplayerstat_thirst%`\
`/papi parse me %iaplayerstat_mana%`

{% hint style="info" %}
#### 阅读更多有关 playerstats 信息
{% endhint %}

