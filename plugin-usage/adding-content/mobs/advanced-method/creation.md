# 创建自定义怪物

## 如何导入自定义实体模型和动画

只需安装 Blockbench 扩展, 您就可以非常轻松地导入自定义模型.

## 安装 Blockbench 扩展

{% hint style="warning" %}
### 在继续阅读教程之前:

* 确保 Blockbench 版本为 **Blockbench 4.2.5+**
* 确保 你正在使用最新版本的 ItemsAdder 以及 Itemsadder 的 Blockbench 扩展
{% endhint %}

[下载 Blockbench](https://www.blockbench.net/) (不要使用 Web 应用).

![](<../../../../.gitbook/assets/image (98) (1).png>)

\
[下载压缩包](https://github.com/LoneDev6/itemsadder-entity/releases) `iaentitymodel.zip`

![](<../../../../.gitbook/assets/image (61).png>)

将其解压到某个位置, 然后打开 **Blockbench** 应用并依次点击 File（文件） -> Plugins（插件）.

![](<../../../../.gitbook/assets/image (48) (1) (1).png>)

点击 `load plugins from file（从文件中加载插件）` 图标, 然后选择文件 `iaentitymodel.js`.

![](<../../../../.gitbook/assets/image (74) (1) (1).png>)

点击 OK 选项

![](<../../../../.gitbook/assets/image (71).png>)

## 转换模型

{% hint style="danger" %}
在使用该工具转换之前请记得 <mark style="color:red;">**备份**</mark> 您的 `.bbmodel` 模型文件!
{% endhint %}

在 Blockbench 中打开您的 `.bbmodel` 模型项目, 然后依次点击 File -> Convert Project

![](<../../../../.gitbook/assets/image (54).png>)

![](<../../../../.gitbook/assets/image (94) (1).png>)

在 **Format（格式）** 设置中选择 "**ItemsAdder Entity Model**", 然后点击 **Confirm**.\
现在, 将新转换的模型文件保存在一个 **您仅在其中放置此文件** 的文件夹中.

如图所示, 您会得到这样一个东西:

![](<../../../../.gitbook/assets/image (60) (1) (1) (1).png>)

### 配置模型

现在, 您可以根据自己的偏好来配置模型. ItemsAdder 扩展自动为您决定了一些设置. 但您可能需要更改它们.\
点击工具栏的 **ItemsAdder** 图标, 然后点击 **Settings**.

![](<../../../../.gitbook/assets/image (57).png>)

在这里, 您需要为自定义实体设定一个 namespace.\
默认值是 `custom`, 但具体应该由您自行决定, 例如: `my_entities`, `hell_mobs`, `npcs`...

![](<../../../../.gitbook/assets/image (99) (1) (1).png>)

此外, 可能需要您更改的另一项设置是: "**Model Scaling Mode**":

* Max Model size 提供 7x7x7 方块大小的模型，但仅限于缩小
* Max Scaling range 提供 3.125倍 的缩放范围，但限制最大的缩放模型尺寸为 3x3x3

仅当为动画中的骨骼使用尺寸缩放功能时才需要更改 "**Max Model Size**".

![](<../../../../.gitbook/assets/image (66).png>)

### 导出模型

点击工具栏的 **ItemsAdder** 图标, 然后点击 **Export**.

![](<../../../../.gitbook/assets/image (56).png>)

您应该会收到一条成功导出的消息提示.

![](<../../../../.gitbook/assets/image (81) (1).png>)

现在打开模型所在的文件夹, 并复制/剪切新生成的文件夹 `assets`.

![](<../../../../.gitbook/assets/image (83).png>)

将其粘贴在 ItemsAdder 所在路径 `plugins/ItemsAdder/data/resource_pack/` 下的 `assets` 文件夹 .&#x20;

### 创建游戏内实体配置

现在, 请在路径 `plugins/ItemsAdder/data/items_packs/` 中创建一个新文件夹, 他应该是您的 namespace 文件夹. 
例如, 我的 namespace 名称为 `custom,` 则对应的路径应该是 `plugins/ItemsAdder/data/items_packs/custom/`.

创建一个以 `.yml` 为后缀名的文件, 并根据需求调用它, 在本例子中, 我将为每个实体单独创建文件, to keep things organized.

![](<../../../../.gitbook/assets/image (72).png>)

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

在本例子中，我的自定义实体将使用 **僵尸** 作为其 AI 的基本实体.\
根据您的需求, 您可以使用任何（有生命的）实体作为其基本实体.

### 召唤实体

请使用命令: `/iaentity summon <实体名>`

## 提醒

{% hint style="info" %}
请保持模型尽量简单, 不要创建太多的骨骼. 不要忘记这是一个像素游戏! 详情可参阅 [Minecraft 美术风格指导](../../../minecraft-style-guide.md).
{% endhint %}
