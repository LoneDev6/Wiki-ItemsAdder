# 头部

## 自定义实体的头部旋转

{% embed url="http://youtu.be/A20y3lo3Aic" %}

您可以指定一个想要标记为头部颅骨的骨骼, 并在基础实体的 AI 尝试旋转头部时自动旋转.

## Limitations

{% hint style="warning" %}
只有当怪物的头部离其身体的中心在一定距离内, 头骨旋转才会生效.\
这个问题 **可能** 会在未来得到解决.

例如: 末影龙和类似实体不能旋转头部看向目标（龙的头部离它的身体中心过远）.
{% endhint %}

## 设置步骤

### 配置头部颅骨

使用 **Blockbench** 打开您的 `.iaentitymodel` 模型文件.

选择头部颅骨的基础骨骼.

![](<../../../../.gitbook/assets/image (93) (1).png>)

右键点击骨骼选项, 然后点击 "**Bone Config（骨骼设置）**"

![](<../../../../.gitbook/assets/image (63) (1).png>)

确认启用 "**Head**" 选项后, 点击 "**Confirm（确认）**".\
您还可以限制 X 和 Y 轴方向的最大旋转角度.

![](<../../../../.gitbook/assets/image (84).png>)

如您所见, 头部颅骨现在标记为 **head**（笑脸就是头部颅骨）.

![](<../../../../.gitbook/assets/image (51) (1).png>)

### 配置眼睛的高度 (可选)

创建一个新骨骼, 您可以根据自己的偏好对其进行调用, 例如下图的 `eyes_height` 所示.

![](<../../../../.gitbook/assets/image (59) (1) (1).png>)

将骨骼放置在实体的眼睛之间.

![](<../../../../.gitbook/assets/image (45) (1).png>)

右键点击骨骼选项, 然后点击 "**Bone Config（骨骼设置）**", 接着勾选 "Eyes height（眼睛高度）".

![](<../../../../.gitbook/assets/image (88) (1).png>)

### 完成

现在, 您就可以像往常一样导出模型使用了.

{% content-ref url="creation.md" %}
[creation.md](creation.md)
{% endcontent-ref %}

