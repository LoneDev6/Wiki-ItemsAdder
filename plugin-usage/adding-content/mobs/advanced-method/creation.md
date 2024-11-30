# 创建

## 如何导入自定义实体模型和动画

你可以非常容易地导入自定义模型，只需安装 Blockbench 扩展。

## 安装 Blockbench 扩展

{% hint style="warning" %}
**继续之前：**

* 确保你运行的是 **Blockbench 4.1.5** 或更高版本
* 确保你运行的是最新的 ItemsAdder 和最新的 ItemsAdder Blockbench 扩展
{% endhint %}

[下载 Blockbench](https://www.blockbench.net/)（不要使用网页版）。

![](<../../../../.gitbook/assets/image (98) (1).png>)

\
[下载 zip 文件](https://github.com/LoneDev6/itemsadder-entity/releases) `iaentitymodel.zip`

![](<../../../../.gitbook/assets/image (61).png>)

将其解压到某个地方，然后打开 **Blockbench** 并点击 文件 -> 插件。

![](<../../../../.gitbook/assets/image (48) (1) (1).png>)

点击图标从文件加载插件，然后选择文件 `iaentitymodel.js`。

![](<../../../../.gitbook/assets/image (74) (1) (1).png>)

按确定

![](<../../../../.gitbook/assets/image (71).png>)

## 转换模型

{% hint style="danger" %}
记得在使用此工具之前对你的 `.bbmodel` 文件进行<mark style="color:red;">**备份**</mark>！
{% endhint %}

用 Blockbench 打开你的 `.bbmodel` 项目，然后点击 File -> Convert Project

![](<../../../../.gitbook/assets/image (54).png>)

![](<../../../../.gitbook/assets/image (94) (1).png>)

在 **格式** 设置中选择 "**ItemsAdder 实体模型**"，然后按 **确认**。\
现在将新转换的模型文件保存到一个新文件夹中，你将只放置这个文件。

你将得到如下内容

![](<../../../../.gitbook/assets/image (60) (1) (1) (1).png>)

### 配置模型

现在你可以根据自己的喜好配置模型。ItemsAdder 扩展自动为你决定了一些设置，但你可能需要更改它们。\
点击 **ItemsAdder** 选项卡并按 **设置**。

![](<../../../../.gitbook/assets/image (57).png>)

在这里你需要为你的自定义实体决定一个命名空间。\
默认的是 `custom`，但你应该决定自己的，例如 `my_entities`，`hell_mobs`，`npcs`...

![](<../../../../.gitbook/assets/image (99) (1) (1).png>)

你可能需要更改的另一件事是 "**模型缩放模式**"：

* 最大模型尺寸提供 7x7x7 方块宽的模型，但限制缩放只能缩小。
* 最大缩放范围提供缩小和放大至 3.125 倍的尺寸，但限制最大模型尺寸为 3x3x3 方块

仅在你动画化了一些骨骼的尺寸时更改 "**最大模型尺寸**"。

![](<../../../../.gitbook/assets/image (66).png>)

### 导出模型

点击 **ItemsAdder** 选项卡并按 **Export**。

![](<../../../../.gitbook/assets/image (56).png>)

你应该会收到成功消息。

![](<../../../../.gitbook/assets/image (81) (1).png>)

现在打开你有模型的文件夹并复制/剪切新生成的文件夹 `assets`。

![](<../../../../.gitbook/assets/image (83).png>)

现在在 `ItemsAdder/contents/` 中创建一个新文件夹，这是你的命名空间文件夹。例如我的命名空间是 `custom`，所以路径是 `ItemsAdder/contents/custom/`。

将 `assets` 文件夹粘贴到 ItemsAdder 文件夹 `ItemsAdder/contents/custom/resourcepack/` 中。

### 创建游戏内实体配置

在 `ItemsAdder/contents/custom/configs/` 中创建一个新的 `.yml` 配置文件，并根据你的喜好命名它，在这个例子中我为每个实体使用一个文件，以保持组织有序。

{% code title="barman_robot.yml" %}
```yaml
info:
  namespace: custom
entities:
  barman_robot:
    display_name: "Barman Robot"
    type: ZOMBIE
    model_folder: entity/barman_robot
    silent: true
    can_sun_burn: false
    speed:
      movement: 1
      flying: 0
    max_health: 20
      
```
{% endcode %}

在这个例子中，我的自定义实体将使用 ZOMBIE 作为其 AI 的基础实体。\
你可以根据需要使用任何生物实体作为基础实体。

### 召唤实体

使用召唤命令：`/iaentity summon <entity>`

## 注意事项

{% hint style="info" %}
不要创建太多骨骼，保持模型简单，记住这是一个方块像素游戏，使用[它的风格](broken-reference)。
{% endhint %}
