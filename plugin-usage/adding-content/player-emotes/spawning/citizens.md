---
描述: 为 NPC 使用自定义模型
---

# Citizens（NPC）

## 为 NPC 制作动画

你可以将动画应用至 任何NPC中，详情请继续阅读该教程

{% hint style="success" %}
_Itemsadder 本身就可以创建自定义实体.所以该功能不需要 Citizens 也能够正常使用._\
Citizens 为可选前置，因为有的服务器可能需要用它来创建 NPC
{% endhint %}

### 为 NPC 更换皮肤并使用自定义动画

使用 **ItemsAdder** 指令来更改皮肤:\
`/iaentity citizens playerskin <playerName|skinUrl>`\
``示例:

* `/iaentity citizens playerskin LoneDev`
* `/iaentity citizens playerskin` [`https://minesk.in/8b4bf861ea544edd8529707276d24853`](https://minesk.in/8b4bf861ea544edd8529707276d24853)

### 可选：获取/上传自定义皮肤

{% content-ref url="../creation.md" %}
[creation.md](../creation.md)
{% endcontent-ref %}

### 使 NPC 注视玩家

你可以使用 `/npc look` 指令让NPC始终注视玩家，更多信息请参阅 [Citizens wiki](https://wiki.citizensnpcs.co/Commands).\


### 完成

{% embed url="https://youtu.be/phr3GbGgJys" %}

## 播放动画

你可以使用指令来播放动画: `/iaentity citizens anim play <animation>`

