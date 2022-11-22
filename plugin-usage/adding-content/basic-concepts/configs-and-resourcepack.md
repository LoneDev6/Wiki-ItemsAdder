# items\_packs and resource\_pack

## What are these folders?

### contents

Is a folder which contains a set of folders.\
Each one contains separated packs which contain configurations and models/textures/sounds...

You can see that each folder name in **contents** is the [namespace](namespace.md) of the assets it contains.

### configs

Each folder inside `contents` contains a sub-folder called `configs`.\ This is a folder which contains a set of folders and/or files.\
It contains organized **.yml** files which have items behavior, settings, enchant, recipe, loots... everything that is related to items creation, recipes and behaviors.

{% hint style="warning" %}
**Namespace** is also set inside the **.yml** file itself, don't forget to set it in the top part:

```yaml
info:
  namespace: example
```
{% endhint %}

### resourcepack

You can see this folder and **configs** as a very similar thing, but **resourcepack** folder contains the "**graphical**" part of all **items** (and also sounds, GUIs...).\
This folder is automatically compressed inside `ItemsAdder/output/generated.zip`, the one that will be sent to players.

{% hint style="danger" %}
#### **Important**

Remember to always maintain order in **contents** sub-folders, don't paste things randomly, don't create too many subfolders, don't leave unused textures/models or it will be difficult to find out errors and mistakes.
{% endhint %}
