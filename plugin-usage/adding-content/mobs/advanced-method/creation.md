# Creation

## 如何导入自定义实体模型和动画

只需安装 Blockbench 扩展, 您就可以非常轻松地导入自定义模型.

## 安装 Blockbench 扩展

{% hint style="warning" %}
### 在此之前:

* 确保您正在运行的是 **Blockbench 4.1.5** 或 **更高版本**
* 确保您正在运行的是 ItemsAdder 和 ItemsAdder Blockbench 扩展的最新版本
{% endhint %}

[下载 Blockbench](https://www.blockbench.net/) (不要使用 Web 应用).

![](<../../../../.gitbook/assets/image (98) (1).png>)

\
[下载压缩包](https://github.com/LoneDev6/itemsadder-entity/releases) `iaentitymodel.zip`

![](<../../../../.gitbook/assets/image (61).png>)

将其解压到某个位置, 然后打开 **Blockbench** 应用并依次点击 File -> Plugins.

![](<../../../../.gitbook/assets/image (48) (1) (1).png>)

点击 `load plugins from file` 图标, 然后选择文件 `iaentitymodel.js`.

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

Select "**ItemsAdder Entity Model**" in the **Format** setting, then press **Confirm**.\
Now save the new converted model file in a new folder where you will put only this file.

You will have something like that

![](<../../../../.gitbook/assets/image (60) (1) (1) (1).png>)

### Configuring the model

Now you can configure your model based on your preferences. The ItemsAdder extension automatically decided some settings for you but you might need to change them.\
Click on the **ItemsAdder** tab and press **Settings**.

![](<../../../../.gitbook/assets/image (57).png>)

Here you have to decide a namespace for your custom entities.\
The default one is `custom`, but you should decide your own, for example `my_entities`, `hell_mobs`, `npcs`...

![](<../../../../.gitbook/assets/image (99) (1) (1).png>)

The other thing you might need to change is the "**Model Scaling Mode**":

* Max Model size provides 7x7x7 block wide models but limits scaling to shrinking only.
* Max Scaling range provides shrinking and growing up to 3.125x in size, but limits the maximum model size to 3x3x3 blocks

Change "**Max Model Size**"  only if you have animated the size of some bones.

![](<../../../../.gitbook/assets/image (66).png>)

### Export the model

Click on the **ItemsAdder** tab and press **Export**.

![](<../../../../.gitbook/assets/image (56).png>)

You should get a success message.

![](<../../../../.gitbook/assets/image (81) (1).png>)

Now open the folder where you have your model and copy/cut the new generated folder `assets`.

![](<../../../../.gitbook/assets/image (83).png>)

Paste the `assets` folder inside the ItemsAdder folder `plugins/ItemsAdder/data/resource_pack/`.&#x20;

### Creating the ingame entity configuration

Now create a new folder inside `plugins/ItemsAdder/data/items_packs/`, it's your namespace folder. For example mine is `custom,` so the path is `plugins/ItemsAdder/data/items_packs/custom/`.

Create a new `.yml` configuration file and call it as you prefer, in this example I use one file per-entity, to keep things organized.

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

In this example my custom entity will use a ZOMBIE as base entity for its AI.\
You can use any living entity as base entity, depending on your needs.

### Summoning the entity

Use the summon command: `/iaentity summon <entity>`

## Notes

{% hint style="info" %}
Do not create too many bones, keep the model simple, remember this is a blocky pixelated game, use [its style](../../../minecraft-style-guide.md).
{% endhint %}
