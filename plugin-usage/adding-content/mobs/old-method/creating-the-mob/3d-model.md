# 3D 模型

## 创建动画模型（闲置动画）

要创建模型，我使用 [BlockBench](https://blockbench.net/)，它非常易于使用且速度快。\
YouTube 上有 BlockBench [教程](https://www.youtube.com/results?search_query=blockbench+tutorial)。

{% hint style="danger" %}
你必须确保将模型创建为 Java Block/Item 模型！不要使用 Bedrock 模型或实体模型！

<img src="../../../../../.gitbook/assets/image_(89) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (9) (1) (1) (1) (19).png" alt="" data-size="original">
{% endhint %}

### 创建一个非常简单的闲置动画

例如，我创建了这个模型，如你所见，它由一些立方体组成。

![](../../../../../.gitbook/assets/image_(52).png)

现在我们要为它制作动画！\
例如，我想让它上下浮动。

**1.保存当前模型到一个临时文件夹（电脑上的任意位置）**

![](../../../../../.gitbook/assets/image_(53).png)

![](../../../../../.gitbook/assets/image_(56).png)

**好了，我将其保存为 idle/1.json 在。这是动画的第一帧。**

**2.返回到 BlockBench 并按 “CTRL+A” 全选**

![](<../../../../../.gitbook/assets/image_(78) (1).png>)

**左键点击绿色箭头，按住 CTRL 并向上移动一点鼠标**

![](../../../../../.gitbook/assets/image_(58).png)

**3.再次保存文件，但将名称更改为 2.json**

**4.重复三次相同的操作（将模型稍微向上移动），并再次保存文件，按顺序命名**

**5.现在我们已经完成了动画所需帧的创建。打开[这个网站](https://lonedev6.github.io/animated-models/)**

**6.现在点击图标加载我们的 json 帧**

![](../../../../../.gitbook/assets/image_(68).png)

**7.点击“选择文件...”并选择你的 json 文件和 png 纹理**

![](../../../../../.gitbook/assets/image_(77).png)

![](../../../../../.gitbook/assets/image_(69).png)

**8.点击“加载”**

![](../../../../../.gitbook/assets/image_(70).png)

**9.点击第二个图标并拖放四个文件到底部行**

![](../../../../../.gitbook/assets/image_(71).png)

![](../../../../../.gitbook/assets/image_(72).png)

**10.你应该像这样排列它们**

![](../../../../../.gitbook/assets/image_(73).png)

**11.再次拖放它们，但顺序相反（3-2，我跳过了 1 和 4，因为它们对动画没有用）**

![](../../../../../.gitbook/assets/image_(75).png)

**12.点击播放按钮（左下角）预览动画**

![](https://i.imgur.com/zslbD0G.gif)

**13.按“导出”按钮（在屏幕右上角）并按截图配置，然后再次按“导出”**

![](../../../../../.gitbook/assets/image_(76).png)

**14.现在你将有一个包含动画的 zip 文件，下载并打开它**

**15.将 zip 解压到你的 ItemsAdder 文件夹 `contents\myitems\resourcepack\`**

**16.将你的怪物配置设置为这样，以使用闲置动画而不是卡住的动画：`"mob/soul/idle"`**

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

**17.使用命令 `/iazip`（如果你使用外部主机，请仔细按照[教程](../../../../resourcepack-hosting/)）**

**18.使用命令 `/iasummon soul` 生成怪物**

![](https://i.imgur.com/1tljgbv.gif)

{% hint style="warning" %}
不要使用 BlockBench 或任何其他编辑程序打开从网站导出的动画模型，否则它可能会损坏并停止工作。
{% endhint %}

{% hint style="info" %}
你可以删除 1-2-3-4.json 文件，你不再需要它们（但你可以备份它们以备将来使用），你只需要 idle.json 文件和 png+mcmeta 文件，它们是动画文件。
{% endhint %}

## 更高级的动画：

{% embed url="https://www.youtube.com/watch?v=DflNQjB0Okk" %}

## 完整插件下载

{% embed url="https://www.spigotmc.org/resources/mobs-creaturesplus-itemsadder-addon.84384/" %}
