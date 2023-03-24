---
description: Armors textures look broken when using custom shaders mods (1.17+)
---

# Textures broken by shaders mod

{% hint style="warning" %}
**This bug has a workaround fix in ItemsAdder 3.0.3**

**Note:** this fix requires you to have **Optifine** or a **CIT mod** equivalent (like **CIT Resewn**) installed in your game.

If you see broken textures make sure you are using ItemsAdder 3.0.3 or a more recent version.\
Also make sure you regenerated your resourcepack using `/iazip` (and read the [hosting tutorial](../../plugin-usage/resourcepack-hosting/) if needed).
{% endhint %}

{% hint style="danger" %}
**Optifine** 1.19.3 and 1.19.4 are currently bugged and I cannot do anything about that.\
They don't support my fix.\
We have to wait the developer of **Optifine** to fix that issue.

This is not my fault.
{% endhint %}

![](../../.gitbook/assets/shader\_armor\_bug.png)

![](../../.gitbook/assets/144463413-21137314-66a3-41de-a834-9c6063e65e83.png)

{% embed url="https://youtu.be/cb8OAuQE6V0" %}

## What was the cause of this bug?

### Optifine issue

Optifine has a limitation which doesn't allow custom armors to work correctly if you have any custom Optifine shaders installed.

You have to disable the **Optifine** shaders temporarily or temporarily live with the issue.

I already contacted Optifine developer about this: [https://github.com/sp614x/optifine/issues/6391](https://github.com/sp614x/optifine/issues/6391)

### Iris Shaders issue

Iris has a limitation which doesn't allow custom armors to work correctly if you have any custom Iris custom shader installed.

I already contacted Iris developers about this: [https://github.com/IrisShaders/Iris/issues/1042](https://github.com/IrisShaders/Iris/issues/1042)
