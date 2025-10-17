---
icon: file-image
---

# graphics and item\_model on 1.21.3 and lower

{% hint style="warning" %}
Please do not report any missing texture or issue about that.
{% endhint %}

`'PLAYER' won't be able to see modern items 'graphics'.`

This error is thrown when you try to join on a server using a client that doesn't support the new item graphics (generated automatically using `graphics` property or using `item_model`).

Consider limiting client versions to 1.21.4+ or stop using the new `graphics` or `item_model` properties.&#x20;

<figure><img src="../.gitbook/assets/image (267).png" alt=""><figcaption></figcaption></figure>
