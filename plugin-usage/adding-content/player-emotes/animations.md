# 表情动画

## 创建一个动画

你可以正常为模型制作动画，就像制作普通的 Blockbench 模型一样.\
在 YouTube 上有很多关于模型动画的教程

{% embed url="https://www.youtube.com/results?search_query=blockbench+animation+tutorial" %}

## 锁定玩家位置（无法移动）

You can specify if the player can move while playing one specific animation or not.

![](<../../../.gitbook/assets/image (76).png>)

## 循环动画

You can create animations which would play `start` -> `loop` -> `end` sub-animation.\
This allows you to create complex looping animations, for example a sleep animation where your player would lay and stay there until the player presses SHIFT.

### 步骤 1

创建一个动画，在该示例中为死亡动画

![](<../../../.gitbook/assets/image (96) (1).png>)

右键将其设置为 `Loop（循环）` 动画.

![](<../../../.gitbook/assets/image (92) (1).png>)

### 步骤 2

Now place the cursor on the frame where you want the loop to start, in this case when the player is on the ground.

![](<../../../.gitbook/assets/image (75).png>)

### 步骤 3

Click on the `Add Loop Start/End marker` icon to add a `start loop` marker.

![](<../../../.gitbook/assets/image (60).png>)

Now place the animation cursor on the frame where you want the loop to stop and press again on the `Add Loop Start/End marker` icon.

![](<../../../.gitbook/assets/image (46).png>)

The result will be like this:

![](<../../../.gitbook/assets/image (93).png>)
