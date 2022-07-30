# 自定义实体动画

## 我该如何创建一个动画?

您可以为您的模型正常设置动画, 就像您使用 Blockbench 模型一样.\
您可以在 YouTube 上找到许多关于这方面的教程. （国内上不去，可以在 Bilibili 搜寻相关教程）

{% embed url="https://www.youtube.com/results?search_query=blockbench+animation+tutorial" %}

## 设置动画的类型

为了让 ItemsAdder 能根据实体状态来播放动画, 您必须设置动画的类型.\
ItemsAdder 的 Blockbench 扩展在转换时会自动执行此操作，但有时会有奇怪动画名称无法进行自动识别
如下图所示, 右键单击选择动画项目, 并确保动画的类型是正确的.

![](<../../../../.gitbook/assets/image (43) (1).png>)

## 提醒

{% hint style="info" %}
* 该扩展支持在动画中进行骨骼缩放，请检查关键帧有没有在不需要缩放的地方使用了骨骼缩放功能.
* 请保持模型尽量简单, 不要创建太多的骨骼. 不要忘记这是一个像素游戏! 详情可参阅 [Minecraft 美术风格指导](../../../minecraft-style-guide.md).
{% endhint %}
