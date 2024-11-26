# 头部

## 自定义实体头部旋转

{% embed url="http://youtu.be/A20y3lo3Aic" %}

你可以指定一个骨骼作为头部，并在基础实体AI旋转头部时自动旋转。

## 限制

{% hint style="warning" %}
头部骨骼旋转仅在头部离身体中心不太远的情况下有效。\
这可能会在未来得到修复，但目前没有解决方案。

例如：龙和类似的实体不能自动旋转头部以看向目标。
{% endhint %}

## 设置

### 配置头部骨骼

使用 **Blockbench** 打开你的 `.iaentitymodel` 模型文件。

选择头部的基础骨骼。

![](<../../../../.gitbook/assets/image (93) (1).png>)

右键点击骨骼并选择 "**Bone Config**"

![](<../../../../.gitbook/assets/image (63) (1).png>)

勾选 "**Head**" 选项并点击 "**Confirm**"。\
你还可以决定X和Y轴旋转的最大角度。

![](<../../../../.gitbook/assets/image (84).png>)

现在头部骨骼已经被标记为头部，如图所示（笑脸是头部骨骼）。

![](<../../../../.gitbook/assets/image (51) (1).png>)

### 配置眼睛高度（可选）

创建一个新骨骼，你可以随意命名，例如 `eyes_height`。

![](<../../../../.gitbook/assets/image (59) (1) (1).png>)

将骨骼放置在实体眼睛之间。

![](<../../../../.gitbook/assets/image (45) (1).png>)

右键点击骨骼并选择 "**Bone Config**"，然后选择 "Eyes height"。

![](<../../../../.gitbook/assets/image (88) (1).png>)

### 完成

现在你需要像往常一样导出模型。

{% content-ref url="creation.md" %}
[创建模型](creation.md)
{% endcontent-ref %}

