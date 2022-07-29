# 创建表情动作

## 安装 Blockbench 扩展

{% hint style="warning" %}
### 在继续阅读教程之前:

* 确保 Blockbench 版本为 **Blockbench 4.2.5+**
* 确保 你正在使用最新版本的 ItemsAdder 以及 Itemsadder 的 Blockbench 扩展
{% endhint %}

[下载 Blockbench](https://www.blockbench.net/) (不要使用网页版).

![](<../../../.gitbook/assets/image (98) (1).png>)

\
[下载](https://github.com/LoneDev6/itemsadder-entity/releases) `iaentitymodel.zip`

![](<../../../.gitbook/assets/image (61).png>)

将压缩包解压，接着打开 **Blockbench** 并点击 File（文件） -> Plugins（插件）.

![](<../../../.gitbook/assets/image (48) (1) (1).png>)

点击加载图标 导入扩展  `iaentitymodel.js`.

![](<../../../.gitbook/assets/image (74) (1) (1).png>)

完成导入

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

## 选择动画模式

在第一次使用 `/iazip` 后可以在 `ItemsAdder\data\resource_pack\assets\minecraft\animations\player.iaentitymodel` 中找到 `player.iaentitymodel`
接着在 Blockbench 中打开 `player.iaentitymodel` 文件,

你可以发现在左侧有很多的示例动画

![](<../../../.gitbook/assets/image (51).png>)

### 创建自定义表情动作

你可以创建任意数量的动画文件 (**ItemsAdder 3.2.1+**)。

![](<../../../.gitbook/assets/image (62).png>)

![](<../../../.gitbook/assets/image (82).png>)

该预置只能作为你自定义表情动作的基础（或示例），你可以删除所有表情或 编辑/重命名 这些表情. 

![](<../../../.gitbook/assets/image (68).png>)

现在创建一个表情并将你的 `.iaentitymodel` 项目文件保存该文件夹中：\
`ItemsAdder\data\resource_pack\assets\minecraft\animations\`

![](<../../../.gitbook/assets/image (95).png>)

接着阅读教程了解如何将表情导出至 ItemsAdder.

### 应用更改至 Itemsadder

点击 **ItemsAdder** 选项 并选择 **Export（导出模型）**.

![](<../../../.gitbook/assets/image (100).png>)

成功导出

![](<../../../.gitbook/assets/image (81) (1).png>)

{% hint style="success" %}
使用指令 `/iareload` 来加载新的表情动作.\
<mark style="color:green;">不需要</mark> 使用指令 `/iazip`!
{% endhint %}

## 播放表情动作

使用指令: `/iaemote <emote> [player]` 或 `/emote <emote> [player]`

## 表情动作权限

使用指令 `/iaemote` 的权限为：`ia.user.iaemote`

使用某个表情动作： `ia.user.iaemote.use.<emote>`\
``例如: `ia.user.iaemote.use.yes`
