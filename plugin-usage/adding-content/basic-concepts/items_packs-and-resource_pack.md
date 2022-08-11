# items\_packs and resource\_pack

## What are these folders?

### items\_packs

is a folder which contains a set of folders, each one of these folders contains separated and organized **.yml** files which contains items behaviour, setting, enchant, recipe, loot... everything that is related to items creation, recipes and behaviours.\
You can see that each folder name in **items\_packs** is the [namespace ](namespace/)of the items it contains.

{% hint style="warning" %}
**Namespace** is also set inside the **.yml** file itself, don't forget to set it in the top part:

```yaml
info:
  namespace: example
```
{% endhint %}

### resource\_pack

is a folder which contains an **automatically generated resourcepack**.\
You can see this folder and **items\_packs** as a very similar thing, but **resource\_pack** folder contains the "**graphical**" part of all **items** (and also sounds, GUIs...). \
(**items\_packs** contains the behaviours and settings of the items)\
This folder is automatically compressed as a file named **pack.zip**, the one that will be sent to players.

{% hint style="danger" %}
### Important

Remember to always maintain order in **resource\_pack** folder, don't paste things randomly, don't create too many subfolders, don't leave unused textures/models or it will be difficult to find out errors and mistakes.\
**Remember that please.**
{% endhint %}

\
