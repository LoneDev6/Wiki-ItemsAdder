---
description: 使用自定义光影模组时盔甲纹理看起来破损（1.17+）
---

# 光影模组导致的纹理破损

{% hint style="warning" %}
**ItemsAdder 3.0.3 中有此问题的解决方法**

**注意：** 此修复需要你在游戏中安装 **Optifine** 或等效的 **CIT 模组**（如 **CIT Resewn**）。

如果你看到破损的纹理，请确保你使用的是 ItemsAdder 3.0.3 或更高版本。\
还要确保你使用 `/iazip` 重新生成了资源包（如有需要，请阅读[托管教程](../../plugin-usage/resourcepack-hosting/)）。
{% endhint %}

{% hint style="danger" %}
**Optifine** 1.19.3 和 1.19.4 目前有问题，我对此无能为力。\
它们不支持我的修复。\
我们只能等待 **Optifine** 开发者修复这个问题。

这不是我的错。
{% endhint %}

![](../../.gitbook/assets/shader\_armor\_bug.png)

![](../../.gitbook/assets/144463413-21137314-66a3-41de-a834-9c6063e65e83.png)

{% embed url="https://youtu.be/cb8OAuQE6V0" %}

## 这个问题的原因是什么？

### Optifine 问题

Optifine 有一个限制，如果你安装了任何自定义 Optifine 光影，自定义盔甲将无法正常工作。

你必须暂时禁用 **Optifine** 光影或暂时忍受这个问题。

我已经联系了 Optifine 开发者：[https://github.com/sp614x/optifine/issues/6391](https://github.com/sp614x/optifine/issues/6391)

### Iris Shaders 问题

Iris 有一个限制，如果你安装了任何自定义 Iris 光影，自定义盔甲将无法正常工作。

我已经联系了 Iris 开发者：[https://github.com/IrisShaders/Iris/issues/1042](https://github.com/IrisShaders/Iris/issues/1042)
