---
description: What is the contents folder and how it's structured
---

# 🗂 Contents folder

## Folders types

### contents

Is a folder which contains a set of sub-folders.\
Each one contains separated pack which contain configurations and models/textures/sounds...

You can see that each folder name in **contents** is the [namespace](broken-reference) of the assets it contains.

### configs

Each folder inside `contents` contains a sub-folder called `configs`.\
This is a folder which contains a set of folders and files.\
It contains organized `.yml` files which contain items behavior, settings, enchant, recipe, loots, items properties, recipes and more.

{% hint style="warning" %}
**Namespace** is also set inside the `.yml` file itself, don't forget to set it in the top part:

```yaml
info:
  namespace: example
```
{% endhint %}

### resourcepack

You can see this folder and **configs** as a very similar thing, but **resourcepack** folder contains the "**graphical**" part of all **items** (and also sounds, GUIs...).

{% hint style="danger" %}
#### **Important**

Remember to always maintain order in **contents** sub-folders!\
Don't paste things randomly, don't create too many subfolders, don't leave unused textures/models or it will be difficult to find out errors and mistakes.
{% endhint %}

## What is a `namespace`?

As you surely noticed ItemsAdder uses **`namespaces`** to identify most of the things it manages.\
A **`namespace`** is a **group** of elements, in this case a group of **items, blocks, mobs etc**.\
With namespaces you can easily understand where a particular **item**, **sound**, **block etc.** comes from.

### Example

All **realcraft** items are under the **realcraft** namespace, so when you use the `/iaget` command you can see all items IDs start with `realcraft:`

![](<../../.gitbook/assets/image (7).png>)

## How can I define my own namespace?

In order to keep everything organized you have to create **your** own **namespace**.\
First step is to create a subfolder inside: `plugins/ItemsAdder/contents/`

In this example **namespace** will be `my_items` so create a folder named like the namespace: `contents/my_items/`

![](../../.gitbook/assets/my\_items\_namespace.png)

Open the `my_items` folder and create a new file, you can call it like as you prefer.\
For example: `contents/my_items/myswords.yml`

![](../../.gitbook/assets/my\_swords\_yml.png)

Open the new `.yml` file and paste this:

```yaml
info:
  namespace: my_items
```

As you see I set **namespace** to `my_items`, which is the **namespace** I chose before and it's the same name of the **folder**. \
Remember to change it based on your **namespace**.

{% hint style="info" %}
You can create as many **namespaces** you want! \
This allows you to easily organize your packs of items.
{% endhint %}

{% hint style="info" %}
You can create as many as `.yml` files you want in the same namespace!\
This allows you to organize items/things types better.\
For example I divided my items in swords, blocks, food, drinks etc...
{% endhint %}

{% hint style="warning" %}
**All this "nesting" could seem boring,** but it reduces errors as much as possible and allows you to find everything easily.
{% endhint %}

## Why different folder structures choices?

**ItemsAdder** allows you to decide which folders structure to use in order to organize your various packs.

This is very useful for admins to have the freedom to organize their pack very fast without worrying about useless nesting of folders. \
The easiest folder structure to use is the [structure 5](configs-and-resourcepack.md#folders-structure-method-5).

{% hint style="warning" %}
Each sub-pack must use only one structure at a time.\
**Do not mix them in the same sub-pack!**
{% endhint %}

### Folders structure method 1

This structure is the default and most complete one.

```
plugins
└── ItemsAdder
    └── contents
        └── my_items
            ├── configs
            │   ├── example.yml
            │   └── example_1.yml
            └── resourcepack
                └── assets
                    └── my_items
                        ├── models
                        │   └── items
                        │       └── example_item.json
                        └── textures
                            └── items
                                └── example_texture.png
```

### Folders structure method 2

This structure avoids you to create the `assets` folder which is implied and would just add unnecessary complexity.

```
plugins
└── ItemsAdder
    └── contents
        └── my_items
            ├── configs
            │   ├── example.yml
            │   └── example_1.yml
            └── resourcepack
                └── my_items
                    ├── models
                    │   └── items
                    │       └── example_item.json
                    └── textures
                        └── items
                            └── example_texture.png
```

### Folders structure method 3

This structure avoids you to create the `resource_pack` folder which is implied and would just add unnecessary complexity.

```
plugins
└── ItemsAdder
    └── contents
        └── my_items
            ├── configs
            │   ├── example.yml
            │   └── example_1.yml
            └── assets
                └── my_items
                    ├── models
                    │   └── items
                    │       └── example_item.json
                    └── textures
                        └── items
                            └── example_texture.png
```

### Folders structure method 4

This structure avoids you to create the `assets` folder which is implied and would just add unnecessary complexity.

```
plugins
└── ItemsAdder
    └── contents
        └── my_items
            ├── configs
            │   ├── example.yml
            │   └── example_1.yml
            └── my_items
                ├── models
                │   └── items
                │       └── example_item.json
                └── textures
                    └── items
                        └── example_texture.png
```

### Folders structure method 5

{% hint style="success" %}
This is the easier way to create a simple pack with some items without having to create too many sub-folders.\
This avoids you to create `resourcepack`, `assets`, `NAMESPACE` folders and makes everything cleaner.
{% endhint %}

This is useful if your sub-pack doesn't use multiple namespaces, or you won't be able to specify them.

```
plugins
└── ItemsAdder
    └── contents
        └── my_items
            ├── configs
            │   ├── example.yml
            │   └── example_1.yml
            ├── models
            │   └── items
            │       └── example_item.json
            └── textures
                └── items
                    └── example_texture.png
```
