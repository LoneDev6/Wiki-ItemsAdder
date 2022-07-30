# 动画效果

## 我该如何创建一个动画?

您可以为您的模型正常设置动画, 就像您使用 Blockbench 模型一样.\
您可以在 YouTube 上找到许多关于这方面的教程. （国内上不去，看 Bilibili 吧）

{% embed url="https://www.youtube.com/results?search_query=blockbench+animation+tutorial" %}

## 设置动画的类型

为了让 ItemsAdder 能根据实体状态来播放动画, 您必须设置动画的类型.\
The ItemsAdder Blockbench extension does that automatically on conversion, but sometimes you might have strange animation names and it could not automatically recognize them.

如下图所示, 右键单击选择动画项目, 并确保动画的类型是正确的.

![](<../../../../.gitbook/assets/image (43) (1).png>)

## Notes

{% hint style="info" %}
* This extension supports animated scale of bones. Make sure to avoid scaling when it's not needed. Check your keyframes.
* Avoid adding too many rotation, details and movements, don't forget this is a blocky pixelated game, use [its style](../../../minecraft-style-guide.md).
{% endhint %}
