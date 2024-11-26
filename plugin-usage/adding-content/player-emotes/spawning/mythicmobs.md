---
description: Mythicmobs 怪物的自定义 3D 模型
---

# Mythicmobs

## 重新设计 Mythicmob 怪物

你可以为任何 Mythicmob 怪物使用自定义玩家皮肤。

{% hint style="success" %}
这个插件不需要 Mythicmobs 才能工作，但有些服务器可能需要使用它来创建自定义 Boss 和类似的内容。
{% endhint %}

### 更改模型

在以下路径创建一个新的 Mythicmobs 怪物配置文件：`plugins/MythicMobs/Mobs/custom_player.yml`\
（你可以决定文件名）。

{% hint style="warning" %}
不要使用 `PLAYER` 作为类型，它会导致头部/身体旋转问题。
{% endhint %}

{% code title="custom_player.yml" %}
```yaml
custom_player:
  Type: ZOMBIE
  Display: '&aCustom Player'
  Health: 10
  Damage: 2
  Options:
    MovementSpeed: 0
    Silent: true
  Skills:
  - customentity{playerskin=https://minesk.in/5f1e7ff6409e428bb500cc9315bf7ffb} @self ~onSpawn
```
{% endcode %}

在这个例子中，我将 Mythicmobs 怪物的皮肤更改为 **Notch** 的皮肤。

![](<../../../../.gitbook/assets/image (74).png>)

### 自定义皮肤

{% content-ref url="../custom-skin.md" %}
[自定义皮肤](../custom-skin.md)
{% endcontent-ref %}

### 技能

* `customentity{playerskin=SKIN}` 更改玩家皮肤
* `customentity{idle=ANIMATION}` 更改空闲动画
* `customentity{walk=ANIMATION}` 更改行走动画
* `customentity{attack=ANIMATION}` 更改攻击动画
* `customentity{death=ANIMATION}` 更改死亡动画
* `customentity{play=ANIMATION}` 立即播放动画
* `customentity{stop=ANIMATION}` 停止当前动画

### 完成

![](<../../../../.gitbook/assets/notch_attack.webp>)
