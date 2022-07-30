# 3D model

## Creating the animated model (idle animation)

我将使用 [BlockBench](https://blockbench.net/) 创建一个模型, 这个工具简单易用也很高效.\
BlockBench [tutorials ](https://www.youtube.com/results?search\_query=blockbench+tutorial)可以在 YouTube 上找到.
（国内一般上不去, 要么科学上网, 要么看 Bilibili）

{% hint style="danger" %}
您必须确保创建的模型为 Java Block/Item 模型, 而非 Bedrock（基岩版） 模型 或 Entity（实体） 模型!

![](<../../../../../.gitbook/assets/immagine (89) (1) (1) (1) (1) (1) (1) (1) (1) (2).png>)
{% endhint %}

### 创建一个非常简单的待机动画

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

**Hold left mouse button** while cliking on the **GREEN** arrow, **hold CTRL** and **move** the mouse **up** a little bit

![](<../../../../../.gitbook/assets/immagine (58).png>)

**3.Save** the file again but change the name to **2.json**

**4.**Do the same thing 3 times (move the mob a little bit up) and save the file again increasing the number in its file name.

**5.**Now we have finished creating the needed frames for our animation. Open [this website](https://lonedev6.github.io/animated-models/)

**6.**Now **click** on the **icon** to load our json frames

![](<../../../../../.gitbook/assets/immagine (68).png>)

**7.**Click on "**Choose files...**" and select your json files and the png texture

![](<../../../../../.gitbook/assets/immagine (77).png>)

![](<../../../../../.gitbook/assets/immagine (69).png>)

**8.**Click on **LOAD**

![](<../../../../../.gitbook/assets/immagine (70).png>)

**9.Click** the **second icon** and **drag** and **drop** the **4 files** to the bottom line

![](<../../../../../.gitbook/assets/immagine (71).png>)

![](<../../../../../.gitbook/assets/immagine (72).png>)

**10.**You should have them like that

![](<../../../../../.gitbook/assets/immagine (73).png>)

**11.**Drag and drop them again but in reverse (3-2**, I skipped 1 and 4 because they would be useless for the animation**)

![](<../../../../../.gitbook/assets/immagine (75).png>)

**12.**Press the **play** button (on the **bottom left**) to **preview** the animation

![](https://i.imgur.com/zslbD0G.gif)

**13.** Press "**Export**" button (**top right** of the **screen**) and configure it like in the screenshot, then press "**Export**" again.

![](<../../../../../.gitbook/assets/immagine (76).png>)

**14.**Now you will have a **zip** file with the animation, **download** it and **open** it.

**15.Extract** the zip inside your **ItemsAdder** folder `data\resource_pack\`

**16.**Set your mob configuration like this, to use the idle animation and not the stuck one: `"mob/soul/idle"`

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

**17.**Use the command `/iazip` (if you're using external-host please follow the [tutorial ](../../../../resourcepack-hosting/)carefully)

**18.**spawn the mob using `/iasummon soul`

![](https://i.imgur.com/1tljgbv.gif)

{% hint style="warning" %}
Do not open the animated model (exported from the website) with BlockBench or any other editing program or it will probably break and stop working.
{% endhint %}

{% hint style="info" %}
You can delete the 1-2-3-4.json files, you don't need them anymore (but you can backup them for future usage), you only need the idle.json file and the png+mcmeta files which are the animated files.
{% endhint %}

## More advanced animations:

{% embed url="https://www.youtube.com/watch?v=DflNQjB0Okk" %}

## Full addon download

{% embed url="https://www.spigotmc.org/resources/mobs-creaturesplus-itemsadder-addon.84384/" %}

