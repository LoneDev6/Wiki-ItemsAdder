---
icon: file-png
---

# 2D Icon

{% hint style="warning" %}
This is made for clients with version lower than 1.21.4.

ItemsAdder 4.0.13+ and Minecraft 1.21.4+ support a new way of making 2D icons.\
[Read more here](../modern-items-creation.md#icon).
{% endhint %}

{% hint style="warning" %}
This feature requires Minecraft 1.21.2 clients or greater (server version is not important).

To support older clients refer to the other tutorials:

* [block 2d icon](../../blocks/block-2d-icon.md)
* [furniture 2d icon ](../../furnitures/furniture-2d-icon.md)
{% endhint %}

## The `icon` property

You have just to set the icon property to a valid texture path.\
You are done!

### Example

```yaml
info:
  namespace: test
items:
  obsidian_trident:
    name: Obsidian Trident
    resource:
      generate: false
      model_path: item/obsidian_trident
      material: TRIDENT
      icon: item/obsidian_trident
```

{% hint style="info" %}
NOTE:

Both the model `item/obsidian_trident` and the texture `item/obsidian_trident` have the same name, but they are a different file.

They have the same name just to make things more organized.

In this example:

* `item/obsidian_trident` is `contents/test/models/item/obsidian_trident.json`
* `item/obsidian_trident` is `contents/test/textures/item/obsidian_trident.png`
{% endhint %}

<figure><img src="../../../.gitbook/assets/image (261).png" alt=""><figcaption></figcaption></figure>
