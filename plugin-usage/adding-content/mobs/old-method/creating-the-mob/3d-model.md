# 自定义怪物模型

## 创建自定义实体模型动画 (idle（闲置）的时动画)

我将使用 [BlockBench](https://blockbench.net/) 创建一个模型, 这个工具简单易用也很高效.\
BlockBench [教程 ](https://www.youtube.com/results?search\_query=blockbench+tutorial)可以在 YouTube 上找到.
（国内一般上不去, 要么科学上网, 要么在 Bilibili 搜寻教程）

{% hint style="danger" %}
您必须确保创建的模型为 Java Block/Item 模型, 而非 Bedrock（基岩版） 模型 或 Entity（实体） 模型!

![](<../../../../../.gitbook/assets/immagine (89) (1) (1) (1) (1) (1) (1) (1) (1) (2).png>)
{% endhint %}

### 创建一个非常简单的idle（闲置）动画

如下所示, 我创建了一个由许多立方体组成的模型.

![](<../../../../../.gitbook/assets/immagine (52).png>)

现在我想给它设置一个动画!\
例如, 我想让它有上下浮动的效果.

**1.保存当前模型** 在临时文件夹中 (您电脑的任意位置)

![](<../../../../../.gitbook/assets/immagine (53).png>)

![](<../../../../../.gitbook/assets/immagine (56).png>)

很好, 我将其命名为 **1.json** 并保存在 **idle** 文件夹下. 它将是 **动画** 的第一帧.

**2.**返回 **BlockBench** 并按下组合键 **CTRL+A** 全选

![](<../../../../../.gitbook/assets/immagine (57).png>)

**按住鼠标左键**，同时点击 **绿色**箭头，**按住 CTRL** 并 **向上** 移动一点

![](<../../../../../.gitbook/assets/immagine (58).png>)

**3.再次保存**文件，但将名称更改为**2.json**

**4.**重复三次操作（将怪物向上进行小幅度移动），保存文件按照数字序列来进行命名

**5.**现在我们完成了动画所需要的序列帧模型.接着 打开 [该页面](https://lonedev6.github.io/animated-models/)

**6.**点击 **文件图标** 加载我们的 json 序列帧

![](<../../../../../.gitbook/assets/immagine (68).png>)

**7.**点击“**Choose files（选择文件）...**”并选择您的 json 文件和 png 贴图

![](<../../../../../.gitbook/assets/immagine (77).png>)

![](<../../../../../.gitbook/assets/immagine (69).png>)

**8.**点击 **LOAD（加载）**

![](<../../../../../.gitbook/assets/immagine (70).png>)

**9.点击** **第二个图标** 将 **4个文件** 拖放至下方

![](<../../../../../.gitbook/assets/immagine (71).png>)

![](<../../../../../.gitbook/assets/immagine (72).png>)

**10.**现在你的界面应该与图片中一样

![](<../../../../../.gitbook/assets/immagine (73).png>)

**11.**再次拖放文件至下方，不过此次顺序为相反的（4-3-2-1） (3-2**, 在此步骤中我跳过了 1 和 4 序列动画，因为对动画没有任何影响**)

![](<../../../../../.gitbook/assets/immagine (75).png>)

**12.**点击 **play** 按钮 (在 **左下角**) 来 **预览动画**

![](https://i.imgur.com/zslbD0G.gif)

**13.** 点击 "**Export（导出）**" 按钮 (位于屏幕右上角) 并按照需求进行配置，再次点击 **Export（导出）**

![](<../../../../../.gitbook/assets/immagine (76).png>)

**14.**现在你可以下载一个包含动画文件的压缩包，下载并打开它

**15.复制** 压缩包中的内容至 **ItemsAdder** 文件夹 `data\resource_pack\`

**16.**配置你的自定义怪物使用 idle 动画  `"mob/soul/idle"`

```yaml
items:
  soul:
    display_name: display-name-soul
    permission: creaturesplus
    click_in_ia_gui: false
    resource:
      generate: false
      model_path: "mob/soul/idle"
```

**17.**使用指令 `/iazip` (并上传至云端)

**18.**使用指令 `/iasummon soul` 生成自定义实体

![](https://i.imgur.com/1tljgbv.gif)

{% hint style="warning" %}
请勿使用 BlockBench 或任何其他编辑程序打开动画模型（从网站导出后），否则动画可能会损坏并且失效.
{% endhint %}

{% hint style="info" %}
现在可以删除 1-2-3-4.json 序列动画文件，因为不再需要这些文件了（但你仍然可以进行备份），你只需要 idle.json 文件和 png+mcmeta 文件
{% endhint %}

## 更多进阶的动画

{% embed url="https://www.youtube.com/watch?v=DflNQjB0Okk" %}

## 完整附属下载

{% embed url="https://www.spigotmc.org/resources/mobs-creaturesplus-itemsadder-addon.84384/" %}

