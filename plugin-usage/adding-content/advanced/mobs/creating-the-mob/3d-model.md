# 3D模型

## 创建动作模型\(闲置的动画动作\)

为了创建模型,我使用[BlockBench](https://blockbench.net/)软件,BlockBench非常容易使用.  
BlockBench的[教程](https://search.bilibili.com/all?keyword=BlockBench&from_source=webtop_search&spm_id_from=333.851)你可以在BiliBili寻找到

{% hint style="danger" %}
你必须确保将你的模型为Java Block/Item Model!不要使用Bedrock Model或Entity model!

![](../../../../../.gitbook/assets/immagine%20%2889%29%20%2815%29.png)
{% endhint %}

### 创建一个非常简单的闲置动画动作

比如,我创建了这个模型,你可以看到.

![](../../../../../.gitbook/assets/immagine%20%2857%29.png)

现在,我们要把它做成动画动作! 比如,我想让它上下浮动.

**1.保存**你的**模型**在一个临时的文件中\(在你的电脑上的任何位置\)

![](../../../../../.gitbook/assets/immagine%20%2887%29.png)

![](../../../../../.gitbook/assets/immagine%20%2882%29.png)

好,我把它叫做**1.json**并且保存在**idle**文件内.这是**动画动作**的第一帧.

**2.**返回**BlockBench**,按**CTRL+A键**选择所有

![](../../../../../.gitbook/assets/immagine%20%2878%29.png)

**按住鼠标的左键**同时点击**绿色**的箭头,**按住CTRL键** 向**上**移动一点

![](../../../../../.gitbook/assets/immagine%20%2862%29.png)

**3.再次保存**文件,但将名更改为**2.json**

**4.**做同样的事情3次\(将怪物往上移动一点\)然后再次保存文件,修改文件名中的数字.

**5.**现在我们已经完成了为我们的动画动作创建所需的框架.接下来就是打开[这个网站](https://lonedev6.github.io/animated-models/)

**6.**现在点击**图标**.加载json框架

![](../../../../../.gitbook/assets/immagine%20%2880%29.png)

**7.**点击"**Choose files\[选择文件\]...**"然后选择你的json文件和png材质.

![](../../../../../.gitbook/assets/immagine%20%2814%29.png)

![](../../../../../.gitbook/assets/immagine%20%2873%29.png)

**8.**点击**LOAD\[加载\]**

![](../../../../../.gitbook/assets/immagine%20%2883%29.png)

**9.点击**第**二个图标**把4个文件**拖放**到最下面一行

![](../../../../../.gitbook/assets/immagine%20%2879%29.png)

![](../../../../../.gitbook/assets/immagine%20%2861%29.png)

**10.**应该像这样

![](../../../../../.gitbook/assets/immagine%20%2874%29.png)

**11.**再次拖放它们,但要反向进行拖放.\(3-2**,我忽略了1和4,因为它们对后面的动画来说是没用的**\)

![](../../../../../.gitbook/assets/immagine%20%2885%29.png)

**12.**按**play\[播放\]**按钮\(在**左下角**\)来**预览**你的动画动作

![](https://i.imgur.com/zslbD0G.gif)

**13.**按"**Export\[导出\]**"按钮\(**屏幕**的**右上方**\)像截图中那样进行配置,然后再按"**Export\[导出\]**"按钮.

![](../../../../../.gitbook/assets/immagine%20%2866%29.png)

**14.**现在你将会有一个**压缩的**动画动作文件, **下载**完毕后**打开**它.

**15.在**你的**ItemsAdder**文件`data\resource_pack\`解压

**16.**像这样设置怪物配置,使用空闲动画而不是卡住的动画动作: `"mob/soul/idle"`

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

**17.**使用指令`/iazip` \(如果你使用的是external\_host\[外托管\],请查看该[教程](../../../../resourcepack-hosting/)\)

**18.**生成怪物,使用指令`/iasummon soul`

![](https://i.imgur.com/1tljgbv.gif)

{% hint style="warning" %}
请不要使用BlockBench或任何其他编辑程序来打开动画模型.\(从网站导出后就不要打开它\).否则它可能会损坏并且停止工作.
{% endhint %}

{% hint style="info" %}
接下来你可以删除1-2-3-4.json文件,因为你不再需要用到它们.\(你可以备份起来以便将来使用\),你只需要idle.json文件和png+mcmeta文件,因为这就是动画动作文件.
{% endhint %}

## 更高级的动画:

{% embed url="https://www.youtube.com/watch?v=DflNQjB0Okk" caption="" %}

## 完整扩展下载

{% embed url="https://www.spigotmc.org/resources/mobs-creaturesplus-itemsadder-addon.84384/" caption="" %}

