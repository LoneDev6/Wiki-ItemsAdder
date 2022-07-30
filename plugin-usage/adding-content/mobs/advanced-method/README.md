---
描述: 创建 自定义怪物/实体 的新进阶方法.
---

# 进阶方法

{% hint style="warning" %}
该方法目前处于 beta 版, 仅在 ItemsAdder v3.0+ 版本可使用.
{% endhint %}

{% hint style="warning" %}
不要滥用怪物生成.\
纵使 ItemsAdder 有非常好的优化, 但您如果疯狂到在玩家面前生成 600+ 实体, 依旧会造成很严重的滞后.
{% endhint %}

![](../../../../.gitbook/assets/ezgif.com-gif-maker.webp)

{% embed url="https://youtu.be/cQpIqExVpR0" %}
进阶动画功能
{% endembed %}

### 主要特点

* [Blockbench](https://www.blockbench.net/) 转换模型的扩展
* 完全异步执行, 不会出现 TPS 下降
* 针对大型服务器进行优化
* Damage animation
* 实体着火时的火焰动画
* Animate size of bones
* 设置不受角度限制的骨骼旋转动画
* Multiple mount seats
* 在动画中播放声音和粒子特效
* 显示实体手持设备
* 可自定义的碰撞箱
* MythicMobs 兼容
* Citizens 兼容

### 局限性

* 只有当怪物的头部离其身体的中心在一定距离内, 头骨旋转才会生效.
* 在飞行生物上按下 SHIFT 使其向下降落的功能只在 1.15 / 1.17 / 1.18 的客户端生效，, 因为 1.16 客户端存在 BUG: [https://bugs.mojang.com/browse/MC-202202](https://bugs.mojang.com/browse/MC-202202) .\
  1.16 clients will see players flying if they press SHIFT while on a flying entity while they should still be riding the entity.
* 该插件会使用多个实体来创建动画. \
  网络延迟可能会带来一些轻微的动画问题. \
  如果您在玩家周围创建过多的实体, 且您的实体模型有很多骨骼, 则有可能会对服务器带来一些滞后.\
  (NOTE: 插件经过高度优化, 只要您的服务器不是 **土豆** 就不会出现延迟)
* 无法修改 Citizens NPCs 的碰撞箱大小, 这是 Citizens 插件本身的限制 &#x20;
