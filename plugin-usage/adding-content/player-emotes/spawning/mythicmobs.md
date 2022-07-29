---
描述: 为 Mythicmobs 怪物使用自定义动作
---

# Mythicmobs

## 为 Mythicmobs 怪物更换皮肤

你可以为 Mythicmobs 怪物使用自定义玩家皮肤.
详情教学请往下阅读.
{% hint style="success" %}
该功能不需要 Mythicmobs 也能使用.\
所以 Mythicmobs 为可选前置，因为有的服务器可能需要该插件来创建自定义BOSS之类的怪物.

{% endhint %}

### 为怪物模型更换皮肤并使用自定义动作

在 `plugins/MythicMobs/Mobs/custom_player.yml` 路径中创建一个新的 Mythicmobs 怪物配置.\
``(文件名称自定).

{% hint style="warning" %}
不要使用 `PLAYER` 类型，否则会导致 头部/身体 旋转出现问题
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
  - customentity{death=death-3} @self ~onSpawn
```
{% endcode %}

在该示例中，我将 Mythicmobs怪物的皮肤更改为 **Notch**的皮肤，并且当怪物死亡时播放 名为 **death-3** 的动画

![](<../../../../.gitbook/assets/image (74).png>)

### 自定义皮肤

{% content-ref url="../custom-skin.md" %}
[custom-skin.md](../custom-skin.md)
{% endcontent-ref %}

### 技能

* `customentity{playerskin=SKIN}` 更改皮肤
* `customentity{idle=ANIMATION}` 静止时的动画
* `customentity{walk=ANIMATION}` 行走时的动画
* `customentity{attack=ANIMATION}` 攻击时播放的动画
* `customentity{death=ANIMATION}` 死亡时播放的动画
* `customentity{play=ANIMATION}` 播放自定义动画
* `customentity{stop=ANIMATION}` 停止播放动画

### 完成

![](<../../../../.gitbook/assets/ezgif.com-gif-maker (1).webp>)
