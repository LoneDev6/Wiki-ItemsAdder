---
description: Armors textures look broken when using custom shaders mods (1.17+)
---

# Textures broken by shaders mod

{% hint style="warning" %}
### This bug was fixed in ItemsAdder 3.0.3

If you see broken textures make sure you are using ItemsAdder 3.0.3 or a more recent version.\
Also make sure you regenerated your resourcepack using `/iazip` (and read the [hosting tutorial](../../plugin-usage/resourcepack-hosting/) if needed).
{% endhint %}

{% tabs %}
{% tab title="With shaders (bug)" %}
![](../../.gitbook/assets/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3533333431333137313430333239323731322f3931353939333232363736313130393531342f323032312d31322d30325f31362e34372e34302e706e67.png)
{% endtab %}

{% tab title="Without shaders (no bug)" %}
![](../../.gitbook/assets/144463413-21137314-66a3-41de-a834-9c6063e65e83.png)
{% endtab %}

{% tab title="ItemsAdder 3.0.3 update" %}
{% embed url="https://youtu.be/cb8OAuQE6V0" %}
{% endtab %}
{% endtabs %}

## What was the cause of this bug?

### Optifine issue

Optifine has a limitation which doesn't allow custom armors to work correctly if you have any custom Optifine shader installed.

You have to disable the **Optifine** shaders temporarily or temporarily live with the issue.

I already contacted Optifine developer about this: [https://github.com/sp614x/optifine/issues/6391](https://github.com/sp614x/optifine/issues/6391)

### Iris Shaders issue

Iris has a limitation which doesn't allow custom armors to work correctly if you have any custom Iris custom shader installed.

I already contacted Iris developers about this: [https://github.com/IrisShaders/Iris/issues/1042](https://github.com/IrisShaders/Iris/issues/1042)
