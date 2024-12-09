---
description: Citizens NPCs 的自定义模型
---

# Citizens

## 重新设置 Citizens NPC 的外观

你可以使用自定义模型作为任何 Citizens NPC 的皮肤。

{% hint style="success" %}
这个插件不需要 Citizens 才能工作，但有些服务器可能需要使用它来创建 NPC。
{% endhint %}

### 更改模型

将 NPC 类型设置为 `ZOMBIE`：\
`/npc type ZOMBIE`

{% hint style="warning" %}
不要使用 `PLAYER` 作为类型，它会导致头部/身体旋转问题。
{% endhint %}

然后使用 **ItemsAdder** 命令更改皮肤：\
`/iaentity citizens <id|selected> model <model>`\
在这个例子中：`/iaentity citizens <id|selected> model custom:barman_robot`

### 静音

你可以使用此命令静音 NPC，更多信息请参见 [Citizens wiki](https://wiki.citizensnpcs.co/Commands)。\
`/npc sound -n`

### 使头部旋转

你可以使用此命令让 NPC 看向附近的玩家，更多信息请参见 [Citizens wiki](https://wiki.citizensnpcs.co/Commands)。\
`/npc look`

### 完成

![](../../../../.gitbook/assets/ezgif-2-31a4557026.webp)

## 播放动画

你可以使用此命令播放动画：`/iaentity citizens <id|selected> anim play <animation>`

![](../../../../.gitbook/assets/ezgif.com-gif-maker.webp)
