---
description: Armors textures look broken (1.17)
---

# Armors textures bugged

{% hint style="warning" %}
If you see broken textures make sure you're not using any **custom shader.**
{% endhint %}

{% tabs %}
{% tab title="With shaders (bug)" %}
![](../.gitbook/assets/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3533333431333137313430333239323731322f3931353939333232363736313130393531342f323032312d31322d30325f31362e34372e34302e706e67.png)
{% endtab %}

{% tab title="Without shaders (no bug)" %}
![](../.gitbook/assets/144463413-21137314-66a3-41de-a834-9c6063e65e83.png)
{% endtab %}
{% endtabs %}

## Optifine issue

Optifine has a limitation which doesn't allow custom armors to work correctly if you have any custom Optifine shader installed.

You have to disable the **Optifine** shaders temporarily or temporarily live with the issue.

I already contacted Optifine developer about this: [https://github.com/sp614x/optifine/issues/6391](https://github.com/sp614x/optifine/issues/6391)

## Iris Shaders issue

Iris has a limitation which doesn't allow custom armors to work correctly if you have any custom Iris custom shader installed.

I already contacted Iris developers about this: [https://github.com/IrisShaders/Iris/issues/1042](https://github.com/IrisShaders/Iris/issues/1042)
