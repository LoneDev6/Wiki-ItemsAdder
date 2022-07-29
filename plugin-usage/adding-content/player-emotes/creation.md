# Creation

## 安装 Blockbench 扩展

{% hint style="warning" %}
### Before continuing:

* Make sure you're running **Blockbench 4.2.5** or **greater**
* Make sure you're running the latest ItemsAdder and latest ItemsAdder Blockbench extension
{% endhint %}

[下载 Blockbench](https://www.blockbench.net/) (不要使用网页版).

![](<../../../.gitbook/assets/image (98) (1).png>)

\
[Download the zip](https://github.com/LoneDev6/itemsadder-entity/releases) `iaentitymodel.zip`

![](<../../../.gitbook/assets/image (61).png>)

Extract it somewhere, then open **Blockbench** and click on File -> Plugins.

![](<../../../.gitbook/assets/image (48) (1) (1).png>)

Click on the icon to load plugins from file, then select the file `iaentitymodel.js`.

![](<../../../.gitbook/assets/image (74) (1) (1).png>)

Press OK

![](<../../../.gitbook/assets/image (71).png>)

## 启用表情动作

打开 `config.yml` 并启用下列两个选项，并使用指令 `/iazip` 生成新的资源包

{% code title="config.yml" %}
```yaml
entities:
  custom-entitites:
    enabled: true
    emotes: true
```
{% endcode %}

## Opening the animations editor

Open the file `player.iaentitymodel` using Blockbench, you can find this file after running `/iazip` for the first time.

`ItemsAdder\data\resource_pack\assets\minecraft\animations\player.iaentitymodel`

You can notice a lot of example animations on the left.

![](<../../../.gitbook/assets/image (51).png>)

### Creating your own animations file

You can create as many as animations files you want (**ItemsAdder 3.2.1+**).

![](<../../../.gitbook/assets/image (62).png>)

![](<../../../.gitbook/assets/image (82).png>)

Delete all the emotes and edit/rename the ones you want. They are useful only as base for your personal emotes.

![](<../../../.gitbook/assets/image (68).png>)

Now create an emote and save your `.iaentitymodel` project file into this folder:\
`ItemsAdder\data\resource_pack\assets\minecraft\animations\`

![](<../../../.gitbook/assets/image (95).png>)

Then continue following the tutorial to know how to export the emotes into ItemsAdder.

### Apply the changes to ItemsAdder

Click on the **ItemsAdder** tab and press **Export**.

![](<../../../.gitbook/assets/image (100).png>)

You should get a success message.

![](<../../../.gitbook/assets/image (81) (1).png>)

{% hint style="success" %}
Use the command `/iareload` to load the new animation.\
There is <mark style="color:green;">no need</mark> to use `/iazip`!
{% endhint %}

## Playing the animations

Use the emote command: `/iaemote <emote> [player]` or `/emote <emote> [player]`

## 表情动作权限

使用指令 `/iaemote` 的权限为：`ia.user.iaemote`

使用某个表情动作： `ia.user.iaemote.use.<emote>`\
``例如: `ia.user.iaemote.use.yes`
