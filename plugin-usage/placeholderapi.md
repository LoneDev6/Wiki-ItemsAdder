# PlaceholderAPI变量

## 字体图像 (表情符号等)

PlaceholderAPI变量: `%img_NAME%` 不要按照前面写NAME,写字体/图像的名称!.\
比如: `%img_smile%`

## Offsets

You can shift text/font\_images back and forward.\
For example

* you can shift it back of 16 pixels by writing `%img_offset_-16%` .
* you can shift it forward of 16 pixels by writing `%img_offset_16%` .

## ItemsAdder PlayerStats (HUDs values)

PlayerStats使用的是ItemsAdder的统计,不是原版的统计.

PlaceholderAPI变量: `%iaplayerstat_NAME%` 写的是playerstat的名称,而不是NAME! 比如: `%iaplayerstat_mana%` 或者 `%iaplayerstat_thirst%`

你可以用这些指令来测试:\
`/papi parse me %iaplayerstat_thirst%`\
`/papi parse me %iaplayerstat_mana%`

{% hint style="info" %}
### 查阅更多关于PlayerStats的信息
{% endhint %}
