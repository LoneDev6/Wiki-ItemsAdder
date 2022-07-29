---
描述: 为 NPC 使用自定义模型
---

# Citizens

## 为 NPC 应用自定义模型

该教程将指导你如何为 NPC 应用自定义模型

{% hint style="success" %}
_Itemsadder 本身就可以创建自定义实体.所以该功能不需要 Citizens 也能够正常使用._\
Citizens 为可选前置，因为有的服务器可能需要用它来创建 NPC
{% endhint %}

### 更改 NPC 模型

将 npc 的类型设置为`ZOMBIE`: \
`/npc type ZOMBIE`

{% hint style="warning" %}
不要使用 `PLAYER` 类型，否则会导致 头部/身体 旋转出现问题
{% endhint %}

使用 **ItemsAdder** 指令来更改模型:\
`/iaentity citizens model <model>`\
``示例: `/iaentity citizens model custom:barman_robot`

### 禁用音效

你可以使用 `/npc sound -n` 来禁用NPC音效, 更多信息请参阅 [Citizens wiki](https://wiki.citizensnpcs.co/Commands).\
`/npc sound -n`

### 使 NPC 注视玩家

你可以使用 `/npc look` 指令让NPC始终注视玩家，更多信息请参阅 [Citizens wiki](https://wiki.citizensnpcs.co/Commands).\

### 完成

![](../../../../.gitbook/assets/ezgif-2-31a4557026.webp)

## 播放动画

你可以使用指令来播放动画: `/iaentity citizens anim play <animation>`

![](../../../../.gitbook/assets/ezgif.com-gif-maker.webp)
