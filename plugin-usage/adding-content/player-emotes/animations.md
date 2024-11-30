# 动画

## 如何创建动画

你可以像对普通 Blockbench 模型一样正常地为你的模型制作动画。\
你可以在 YouTube 上找到很多教程。

{% embed url="https://www.youtube.com/results?search_query=blockbench+animation+tutorial" %}

## 锁定玩家移动

你可以指定玩家在播放某个特定动画时是否可以移动。

![](<../../../.gitbook/assets/image (76).png>)

## 循环动画

你可以创建播放 `start` -> `loop` -> `end` 子动画的动画。\
这允许你创建复杂的循环动画，例如一个睡觉动画，其中你的玩家会躺下并保持在那里，直到玩家按下 SHIFT 键。

### 第一步

创建动画，在本例中是一个死亡动画。

![](<../../../.gitbook/assets/image (96) (1).png>)

右键单击它并将其标记为 `循环`。

![](<../../../.gitbook/assets/image (92) (1).png>)

### 第二步

现在将光标放在你希望循环开始的帧上，在本例中是玩家倒地时。

![](<../../../.gitbook/assets/image (75).png>)

### 第三步

点击 `添加循环开始/结束标记` 图标以添加 `开始循环` 标记。

![](<../../../.gitbook/assets/image (60).png>)

现在将动画光标放在你希望循环停止的帧上，再次点击 `添加循环开始/结束标记` 图标。

![](<../../../.gitbook/assets/image (46).png>)

结果将如下所示：

![](<../../../.gitbook/assets/image (93).png>)
