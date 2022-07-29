# 表情动画

## 创建一个动画

你可以正常为模型制作动画，就像制作普通的 Blockbench 模型一样.\
在 YouTube 上有很多关于模型动画的教程

{% embed url="https://www.youtube.com/results?search_query=blockbench+animation+tutorial" %}

## 锁定玩家位置（无法移动）

设置玩家是否能在播放动画时进行移动

![](<../../../.gitbook/assets/image (76).png>)

## 循环动画

你可以创建可播放的动画，比如顺序为 `start（开始）` -> `loop（循环）` -> `end（结束）` 的循环动画.\

当你制作了循环动画能够实现很多有意思的功能.\
例如：睡眠动画，玩家将一直保持躺着的动画，直到玩家按下 **SHIFT** 按钮.

### 步骤 1

创建一个动画，在该示例中为死亡动画

![](<../../../.gitbook/assets/image (96) (1).png>)

右键将其设置为 `Loop（循环）` 动画.

![](<../../../.gitbook/assets/image (92) (1).png>)

### 步骤 2

现在将光标放在你想要循环开始的关键帧上.

![](<../../../.gitbook/assets/image (75).png>)

### 步骤 3

点击 `Add Loop Start/End marker（添加循环开始/结束标记）` 图标 来进行添加  `start loop（循环开始）` 标记.

![](<../../../.gitbook/assets/image (60).png>)

现在将光标放在你想要循环停止的关键帧上，点击 `Add Loop Start/End marker（添加循环开始/结束标记）` 图标

![](<../../../.gitbook/assets/image (46).png>)

你会得到如下效果:

![](<../../../.gitbook/assets/image (93).png>)
